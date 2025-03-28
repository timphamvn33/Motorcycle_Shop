import { useNavigate } from "react-router-dom";
import { Navbar } from "../assets/components/sections/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const UserProfile = ({ isUserLogin, setIsUserLogin }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ userName: '', email: '' });
    const [errorNotification, setErrorNotification] = useState('');
    const [formData, setFormData] = useState({ userName: '', email: '' });
    const [editMode, setEditMode] = useState(false);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/api/user/UserProfile", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
        } catch (err) {
            setErrorNotification(err.response?.data?.message || 'Error retrieving user profile');
            if (err.response?.status === 401) {
                navigate("/Login");
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.put("http://localhost:5000/api/user/UpdateUser", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
            setErrorNotification("Updated Successfully");
            setEditMode(false);
            fetchProfile();
        } catch (err) {
            setErrorNotification("Failed to update profile");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsUserLogin(false);
        navigate("/Home");
    };

    const handleEditProfile = () => {
        setFormData({ userName: user.userName, email: user.email });
        setEditMode(true);
    };

    return (
        <>
            <Navbar isUserLogin={isUserLogin} />
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-950 to-gray-800">
                <div className="relative p-10 w-full max-w-md bg-gray-200/20 rounded-2xl shadow-lg">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-bold text-white">User Profile</h2>
                    </div>

                    {errorNotification && (
                        <p className="text-red-500 text-center text-sm mb-4">{errorNotification}</p>
                    )}

                    <div className="space-y-6">
                        {editMode ? (
                            <>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="User Name"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 rounded-xl bg-gray-200/40 border border-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 rounded-xl bg-gray-200/40 border border-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                />
                                <button
                                    onClick={handleSaveProfile}
                                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="text-lg text-white font-semibold space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">User Name:</span>
                                        <span>{user.userName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Email:</span>
                                        <span>{user.email}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <button
                                        onClick={handleEditProfile}
                                        className="w-1/2 py-3 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700"
                                    >
                                        Edit Profile
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-1/2 py-3 bg-red-500 text-white rounded-xl font-semibold text-lg hover:bg-red-600"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
