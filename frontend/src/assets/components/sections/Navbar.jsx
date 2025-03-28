import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RidingGear } from "./RidingGear";

const navbarOption = [{ name: "RIDING GEAR" }, { name: "PARTS" }, { name: "ACCESSORIES" }, { name: "SALE" }];

export const Navbar = ({ isSmallScreen, isMobileMenuClick, setIsMobileMenuClick, isUserLogin }) => {
    const [isCategoryMenuClick, setIsCategoryMenuClick] = useState(false);
    const [showSale, setShowSale] = useState(true);
    const [mainMenuOn, setMainMenuOn] = useState(false);
    const navigate = useNavigate();
    const moveToLoginPage = () => navigate('/Login');
    const moveToUserProfilePage = () => navigate("/UserProfile");
    const movetoHomePage = () => navigate('/Home');




    const clickMobileMenu = () => {
        setIsMobileMenuClick(prev => !prev);
    };

    return (
        <>
            {/* Sale note running */}
            
            {showSale && (
                <div className="relative">
                    <div className=" text-lg lg:text-xl font-bold text-gray-800 absolute z-40 top-2 right-4 cursor-pointer hover:text-3xl hover:duration-300" onClick={() => setShowSale(false)}>
                        X
                    </div>
                    <div className="relative z-30 text-center text-white bg-gray-50 py-2 ">
                        {/* Background overlay using pseudo-element */}
                        <div className="absolute inset-0 bg-black opacity-15 z-10"></div> {/* Semi-transparent overlay */}
                        
                        <div className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold flex justify-center items-center relative z-20">
                            <div className="marquee-container">
                                <p className="animate-marquee bg-gradient-to-b from-gray-950 to-gray-700 bg-clip-text text-transparent m-1">
                                    Thank you for being a valued customer! Enjoy 50% off on all gear accessories, and as a special bonus, get an additional 20% off when you apply for membership. Don’t miss out on these amazing savings—shop now and save more!
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            )}


            <nav className="sticky top-0 left-0 w-full z-50 opacity-90 shadow-2xl backdrop-blur-lg">
                <div className={`p-5 grid ${isSmallScreen ? "grid-cols-2" : "grid-cols-8"} gap-6 justify-center items-center text-gray-300 bg-gradient-to-r from-gray-800 to-indigo-700 bg-opacity-80`}>
                    {/* Logo Section */}
                    <div className="flex justify-center items-center cursor-pointer p-7" onClick={movetoHomePage}>
                        <div className="relative flex justify-center items-center">
                            <div className="absolute box-border rounded-full border-cyan-600 bg-cyan-600 bg-gradient-to-b from-pink-600 to-pink-50 w-10 h-10 lg:w-14 lg:h-14 flex justify-center items-center opacity-55"></div>
                            <div className="absolute flex flex-col justify-center items-center">
                                <p className="bg-gradient-to-b from-blue-600 to-blue-100 bg-clip-text text-transparent text-3xl lg:text-4xl font-extrabold">NATALIE</p>
                                <p className="bg-gradient-to-b from-blue-600 to-blue-100 bg-clip-text text-transparent text-2xl lg:text-3xl">RIDES</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Options Section (hidden on small screens) */}
                    {!isSmallScreen && (
                        <div className="flex justify-center items-center space-x-8 lg:space-x-12 text-sm lg:text-lg font-bold text-gray-50 py-3  opacity-90 col-span-5">
                            <span onClick={() => setMainMenuOn(!mainMenuOn)}
                            className="cursor-pointer text-lg lg:text-xl font-bold hover:bg-gradient-to-b from-pink-500 to-pink-900 hover:bg-clip-text hover:text-transparent transition-all duration-100">
                                &#9776; MENU
                            </span>
                            {navbarOption.map((option, index) => (
                                <span
                                    onClick = {() => setIsCategoryMenuClick(!isCategoryMenuClick)}
                                    key={index}
                                    className="cursor-pointer hover:bg-gradient-to-b from-pink-500 to-pink-900 hover:bg-clip-text hover:text-transparent transition-all duration-100"
                                >
                                    {option.name}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Search Bar (Hidden on Small Screens) */}
                    {!isSmallScreen && (
                        <div className="flex justify-center">
                            <input 
                                type="text" 
                                placeholder="SEARCH ..."
                                className="p-0.5 w-20 lg:w-24 border-2 border-gray-500 bg-gray-200 rounded-md text-black text-sm lg:text-md focus:w-full focus:ring-cyan-600 transition-all duration-300" 
                            />
                        </div>
                    )}


                    {/* Profile & Cart Icons Section */}
                    <div className="flex justify-center items-center space-x-4">
                        {isUserLogin ? (
                            <p onClick={moveToUserProfilePage} className="cursor-pointer text-sm lg:text-lg text-white">Hi! Customer</p>
                        ) : (
                            <img src="/images/profile.png" alt="Profile" onClick={moveToLoginPage} className="cursor-pointer w-10 h-10" />
                        )}
                            <img src="/images/cart.png" alt="Cart" className=" cursor-pointer w-10 h-10" />

                        {/* Mobile Menu Icon */}
                        {isSmallScreen && (
                            <button onClick={clickMobileMenu} className="text-2xl font-bold cursor-pointer text-white">&#9776;</button>
                        )}
                    </div>

                </div>

                    {/* Show RidingGear component if clicking on categories menu Using "pointer-events-none" is important to use the transition-opasity*/}
                    <div
                        className={` top-24 absolute left-0 min-w-screen min-h-screen bg-gray-950/60 z-50  transition-opacity duration-500 ${
                                    isCategoryMenuClick ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className="bg-amber-50 w-full h-[0.25px] opacity-70"></div>
                        <div className={`top-0 left-0 w-screen h-[250px] bg-gradient-to-r from-gray-800 to-indigo-700 z-70 p-4 transition-all transform ease-in-out duration-700 ${isCategoryMenuClick? 'translate-y-0.5':'-translate-y-350'} `}>
                            <RidingGear />
                        </div>

                    </div>
                    
                {/* Show main menu */}

                <div className={`absolute top-0 left-0 w-screen min-h-screen bg-gray-950/60 z-50 transition-opacity duration-300 ${mainMenuOn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className={`relative top-0 left-0 w-[500px] h-screen z-70 bg-gradient-to-r from-gray-800 to-indigo-800 transition-all transform duration-500 ${mainMenuOn ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex justify-start items-center w-full h-[97px] bg-gradient-to-r from-indigo-800 to-purple-900">
                            <span className="font-bold text-xl lg:text-2xl p-2">MENU</span>
                        </div>
                        <div 
                            onClick={() => setMainMenuOn(false)} 
                            className="absolute top-4 right-4 cursor-pointer hover:text-2xl hover:duration-300 text-xl font-bold">
                            X
                        </div>
                        <div className="bg-amber-50 w-full h-[0.25px] opacity-70"></div>
                    </div>
                    
                </div>
                {/* Divider */}
                <div className="bg-amber-50 w-full h-0.5 opacity-70"></div>
            </nav>
        </>
    );
};
