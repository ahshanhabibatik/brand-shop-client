import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Laptop from "./Laptop";



const LaptopCategory = () => {

    const laptopData = useLoaderData();

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        laptopData.map(laptop => <Laptop 
                            key={laptop._id}
                            laptop={laptop}
                        ></Laptop>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LaptopCategory;