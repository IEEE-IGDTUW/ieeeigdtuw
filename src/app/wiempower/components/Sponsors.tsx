'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { SPONSERS } from '@/constants';
import { motion, useInView } from 'framer-motion';

const Sponsors = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view

    return (
        <div
            id="sponsors"
            className="max-w-5xl mx-auto p-8 rounded-lg bg-transparent"
            ref={ref}
        >
            {/* Section Heading */}
            <h2
                className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-800 via-purple-300 to-purple-500 bg-clip-text text-transparent"
            >
                Our Sponsors
            </h2>



            {/* Sponsors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {SPONSERS.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full h-80 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }} // Initial animation state
                        animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
                        transition={{ duration: 0.5, delay: index * 0.2 }} // Add delay for staggered effect
                    >
                        {/* Circular Sponsor Image */}
                        <div className="relative w-40 h-40 mx-auto mt-6 rounded-full overflow-hidden border-2 border-white shadow-lg flex items-center justify-center">
                            <Image
                                src={sponsor.sponserImage}
                                alt={sponsor.sponserName}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>

                        {/* Sponsor Name */}
                        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center text-center">
                            <h2 className="text-2xl font-bold text-white">
                                {sponsor.sponserName}
                            </h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;

