import { useLoaderData } from "react-router-dom";
import Mobile from "./Mobile";
import Navbar from "./Navbar";
import Footer from "./Footer";



const MobileCategory = () => {

    const mobileData = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    mobileData.map(mobile => <Mobile
                        key={mobile._id}
                        mobile={mobile}
                    ></Mobile>)
                }
            </div>

            <div>
                <hr />
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MobileCategory;