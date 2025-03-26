import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
const navbarOption = [{name: "RIDING GEAR"}, {name: "PARTS"}, {name: "ACCESORIES"}, {name: "SALE"}]

export const Navbar = (({isSmallScreen, isMobileMenuClick, setIsMobileMenuClick}) => {
    const clickMobileMenu = () => {
        setIsMobileMenuClick(pre => pre = true);
    }
    const navigate = useNavigate();

    const moveToLoginPage = () => {
        navigate('/Login');
    } 

    const movetoHomePage = () => {
        navigate('/Home');
    }

    useEffect(() => {
        console.log("isMobileMenuClick in nav: ", isMobileMenuClick)
    }, [isMobileMenuClick])

    return (
        <>
        
            {/* sale note running */}

            <div className="justify-center items-center text-gray-300">
                <div className="text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-bold flex flex-col justify-around items-center">
                    <div className="marquee-container">
                        <p className="animate-marquee bg-gradient-to-b from-cyan-500 to-cyan-50 bg-clip-text text-transparent m-5">
                            Thank you for being a valued customer! Enjoy 50% off on all gear accessories, and as a special bonus, get an additional 20% off when you apply for membership. Don’t miss out on these amazing savings—shop now and save more!
                        </p>
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 left-0 w-full z-50 bg-gray-900 opacity-90 shadow-2xl">
                {/* main navbar start*/}
                <div className={`${isSmallScreen? `grid grid-cols-2`: `grid grid-cols-4`} p-7 gap-30 justify-center items-center text-gray-300`}>
                    <div className="text-center font-bold grid grid-cols-1 justify-center items-center">
                        <div className = "relative flex justify-center items-center pb-10 cursor-pointer" onClick = {movetoHomePage}>
                            <div className = "absolute box-border rounded-full border-cyan-600 bg-cyan-600 bg-gradient-to-b from-pink-600 to-pink-50 w-10 h-10 lg:w-14 lg:h-14 flex justify-center items-center flex-col z-20 opacity-55"></div>
                            <div className = " absolute flex flex-col justify-center items-center z-30">
                                <p className="bg-gradient-to-b from-blue-600 to-blue-100 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl font-extrabold ">
                                    NATALIE
                                </p>
                                <p className=" bg-gradient-to-b from-blue-600 to-blue-100 bg-clip-text text-transparent" >
                                    RIDES
                                </p>
                            </div> 
                        </div>
                        <div className= {isSmallScreen? `hidden`: `text-center text-lg lg:text-xl font-bold cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent`}> 
                            &#9776; MENU
                        </div>
                    </div>
                    
                    <div className={isSmallScreen? `hidden`: `flex gap-2 lg:gap-7 justify-center items-center text-center text-sm lg:text-xl font-bold text-gray-300`}>
                        {navbarOption?.map((napOption, index) => (
                            <span key = {index} 
                            className = "cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent">{napOption.name}</span>

                        ))}

                    </div>
                    <div className = {isSmallScreen? `hidden`: `flex justify-end`}>
                    <input type="text" placeholder=" SEARCH ..." 
                        className = "p-7 m-5 py-2 placeholder-black placeholder:text-xs border-2 border-gray-500 bg-gray-300 rounded-xl focus:outline-none focus:ring-cyan-600 h-10 w-24 lg:w-32 focus:w-full text-black text-xl focus:opacity-100 transition-all duration-300"/>

                    </div>

                    <div className={isSmallScreen? `flex flex-row justify-end`: `flex flex-row justify-center p-8`}>
                        
                        <img src="/images/profile.png" alt="Description of first image" onClick= {moveToLoginPage} className="cursor-pointer w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mx-2.5 opacity-80" />
                        <img src="/images/cart.png" alt="Description of first image" className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mx-2.5 opacity-80" />
                        <div className={isSmallScreen? `text-2xl flex transition-all duration-500 font-bold cursor-pointer mx-2.5 justify-center items-center w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 opacity-80`: `hidden`}>
                            <button onClick={clickMobileMenu}><span>&#9776;</span></button>
                            
                        </div>
                    </div>
                </div>

                <div className=" bg-gradient-to-b from-blue-300 w-full h-0.5 opacity-30"></div>

            </nav>


        </>
    )
})