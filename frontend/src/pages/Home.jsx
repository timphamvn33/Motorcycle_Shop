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
    {  name: "Allex Xtreme Jacket", price: "$800", star: "/images/3Stars.jpg", image: "/images/AllextremeJack.jpg" },
    {  name: "HJC Full 3 Helmet", price: "$450", star: "/images/4Stars.jpg", image: "/images/HJCHelm.jpg" },
    {  name: "K1 Full Helmet", price: "$600", star: "/images/5Stars.jpg", image: "/images/k1Helm.jpg" },
    {  name: "Mattle Black Helmet", price: "$400", star: "/images/3Stars.jpg", image: "/images/MattleBlackHelm.jpg" },
    {  name: "Revit Jacket", price: "$750", star: "/images/5Stars.jpg", image: "/images/RevitJack.jpg" },
    {  name: "Sena Head Set", price: "$799", star: "/images/4Stars.jpg", image: "/images/SenaHeadset.jpg" },
    {  name: "SGIR Jacket", price: "$699", star: "/images/4Stars.jpg", image: "/images/SGIR_Jack.jpg" },
    {  name: "V9 Head Set", price: "$599", star: "/images/2Stars.jpg", image: "/images/V9Headset.avif" },
];

import { useState, useEffect } from "react";
import { Navbar } from "../assets/components/sections/Navbar";
import {MobileMenu} from "../assets/components/sections/MobileMenu";
import { useNavigate } from "react-router-dom";

export const Home = (({isUserLogin}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMobileMenuClick, setIsMobileMenuClick] = useState(false);

    const navigate = useNavigate();


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
            <section id="categories" className="min-h-screen flex flex-col justify-center items-center z-10 bg-gradient-to-r from-gray-950 to-gray-800">
                <div className="pt-32 lg:pt-52">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">FEATURED CATEGORIES</h2>
                </div>
                {/* 1st section */}
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-20 md:px-40 lg:px-60">
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

                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-32 gap-5">
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
                        w-full min-h-[250px] lg:h-[530px] bg-white rounded-2xl shadow-xl shadow-amber-100/40">
                        
                        {section3.map((category, index) => (
                            <div key={index} className="flex-shrink-0 min-w-[150px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] p-4 snap-center">
                                <div className="w-full h-full cursor-pointer transition-all group perspective-1000">
                                    <img
                                        className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover opacity-80 
                                            transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105"
                                        src={category.image}
                                        alt={category.name}
                                    />
                                    <div className="flex flex-col items-center mt-2">
                                        <p className="text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-800 capitalize tracking-tight">{category.name}</p>
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 capitalize tracking-tight font-bold">{category.price}</p>
                                        <img
                                            className="w-[150PX] h-[30px] lg:h-[50px] object-cover opacity-80 pb-2"
                                            src={category.star}
                                            alt={category.name}
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* 4th section */} 
                    <div className="pt-40 pb-10">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">Exclusives</h2>
                    </div>
                    {/* Scrollable Grid Container */}
                    <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory 
                        w-full min-h-[250px] lg:h-[530px] bg-white rounded-2xl shadow-xl shadow-amber-100/40">
                        
                        {section3.map((category, index) => (
                            <div key={index} className="flex-shrink-0 min-w-[150px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] p-4 snap-center">
                                <div className="w-full h-full cursor-pointer transition-all group perspective-1000">
                                    <img
                                        className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover opacity-80 
                                            transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105"
                                        src={category.image}
                                        alt={category.name}
                                    />
                                    <div className="flex flex-col items-center mt-2">
                                        <p className="text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-800 capitalize tracking-tight">{category.name}</p>
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 capitalize tracking-tight font-bold">{category.price}</p>
                                        <img
                                            className="w-[150PX] h-[30px] lg:h-[50px] object-cover opacity-80 pb-2"
                                            src={category.star}
                                            alt={category.name}
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button to Shop All Page */}
                    <div className = "w-full flex justify-center items-center p-40 ">
                        <button 
                            onClick={() => navigate("/ShopAll")}
                            className=" w-[200px] h-[80px] lg:w-[300px] lg:h-[100px] rounded-2xl text-center bg-blue-400 hover:bg-blue-500 cursor-pointer ">
                           < span className = "text-3xl lg:text-4xl text-center text-gray-50 font-bold">
                                SHOP NOW
                            </span> 
                        </button>

                    </div>

                


            </section>
        </>
    );
});
