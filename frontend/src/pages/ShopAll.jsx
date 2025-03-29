const generalList = [{typeFilter: "General", 
    detail: [    {name: "category", subdetail: ["Helmets, Jackets, Gloves, Boots, Pants, Accessories"]},
                {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                {name: "Rating", subdetail: ["1 to 5 stars"]},
                {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                {name: "New Arrivals", subdetail: [""]},

            
            ]},
    {typeFilter: "General", 
        detail: [    {name: "category", subdetail: ["Helmets, Jackets, Gloves, Boots, Pants, Accessories"]},
                    {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                    {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                    {name: "Rating", subdetail: ["1 to 5 stars"]},
                    {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                    {name: "New Arrivals", subdetail: [""]},
    
                
                ]},
    {typeFilter: "General", 
        detail: [    {name: "category", subdetail: ["Helmets, Jackets, Gloves, Boots, Pants, Accessories"]},
                    {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                    {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                    {name: "Rating", subdetail: ["1 to 5 stars"]},
                    {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                    {name: "New Arrivals", subdetail: [""]},
    
                
                ]},
    {typeFilter: "General", 
        detail: [    {name: "category", subdetail: ["Helmets, Jackets, Gloves, Boots, Pants, Accessories"]},
                    {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                    {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                    {name: "Rating", subdetail: ["1 to 5 stars"]},
                    {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                    {name: "New Arrivals", subdetail: [""]},
    
                
                ]},
    {typeFilter: "General", 
        detail: [    {name: "category", subdetail: ["Helmets, Jackets, Gloves, Boots, Pants, Accessories"]},
                    {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                    {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                    {name: "Rating", subdetail: ["1 to 5 stars"]},
                    {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                    {name: "New Arrivals", subdetail: [""]},
    
                
                ]},
    {typeFilter: "General", 
        detail: [    {name: "category", subdetail: ["Helmets, Jackets, Gloves, Boots, Pants, Accessories"]},
                    {name: "Brand", subdetail: ["Alpinestars", "Dainese", "Shoei", "AGV", "HJC"]},
                    {name: "Price Range", subdetail: ["Slider or predefined ranges"]},
                    {name: "Rating", subdetail: ["1 to 5 stars"]},
                    {name: "Availability", subdetail: ["In Stock", "Pre-order", "Out of Stock"]},
                    {name: "New Arrivals", subdetail: [""]},
    
                
                ]},
]
import { Navbar } from "../assets/components/sections/Navbar"

export const ShopAll = ( () => {

    return (
        <>
            <Navbar/>

            <div className = "w-full min-h-screen bg-gradient-to-r from-gray-950 to-gray-800">

                {/* filter navbar */}

                <div className="absolute top-[95px] left-0 w-1/6 min-h-screen  border-2 border-gray-500 ">
                    <div className="w-full h-10 bg-gradient-to-r from-gray-300 to-gray-500 flex justify-center items-center ">
                        <h1 className="text-2xl text-gray-950 text-center ">Filter</h1>
                    </div>
                    <div className="w-full ">
                        <h2 className="text-2xl text-gray-950 text-center ">General</h2>
                        <ul>
                            <li>
                                <ul>
                                    <li>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        
        </>
    )

})