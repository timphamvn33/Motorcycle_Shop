const categories = [
    { name: "Helmet", image: "/images/helmet.jpg" },
    { name: "Parts", image: "/images/Parts.jpg" },
    { name: "Sale", image: "/images/sale.jpg" },
    { name: "Riding Gear", image: "/images/riding_gear.jpg" },
    {name: "accessories", image: "/images/accessories.jpg"},
    {name: "tires", image: "/images/tires.jpg"}
];

export const Categories = () => {
    return (
        <section id="categories" className="min-h-screen flex flex-col justify-center items-center p-100 z-10">
            <div className="p-10">
                <h2 className="text-4xl font-bold text-gray-300">FEATURED CATEGORIES</h2>
            </div>
            <div className="w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <div className="relative w-full max-w-[300px] h-[200px] cursor-pointer hover:bg-red-400 rounded-2xl transition-all">
                            <div className="absolute inset-0 bg-red-400 opacity-40 transition-opacity duration-700 rounded-2xl"></div>
                            <img className="absolute w-full h-full object-cover opacity-15 rounded-2xl" src={category.image} alt={category.name} />
                            <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                                <p className="text-xl lg:text-3xl text-center text-gray-50 capitalize">{category.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
