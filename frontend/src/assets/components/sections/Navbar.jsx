import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RidingGear } from "./RidingGear";

const navbarOption = [{name: "RIDING GEAR"}, {name: "PARTS"}, {name: "ACCESORIES"}, {name: "SALE"}];

export const Navbar = ({isSmallScreen, isMobileMenuClick, setIsMobileMenuClick, isUserLogin}) => {
    const [isHoverMenu, setIsHoverMenu] = useState(false);
    const [isHoverMenuContent, setIsHoverMenuContent] = useState(false);
    const [lastY, setLastY] = useState(200);
    const clickMobileMenu = () => {
        setIsMobileMenuClick(prev => !prev);
    }

    const navigate = useNavigate();

    const moveToLoginPage = () => {
        navigate('/Login');
    }

    const moveToUserProfilePage = () => {
        navigate("/UserProfile")
    }

    const movetoHomePage = () => {
        navigate('/Home');
    }
    const checkMouseHover = (hoverName) => {
        if(hoverName === "RIDING GEAR") {

            setIsHoverMenu(true)
            console.log("heelo hover")

        }

    }

    const mousePosition = (e) => {
        const currentY = e.clientY;
        console.log(e.clientY)
        if(currentY < lastY) {
            console.log("hhelo up")
            setIsHoverMenu(false)
        } else if (currentY > lastY) {
            console.log("heelo down")
            setIsHoverMenu(true)
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", mousePosition);
        return () => {
            window.removeEventListener("mousemove", mousePosition);
        }
    })




    return (
        <>
            {/* Sale note running */}
            <div className="text-center text-white bg-gradient-to-r py-2 from-pink-500 to-pink-900">
                <div className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold flex justify-center items-center">
                    <div className="marquee-container">
                        <p className="animate-marquee bg-gradient-to-b from-cyan-500 to-cyan-50 bg-clip-text text-transparent m-5">
                            Thank you for being a valued customer! Enjoy 50% off on all gear accessories, and as a special bonus, get an additional 20% off when you apply for membership. Don’t miss out on these amazing savings—shop now and save more!
                        </p>
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-950 to-indigo-700 opacity-90 shadow-2xl backdrop-blur-lg">
    
                {/* First Row: Logo, Search, Profile, Cart Icon */}
                <div className={`p-5 grid ${isSmallScreen ? "grid-cols-2" : "grid-cols-4"} gap-6 justify-center items-center text-gray-300 bg-gradient-to-r from-purple-800 to-indigo-700 bg-opacity-80`}>
                    
                    {/* Logo Section */}
                    <div className="flex justify-center items-center cursor-pointer" onClick={movetoHomePage}>
                        <div className="relative flex justify-center items-center">
                            <div className="absolute box-border rounded-full border-cyan-600 bg-cyan-600 bg-gradient-to-b from-pink-600 to-pink-50 w-10 h-10 lg:w-14 lg:h-14 flex justify-center items-center opacity-55"></div>
                            <div className="absolute flex flex-col justify-center items-center">
                                <p className="bg-gradient-to-b from-blue-600 to-blue-100 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl font-extrabold">NATALIE</p>
                                <p className="bg-gradient-to-b from-blue-600 to-blue-100 bg-clip-text text-transparent">RIDES</p>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar (Hidden on Small Screens) */}
                    {!isSmallScreen && (
                        <div className="flex justify-center">
                            <input 
                                type="text" 
                                placeholder="SEARCH ..."
                                className="p-2 w-32 lg:w-40 border-2 border-gray-500 bg-gray-300 rounded-xl text-black text-sm lg:text-lg focus:w-full focus:outline-none focus:ring-cyan-600 transition-all duration-300" 
                            />
                        </div>
                    )}

                    {/* Profile & Cart Icons */}
                    <div className="flex justify-end items-center space-x-4">
                        {isUserLogin ? (
                            <p onClick={moveToUserProfilePage} className="cursor-pointer text-sm lg:text-lg text-white">Hi! Customer</p>
                        ) : (
                            <img src="/images/profile.png" alt="Profile" onClick={moveToLoginPage} className="cursor-pointer w-8 h-8 opacity-90" />
                        )}
                        <img src="/images/cart.png" alt="Cart" className="w-8 h-8 opacity-90" />

                        {/* Mobile Menu Icon */}
                        {isSmallScreen && (
                            <button onClick={clickMobileMenu} className="text-2xl font-bold cursor-pointer text-white">&#9776;</button>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <div className="bg-gradient-to-b from-gray-100 to-gray-300 w-full h-0.5 opacity-30"></div>

                {/* Second Row: Menu Options (Aligned in a single row) */}
                {!isSmallScreen && (
                    <div className="flex justify-center items-center space-x-8 lg:space-x-12 text-sm lg:text-lg font-bold text-gray-50 py-3 bg-gradient-to-r from-indigo-700 to-purple-800  opacity-80">
                        {/* ☰ MENU at the end */}
                        <span className="cursor-pointer text-lg lg:text-xl font-bold hover:bg-gradient-to-b from-pink-500 to-pink-900 hover:bg-clip-text hover:text-transparent transition-all duration-100">
                            &#9776; MENU
                        </span>
                        {navbarOption?.map((option, index) => (
                            <span key={index} 
                            // set ishover true or false when mouse is enter or leave
                                onMouseEnter={() => checkMouseHover(option.name)}
                                onMouseLeave={() => setIsHoverMenu(false)}
                            className="cursor-pointer hover:bg-gradient-to-b from-pink-500 to-pink-900 hover:bg-clip-text hover:text-transparent transition-all duration-100">
                                {option.name}
                            </span>
                        ))}
                    </div>
                    
                )}
                {/* Show RidingGear component if hovered over "RIDING GEAR" */}
                {(isHoverMenu || isHoverMenuContent) && (
                <div onMouseEnter={() => setIsHoverMenuContent(true)}
                    onMouseLeave ={() => setIsHoverMenuContent(false)}
                
                    className="absolute top-36 left-0 w-full h-[250px] bg-gradient-to-r from-indigo-700 to-purple-800 z-50 p-4 shadow-lg">
                    <RidingGear />
                </div>)}

                {/* Divider */}
                <div className="bg-amber-50 w-full h-0.5 opacity-70"></div>

            </nav>
        </>
    );
}
