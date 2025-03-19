export const Navbar = (() => {
    return (
        <>
        <nav className="fixed top-0 w-full">
        <div className = " p-6 w-full ">
                <div className="px-20 grid grid-cols-3 gap-2 justify-center items-center text-gray-300">
                    <span className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-col justify-around items-center">
                        <p className="bg-gradient-to-b from-red-300 to-orange-600 bg-clip-text text-transparent text-5xl font-extrabold shadow-2xl shadow-amber-400 ">
                            NATALIE
                        </p>
                        <p className="bg-gradient-to-b from-orange-600 to-red-300 bg-clip-text text-transparent" >
                            RIDES
                        </p>
                        
                          
                    </span>

                    <input type="text" placeholder=" SEARCH" 
                        className = "p-5 py-2 placeholder-black placeholder:text-sm border-2 border-gray-500 bg-gray-300 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-transparent h-10 text-black text-sm opacity-70 focus:opacity-100"/>
                    <div className="flex flex-row justify-end ">
                        <img src="/images/profile.png" alt="Description of first image" class="w-10 h-auto rounded-lg shadow-lg mx-5 opacity-80" />
                        <img src="/images/cart.png" alt="Description of first image" class="w-10 h-auto rounded-lg shadow-lg mx-5" />

                    </div>


                </div>
                <div className="m-2 bg-gradient-to-b from-cyan-500 w-full h-0.5 shadow-2xl opacity-40 "> </div>

            </div>
            {/* bg-gradient-to-b from-cyan-600 to-cyan-950
             */}
            <div className = "  w-full ">
                <div className="px-20 grid grid-cols-3 gap-2 justify-center items-center text-gray-400">
                    <span className="text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-bold cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent"> 
                        &#9776; MENU
                    </span>
                    <div className="flex gap-15 justify-center items-center text-center text-lg sm:text-lg md:text-xl lg:text-xl font-bold text-gray-400">
                        <span className = "cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent"> RIDING GEAR</span>
                        <span className = "cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent">PARTS</span>
                        <span className = "cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent">ACCESORIES</span>
                        <span className = "cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent">SALE</span>
                    </div>

                </div>

            </div>


            

        </nav>

        </>
    )
})