'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="md:sticky fixed top-0 w-full z-50 bg-[var(--primary-color)] md:bg-white shadow-2xl">
            <div className="relative flex items-center justify-between md:px-10">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Image src="/logo.png" width={100} height={30} alt="logo" />
                </div>


                {/* Center: Desktop Nav */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 bg-[var(--secondary-color)] p-2 rounded-[11px]">
                    <Link href="/" className="Navbar_link relative">HOME</Link>
                    <Link href="/about" className="Navbar_link relative">ABOUT</Link>
                    <Link href="/services-page" className="Navbar_link relative">SERVICES</Link>
                    <Link href="/gallery" className="Navbar_link relative">CAREER</Link>
                    <Link href="/contact" className="Navbar_link relative">CONTACT</Link>
                </div>

                {/* Right: Hamburger (mobile only) */}
                <div className="md:hidden m-6">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Right: Desktop-only Dashboard Button */}
                <div className="hidden md:block ml-auto">
                    <button className="bg-[var(--primary-color)] text-white px-4 py-1 rounded-xl">
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Slide Down Animation */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="absoulte flex flex-col items-center gap-4 py-4 font-semibold text-lg text-white">
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                    <Link href="/about" onClick={toggleMenu}>About</Link>
                    <Link href="/services-page" onClick={toggleMenu}>Services</Link>
                    <Link href="/gallery" onClick={toggleMenu}>Gallery</Link>
                    <Link href="/contact" onClick={toggleMenu}>Connect Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
