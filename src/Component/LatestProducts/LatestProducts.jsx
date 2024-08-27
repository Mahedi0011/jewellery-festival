import { useEffect, useState } from "react";
import LatesProduct from "./LatesProduct/LatesProduct";
 



const LatestProducts = () => {

    const [products, setProducts] = useState([]);
    const [showData, setShowData] = useState(8)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div>
            <h5 className="text-center font-bold  text-5xl mt-10">Latest Products</h5>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 ">

                {
                    products.slice(0, showData).map(product => <LatesProduct product={product} key={product.id}></LatesProduct>)
                }
            </div>
            <div className={showData === products.length && 'hidden'}>

                <div className="text-center mt-7">
                    < button onClick={() => setShowData(products.length)} 
                    className="btn bg-gray-500 text-center  hover:bg-slate-300 text-black">Show List</button>
                </div>

            </div>
        </div>

    );
};

export default LatestProducts;