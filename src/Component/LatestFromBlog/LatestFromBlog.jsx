
import blog1 from '../../../public/images/b1.jpg'
import blog2 from '../../../public/images/b2.jpg'

const LatestFromBlog = () => {
    return (
 
            <div className=' mt-10 mb-4'>
                <h2 className='text-4xl text-center mb-5'>Latest From Blog</h2>
                <div className=" grid grid-cols-2 gap-3">       
                    <img src={blog1} alt="" />  
                    <img src={blog2} alt="" />            
                </div>
                </div>
      
 
    );
};

export default LatestFromBlog;