

import React from 'react';

const Banner = () => {
    return (
        <div 
            className="hero min-h-screen" 
            style={{ 
                backgroundImage: 'url("../../../public/images/slider-bg.jpg")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="text-neutral-content text-start absolute top-26 left-24 ml-16">
                <h1 className="mb-6 text-5xl font-bold">
                    Best <span className='text-orange-600'>Jewellery</span> <br /> Collection
                </h1>
                <p className="mb-6">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The <br /> point of using Lorem
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;

 