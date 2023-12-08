import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";


const UpdateProduct = () => {

    const navigate = useNavigate();

    const products = useLoaderData();

    const { _id, name, quantity, price, company, color, details, photo, category } = products;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const company = form.company.value;
        const color = form.color.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const category = form.category.value;

        const newUpdateProduct = { name, quantity, price, company, color, details, photo, category }

        console.log(newUpdateProduct);

        // send data to the server


        fetch(` https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    navigate('/')
                }
            })

    }

    return (
        <div >
            <Navbar></Navbar>
            <div className=" p-4 lg:p-24">


                <h1 className="md:text-3xl text-center text-white font-extrabold">Update Product</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* form row */}
                    <div className="md:flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Available Quantity</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="quantity" defaultValue={quantity} placeholder="Total Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    {/* form row */}
                    <div className="md:flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" defaultValue={price} placeholder="Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="company" placeholder="Product Rating out of 10" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Colors</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="color" defaultValue={color} placeholder="Product color" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Details</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="details" defaultValue={details} placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Photo URL</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-xl text-white">Category</span>
                            </label>
                            <label >
                                <select id="category" defaultValue={category} name="category" className=" w-full input input-bordered">
                                    <option value="mobile">Mobile</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="headphone">Head Phone</option>

                                </select>
                            </label>
                        </div>
                    </div>


                    <input className="text-xl rounded-md text-white border px-2 py-2 border-red-700  w-full cursor-pointer hover:bg-orange-400" type="submit" value="UPDATE PRODUCT" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;