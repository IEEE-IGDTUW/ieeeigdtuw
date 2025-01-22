import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { JUDGES } from '@/constants';

const formatName = (name: string) => {
    const parts = name.split(' ');
    return parts.map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
};

const Judges = () => {
    return (
        <div id="judges" className="max-w-5xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Judges</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                {JUDGES.map((judge, index) => (
                    <div
                        key={index}
                        className="relative w-full max-w-md h-[500px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-transparent to-gray-900/90 flex flex-col items-center"
                    >
                        <div className="w-52 h-52 mt-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src={judge.image}
                                alt={judge.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-white mt-6 mb-4">
                            {formatName(judge.name)}
                        </h3>

                        <p className="text-gray-300 text-center px-8 leading-relaxed">
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