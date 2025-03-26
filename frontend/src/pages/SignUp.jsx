import { useNavigate } from "react-router-dom";
import { Password } from "../assets/components/Password";
import { Navbar } from "../assets/components/sections/Navbar";
import { useState } from "react";


export const SignUp = (() => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [error, setError] = useState("");

  // password start
  const toggleShowPassword = () => {
      setIsShowPassword(!isShowPassword);
  }

  // password end
  const [formData, setFormData] = useState({userName: "", email:"", passWord: ""});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if(response.status === 201) {
        navigate("/Login")
      } else {
        console.log("error occurs");
        setError(result.message);
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong, please try again.");
    }
  }

  const movetoLoginPage = () => {
      navigate('/Login');
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-40">
        <div className="w-[300px] h-[500px] bg-gray-200/20 relative z-20 box-border rounded-2xl">
          <div className="flex flex-col gap-4 justify-center items-center p-5 w-[300px] h-[500px] absolute z-50 inset-0">
            <h2 className="text-4xl font-bold text-black text-center">Sign Up</h2>

            <input
              type="text"
              placeholder="Username"
              name= "userName"
              value = {formData.userName}
              onChange={handleChange}
              className="w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600 focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2"
            />
            <input
              type="email"
              placeholder="Email"
              name = "email"
              value = {formData.email}
              onChange={handleChange}
              className="w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600 focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2"
            />
            {/* password starts */}
            <div className="flex items-center w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600  focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2">
              <input
                  type = {isShowPassword? "text": "password"}
                  placeholder= {placeholder}
                  name = "passWord"
                  value = {formData.passWord}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none focus:ring-0 outline-none" 
              />
              <div
              className="cursor-pointer"
              onClick={toggleShowPassword}>
                  {isShowPassword? (<FaRegEyeSlash className="w-full text-gray-800 " />): (<FaRegEye className="w-full text-gray-800 " />)}
              </div>
            </div>
            {error && <p className = "text-red-500">{error}</p>}

            <div className="grid grid-cols-2 gap-14 text-gray-900">
              <p>Agree to Terms</p>
              <button>Forgot Password</button>
            </div>

            <button className="bg-gray-900 text-gray-300 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-gray-700" onClick={handleSubmit}>
              Sign Up
            </button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-gray-700" onClick={movetoLoginPage}>
              Already have an account? Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

