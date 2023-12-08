import { useContext } from "react";

import imgUser from '../../src/assets/user.png';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    };

    const links = (
        <>
            <li className="text-sm font-bold"><NavLink to={'/'}>ALL</NavLink></li>
            <li className="text-sm  font-bold"><NavLink to={'/laptops'}>Laptops</NavLink></li>
            <li className="text-sm  font-bold"><NavLink to={'/mobiles'}>Mobiles</NavLink></li>
            <li className="text-sm  font-bold"><NavLink to={'/headphones'}>Headphones</NavLink></li>
            <li className="text-sm  font-bold"><NavLink to={'/add'}>Add Product</NavLink></li>
            <li className="text-sm  font-bold"><NavLink to={'/cart'}>My Cart</NavLink></li>

        </>
    );

    return (
        <div className="navbar px-10 pt-2 pb-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-orange-500 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  text-orange-500 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex  items-center">

                    <img className="w-14 hidden md:block" src="https://i.ibb.co/xJ9V9mG/Trend-Wave-shop-1-removebg-preview.png" alt="" />
                    <a className=" items-center text-orange-500 text-3xl hidden md:block  font-bold normal-case">TWS</a>


                </div>

            </div>
            <div className="navbar-center hidden text-xl text-orange-400 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end">




                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                    <div className="w-10 rounded-full">
                        <img src={user ? (user.photoURL || imgUser) : imgUser} alt="User" />
                    </div>
                </label>
                {user ? (
                    <Link to={"/login"}>
                        <button onClick={handleSignOut} className="text-xl rounded-md text-red-800 border px-2 py-2 border-red-700 ">
                            Log Out
                        </button>
                    </Link>
                ) : (
                    <Link to={'/login'}>
                        <button className=" text-xl rounded-md text-red-800 border px-2 py-2 border-red-700 ">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
