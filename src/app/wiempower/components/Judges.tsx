import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { JUDGES } from '@/constants';

const formatName = (name: string) => {
    const parts = name.split(' ');
    return parts
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
};

const Judges = () => {
    return (
        <div id="judges" className="max-w-7xl mx-auto p-4 sm:p-8">
            <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-800 via-purple-300 to-purple-500 bg-clip-text text-transparent py-2">Our Judges</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                {JUDGES.map((judge, index) => (
                    <div
                        key={index}
                        className="relative w-full rounded-lg overflow-hidden shadow-lg 
                            bg-gradient-to-b from-transparent to-gray-900/90 flex flex-col items-center py-8 
                            mx-auto"
                        style={{
                            minHeight: '450px',
                        }}
                    >
                        <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
                                    sizes="(max-width: 640px) 160px, 176px"
                                    priority={index < 2}
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mt-6 mb-4 text-center">
                            {formatName(judge.name)}
                        </h3>

                        <p className="text-gray-300 text-center px-4 leading-relaxed">
                            {judge.description}
                        </p>

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