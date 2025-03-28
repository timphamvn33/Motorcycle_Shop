import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Navbar } from "../assets/components/sections/Navbar";

export const Login = ({ isUserLogin, setIsUserLogin }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/auth/Login", { email, passWord });
            localStorage.setItem("token", res.data.token);
            setMessage("Login Successfully");
            setIsUserLogin(true);
            navigate("/Home");
        } catch (err) {
            setMessage(err.response?.data?.message || "Login failed");
        }
    }

    const movetoSignupPage = () => {
        navigate('/Signup');
    }

    const closeLoginBox = () => {
        navigate('/Home'); // Navigate back to the home page or close modal
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-950 to-gray-800">
                <div className="relative p-10 w-full max-w-md bg-gray-200/20 rounded-2xl shadow-lg">
                    {/* Close Button */}
                    <button
                        onClick={closeLoginBox}
                        className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-blue-400 cursor-pointer"
                    >
                        X
                    </button>

                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-bold text-white">Login</h2>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full h-12 px-4 rounded-xl bg-gray-200/40 border border-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                        </div>

                        <div className="flex items-center w-full h-12 px-4 rounded-xl bg-gray-200/40 border border-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                value={passWord}
                                onChange={(e) => setPassWord(e.target.value)}
                                required
                                className="w-full bg-transparent border-none focus:ring-0 outline-none"
                            />
                            <div
                                className="cursor-pointer"
                                onClick={toggleShowPassword}
                            >
                                {!isShowPassword ? (
                                    <FaRegEyeSlash className="text-gray-800" />
                                ) : (
                                    <FaRegEye className="text-gray-800" />
                                )}
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between items-center text-gray-900 text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <button className="text-blue-200 hover:underline">Forgot Password?</button>
                        </div>

                        {/* Error Message */}
                        {message && (
                            <p className="text-red-500 text-center text-sm mt-2">{message}</p>
                        )}

                        {/* Login & Sign Up Buttons */}
                        <div className="flex flex-col gap-4 mt-4">
                            <button
                                type="submit"
                                className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-blue-600"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={movetoSignupPage}
                                className="w-full py-3 bg-gray-700 text-white rounded-xl font-semibold text-lg hover:bg-blue-600"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
