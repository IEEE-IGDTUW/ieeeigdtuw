'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { SPEAKERS } from 'src/constants/index';

const SpeakerSection = () => {
    return (
        <section className="py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 text-white">
                    Our Speakers
                </h2>

                {/* Uncomment the following section to display speaker profiles */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {SPEAKERS.map((speaker, index) => (
                        <div
                            key={index}
                            className="flex p-6 rounded-lg bg-transparent border border-gray-500 cursor-auto relative"
                        >
                            <div className="w-1/3 relative rounded-lg overflow-hidden">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    width={300}
                                    height={300}
                                    objectFit="cover"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                            <div className="ml-6 w-2/3">
                                <h3 className="text-2xl font-semibold mb-2 text-white flex items-center">
                                    {speaker.name}
                                    {speaker.socials.linkedin && (
                                        <a
                                            href={speaker.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-blue-600 hover:text-blue-400 transition-colors duration-300"
                                        >
                                            <FaLinkedin className="inline text-2xl" />
                                        </a>
                                    )}
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
                </div> */}

                {/* To be announced message */}
                <p className="text-lg text-gray-500 mt-4 text-center">
                    To be announced soon....
                </p>
            </div>
        </section>
    );
};

export default SpeakerSection;
