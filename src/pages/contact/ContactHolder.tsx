import React from 'react';
import Image from 'next/image';

const ContactHolder = () => {
    return (
        <div className="grid md:grid-cols-[60%_38%] grid-cols-1 gap-6 mb-3 items-stretch">

            <div className="relative h-64 md:h-full order-1 md:order-2">
                <Image
                    src="/map.jpg"
                    alt="map of image"
                    fill
                    className="object-cover "
                />
            </div>


            <div className="bg-white shadow-2xl p-6 order-2 md:order-1">
                <form className="space-y-9 h-full">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-yellow-700"
                    />
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell about the inquiry"
                            className="shadow appearance-none border rounded w-full h-[150px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-yellow-700"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded shadow"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ContactHolder;
