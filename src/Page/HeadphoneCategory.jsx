import { useLoaderData } from "react-router-dom";
import Headphone from "./Headphone";
import Navbar from "./Navbar";
import Footer from "./Footer";


const HeadphoneCategory = () => {
    const headPhoneData = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    headPhoneData.map(headphone => <Headphone
                        key={headphone._id}
                        headphone={headphone}

                    ></Headphone>

                    )
                }
            </div>

            <div>
                <hr />
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HeadphoneCategory;