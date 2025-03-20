const navbarOption = [{name: "RIDING GEAR"}, {name: "PARTS"}, {name: "ACCESORIES"}, {name: "SALE"}]

export const Navbar = (() => {
    return (
        <>
        
            {/* sale note running */}

            <div className=" justify-center items-center text-gray-300">
                <div className="text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-bold flex flex-col justify-around items-center">
                    <p className="bg-gradient-to-b from-cyan-500 to-cyan-50 bg-clip-text text-transparent animate-marquee m-5">
                        Thank you for being a valued customer! Enjoy 50% off on all gear accessories, and as a special bonus, get an additional 20% off when you apply for membership. Don’t miss out on these amazing savings—shop now and save more!
                    </p>
                    
                </div>
            </div>
            <nav className="sticky top-0 left-0 w-full z-50 bg-gray-900 opacity-90 shadow-2xl">
                {/* main navbar start*/}
                <div className="p-5 grid grid-cols-4 gap-30 justify-center items-center text-gray-300">
                    <span className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-col justify-around items-center">
                        <p className=" bg-gradient-to-b from-cyan-200 to-blue-700 bg-clip-text text-transparent text-5xl font-extrabold shadow-2xl shadow-cyan-400 ">
                            NATALIE
                        </p>
                        <p className=" bg-gradient-to-b from-blue-700 to-cyan-200 bg-clip-text text-transparent" >
                            RIDES
                        </p>
                        <span className=" text-center text-lg sm:text-xl md:text-xl lg:text-2xl font-bold cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent"> 
                            &#9776; MENU
                        </span>
                    </span>
                    
                    <div className="flex gap-4 justify-center items-center text-center text-sm sm:text-sm md:text-lg lg:text-xl font-bold text-gray-300">
                        {navbarOption?.map((napOption, index) => (
                            <span key = {index} 
                            className = "cursor-pointer hover:bg-gradient-to-b hover:from-cyan-600 hover:to-cyan-950 hover:bg-clip-text hover:text-transparent">{napOption.name}</span>

                        ))}

                    </div>
                    <input type="text" placeholder=" SEARCH" 
                        className = "p-5 m-5 py-2 placeholder-black placeholder:text-xl border-2 border-gray-500 bg-gray-300 rounded-xl focus:outline-none focus:ring-cyan-600 h-15 w-50 focus:w-full text-black text-xl opacity-70 focus:opacity-100 transition-all duration-300"/>
                    <div className="flex flex-row justify-center ">
                        <img src="/images/profile.png" alt="Description of first image" className="w-15 h-auto rounded-lg shadow-lg mx-5 opacity-80" />
                        <img src="/images/cart.png" alt="Description of first image" className="w-15 h-auto rounded-lg shadow-lg mx-5" />
                    </div>
                </div>

                <div className=" bg-gradient-to-b from-blue-300 w-full h-0.5 opacity-30"></div>

            </nav>

        </>
    )
})