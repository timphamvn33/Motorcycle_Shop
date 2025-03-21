const categories1 = [
    { name: "Helmet", image: "/images/helmet.jpg" },
    { name: "Parts", image: "/images/Parts.jpg" },
    { name: "Sale", image: "/images/sale.jpg" },
    { name: "Riding Gear", image: "/images/riding_gear.jpg" },
    {name: "accessories", image: "/images/accessories.jpg"},
    {name: "tires", image: "/images/tires.jpg"}
];
const categories2 = [
    { name: "20% Sale", image: "/images/sale20.jpg" },
    { name: "New Items", image: "/images/ridingSale.jpg" },
    { name: "Gears Sales", image: "/images/ridingGearSale.jpg" },
];

export const Categories = (() => {
    return (
        // title
        <section id="categories" className="min-h-screen flex flex-col justify-center items-center p-10 md:p-40 lg:p-80 z-10">
            <div className="p-10">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-300 text-center">FEATURED CATEGORIES</h2>
            </div>
            {/* 1st category */}
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories1.map((category, index) => (
                    <div key={index} className="flex justify-center items-center transition-all group">
                        <div className="relative w-full max-w-[300px] h-[200px] cursor-pointer hover:opacity-50 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                            <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-700 rounded-2xl"></div>
                            <img className="absolute w-full h-full object-cover opacity-15 rounded-2xl" src={category.image} alt={category.name} />
                            <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                                <p className="text-xl lg:text-3xl text-center text-gray-50 capitalize">{category.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* second category */}

            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-30">
                {categories2.map((category, index) => (
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
                
        </section>
    );
});
