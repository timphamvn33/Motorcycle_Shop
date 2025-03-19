export const Navbar = (() => {
    return (
        <>
        <nav className="fixed top-0 w-full">
        <div className = " p-6 w-full bg-gradient-to-b from-sky-950 to-cyan-500">
                <div className="px-20 grid grid-cols-3 gap-2 justify-center items-center text-gray-300">
                    <span className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-col justify-around items-center">
                        <p className="bg-gradient-to-b from-red-300 to-orange-600 bg-clip-text text-transparent text-4xl font-extrabold">
                            NATALIE
                        </p>
                        <p className="bg-gradient-to-b from-orange-600 to-red-300 bg-clip-text text-transparent" >
                            RIDES
                        </p>
                        
                          
                    </span>

                    <input type="text" placeholder=" SEARCH" 
                        className = "p-5 py-2 placeholder-black placeholder:text-xl border-2 border-gray-500 bg-gray-300 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-transparent h-20 text-black text-2xl"/>
                    <div className="flex flex-row justify-center items-center">
                    <img src="/images/profile.png" alt="Description of first image" class="w-15 h-auto rounded-lg shadow-lg mx-5" />
                        <img src="/images/cart.png" alt="Description of first image" class="w-15 h-auto rounded-lg shadow-lg mx-5" />

                    </div>


                </div>

            </div>
            
            <div className = " p-3 w-full bg-gradient-to-b from-cyan-600 to-cyan-950">
                <div className="px-20 grid grid-cols-3 gap-2 justify-center items-center text-gray-300">
                    <span className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold "> 
                        &#9776; MENU
                    </span>
                    <div className="flex gap-15 justify-center items-center text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                        <span>RIDING GEAR</span>
                        <span>PARTS</span>
                        <span>ACCESORIES</span>
                        <span>SALE</span>

                    </div>

                </div>

            </div>


            

        </nav>

        </>
    )
})