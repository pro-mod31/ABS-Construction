import React from 'react';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className='h-[calc(100vh-100px)]'>
      <Image
      src="/HomePhoto.jpg"
      alt='homephoto'
      width={500}
      height={200}
      className='w-full h-full object-cover'
      />
      
    </div>
  );
}

export default Homepage;

