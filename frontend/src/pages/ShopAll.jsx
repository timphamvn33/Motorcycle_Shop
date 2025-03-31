const generalList = [
    {typeFilter: "General", 
        detail: [    {name: "Category", subdetail: ["Helmets", "Jackets", "Gloves", "Boots", "Pants", "Accessories"]},
                {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                {name: "Rating", subdetail: ["1 to 5 stars"]},
                {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                {name: "New Arrivals", subdetail: [""]},

            
            ]},
    {typeFilter: "Helmet-Specific", 
        detail: [    {name: "Helmet Type", subdetail: ["Full-face", "Modular", "Open-face", "Half", "Dual-sport", "Off-road"]},
                    {name: "Safety Certifications", subdetail: ["DOT", "ECE", "Snell", "SHARP"]},
                    {name: "Material ", subdetail: ["Carbon Fiber", "Fiberglass", "Polycarbonate"]},
                    {name: "Visor Type", subdetail: ["Pinlock-ready", "Tinted", "Photochromic", "Anti-fog"]},
                    {name: "Size", subdetail: ["XS", "S", "M", "L", "XL", "XXL"]},
                    
    
                
                ]},
    {typeFilter: "Jackets & Apparel", 
        detail: [    {name: "Material", subdetail: ["Leather", "Textile", "Mesh"]},
                    {name: "Weather Suitability", subdetail: ["Summer", "Winter", "All-season"]},
                    {name: "Armor Type", subdetail: ["CE Level 1", "CE Level 2", "No Armor"]},
                    {name: "Ventilation", subdetail: ["Yes/No"]},
                    {name: "Waterproofing", subdetail: ["Yes/No"]},
                    {name: "Gender", subdetail: ["Men", "Women", "Unisex"]},
    
                
                ]},
    {typeFilter: "Gloves", 
        detail: [    {name: "Material ", subdetail: ["Leather", "Textile", "Mesh"]},
                    {name: "Type ", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                    
                    
                    {name: "Touchscreen Compatibley", subdetail: ["Yes/No"]},
                    {name: "Knuckle Protection", subdetail: ["Yes/No"]},
    
                
                ]},
    {typeFilter: "Boots", 
        detail: [    {name: "Type ", subdetail: ["Racing", "Touring", "Adventure", "Off-road", "Casual"]},
                    {name: "Closure System", subdetail: ["Laces", "Buckles", "Velcro", "Zipper"]},
                    {name: "Waterproof", subdetail: ["Yes/No"]},
                    {name: "Ankle & Shin Protection", subdetail: ["Yes/No"]},

    
                
                ]},

    {typeFilter: "Pants", 
        detail: [    {name: "Material", subdetail: ["Denim", "Leather", "Textile"]},
                    {name: "Armor Type", subdetail: ["CE Level 1", "CE Level 2", "No Armor"]},
                    {name: "Ventilation ", subdetail: ["Yes/No"]},
                    {name: "Waterproofing ", subdetail: ["Yes/No"]},
                ]},

    {typeFilter: "Accessories", 
        detail: [    {name: "Type ", subdetail: ["Bluetooth", "Intercoms", "Tank Bags", "ackpacks", "Knee Sliders", "Base Layers"]},
                    {name: "Brand Compatibility", subdetail: ["For specific helmets or bikes"]},
                
                ]},
    ];

    const items = [
        {  name: "Allex Xtreme Jacket", price: "$800", star: "/images/3Stars.jpg", image: "/images/AllextremeJack.jpg" },
        {  name: "HJC Full 3 Helmet", price: "$450", star: "/images/4Stars.jpg", image: "/images/HJCHelm.jpg" },
        {  name: "K1 Full Helmet", price: "$600", star: "/images/5Stars.jpg", image: "/images/k1Helm.jpg" },
        {  name: "Mattle Black Helmet", price: "$400", star: "/images/3Stars.jpg", image: "/images/MattleBlackHelm.jpg" },
        {  name: "Revit Jacket", price: "$750", star: "/images/5Stars.jpg", image: "/images/RevitJack.jpg" },
        {  name: "Sena Head Set", price: "$799", star: "/images/4Stars.jpg", image: "/images/SenaHeadset.jpg" },
        {  name: "SGIR Jacket", price: "$699", star: "/images/4Stars.jpg", image: "/images/SGIR_Jack.jpg" },
        {  name: "V9 Head Set", price: "$599", star: "/images/2Stars.jpg", image: "/images/V9Headset.avif" },

        {  name: "Alpinestars_3017_boot", price: "$800", star: "/images/3Stars.jpg", image: "/images/Alpinestars_3017_boot.jpg" },
        {  name: "Alpinestars_3017_boot2", price: "$450", star: "/images/4Stars.jpg", image: "/images/Alpinestars_3017_boot2.jpg" },
        {  name: "Dainese_glove", price: "$600", star: "/images/5Stars.jpg", image: "/images/Dainese_glove.jpg" },
        {  name: "defender_pant", price: "$750", star: "/images/5Stars.jpg", image: "/images/defender_pant.jpg" },
        {  name: "enduro_pant", price: "$799", star: "/images/4Stars.jpg", image: "/images/enduro_pant.jpg" },
        {  name: "goatskin_glove", price: "$699", star: "/images/4Stars.jpg", image: "/images/goatskin_glove.jpg" },
        {  name: "iron_jia_gloves", price: "$599", star: "/images/2Stars.jpg", image: "/images/iron_jia_gloves.jpg" },

        {  name: "menCap_boot", price: "$800", star: "/images/3Stars.jpg", image: "/images/menCap_boot.jpg" },
        {  name: "mesh_pant", price: "$450", star: "/images/4Stars.jpg", image: "/images/mesh_pant.jpg" },
        {  name: "neon_rs-200_glove", price: "$600", star: "/images/5Stars.jpg", image: "/images/neon_rs-200_glove.jpg" },
        {  name: "Dainese_glove2", price: "$400", star: "/images/3Stars.jpg", image: "/images/dainese_gloves2.jpg" },
        {  name: "revit_cassini_glove", price: "$750", star: "/images/5Stars.jpg", image: "/images/revit_cassini_glove.jpg" },
        {  name: "Royal_boots", price: "$799", star: "/images/4Stars.jpg", image: "/images/Royal_boots.jpg" },
        {  name: "shima_boot", price: "$699", star: "/images/4Stars.jpg", image: "/images/shima_boot.jpg" },
        {  name: "waterproff_pant", price: "$699", star: "/images/4Stars.jpg", image: "/images/waterproff_pant.jpg" },
        {  name: "dainese_gloves3", price: "$699", star: "/images/4Stars.jpg", image: "/images/dainese_gloves3.jpg" },
        
    ];
import { useEffect, useState } from "react";
import { Navbar } from "../assets/components/sections/Navbar"

export const ShopAll = ( () => {

    const [subDetailToggle, setSubDetailToggle] = useState({});
    const [detailToggle, setDetailToggle] = useState({});

    const toggleSubDetail = (typeFilter, index) => {
        setSubDetailToggle((pre) => ({
            ...pre,
            [typeFilter + index]: !pre[typeFilter + index],
            
        }))
    }

    const toggleDetail = (index) => {
        setDetailToggle((pre) => ({...pre, [index]: !pre[index]}))


    }
    return (
        <>
            <Navbar/>

            <div className = "w-full min-h-screen bg-gradient-to-r from-gray-950 to-gray-800 flex flex-wrap">

                {/* filter navbar */}

                <div className="min-h-screen w-1/6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 relative">
                    <div className="w-full h-10 bg-gradient-to-r from-gray-300 to-gray-500 flex justify-center items-center z-20 absolute">
                        <h1 className="text-2xl text-gray-950 text-center ">Filter</h1>
                    </div>
                    <div className="w-full h-full bg-gradient-to-r from-gray-950 to-gray-800 absolute top-0 left-0 z-10 "></div>
                    <div className="w-full z-20 absolute top-10 bg-gradient-to-r from-gray-950 to-gray-800">
                        {/* typeFilter */}
                        {generalList.map((gen, index) => (
                                        <ul key = {index}>
                                            <li> 
                                                <div className=" p-2 cursor-pointer" onClick={() => toggleDetail(index)}>
                                                    <span className="text-2xl font-bold text-gray-50">
                                                        {gen.typeFilter}
                                                    </span>
                                                            
                                                    {/* up or down arrow */}
                                                    {detailToggle[index]? <span className="text-sm p-2 opacity-80">&or;</span>:<span className="text-sm p-2 opacity-80">&and;</span>}

                                                
                                                </div>
                                            {/* detail */}
                                            <ul className = {`${detailToggle[index]? `block`: `hidden`}`}>
                                                {gen.detail.map((detail, index2) => (
                                                    
                                                        <li key = {index2}>
                                                            <div className=" pl-20 text-gray-50 cursor-pointer" onClick={() => toggleSubDetail(gen.typeFilter, index2)}>
                                                                <span className="text-xl font-semibold">{detail.name}</span>
                                                                {/* up or down arrow */}
                                                                {subDetailToggle[gen.typeFilter+index2]? <span className="text-sm p-2 opacity-80">&or;</span>:<span className="text-sm p-2 opacity-80">&and;</span>}
                                                                
                                                            </div>
                                                            {/* sub_detail */}
                                                                {detail.subdetail.map((subDetail, index3) => (
                                                                    <ul key = {index3} className={`${subDetailToggle[gen.typeFilter+index2]?`block`:`hidden`}`}>
                                                                        <li >
                                                                            <div className="text-xl font-semibold pl-40 text-gray-50 ">
                                                                                <input type="checkbox" className="w-4 h-4"/>
                                                                                <label className="pl-2">{subDetail}</label>
                                                                            </div>
                                                                            
                                    
                                                                        </li>
                                                                    </ul>

                                                                ))}
                    
                                                        </li>
                                                ))}
                                            </ul>

                                            </li>
                                        </ul>
                        ))}
                        
                    </div>

                </div>

                {/* main section */}
                <div className="min-h-screen w-5/6  pt-20 pl-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-52 bg-white shadow-xl shadow-amber-100/40">
                        
             
                        
                        {items.map((category, index) => (
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

            </div>
        
        </>
    )

})