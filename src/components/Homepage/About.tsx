import React from 'react';
import { CheckLine } from 'lucide-react';
import Image from 'next/image';


const About = () => {
    return (
        <div className='min-auto-screen container mx-auto px-5 py-10 mt-7 rounded-2xl'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                <div className='space-y-8 '>
                    <h2 className=''>What we do</h2>
                    <h2 className='text-4xl font-bold'>WE ARE <span className='text-yellow-300'>THE LEADER</span> IN CONSTRUCTION INDUSTRY</h2>
                    <p className='text-2xl'>We bring decades of experience, innovation, and excellence to every project we take on. As industry leaders, we are committed to delivering structures that are strong, sustainable, and built to last.</p>
                    <div className='grid grid-cols-2 '>
                        <div className='space-y-8'>
                            <h2 className='flex gap-2'> <CheckLine className='text-yellow-300' />Smart Project Planning</h2>
                            <h2 className='flex gap-2 '> <CheckLine className='text-yellow-300' />On-Time Delivery</h2>
                            <h2 className='flex gap-2 '> <CheckLine className='text-yellow-300' />High-Quality Materials</h2>
                        </div>
                        <div className='space-y-8'>
                            <h2 className='flex gap-2'> <CheckLine className='text-yellow-300' /> Skilled & Certified Workforce</h2>
                            <h2 className='flex gap-2'> <CheckLine className='text-yellow-300' />Cost-Efficient Execution</h2>
                            <h2 className='flex gap-2 '> <CheckLine className='text-yellow-300' />Safe & Sustainable Practices</h2>
                        </div>
                    </div>
                    <h2 >From residential buildings to large-scale infrastructure, we deliver every project with precision, passion, and professionalism. Our mission is to build not just structures, but trust and long-term value for our clients.</h2>
                    <div>

                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-[700px] h-[450px]">
                        {/* Background block */}
                        <div className="absolute top-6 left-10 md:w-full md:h-full bg-gray-200 rounded-md z-0 "></div>

                        {/* Image */}
                        <div className="relative md:z-10 md:top-35">
                            <Image
                                src="/image1.jpg"
                                alt="Construction Worker"
                                width={650}
                                height={600}
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default About;
