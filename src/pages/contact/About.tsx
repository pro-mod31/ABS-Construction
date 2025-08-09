import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='relative'>
                <Image
                    src="/Services.jpg"
                    width={1000}
                    height={100}
                    alt='about photo'
                    className='w-full h-[392px]'
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40"></div>
                <div className='absolute inset-0  top-[40%] justify-center text-center'>
                    <h2 className='text-white text-7xl font-bold'>Contact</h2>
                    <div className="mt-3 h-0.5 md:w-[17%] w-[50%]  md:mt-2 bg-white  mx-auto"></div>
                </div>
            </div>
  );
}

export default About;
