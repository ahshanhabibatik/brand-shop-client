


const Mobile = ({ mobile }) => {

    const { name, quantity, price, company, color, details, photo, category } = mobile;

    return (
        <div>

            <div className="card mx-auto mt-3  mb-3 lg:w-96  border border-orange-500">
                <figure>
                    <img className="h-[300px] w-full" src={photo} alt="Shoes" />
                </figure>
                <div className="card-body text-white">
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

export default Mobile;