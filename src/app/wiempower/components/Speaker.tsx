'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
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
                            className="flex p-6 rounded-lg bg-transparent border border-gray-500 cursor-auto relative"
                        >
                            <div className="w-1/3 relative">
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
                            <div className="ml-6 w-2/3">
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
                                                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                            >
                                                <FaTwitter className="text-2xl" />
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
                            <div className="absolute inset-0 rounded-lg pointer-events-none" />
                        </div>
                    ))}
                </div>

                <p className="text-lg text-gray-500 mt-4 text-center">
                    More Speakers to be announced soon....
                </p>
            </div>
        </section>
    );
};

export default SpeakerSection;