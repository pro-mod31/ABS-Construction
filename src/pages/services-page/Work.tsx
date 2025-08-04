import React from 'react';

const Work = () => {
    const work = [
        { title: "building Construction", desc: "this is page of building construction", image:""},
        { title: "House Renovation", desc: "this is page of building construction" },
        { title: "ARCHITECTURE DESIGN", desc: "this is page of building construction" },
        { title: "INTERIOR DESIGN", desc: "this is page of building construction" },
        { title: "FIXING & SUPPORTING", desc: "this is page of building construction" },
        { title: "BUILDING CONSTRUCTION", desc: "this is page of building construction" },


    ]
    return (
        <div className='grid md:grid-cols-3 grid-cols-1'>
             {work.map((item, index) => (
            <div key={index} className=''>
              <div>
                                <p className='text-md font-medium text-gray-600'>{item.title}</p>


                <p className='text-2xl font-bold text-black'>{item.desc}</p>
              </div>
            </div>
          ))}


        </div>
    );
}

export default Work;
