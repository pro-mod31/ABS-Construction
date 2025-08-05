import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaTools, FaDraftingCompass,FaRoad } from 'react-icons/fa';
import { MdDesignServices, MdHomeRepairService } from 'react-icons/md';


const Work = () => {
    const workItems = [
        {
            title: "Building Construction",
            desc: "We specialize in constructing durable, efficient, and high-quality buildings from the ground up.",
            image: "/construction.jpg",
            icon: <FaBuilding className="text-yellow-500" size={30} />,
        },
        {
            title: "House Renovation",
            desc: "Transforming outdated spaces into modern, functional, and beautiful living environments.",
            image: "/Houserenovaction.jpg",
            icon: <MdHomeRepairService className="text-red-500" size={30} />,
        },
        {
            title: "Architecture Design",
            desc: "Innovative and sustainable architectural designs that blend aesthetics with functionality.",
            image: "/archi.jpg",
            icon: <FaDraftingCompass className="text-blue-600" size={30} />,
        },
        {
            title: "Interior Design",
            desc: "Crafting stylish and comfortable interior spaces tailored to your vision and needs.",
            image: "/design.jpg",
            icon: <MdDesignServices className="text-green-500" size={30} />,
        },
        {
            title: "Fixing & Supporting",
            desc: "Reliable structural repair and support services to ensure safety and long-lasting performance.",
            image: "/building.jpg",
            icon: <FaTools className="text-gray-700" size={30} />,
        },
        {
            title: "Highway Construction",
            desc: "Expertise in executing residential, commercial, and industrial construction projects on time and within budget.",
            image: "/highway.webp",
            icon: <FaRoad className="text-black" size={30} />,
        },
    ];



    return (
        <div className="text-center mt-9">
            <h1 className='text-center text-bold  text-2xl '>What We Do</h1>
            <p className='text-center'>We provide end-to-end civil engineering services — from planning and design</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl m-auto hover:cursor-pointer mt-9 mb-9">
                {workItems.map((item, index) => (
                    <div key={index} className="bg-white shadow-2xl  overflow-hidden">
                        <div className="relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                                <div className="bg-white p-3 rounded-full">
                                     {item.icon}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 mt-3">
                            <h3 className="text-lg font-semibold text-center text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2  text-center">{item.desc}</p>
                            <div className="mt-4">
                                <button className="text-blue-600 font-medium hover:underline  hover:cursor-pointer">READ MORE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
