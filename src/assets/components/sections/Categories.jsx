export const Categories = (() => {
    return (
    
        <section id = "categories" className = "min-h-screen flex flex-col justify-center items-center p-40 m-40 ">
            <div className = "p-20">
                <h2 className = "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300">
                    FEATURED CATEGORIES
                </h2>
            </div>
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <div className="relative w-3/4 h-4/5 cursor-pointer hover:bg-red-400 hover:box-border hover:rounded-4xl">
                        <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-300 box-border rounded-4xl z-10">
                        </div>
                        <img
                            className="absolute w-full h-full object-cover box-border opacity-15 rounded-4xl z-0"
                            src="/images/helmet.jpg"
                            alt="Helmet"
                        />
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full z-20">
                            <p className="text-lg sm:text-lg md:text-xl lg:text-3xl text-center text-gray-50 ">Helmet</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-3/4 h-4/5 cursor-pointer hover:bg-red-400 hover:box-border hover:rounded-4xl">
                        <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-300 box-border rounded-4xl z-10">
                        </div>
                        <img
                            className="absolute w-full h-full object-cover box-border opacity-15 rounded-4xl z-0"
                            src="/images/Parts.jpg"
                            alt="Helmet"
                        />
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full z-20">
                            <p className="text-lg sm:text-lg md:text-xl lg:text-3xl text-center text-gray-50 ">parts</p>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                <div
                    className="relative box-border rounded-2xl w-3/4 h-4/5 opacity-30 p-40 text-lg sm:text-lg md:text-xl lg:text-2xl text-center z-0"

                >
                    <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-300 box-border rounded-4xl z-10"></div>
                
                    <img
                        className="absolute w-full h-full object-cover box-border opacity-50 rounded-2xl z-0"
                        src="/images/tires.jpg"
                        alt="Tires"
                    />
               

                
                <div className="absolute inset-0 flex justify-center items-center w-full h-full z-20">
                    <p className="text-lg sm:text-lg md:text-xl lg:text-3xl text-center text-gray-50 ">parts</p>
                </div>
                
            </div>
            </div>


                <div className="flex justify-center items-center">
                    <div className="relative w-3/4 h-4/5 cursor-pointer hover:bg-red-400 hover:box-border hover:rounded-4xl">
                        <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-300 box-border rounded-4xl z-10">
                        </div>
                        <img
                            className="absolute w-full h-full object-cover box-border opacity-15 rounded-4xl z-0"
                            src="/images/sale.jpg"
                            alt="Helmet"
                        />
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full z-20">
                            <p className="text-lg sm:text-lg md:text-xl lg:text-3xl text-center text-gray-50 ">SALE</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="relative w-3/4 h-4/5 cursor-pointer hover:bg-red-400 hover:box-border hover:rounded-4xl">
                        <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-300 box-border rounded-4xl z-10">
                        </div>
                        <img
                            className="absolute w-full h-full object-cover box-border opacity-15 rounded-4xl z-0"
                            src="/images/riding_gear.jpg"
                            alt="Helmet"
                        />
                        <div className="absolute inset-0 flex justify-center items-center w-full h-full z-20">
                            <p className="text-lg sm:text-lg md:text-xl lg:text-3xl text-center text-gray-50 ">Riding gears</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div
                    className="box-border rounded-2xl w-3/4 opacity-40 p-40 text-lg sm:text-lg md:text-xl lg:text-2xl text-center text-black"
                    style={{
                        background: "url(/images/accessories.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "left",
                    }}
                    >
                    <p>Helmet 6</p>
                    </div>
                </div>
            
            </div>


             

        </section>
    )
})