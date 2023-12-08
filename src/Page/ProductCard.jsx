
import { Link } from "react-router-dom";


const ProductCard = ({ product, handleDelete }) => {


    const { _id, name, quantity, price, company, color, details, photo, category } = product;

    const handleDeleteClick = () => {
        handleDelete(_id);
    };



    return (
        <div>
            <div className="card  md:w-80 mx-auto mb-3 lg:w-96 border-2 border-orange-500 ">
                <figure>
                    <img className="h-[300px] w-full" src={photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="lg:text-2xl text-orange-500 font-bold">{name}</div>
                    </h2>
                    <p><span className="lg:text-xl text-orange-500 font-bold">Price:</span> <span className="text-xl font-bold text-white">{price} <span className="text-orange-500">$</span></span></p>
                    <div className="card-actions justify-start">
                        <div><span className=" text-orange-500 font-bold">Rating:</span> <span className=" font-bold text-white">{company}/10</span></div>

                    </div>
                    <div className=" "> <span className="text-xl text-orange-500">Colors:</span> <span className="text-white">{color}</span></div>
                    <div className=" mx-auto ">
                        <Link to={`details/${_id}`}>
                            <button className=" border border-orange-500 p-2 mr-2 rounded-lg text-white hover:bg-red-300 font-bold ">Details</button>
                        </Link>
                        <Link to={`update/${_id}`}>
                            <button className="border border-orange-500 p-2 mr-2 rounded-lg text-white hover:bg-red-300 font-bold ">Update</button>
                        </Link>
                        <button onClick={handleDeleteClick} type="button" className="border border-orange-500 p-2 mr-2 rounded-lg text-white hover:bg-red-300 font-bold ">
                            Delete
                        </button>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default ProductCard;
