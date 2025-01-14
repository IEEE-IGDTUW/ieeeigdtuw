'use client';
import React from 'react';
import Image from 'next/image';
import { PASTEVENTS } from '@/constants';
import { motion } from 'framer-motion';

const PhotoSlider = () => {
    const imageWidth = 340;
    const gap = 32;
    const totalWidth = (imageWidth + gap) * PASTEVENTS.length;

    return (
        <section className="py-20 md:py-24">
            <div className="relative container mx-auto">
                <div className="flex flex-1 overflow-hidden rounded-3xl relative">
                    <div className="absolute inset-y-0 left-0 w-1/3 -ml-10 bg-gradient-to-r from-[#7042f861] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-1/3 -mr-10 bg-gradient-to-l from-[#7042f861] to-transparent z-20 pointer-events-none"></div>
                    <motion.div
                        animate={{
                            x: [0, -totalWidth],
                        }}
                        transition={{
                            duration: PASTEVENTS.length * 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-8"
                    >
                        {[...PASTEVENTS, ...PASTEVENTS].map((image, index) => (
                            <div key={index} className="relative w-[340px] h-[200px] shrink-0">
                                <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div>
                                <Image
                                    src={image.src}
                                    alt={`Past Event ${index + 1}`}
                                    fill
                                    className="object-cover rounded-3xl"
                                    priority={index < 2}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSlider;
