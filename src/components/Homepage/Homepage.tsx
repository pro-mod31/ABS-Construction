import React from 'react';
import Image from 'next/image';
import About from './About';
import Project from './Project';

const Homepage = () => {
  return (
    <>
    <div className="relative h-[calc(100vh-102px)] w-full">
      {/* Background Image */}
      <Image
        src="/HomePhoto.jpg"
        alt="homephoto"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 top-30">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-[50%] md:max-w-[50%]">
          Welcome to <span>AbsConstruction</span>
        </h1>
        <div className="mt-3 h-1 w-30 md:w-70 md:h-1.5 md:mt-2 bg-yellow-400  mx-auto"></div>
        <p className='text-white w-[90%] md:w-[30%] text-center text-xl mt-9'>We don’t just build structures—we shape communities and create lasting legacies. Every brick laid is a step toward a stronger, better tomorrow.</p>

        <button
          className='border-4 border-yellow-500 rounded-xl px-5 py-2 text-white mt-8 hover:bg-yellow-300 cursor-pointer hover:text-black'>Get Started</button>
      </div>
    </div>
    <About />
    <Project/>
    </>

  );
};

export default Homepage;
