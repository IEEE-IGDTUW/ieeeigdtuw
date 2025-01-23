import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { JUDGES } from '@/constants';

// Function to format the judge's name
const formatName = (name: string) => {
    const parts = name.split(' ');
    return parts
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
};
// comment
const Judges = () => {
    return (
        <div id="judges" className="max-w-5xl mx-auto p-4 sm:p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Judges</h2>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {JUDGES.map((judge, index) => (
                    <div
                        key={index}
                        className={`relative w-full max-w-md rounded-lg overflow-hidden shadow-lg 
                            bg-gradient-to-b from-transparent to-gray-900/90 flex flex-col items-center py-8 
                            mx-auto`}
                        style={{
                            minHeight: '450px', // Ensures consistent height for all cards
                        }}
                    >
                        {/* Image section */}
                        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <div className="w-full h-full relative">
                                <Image
                                    src={judge.image}
                                    alt={judge.name}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                    className="absolute inset-0"
                                    sizes="(max-width: 640px) 160px, 208px"
                                    priority={index < 2}
                                />
                            </div>
                        </div>

                        {/* Name Section */}
                        <h3 className="text-xl font-bold text-white mt-6 mb-4 text-center">
                            {formatName(judge.name)}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-center px-4 sm:px-8 leading-relaxed">
                            {judge.description}
                        </p>

                        {/* LinkedIn Icon */}
                        {judge.linkedin && (
                            <a
                                href={judge.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4"
                            >
                                <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-400" />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Judges;
