import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='relative '>
            <Image
                src="/FooterImage.jpg"
                alt='this is a footer image'
                width={100}
                height={200}
                className='w-full md:h-[474px] h-[1100px]'
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,6,8,0.4)] via-[rgba(4,5,7,0.5)] to-[rgba(9,11,16,0.4)]"></div>
            <div className="absolute inset-0 max-w-7xl mx-auto top-20">
                <div className='grid sm:grid-cols-1 md:grid-cols-3  p-3 gap-9'>
                    <div className='space-y-3'>
                        <div className='flex flex-col'>
                            <div className='font-bold  text-white md:text-2xl '>
                                AbsConstruction <span className='text-yellow-300'>...</span>
                            </div>
                            <div className='mt-3 text-white md:text-sm'>
                                <h2>A108 Adam Street New York</h2>
                                <h2>NY 535022</h2>
                            </div>
                            <div className='mt-3 text-white'>
                                <h2>Phone: +1 5589 55488 55</h2>
                                <h2>Email: info@example.com</h2>
                            </div>
                            <div className='text-white flex mt-6 gap-6 md:text-2xl'>
                                <a href="https://www.facebook.com/pramod.ghimire.1690">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com/pramod_067/">
                                    <FaInstagram />
                                </a>
                                <a href="https://x.com/">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            <div className='flex flex-col'>
                                <h2 className='text-white font-bold'>Useful Link</h2>
                                <div className='text-white md:font-bold flex flex-col mt-7'>
                                    <Link href="/" className='hover:text-red-400'>Home</Link>
                                    <Link href="/about" className='hover:text-red-400'>About</Link>
                                    <Link href="/culture" className='hover:text-red-400'>Services</Link>
                                    <Link href="/gallery" className='hover:text-red-400'>Career</Link>
                                    <Link href="/contact" className='hover:text-red-400'>Contact</Link>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-white md:font-bold mt-6 md:mt-0'>Our Services</h2>
                                <div className='text-white mt-6 space-y-2 md:font-bold'>
                                    <p>Building Construction</p>
                                    <p>Highway Construction</p>
                                    <p>Structural Design</p>
                                    <p>Building Renovation</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className="w-full h-[250px] rounded overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1763.522174307904!2d83.54835718377223!3d27.869907998183027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2snp!4v1753720631403!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='bg-gradient-to-r from-[rgba(22,26,38,0.4)] via-[rgba(22,26,38,0.5)] to-[rgba(22,26,38,0.4)]'
                            >
                            </iframe>

                        </div>


                    </div>
                </div>
                <div className="mt-3 h-0.5 w-full   md:mt-2 bg-white  mx-auto"></div>
                <div className='text-white font-bold text-center mt-2'>
                    © Copyright AbsConstruction All Rights Reserved
                </div>

            </div>
        </div>
    );
}

export default Footer;
