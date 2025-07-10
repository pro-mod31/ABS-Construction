import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        // <div className=' bg-gray shadow-2xl justify-center items-center'>
        //     <div className='flex'>
        //         <div> 
        //              <Image
        //             src="/logo.png"
        //             width={100}
        //             height={30}
        //             alt="logo"
        //         />
        //         </div>


        //         <div className='flex justify-between items-center gap-10'>
        //             <Link href="">Who We Are</Link>
        //             <Link href="">About Us</Link>
        //             <Link href="">Working Culture</Link>
        //             <Link href="">Gallery</Link>
        //             <Link href="">Career</Link>
        //             <Link href="">Connect with us</Link>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-gray-100 shadow-2xl  py-2 fixed w-full">
            <div className="flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <Image src="/logo.png" width={100} height={20} alt="logo" />
                </div>

                {/* Center-ish: Navigation Links */}
                <div className="flex-1 flex justify-center items-center gap-10 text-2xl font-bold">
                    <Link href="">Who We Are</Link>
                    <Link href="">About Us</Link>
                    <Link href="">Working Culture</Link>
                    <Link href="">Gallery</Link>
                    <Link href="">Career</Link>
                    <Link href="">Connect with us</Link>
                </div>
                {/* Right: Empty space (if needed for balance) */}
                <div className="w-[100px]" />

            </div>
        </div>

    );
}

export default Navbar;
