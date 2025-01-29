'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { WIEEVENTS } from "src/constants/index";
import Image, { StaticImageData } from 'next/image';

interface EventCardProps {
    eventBanner?: string | StaticImageData;
    date: string;
    title: string;
    description: string;
    time: string;
    venue: string;
    registerLink?: string;
}

const EventCard: React.FC<EventCardProps> = ({
    eventBanner,
    date,
    title,
    description,
    time,
    venue,
    registerLink
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col items-stretch bg-black/70 backdrop-blur-lg 
            rounded-xl border-2 border-purple-900/50 hover:border-purple-600 
            transition-all duration-500 mb-8 overflow-hidden shadow-2xl"
        >
            {eventBanner && (
                <div className="w-full relative overflow-hidden">
                    <div className="w-full h-auto">
                        <Image
                            src={eventBanner}
                            alt={title}
                            layout="intrinsic"
                            objectFit="contain"
                            width={1200}
                            height={400}
                            className="w-full h-auto object-contain rounded-t-lg"
                        />
                    </div>
                </div>
            )}

            <div className="w-full p-6 flex flex-col justify-between space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-purple-300 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)] mb-4">
                        {title}
                    </h3>

                    <div className="space-y-2 text-gray-300 mb-4">
                        {[{ Icon: FaCalendarAlt, text: date }, { Icon: FaClock, text: time }, { Icon: FaMapMarkerAlt, text: venue }].map(({ Icon, text }, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <Icon className="text-purple-400 drop-shadow-[0_0_3px_rgba(168,85,247,0.5)]" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-200 leading-relaxed mb-4">{description}</p>
                </div>

                {registerLink && (
                    <motion.a
                        href={registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-start inline-block bg-purple-600 text-white 
                        px-6 py-2 rounded-full hover:bg-purple-700 
                        transition-colors duration-300 
                        shadow-lg hover:shadow-purple-500/50 
                        drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]"
                    >
                        Register Now
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

const Events: React.FC = () => {
    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-extrabold mb-12 text-center
                    bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent
                    drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                >
                    Upcoming IEEE Events
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {WIEEVENTS.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 bg-purple-900/20 border border-purple-500/40 p-6 rounded-xl text-center"
                >
                    <p className="text-gray-200 text-lg">
                        <strong>Important Note:</strong> Prior registration is <strong>compulsory</strong> to attend these events.
                        Please ensure you register well in advance.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Events;
