
import Swal from 'sweetalert2'; // Import SweetAlert2
import Navbar from './Navbar';
import Footer from './Footer';
import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const products = useLoaderData();

    const {
        _id,
        name,
        quantity,
        price,
        company,
        color,
        details,
        photo,
        category,
    } = products;

    // Create a cart item object that includes all product details
    const cartItemData = {
        _id,
        name,
        quantity,
        price,
        company,
        color,
        details,
        photo,
        category,
    };

    const handleAddToCart = () => {
        // Send a POST request to add the product to the cart
        fetch(' https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItemData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Show success message when added to cart
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to Cart',
                        text: 'Successfully added to cart!',
                    });
                } else if (data.error) {
                    // Show error message when duplicate item is detected
                    Swal.fire({
                        icon: 'error',
                        title: 'Duplicate Item',
                        text: 'This item is already in your cart.',
                    });
                } else {
                    // Handle other cases if needed
                    console.log(data);
                }
            });
    };

    return (
        <div>
            <Navbar />
            <hr />
            <div className="grid mt-8 grid-cols-1 px-10 md:grid-cols-4">
                <div className="col-span-4 w-full border-2 border-orange-500 rounded-lg">
                    <h2 className="border-b-2 text-white text-xl md:text-4xl font-bold px-1 py-3">{name}</h2>
                    <div className="w-full shadow-xl card-container">
                        <figure>
                            <img className="h-[700px]" src={photo} alt="Product" style={{ width: '100%' }} />
                        </figure>
                        <div className="flex items-center p-4 justify-between">
                            <div className="flex items-center gap-3">
                                <FaDollarSign className="text-orange-500" />
                                <h1 className="text-white">{price}</h1>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-orange-400" />
                                <h1 className="text-white">{color}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center text-orange-500 text-2xl md:text-4xl font-bold">Product Overview</h1>
                        </div>
                        <div>
                            <h1 className="p-4 text-white text-justify">{details}</h1>
                        </div>
                        <div>
                            <div>
                                <p className="text-2xl md:text-4xl text-orange-500 font-bold text-center">Product Information</p>
                                <div className="text-white px-4 mb-4">
                                    <p><span className='text-orange-500'>Total Quantity:</span> {quantity}</p>
                                    <p><span className='text-orange-500'>Rating:</span> {company} <span>/10</span></p>
                                    <p> <span className='text-orange-500'>Product type:</span> {category}</p>
                                </div>
                            </div>
                            <div className='border-b-2 border-orange-500'>

                            </div>
                            <div className="flex font-bold cursor-pointer justify-center p-2 text-xl text-white hover:bg-red-300 hover-bg-amber-300">
                                <button onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 py-3">
                <Footer />
            </div>
        </div>
    );
};

export default Details;
