import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react"; // Added useEffect
import Swal from "sweetalert2";
import Upcomming from "./Upcomming";
import Contract from "./Contract";
import Footer from "./Footer";
import About from "./About";

const Home = () => {
    const loadedProducts = useLoaderData();
    const [products, setProduct] = useState(loadedProducts);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://brand-shop-server-msvc9m8fo-ahshan-habib-s-projects.vercel.app/product/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(p => p._id !== _id);
                            console.log(remaining);
                            setProduct(remaining);
                        }
                    })
            }
        })
    }

    const handleSearch = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    // Dark/Light theme toggle
    useEffect(() => {
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
        document.body.className = isDarkTheme ? "dark" : "light";
    }, [isDarkTheme]);

    // Get theme preference from localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setIsDarkTheme(storedTheme === "dark");
        }
    }, []);

    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/kHn4gfR/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <Navbar></Navbar>

            <div className="h-80 mb-20" style={bannerStyle}>
                <h1 className="text-4xl pt-10 text-center text-orange-600 font-bold"> TrendWaveShop</h1>
                <div className="flex pt-8 md:mt-0 mx-auto justify-center">
                    <input
                        className="py-2 px-3 md:w-96"
                        type="text"
                        placeholder="Search by Product Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="text-xl rounded-md font-bold text-orange-500 border px-2 py-2 border-red-700 hover:bg-amber-500"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            products={products}
                            setProduct={setProduct}
                            handleDelete={(_id) => handleDelete(_id)}
                        />
                    ))
                ) : (
                    products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            products={products}
                            setProduct={setProduct}
                            handleDelete={(_id) => handleDelete(_id)}
                        />
                    ))

                )}
            </div>
            <Upcomming></Upcomming>

            <div>
                <About></About>
            </div>

            <Contract></Contract>

            <div >
                <Footer></Footer>
            </div>

            {/* Dark/Light Theme Toggle Button */}
            <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
                Toggle Theme
            </button>
        </div>
    );
};

export default Home;
