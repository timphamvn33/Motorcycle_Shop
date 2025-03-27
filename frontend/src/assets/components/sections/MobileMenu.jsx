import { useState, useEffect } from "react"
const mobileContent = [{name: "RIDING GEAR"}, {name: "PARTS"}, {name: "ACCESORIES"}, {name: "SALE"}]
export const MobileMenu = (({isMobileMenuClick, setIsMobileMenuClick}) => {

    const closeMobileClick = () => {
        setIsMobileMenuClick(false);
    }
    
    return (
        <div className={`transform ${isMobileMenuClick? `translate-x-0`: `translate-x-full opacity-0`} fixed top-0 left-0 w-screen h-screen bg-gray-900 opacity-90 transition-transform duration-500 z-60`}>

            <div className="w-full p-5 cursor-pointer z-70 flex justify-end"  >
                <button onClick={closeMobileClick} className="font-bold text-md lg:text-xl text-gray-100 ">
                    X
                </button>
            </div>
            
            <div className ="relative z-70 w-full p-20 grid grid-cols-1 justify-center items-center ">
                {mobileContent.map((mobileCont, index) => (
                    <div key={index} className =" text-xl lg:text-3xl text-center font-bold mb-10 pb-10 cursor-pointer text-gray-50 opacity-90 "><button onClick={closeMobileClick}>{mobileCont.name}</button></div>

                ))}

                
            </div>

        </div>
    )
});