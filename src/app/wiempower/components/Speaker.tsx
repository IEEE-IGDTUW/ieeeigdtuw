'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SPEAKERS } from 'src/constants/index';

const SpeakerSection = () => {
    return (
        <section className="py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-5xl font-bold mb-8 text-white">
                    Our Speakers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {SPEAKERS.map((speaker, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row p-6 rounded-lg bg-transparent border border-gray-500 cursor-auto relative"
                        >
                            <div className="w-full md:w-2/5 relative mb-4 md:mb-0">
                                <div className="w-full pt-[100%] relative">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="absolute inset-0 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 md:ml-6">
                                <h3 className="text-2xl font-semibold mb-2 text-white flex items-center">
                                    {speaker.name}
                                    <div className="ml-2 flex space-x-2">
                                        {speaker.socials.linkedin && (
                                            <a
                                                href={speaker.socials.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
                                            >
                                                <FaLinkedin className="text-2xl" />
                                            </a>
                                        )}
                                        {speaker.socials.Instagram && (
                                            <a
                                                href={speaker.socials.Instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-pink-600 hover:text-pink-400 transition-colors duration-300"
                                            >
                                                <FaInstagram className="text-2xl" />
                                            </a>
                                        )}
                                        {speaker.socials.twitter && (
                                            <a
                                                href={speaker.socials.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-gray-300 transition-colors duration-300"
                                            >
                                                <FaXTwitter className="text-2xl" />
                                            </a>
                                        )}
                                    </div>
                                </h3>
                                <h4 className="text-sm font-medium mb-4 text-gray-300">
                                    {speaker.designation}
                                </h4>
                                <p className="text-gray-300 mb-4">
                                    {speaker.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpeakerSection;