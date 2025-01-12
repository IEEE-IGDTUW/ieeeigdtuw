'use client';

import React from "react";
import { motion } from "framer-motion";
import { Heart, Wallet, Leaf, GraduationCap, Users, PenTool } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Track {
    icon: React.ElementType;
    title: string;
    description: string;
}

const TRACKS_DATA: Track[] = [
    {
        icon: Heart,
        title: "Innovation in Healthcare",
        description:
            "Develop advanced tech solutions to revolutionize patient care, optimize medical systems, and tackle global health challenges.",
    },
    {
        icon: Wallet,
        title: "Fintech",
        description:
            "Create secure and accessible tools to transform payments, financial management, and digital banking experiences.",
    },
    {
        icon: Leaf,
        title: "Sustainable Development Goals",
        description:
            "Innovate eco-friendly technologies to combat climate change, promote clean energy, and drive sustainable growth.",
    },
    {
        icon: GraduationCap,
        title: "Bridging Educational Gaps",
        description:
            "Build inclusive, scalable platforms to make education more accessible, personalized, and impactful globally.",
    },
    {
        icon: Users,
        title: "Open Innovation for Social Good",
        description:
            "Design creative solutions to address critical social issues and improve lives through technology-driven impact.",
    },
];

interface TrackCardProps {
    track: Track;
    index: number;
}

const TrackCard: React.FC<TrackCardProps> = ({ track, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 25,
            }}
            className="bg-gray-900/60 backdrop-blur-lg p-6 rounded-xl border-2 border-gray-700
                 hover:scale-105 hover:shadow-2xl hover:rotate-2 hover:border-purple-400 transition-all duration-500
                 flex flex-col items-center text-center relative overflow-hidden"
        >
            <motion.div
                className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center
                    mb-4 transition-transform duration-300 group-hover:scale-125"
                whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
            >
                <track.icon className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors duration-300" />
            </motion.div>
            <motion.h3
                className="text-xl font-semibold text-gray-200 mb-3 group-hover:text-purple-100 
                    transition-all duration-300"
            >
                {track.title}
            </motion.h3>
            <div className="w-16 h-1 bg-[#d8c2ff] mx-auto mb-4 rounded-full"></div>
            <motion.p
                className="text-gray-300 leading-relaxed group-hover:text-gray-200 
                transition-colors duration-300"
            >
                {track.description}
            </motion.p>
        </motion.div>
    );
};

// Main Theme Component
const Theme: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        stiffness: 120,
                        damping: 30,
                    }}
                    className="mb-16 text-center"
                >
                    <h2
                        className="text-5xl font-extrabold mb-8 
                        bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
                    >
                        Hackathon Tracks
                    </h2>
                    <motion.p
                        className="text-gray-200 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Choose from five accessible and thoughtfully designed tracks, each aimed at sparking creativity, driving innovation, and tackling real-world challenges.
                    </motion.p>
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                    {TRACKS_DATA.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{
                                duration: 1.5,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 120,
                                damping: 25,
                            }}
                        >
                            <TrackCard track={track} index={index} />
                        </motion.div>
                    ))}
                </div>

                {/* Note Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}
                    className="bg-purple-900/20 border border-purple-500/40 p-6 sm:p-8 rounded-xl 
                    text-center flex items-center gap-4"
                >
                    <PenTool className="w-10 h-10 text-red-500 flex-shrink-0" />
                    <p className="text-gray-200 text-base sm:text-lg">
                        <strong>Special Track:</strong> For 2028 batch participants, there will be a separate <strong>UI/UX Track</strong>, where they are only required to submit UI/UX solutions for their chosen problem statements.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Theme;
