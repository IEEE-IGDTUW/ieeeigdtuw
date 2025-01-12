'use client';
import React from 'react';
import Image from 'next/image';
import photo1 from "@/assets/sliderPhotos/random_1.jpg";
import photo2 from "@/assets/sliderPhotos/random_2.jpg";
import photo3 from "@/assets/sliderPhotos/random_3.jpg";
import photo4 from "@/assets/sliderPhotos/random_4.png";
import photo5 from "@/assets/sliderPhotos/random_5.jpg";
import photo6 from "@/assets/sliderPhotos/random_6.jpg";
import { motion } from 'framer-motion';

const PhotoSlider = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

    return (
        <section className="py-20 md:py-24">
            <div className="relative container">
                <div className="flex flex-1 overflow-hidden rounded-3xl relative">
                    {/* Gradient overlays */}
                    <div className="absolute inset-y-0 left-0 w-1/3 -ml-10 bg-gradient-to-r from-[#7042f861] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-1/3 -mr-10 bg-gradient-to-l from-[#7042f861] to-transparent z-20 pointer-events-none"></div>

                    {/* Single sliding container */}
                    <motion.div
                        animate={{
                            x: [0, -1920], // Adjusted to match total width of images + gaps
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-8"
                    >
                        {/* First set of images */}
                        {photos.map((photo, index) => (
                            <div key={`photo-${index}`} className="relative w-[340px] h-[200px] shrink-0">
                                <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div>
                                <Image
                                    src={photo}
                                    alt={`Slider image ${index + 1}`}
                                    fill
                                    className="object-cover rounded-3xl"
                                    priority={index < 2}
                                />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {photos.map((photo, index) => (
                            <div key={`duplicate-${index}`} className="relative w-[340px] h-[200px] shrink-0">
                                <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div>
                                <Image
                                    src={photo}
                                    alt={`Slider image duplicate ${index + 1}`}
                                    fill
                                    className="object-cover rounded-3xl"
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
