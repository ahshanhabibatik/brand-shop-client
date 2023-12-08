
const Laptop = ({ laptop }) => {

    const { name, quantity, price, company, color, details, photo, category } = laptop;

    return (
        <div>

            <div className="card md:w-80 mb-3 lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className="h-[300px]" src={photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">{name}</div>
                    </h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{quantity}</div>
                        <div className="badge badge-outline">{company}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Laptop;