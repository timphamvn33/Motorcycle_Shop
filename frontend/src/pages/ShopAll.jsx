
import { useEffect, useState } from "react";
import { Navbar } from "../assets/components/sections/Navbar";
import axios from "axios";


export const ShopAll = () => {
    const [items, setItems] = useState([]);
    const [generalList, setGeneralList] = useState([]);

    // retrieves the items from ther server
    useEffect( () => {
        const fetchItems = async () => {
            const itemsRes = await axios.get("http://localhost:5000/api/itemAll/items");
            
            setItems (itemsRes.data);

        }
        fetchItems();


    }, [items])

    // retrieves the generalItems from the server
    useEffect(() => {
        const generalFiltersRes = async () => {
            const generalFilterRes = await axios.get("http://localhost:5000/api/generalFilterMenu/generalFilter");
            console.log("gen: ", generalFilterRes);
            setGeneralList(generalFilterRes.data);
            
        }
        generalFiltersRes();
    }, [generalList]);

    const [subDetailToggle, setSubDetailToggle] = useState({});
    const [detailToggle, setDetailToggle] = useState({});

    const toggleSubDetail = (typeFilter, index) => {
        setSubDetailToggle((pre) => ({
            ...pre,
            [typeFilter + index]: !pre[typeFilter + index],
            
        }))
    }

    const toggleDetail = (index) => {
        setDetailToggle((pre) => ({...pre, [index]: !pre[index]}))


    }
    return (
        <>
            <Navbar/>

            <div className = "w-full min-h-screen bg-gradient-to-r from-gray-950 to-gray-800 flex flex-wrap">

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
                                                    <span className="text-xl lg:text-2xl font-bold text-gray-50">
                                                        {gen.typeFilter}
                                                    </span>
                                                            
                                                    {/* up or down arrow */}
                                                    {detailToggle[index]? <span className="text-sm p-2 opacity-80">&or;</span>:<span className="text-sm p-2 opacity-80">&and;</span>}

                                                
                                                </div>
                                            {/* detail */}
                                            <ul className = {`${detailToggle[index]? `block`: `hidden`}`}>
                                                {gen.detail.map((detail, index2) => (
                                                    
                                                        <li key = {index2}>
                                                            <div className=" pl-5 lg:pl-10 text-gray-50 cursor-pointer" onClick={() => toggleSubDetail(gen.typeFilter, index2)}>
                                                                <span className="text-lg lg:text-xl font-semibold">{detail.name}</span>
                                                                {/* up or down arrow */}
                                                                {subDetailToggle[gen.typeFilter+index2]? <span className="text-sm p-2 opacity-80">&or;</span>:<span className="text-sm p-2 opacity-80">&and;</span>}
                                                                
                                                            </div>
                                                            {/* sub_detail */}
                                                                {detail.subdetail.map((subDetail, index3) => (
                                                                    <ul key = {index3} className={`${subDetailToggle[gen.typeFilter+index2]?`block`:`hidden`}`}>
                                                                        <li >
                                                                            <div className="text-lg lg:text-xl font-semibold pl-10 lg:pl-15 text-gray-50 ">
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

                {/* main section */}
                <div className="min-h-screen w-5/6 p-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-52 bg-white shadow-xl shadow-amber-100/40">    
                        {items.map((category, index) => (
                            <div key={index} className="flex-shrink-0 min-w-[150px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] p-4 snap-center">
                                <div className="w-full h-full cursor-pointer transition-all group perspective-1000">
                                    <img
                                        className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover opacity-80 
                                            transform transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:scale-105"
                                        src={category.image}
                                        alt={category.name}
                                    />
                                    <div className="flex flex-col items-center mt-2">
                                        <p className="text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-800 capitalize tracking-tight">{category.name}</p>
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 capitalize tracking-tight font-bold">{category.price}</p>
                                        <img
                                            className="w-[150PX] h-[30px] lg:h-[50px] object-cover opacity-80 pb-2"
                                            src={category.star}
                                            alt={category.name}
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                </div>

            </div>
        
        </>
    )

}