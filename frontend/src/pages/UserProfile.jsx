import { useNavigate } from "react-router-dom";
import { Navbar } from "../assets/components/sections/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const UserProfile = ({ isUserLogin, setIsUserLogin }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ userName: '', email: '', passWord: '' });
    const [errorNotification, setErrorNotification] = useState('');
    const [formData, setFormData] = useState({ userName: '', email: '' });
    const [editMode, setEditMode] = useState(false);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/api/user/UserProfile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setUser(response.data);
        } catch (err) {
            setErrorNotification(err.value + 'error to get the user profile');
            if (err.response.status === 401) {
                navigate("/Login");
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = async () => {
        try{
            const token = localStorage.getItem("token");
            const response = await axios.put("http://localhost:5000/api/user/UpdateUser", formData,{
                
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
            setErrorNotification("Updated Successfully")
            setEditMode(false);
            fetchProfile();

        } catch(err) {
            
            setErrorNotification("fail to update");
        }

    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleLogout = () => {
        setIsUserLogin(false);
        navigate("/Home");
    };

    return (
        <>
            <Navbar isUserLogin={isUserLogin} />
            <div className="flex flex-col gap-6 justify-center items-center p-8 bg-gradient-to-r from-purple-900 to-indigo-800 min-h-screen">
                <div className="w-full max-w-3xl bg-white p-6 rounded-3xl shadow-xl">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 text-center mb-6">User Profile</h2>
                    <p className="font-medium text-md lg:text-xl text-red-500 text-center mb-4">{errorNotification}</p>
                    <div className="p-4 rounded-lg border border-gray-300">
                        {editMode ? (
                            <div className="space-y-4">
                                <div>
                                    <input
                                        placeholder="User Name"
                                        type="text"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        className="w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition ease-in-out duration-300 text-gray-800"
                                    />
                                </div>
                                <div>
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition ease-in-out duration-300 text-gray-800"
                                    />
                                </div>
                                <button
                                    className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none transition ease-in-out duration-300"
                                    onClick={handleSaveProfile}
                                >
                                    Save Changes
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-gray-700">User Name:</span>
                                    <span className="text-lg text-gray-600">{user.userName}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-gray-700">Email:</span>
                                    <span className="text-lg text-gray-600">{user.email}</span>
                                </div>
                                <div className="flex justify-between items-center pt-6">
                                    <button
                                        className="w-48 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 focus:outline-none transition ease-in-out duration-300"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </button>
                                    <button
                                        className="w-48 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none transition ease-in-out duration-300"
                                        onClick={() => setEditMode(true)}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
