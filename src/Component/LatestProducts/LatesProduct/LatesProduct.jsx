import { Link } from "react-router-dom";




const LatesProduct = ({ product }) => {
    console.log(product)
    const { id, img, price, productName, details } = product;
    return (
        <div className="m-3">
            <Link>
                <div className="card bg-gray-300 h-full shadow-x">
                    <figure>
                        <img className="w-28 p-5"
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body mb-6  mt-2">
                        <h2 className="card-title">
                            {productName}
                        </h2>
                        <p>{details}</p>
                        <button type="" className="font-semibold">Price {price} $</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LatesProduct;