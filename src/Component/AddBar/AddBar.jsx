

import moment from 'moment';
import Marquee from "react-fast-marquee";
const AddBar = () => {
    return (
        <div className='mb-4 flex'>
            <h3 className='font-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h3>
            <Marquee>
            Looking for freelance Jewelry designers? Find & hire Fiverr, professional freelance artists to help you create and make your dream jewelry.
            </Marquee>
        </div>
    );
};

export default AddBar;