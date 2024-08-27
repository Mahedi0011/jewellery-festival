
import about from '../../../public/images/about-img.jpg'


const About = () => {
    return (
        <div className='mb-14'>
            <div className='grid grid-cols-2 mt-10 items-center mb-10'>
                <div className=' ml-16'>
                    <div className='bg-black h-60 w-60'></div>
                    <img className='absolute -mt-48 w-96 ml-12' src={about} alt="" />
                </div>
                <div className='ml-4 p-3'>
                    <h4 className='text-5xl font-bold mb-4 '>About Us</h4>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.</p>
                    <button className='btn btn-ghost'>Read More</button>
                </div>
            </div>         
        </div >
    );
};

export default About;


