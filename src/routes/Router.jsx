import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../Page/AddProduct";
import UpdateProduct from "../Page/UpdateProduct";
import Details from "../Page/Details";
import Cart from "../Page/Cart";
import MobileCategory from "../Page/MobileCategory";
import HeadphoneCategory from "../Page/HeadphoneCategory";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(' https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product'),

            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "update/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(` https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product/${params.id}`)
            },
            {
                path: "details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(` https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product/${params.id}`)
            },

            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => fetch(' https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/cart'),
            },
            {
                path: "/mobiles",
                element: <MobileCategory></MobileCategory>,
                loader: () => fetch(" https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product?category=mobile"),
            },
            {
                path: "/laptops",
                element: <MobileCategory></MobileCategory>,
                loader: () => fetch(" https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product?category=laptop"),
            },
            {
                path: "/headphones",
                element: <HeadphoneCategory></HeadphoneCategory>,
                loader: () => fetch(" https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product?category=headphone"),
                
            },
            
        ]
    },
]);

export default router;