import React from 'react';
import { FaUsers, FaSmile, FaSpinner, FaPeopleCarry } from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    { title: 'Projects Completed', value: '150+', icon: <FaSpinner size={40} className='text-yellow-500' /> },
    { title: 'Happy Clients', value: '120+', icon: <FaSmile size={40} className='text-green-500' /> },
    { title: 'Ongoing Projects', value: '10', icon: <FaPeopleCarry size={40} className='text-blue-500' /> },
    { title: 'Team Members', value: '25+', icon: <FaUsers size={40} className='text-purple-500' /> },
  ];

  return (
    <div>
      <div className='bg-gradient-to-r from-white/10 via-black/10 to-white/5 h-auto md:mt-30 mt-10 p-9'>
        <h2 className='font-bold text-2xl text-center'>Stats</h2>
        <p className='text-center mb-10'>
          Our impact, measured in milestones — explore the stats behind our success
        </p>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>
          {statsData.map((item, index) => (
            <div key={index} className='flex items-center bg-white shadow-2xl rounded-lg p-5 space-x-6 w-[90%] mx-auto'>
              {/* Icon/Image on Left */}
              <div>{item.icon}</div>

              {/* Value and Title on Right */}
              <div>
                <p className='text-2xl font-bold text-black'>{item.value}</p>
                <p className='text-md font-medium text-gray-600'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
