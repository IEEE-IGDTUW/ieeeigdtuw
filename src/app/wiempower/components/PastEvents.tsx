import React from 'react';
import { motion } from 'framer-motion';
import { PASTEVENTS } from '@/constants';
import { StaticImageData } from 'next/image';

// Extend StaticImageData to allow PASTEVENTS properties
interface PastEvent extends StaticImageData { }

const PastEvents = () => {
    return (
        <div className="relative overflow-hidden py-20 bg-black" id="past-events">
            {/* Gradient overlays for edges */}
            <div className="absolute inset-y-0 left-0 w-1/3 -ml-10 bg-gradient-to-r from-[#7042f861] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 -mr-10 bg-gradient-to-l from-[#7042f861] to-transparent z-20 pointer-events-none"></div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white mb-8 text-center">
                Glimpse of Our Past WIEmpower
            </h2>

            {/* Sliding Container */}
            <div className="relative overflow-hidden">
                <motion.div
                    animate={{
                        x: [-1920, 0], // Adjust this to match total width of images + gaps
                    }}
                    transition={{
                        duration: 20, // Adjust speed of scrolling
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    className="flex gap-8"
                >
                    {/* First set of images */}
                    {PASTEVENTS.map((image: PastEvent, index) => (
                        <div key={`photo-${index}`} className="relative w-[340px] h-[200px] shrink-0">
                            <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div>
                            <img
                                src={image.src}
                                alt={`Past Event ${index + 1}`}
                                className="object-cover w-full h-full rounded-3xl"
                                loading="lazy"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {PASTEVENTS.map((image: PastEvent, index) => (
                        <div key={`duplicate-${index}`} className="relative w-[340px] h-[200px] shrink-0">
                            <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div>
                            <img
                                src={image.src}
                                alt={`Past Event duplicate ${index + 1}`}
                                className="object-cover w-full h-full rounded-3xl"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PastEvents;
