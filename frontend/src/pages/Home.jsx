const section1 = [
    { name: "Helmet", image: "/images/helmet.jpg" },
    { name: "Parts", image: "/images/Parts.jpg" },
    { name: "Sale", image: "/images/sale.jpg" },
    { name: "Riding Gear", image: "/images/riding_gear.jpg" },
    {name: "accessories", image: "/images/accessories.jpg"},
    {name: "tires", image: "/images/tires.jpg"}
];
const section2 = [
    { name: "20% Sale", price: "", image: "/images/sale20.jpg" },
    { name: "New Items", image: "/images/ridingSale.jpg" },
    { name: "Gears Sales", image: "/images/ridingGearSale.jpg" },
];
const section3 = [
    {  name: "Allex Xtreme Jacket", price: "$800", star: "3", image: "/images/AllextremeJack.jpg" },
    {  name: "HJC Full 3 Helmet", price: "$450", star: "4", image: "/images/HJCHelm.jpg" },
    {  name: "K1 Full Helmet", price: "$600", star: "5", image: "/images/k1Helm.jpg" },
    {  name: "Mattle Black Helmet", price: "$400", star: "3", image: "/images/MattleBlackHelm.jpg" },
    {  name: "Revit Jacket", price: "$750", star: "4", image: "/images/RevitJack.jpg" },
    {  name: "Sena Head Set", price: "$799", star: "4", image: "/images/SenaHeadset.jpg" },
    {  name: "SGIR Jacket", price: "$699", star: "3", image: "/images/SGIR_Jack.jpg" },
    {  name: "V9 Head Set", price: "$599", star: "5", image: "/images/V9Headset.avif" },
];

import { useState, useEffect } from "react";
import { Navbar } from "../assets/components/sections/Navbar";
import {MobileMenu} from "../assets/components/sections/MobileMenu";

export const Home = (({isUserLogin}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMobileMenuClick, setIsMobileMenuClick] = useState(false);


    // check if the window change the size to set value of setIsSmallScreen
    useEffect(() => {
        const windResize = () => {
            const windSize = window.innerWidth;
            // the small size could be 768
            setIsSmallScreen(windSize <= 900); 
        }
        windResize();
        window.addEventListener('resize', windResize);
        return () => {
            window.removeEventListener('resize', windResize);
        }

    }, [])

    return (
        <>
            <Navbar isSmallScreen={isSmallScreen} isMobileMenuClick={isMobileMenuClick} setIsMobileMenuClick={setIsMobileMenuClick} isUserLogin = {isUserLogin}/>
            {/* close or open mobilemenu component when the isMobileMenuClick is false or true */}
            {/* {isMobileMenuClick && (<MobileMenu isMobileMenuClick = {isMobileMenuClick} setIsMobileMenuClick= {setIsMobileMenuClick}/>)}  */}
            <MobileMenu isMobileMenuClick = {isMobileMenuClick} setIsMobileMenuClick= {setIsMobileMenuClick}/>
            <section id="categories" className="min-h-screen flex flex-col justify-center items-center p-10 md:p-40 lg:p-80 z-10 bg-gradient-to-r from-gray-950 to-gray-800">
                <div className="p-10">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">FEATURED CATEGORIES</h2>
                </div>
                {/* 1st section */}
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-20">
                    {section1.map((category, index) => (
                        <div key={index} className="flex justify-center items-center transition-all group">
                            <div className="relative w-full max-w-[400px] h-[300px] cursor-pointer hover:opacity-50 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-blue-300 opacity-40 transition-opacity duration-700 rounded-2xl"></div>
                                <img className="absolute w-full h-full object-cover opacity-15 rounded-2xl" src={category.image} alt={category.name} />
                                <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                                    <p className="text-xl lg:text-3xl text-center text-gray-50 capitalize">{category.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* 2nd section */}

                <div className="p-10">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">BIG SALE</h2>
                </div>

                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                    {section2.map((category, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div className="relative w-full max-w-[500px] h-[300px] cursor-pointer transition-all group perspective-1000">

                                <img className="absolute w-full h-full object-cover opacity-80  transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105" src={category.image} alt={category.name} />
                                <div className="absolute inset-0 flex justify-start w-24 h-7 bg-red-600 opacity-85 rounded-b-md transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105">

                                    <p className="text-md lg:text-lg text-center text-gray-50 capitalize tracking-tight">{category.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                    {/* 3rd section */} 
                    <div className="p-10">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">TRENDING DEALS</h2>
                    </div>
                    {/* Scrollable Grid Container */}
                    <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory 
                        w-full h-[250px] md:min-h-[300px] lg:h-[440px] bg-gray-100 rounded-2xl shadow-xl shadow-amber-100/40">
                        
                        {section3.map((category, index) => (
                            <div key={index} className="flex-shrink-0 min-w-[150px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[300px] p-4 snap-center">
                                <div className="w-full h-full cursor-pointer transition-all group perspective-1000">
                                    <img
                                        className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-cover opacity-80 
                                            transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105"
                                        src={category.image}
                                        alt={category.name}
                                    />
                                    <div className="flex flex-col items-center mt-2">
                                        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-800 capitalize tracking-tight">{category.name}</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-600 capitalize tracking-tight">{category.star}</p>
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 capitalize tracking-tight font-bold">{category.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* 3rd section */} 
                    <div className="pt-40 pb-10">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">Exclusives</h2>
                    </div>
                    {/* Scrollable Grid Container */}
                    {/* Scrollable Grid Container */}
                    <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory 
                        w-full h-[250px] md:h-[300px] lg:h-[440px] bg-gray-100 rounded-2xl shadow-xl shadow-amber-100/40">
                        
                        {section3.map((category, index) => (
                            <div key={index} className="flex-shrink-0 min-w-[150px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[300px] p-4 snap-center">
                                <div className="w-full h-full cursor-pointer transition-all group perspective-1000">
                                    <img
                                        className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-cover opacity-80 
                                            transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105"
                                        src={category.image}
                                        alt={category.name}
                                    />
                                    <div className="flex flex-col items-center mt-2">
                                        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-800 capitalize tracking-tight">{category.name}</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-600 capitalize tracking-tight">{category.star}</p>
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 capitalize tracking-tight font-bold">{category.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                


            </section>
        </>
    );
});
