import { useParams } from "react-router-dom";
import { Navbar } from "../assets/components/sections/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const sizes = [{name: "XXL"},{name: "XL"},{name: "LG"}, {name: "MD"}, {name: "SM"}, {name: "XSM"}];

export const ItemDetail = ({quantityItemAdded, setQuantityItemAdded}) => {
    const [itemDetail, setItemDetail] = useState(null);
    const [quantityItem, setQuantityItem] = useState("0");
    const [pickedSize, setPickedSize] = useState();
    const [sizeChosen, setSizeChosen] = useState([]);
    const [alert, setAlert] = useState();
    const { id } = useParams();
    useEffect(() => {
        const getItemHandler = async() => {
            try {
                const {data}= await axios.get(`http://localhost:5000/api/itemAll/items/${id}`)
                if(!data){
                    return <div>Loading ...</div>;
                }
                setItemDetail(data);
            } catch (err) {
                console.log("error to get item: ", err)
            }

        }
        getItemHandler();
       
    }, [id]);

    const itemAddedUpdate = ( obj ) => {
        if(parseInt(quantityItem) <= 0 || !quantityItem || pickedSize == null) {
            setAlert(() => true);
            // ⏱️ Hide the alert after 5 seconds
            setTimeout(() => {
                setAlert(false);
            }, 3000);
            return;
            
        }
        setQuantityItemAdded(quantityItem);
        console.log("obj: ", obj);
    }

    const sizePicked = (sizeName) => {
        // check if the size got click or not then make the bg turn blue 

        setSizeChosen( (pre) => {

            if(pre[sizeName]) {
                setPickedSize(null);
                return {};
            }
            setPickedSize(sizeName);

            
            return { [sizeName]: true };  

        })

    }


    useEffect(() => {
        console.log("quantityItemAdded in itemdetail: ", quantityItemAdded);
    }, [quantityItemAdded])

    

    // 🔹 Show loading state while waiting for data
    if (!itemDetail) {
        return (
            <>
                <Navbar quantityItemAdded = {quantityItemAdded} setQuantityItemAdded = {setQuantityItemAdded}/>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto mb-4"></div>
                        <span className="text-xl font-bold text-gray-50">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
    return ( 
    <>
        <Navbar quantityItemAdded = {quantityItemAdded} setQuantityItemAdded = {setQuantityItemAdded}/>
        <div className="min-h-screen w-full bg-white">
            <div className="w-full p-10 lg:p-40 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-2/3 lg:w-full">
                   <img src= {itemDetail.image} alt="" />
                </div>
                <div className=" flex flex-col p-6 gap-3">
                    <div className="grid grid-cols-1 w-full">
                        <span className="text-3xl lg:text-5xl font-bold text-gray-900">{itemDetail.name}</span>
                        <img src={itemDetail.star} className=" w-[100px] lg:w-[150PX] h-[30px] lg:h-[50px] object-cover opacity-80 pb-2"/>
                    </div>
                    <div >
                        <span className="text-3xl lg:text-4xl text-gray-900 font-bold">{itemDetail.price}</span>
                    </div>
                    <div>
                        <div className="text-xl text-gray-900">color</div>
                        
                    </div>
                    <div className = "">
                        <div className="text-xl text-gray-900">
                            size
                        </div>
                        <div className= "flex flex-wrap p-2 gap-2">
                            { sizes.map((size, index) => (
                                <button 
                                    onClick = {() => sizePicked(size.name)}
                                    key = {index} 
                                    className={`border-2 border-gray-400 w-10 h-10 ${sizeChosen[size.name]? `bg-blue-600`: ``} text-gray-900 rounded-md hover:bg-blue-600 flex items-center justify-center cursor-pointer`}>
                                    <span className="text-center text-md p-0.5">{size.name}</span>
                                </button>
                            ))}

                        </div>
                    </div>
                    
                        <div className="flex flex-col justify-start gap-2">
                            <label className="text-gray-900 font-semibold text-lg">QUANTITY</label>
                            <input onChange={(e) => setQuantityItem( e.target.value)}
                                value = {quantityItem}
                                type= "number" 
                                name="quantity" 
                                id="quantity" 
                                min="1"
                                className="w-20 h-10 border-2 border-gray-400 rounded-lg p-2 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            />
                        </div>
                    
                    <div>
                        <button 
                            onClick={() => itemAddedUpdate("add")}
                            className=" w-40 lg:w-52 h-8 lg:h-12 bg-blue-600 cursor-pointer hover:bg-blue-700 hover:border-blue-900 rounded-xl hover:border-2">
                            <span className="text-gray-900 text-md p-0.5">
                                ADD TO CART
                            </span>
                        </button>
                    </div>
                    <div>
                        <button className=" w-60 lg:w-72 h-8 lg:h-12 bg-blue-600 cursor-pointer hover:bg-blue-700 hover:border-blue-900 rounded-xl hover:border-2">
                            <span className="text-gray-900 text-md p-0.5">
                                BUY NOW
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {alert && ( <div className="fixed bottom-5 right-5 z-50 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
                                Please choose the size or enter a valid quantity (greater than 0).
                        </div>)
            }
            
        </div>

    </>
    
)

}
