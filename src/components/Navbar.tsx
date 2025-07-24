'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="sticky bg-[var(--primary-color)] md:bg-white shadow-2xl  w-full z-50 ">
            <div className="relative flex items-center justify-between  md:px-10">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Image src="/logo.png" width={100} height={30} alt="logo" />
                </div>
                {/* Center: Desktop Nav */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8  bg-[var(--secondary-color)] p-2 rounded-[11px] ">
                    <Link href="/"className='Navbar_link relative'>HOME</Link>
                    <Link href="/about" className='Navbar_link relative'>ABOUT</Link>
                    <Link href="/culture" className='Navbar_link relative'>SERVICES</Link>
                    <Link href="/gallery" className='Navbar_link relative'>CAREER</Link>
                    <Link href="/contact" className='Navbar_link relative'>CONTACT</Link>
                </div>

                {/* Right: Hamburger (mobile only) */}
                <div className="md:hidden mr-6 ">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />
}
                    </button>
                </div>

                {/*Right: Desktop-only Dashboard Button */}
                <div className="hidden md:block ml-auto">
                    <button className="bg-[var(--primary-color)] text-white px-4 py-1 rounded-xl">
                    Get a Quote
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col items-center gap-4 py-4 md:hidden font-semibold text-lg bg-gray-100 ">
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                    <Link href="/about" onClick={toggleMenu}>About Us</Link>
                    <Link href="/culture" onClick={toggleMenu}>Working Culture</Link>
                    <Link href="/gallery" onClick={toggleMenu}>Gallery</Link>
                    <Link href="/contact" onClick={toggleMenu}>Connect Us</Link>
                </div>
            )}
        
        </div>
    );
};

export default Navbar;
