

const Upcomming = () => {
    return (



        <div className=" mb-4 mt-3 px-2  ">
            <h1 className="text-bold mt-4 mb-5 text-3xl text-orange-500 text-center">Upcoming Product</h1>
            {/* card-1 */}
            <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3 " >
                <div className="card lg:w-96 text-white border border-orange-500 mb-4 ">
                    <figure><img className="h-[300px] w-full" src="https://www.mobiledokan.com/wp-content/uploads/2023/09/Samsung-Galaxy-A05-black.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Samsung Galaxy A05</h2>
                        <p>Price: $3400 6/128 GB</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                {/* card-1 */}
                <div className="card lg:w-96 text-white border border-orange-500 mb-4 ">
                    <figure><img className="h-[300px] w-full" src="https://www.mobiledokan.com/wp-content/uploads/2023/10/Vivo-V29-Pro-blue.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vivo V29 Pro</h2>
                        <p>Price: $5700 12/256 GB</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                {/* card-1 */}
                <div className="card lg:w-96 text-white border border-orange-500 mb-4 ">
                    <figure><img className="h-[300px] w-full" src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-x515ea/vivobook-15-x515ea-01-500x500.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ASUS VivoBook 15 X515EA </h2>
                        <p>Price: $34000 8/512 GB</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>


            </div>




        </div>
    );
};

export default Upcomming;
