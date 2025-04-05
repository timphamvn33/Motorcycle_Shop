import { useEffect } from "react"
import { Navbar } from "../assets/components/sections/Navbar"

export const Cart = ({itemsAdded, setItemsAdded}) => {
    useEffect(() => {
        console.log("itemsAdded: ", itemsAdded)
    })

    return (
        <>
        <Navbar/>
        <div className = "w-full min-h-screen bg-white flex flex-wrap">
            {/* left section */}
            {itemsAdded?.length === 0 && (
                <p className="text-xl text-gray-600">Your cart is empty.</p>
            )}
            <div className=" w-1/2 overflow-y-auto lg:p-20">
                <div className=" flex flex-col p-6 gap-3">
                    {/* {itemsAdded?.map((item, index) => (
                        <div key= {index}> */}

                            {itemsAdded?.map((it, index2) => (
                                <div key = {index2} className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-7">
                                    

                                    <div className="w-full">
                                        <img src= {it.image} alt="" />
                                    </div>

                                    

                                    <div className="grid grid-col-1 gap-1 lg:gap-4">

                                        <div className="grid grid-cols-1 w-full">
                                            <span className="text-3xl lg:text-5xl font-bold text-gray-900">{it.name}</span>
                                            <img src={it.star} className=" w-[100px] lg:w-[150PX] h-[30px] lg:h-[50px] object-cover opacity-80 pb-2"/>
                                        </div>
                                        <div >
                                            <span className="text-3xl lg:text-4xl text-gray-900 font-bold">{it.price}</span>
                                        </div>
                                        <div>
                                            <div className="text-xl text-gray-900">color</div>
                                            
                                        </div>
                                        <div className = "">
                                            <div className="text-xl text-gray-900">
                                                SIZE
                                            </div>
                                            <div
                                                className="border-2 border-gray-400 w-10 h-10 text-gray-900 rounded-md hover:bg-blue-600 flex items-center justify-center cursor-pointer">
                                                <span className="text-center text-md p-0.5">{it.size}</span>
                                            </div>
                                      
                                        </div>
                                        <div className = "flex flex-wrap">
                                            <div className="p-1 text-gray-900">QUANTITY:: </div>
                                            <div className="text-gray-900 p-1">{it.quantity}</div>
                                            
                                        </div>
                                    </div>

                                </div>
                            ))}


                        {/* </div> */}
                    {/* ))} */}
                        
                        {/* <div className="flex flex-col justify-start gap-2">
                            <label className="text-gray-900 font-semibold text-lg">QUANTITY</label>
                            <input onChange={(e) => setQuantityItem( e.target.value)}
                                value = {quantityItem}
                                type= "number" 
                                name="quantity" 
                                id="quantity" 
                                min="1"
                                className="w-20 h-10 border-2 border-gray-400 rounded-lg p-2 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            />
                        </div> */}
                        
                </div>
            </div>
            {/* right section */}
            <div className="w-1/2 lg:p-20">
                <div className="p-7">
                    <button 
                    
                        className=" w-40 lg:w-52 h-8 lg:h-12 bg-blue-600 cursor-pointer hover:bg-blue-700 hover:border-blue-900 rounded-xl hover:border-2">
                        <span className="text-gray-900 text-md p-0.5">
                            PAYPAL
                        </span>
                    </button>
                </div>
                <div>
                    <button className=" w-60 lg:w-72 h-8 lg:h-12 bg-blue-600 cursor-pointer hover:bg-blue-700 hover:border-blue-900 rounded-xl hover:border-2">
                        <span className="text-gray-900 text-md p-0.5">
                            CHECK OUT BY CREDIT
                        </span>
                    </button>
                </div>
            </div>

        </div>


        </>
    )
}