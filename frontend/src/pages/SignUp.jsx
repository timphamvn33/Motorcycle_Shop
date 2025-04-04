import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Home } from './Home' 

export const SignUp = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({ userName: "", email: "", passWord: "" });

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/Signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.status === 201) {
                navigate("/Login");
            } else {
                setError(result.message);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong, please try again.");
        }
    };

    const movetoLoginPage = () => {
        navigate('/Login');
    };

    const closeSignUpBox = () => {
        navigate('/Home'); // Navigate back to the home page or close the modal
    };

    return (
        <>
            <Home/>
            <div className="fixed inset-0 w-full h-screen bg-gray-950 opacity-65 z-20"></div>
            <div className="flex absolute top-1/12 left-0 justify-center items-center min-h-screen w-full z-40">
                <div className="w-[300px] h-[500px] bg-blue-300 relative z-10 box-border rounded-2xl">
                    {/* Close Button */}
                    <button
                        onClick={closeSignUpBox}
                        className=" absolute top-4 right-4 text-2xl text-gray-800 hover:text-blue-500 cursor-pointer z-100"
                    >
                        X
                    </button>
                    <div className="flex flex-col gap-4 justify-center items-center p-5 w-[300px] h-[500px] absolute z-50 inset-0">
                        <h2 className="text-4xl font-bold text-gray-50 text-center">Sign Up</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600 focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2 text-gray-800"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} 
                            className="w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600 focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2 text-gray-800"
                        />
                        {/* Password Input */}
                        <div className="flex items-center w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600  focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2 text-gray-800">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                name="passWord"
                                value={formData.passWord}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none focus:ring-0 outline-none"
                            />
                            <div
                                className="cursor-pointer"
                                onClick={toggleShowPassword}
                            >
                                {!isShowPassword ? (
                                    <FaRegEyeSlash className="w-full text-gray-800" />
                                ) : (
                                    <FaRegEye className="w-full text-gray-800" />
                                )}
                            </div>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}

                        <div className="grid grid-cols-2 gap-14 text-gray-900">
                            <p>Agree to Terms</p>
                            <button>Forgot Password</button>
                        </div>

                        <button
                            className="bg-gray-900 text-gray-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-gray-700"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                        <button
                            className="bg-gray-700 text-gray-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-gray-700"
                            onClick={movetoLoginPage}
                        >
                            Already have an account? Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
