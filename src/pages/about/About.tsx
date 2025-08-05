import React from 'react';
import Image from 'next/image';
import { CheckLine } from 'lucide-react';
import Stats from './Stats';

const About = () => {
  return (
    <div className=''>
      <div className='relative'>
        <Image
          src="/About.jpg"
          width={1000}
          height={100}
          alt='about photo'
          className='w-full h-[392px]'
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40"></div>
        <div className='absolute inset-0  top-[40%] justify-center text-center'>
          <h2 className='text-white text-7xl font-bold'>About Us</h2>
          <div className="mt-3 h-0.5 md:w-[17%] w-[50%]  md:mt-2 bg-white  mx-auto"></div>
        </div>
      </div>
      <div className='max-w-6xl m-auto md:mt-9'>
        <div className="flex">
          <div className="relative w-[700px] h-[450px] flex flex-row-reverse items-center justify-center ml-9">
            {/* Background block with content */}
            <div className="absolute top-8 right-10 bg-gray-200 rounded-md z-0 w-[550] h-[300] p-10 md:mt-30">
              <div className="text-black max-w-md">
                <h3 className="text-sm  ">Est 2000</h3>

                <h3 className="text-2xl font-semibold ">OUR STORY</h3>
                <p className="text-l leading-relaxed w-[90%]">
                  We are a team of dedicated construction professionals with decades of combined experience delivering high-quality,
                  innovative, and reliable infrastructure solutions. Our expertise spans residential, commercial.</p>

                <div className='flex flex-col mt-3'>
                 <h2 className='flex gap-2'><CheckLine className='text-yellow-500'/>Experienced Professionals</h2> 
                 <h2 className='flex gap-2'><CheckLine className='text-yellow-500'/>High-Quality Delivery</h2> 
                 <h2 className='flex gap-2'><CheckLine className='text-yellow-500'/>Innovative & Reliable</h2> 
                  <h2 className='flex gap-2'><CheckLine className='text-yellow-500'/>Client-Centered Approach</h2>
                </div>
                <button className='border-2  mt-7 rounded p-1 hover:bg-yellow-400 hover:text-white cursor-pointer'>
                  Read More
                </button>

              </div>
            </div>
            {/* Image */}
            <div className="relative z-10 left-120">
              <Image
                src="/image1.jpg"
                alt="Construction Worker"
                width={500}
                height={600}
                className="hidden lg:flex md:flex rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
       <Stats/>
    </div>

  );
}

export default About;
