import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
 

 

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto mt-5">
            <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;