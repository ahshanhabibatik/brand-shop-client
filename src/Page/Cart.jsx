import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch the user's cart items from the server
    useEffect(() => {
        fetch("https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/cart", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setCartItems(data);
            })
            .catch((error) => console.error("Error fetching cart items:", error));
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/deleteCart?_id=${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your Cart item has been deleted.", "success");
                            // Update the state to remove the deleted item
                            const remaining = cartItems.filter((item) => item._id !== _id);
                            setCartItems(remaining);
                        } else {
                            Swal.fire("Error", "Failed to delete the Cart item.", "error");
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting item:", error);
                        Swal.fire("Error", "Failed to delete the Cart item.", "error");
                    });
            }
        });
    };

    return (
        <div className="text-white">
            <Navbar />
            <h1>Cart: {cartItems.length}</h1>
            <div className="overflow-x-auto text-white">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="text-white text-xl">Image</th>
                            <th className="text-white text-xl">Name</th>
                            <th className="text-white text-xl">Quantity</th>
                            <th className="text-white text-xl">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((cart) => (
                            <tr key={cart._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.photo} alt="Avatar" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{cart.name}</div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{cart.quantity}</span>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{cart.price}</button>
                                </th>
                                <th>
                                    <Link>
                                        <button
                                            onClick={() => handleDelete(cart._id)}
                                            className="border border-red-500 p-1 rounded-lg hover:bg-red-300"
                                        >
                                            Delete
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
