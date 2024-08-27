import About from "../About/About";
import AddBar from "../AddBar/AddBar";
import Banner from "../Banner/Banner";
import DisCountProduct from "../DisCountProduct/DisCountProduct";
import LatestFromBlog from "../LatestFromBlog/LatestFromBlog";
import LatestProducts from "../LatestProducts/LatestProducts";



const Home = () => {
    return (
        <div>
            <AddBar></AddBar>
            <Banner></Banner>
            <LatestProducts></LatestProducts>
            <About></About>
            <DisCountProduct></DisCountProduct>
            <LatestFromBlog></LatestFromBlog>
        </div>
    );
};

export default Home;