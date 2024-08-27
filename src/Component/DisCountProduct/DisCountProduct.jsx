
import aboutPic1 from '../../../public/images/o1.jpg'
import aboutPic2 from '../../../public/images/o2.jpg'
import aboutPic3 from '../../../public/images/o3.jpg'

const DisCountProduct = () => {
    return (


        <div className="mt-24">
            <div className='grid grid-cols-2 gap-4'>
                <div>
                <img className='mt-16' src={aboutPic1} alt="" />
             <div className=' relative -mt-80 ml-9'>
                <h3 className='text-white text-3xl'>Upto Discount 20 %</h3>
                <button className='bg-white p-2 mt-5 border rounded-sm font-bold hover:bg-gray-300'>Shop now</button>
             </div>
                </div>
                <div className='grid-rows-2'>
                    <img className='mb-5' src={aboutPic2} alt="" />
                    <img className='' src={aboutPic3} alt="" />
                </div>
            </div>
        </div>



    );
};

export default DisCountProduct;