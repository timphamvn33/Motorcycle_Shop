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
import { useEffect, useState } from "react";
import { Navbar } from "../assets/components/sections/Navbar"

export const ShopAll = ( () => {

    const [subDetailToggle, setSubDetailToggle] = useState({});
    const [detailToggle, setDetailToggle] = useState({});

    const toggleSubDetail = (typeFilter, index) => {
        console.log("typeFilter: ", typeFilter);
        console.log("index: ", index)
        setSubDetailToggle((pre) => ({
            ...pre,
            [typeFilter + index]: !pre[typeFilter + index],
            
        }))
    }

    const toggleDetail = (index) => {
        setDetailToggle((pre) => ({...pre, [index]: !pre[index]}))


    }
    useEffect(() => 
    {
        console.log("detailToggle: ", detailToggle)
    }, [detailToggle])



    

    return (
        <>
            <Navbar/>

            <div className = "w-full min-h-screen bg-gradient-to-r from-gray-950 to-gray-800">

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
                                                    {detailToggle[index]? <span className="text-md p-2 opacity-80">&or;</span>:<span className="text-md p-2 opacity-80">&and;</span>}

                                                
                                                </div>
                                            {/* detail */}
                                            <ul className = {`${detailToggle[index]? `block`: `hidden`}`}>
                                                {gen.detail.map((detail, index2) => (
                                                    
                                                        <li key = {index2}>
                                                            <div className=" pl-20 text-gray-50 cursor-pointer" onClick={() => toggleSubDetail(gen.typeFilter, index2)}>
                                                                <span className="text-xl font-semibold">{detail.name}</span>
                                                                {/* up or down arrow */}
                                                                {subDetailToggle[gen.typeFilter+index2]? <span className="text-md p-2 opacity-80">&or;</span>:<span className="text-md p-2 opacity-80">&and;</span>}
                                                                
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

            </div>
        
        </>
    )

})