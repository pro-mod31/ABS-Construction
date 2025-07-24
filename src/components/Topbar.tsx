import React from 'react';
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


const Topbar = () => {
  return (
    <div className='hidden md:flex bg-[var(--primary-color)] p-1'>
      <div className='flex p-1 ml-15 gap-6  '>
        <div className='flex text-white items-center gap-3'><MdOutlinePhone className='text-yellow-300' />
          +977 9840768966</div>
        <div className='flex text-white items-center gap-3'>
          <MdEmail className='text-yellow-300'  /> pramodghimire43564@gmail.com
        </div>
        <div className='flex text-white items-center gap-3'>
          <FaRegClock className='text-yellow-300'  /> Sun-fri 9:00 AM - 6:00 PM
        </div>
      </div>

    </div>
  );
}

export default Topbar;
