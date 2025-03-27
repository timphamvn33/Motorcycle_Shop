
import { useNavigate } from "react-router-dom"
import { Password } from "../assets/components/Password"
import { Navbar } from "../assets/components/sections/Navbar"
import { useState } from "react"
import axios from "axios"
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa"
export const Login = (() => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:5000/api/auth/Login", {email, passWord});
            localStorage.setItem("token", res.data.token);
            setMessage("Login Successfully");

        } catch(err) {
            setMessage(err.response?.data?.message || "Login failed");
        }
    }

    const navigate = useNavigate();
    const movetoSignupPage = () => {
        navigate('/Signup');
    }
return (
    
    <>
    <Navbar/>
    <div className="flex justify-center items-center p-40">
        <div className="w-[300px] h-[400px] bg-gray-200/20 relative z-20 box-border rounded-2xl">
            <div className="flex flex-col gap-4 justify-center items-center p-5 w-[300px] h-[400px] absolute z-50 inset-0">
                <h2 className="text-4xl font-bold text-black text-center">Login</h2>

                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} required className="w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600  focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2" />
                <div className="flex items-center w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600  focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2">
                    <input onChange={(e) => setPassWord(e.target.value)} required
                        value = {passWord}
                        type = {isShowPassword? "text": "password"}
                        placeholder= "passWord"
                        className="w-full bg-transparent border-none focus:ring-0 outline-none" 
                    />
                    <div
                    className="cursor-pointer"
                    onClick={toggleShowPassword}>
                        {isShowPassword? (<FaRegEyeSlash className="w-full text-gray-800 " />): (<FaRegEye className="w-full text-gray-800 " />)}
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-14 text-gray-900">
                    <p>Remember Me</p>
                    <button>Forgot Password</button>
                </div>
                
                <button className="bg-gray-900 text-gray-300 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-gray-700" onClick={handleLogin}>Login</button>
                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-gray-700" onClick={movetoSignupPage}>Create Account</button>
                <p className= "text-red-400">{message}</p>
            </div>
        </div>
    </div>


    
    </>
)
})