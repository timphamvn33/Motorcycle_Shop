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
import { Navbar } from "../assets/components/sections/Navbar"

export const ShopAll = ( () => {

    return (
        <>
            <Navbar/>

            <div className = "w-full min-h-screen bg-gradient-to-r from-gray-950 to-gray-800">

                {/* filter navbar */}

                <div className="h-[calc(100vh-95px)] w-1/6 overflow-y-auto border-2 border-gray-500 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 ">
                    <div className="w-full h-10 bg-gradient-to-r from-gray-300 to-gray-500 flex justify-center items-center ">
                        <h1 className="text-2xl text-gray-950 text-center ">Filter</h1>
                    </div>
                    <div className="w-full  ">
                        <h2 className="text-2xl text-gray-950 text-center ">General</h2>
                        {/* typeFilter */}
                        {generalList.map((gen, index) => (
                                        <ul key = {index}>
                                            <li> <h4 className="text-2xl font-bold p-2 text-gray-50">{gen.typeFilter}</h4>
                                            {/* detail */}
                                                {gen.detail.map((detail, index2) => (
                                                    <ul key = {index2}>
                                                        <li>
                                                            <h3 className="text-xl font-semibold pl-20 text-gray-50">{detail.name}</h3>
                                                            {/* sub_detail */}
                                                                {detail.subdetail.map((subDetail, index3) => (
                                                                    <ul key = {index3}>
                                                                        <li>
                                                                            <h3 className="text-xl font-semibold pl-40 text-gray-50">{subDetail}</h3>
                                    
                                                                        </li>
                                                                    </ul>

                                                                ))}
                    
                                                        </li>
                                                    </ul>

                                                ))}

                                            </li>
                                        </ul>

                        ))}
                        
                    </div>

                </div>

            </div>
        
        </>
    )

})