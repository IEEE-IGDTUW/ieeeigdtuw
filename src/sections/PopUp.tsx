'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Rocket } from 'lucide-react'; // Import Rocket icon for dynamic visuals
import Link from 'next/link';

interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-[90%] max-w-lg bg-gradient-to-br from-[#332946] via-black to-[#17042e] p-8 rounded-xl border-2 border-[#D1B7F5] shadow-xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white hover:text-red-400 transition-colors"
                >
                    <X size={30} />
                </button>

                {/* Content */}
                <div className="text-center space-y-6 pt-4">
                    {/* Title with gradient text */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            WIEMPOWER 6.0
                        </h2>
                        <p className="text-xl text-white font-semibold py-3">
                            The flagship hackathon of IEEE IGDTUW is back...
                        </p>
                    </div>

                    {/* Centered Register Button with Rocket Icon */}
                    <div className="flex justify-center">
                        <Link href="./wiempower">
                            <motion.button
                                className="relative flex items-center justify-center px-5 py-2 text-white text-lg font-medium rounded-lg border-2 border-[#ebddff] bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                                initial={{ opacity: 0, y: -50 }} // Start from above the button
                                animate={{ opacity: 1, y: 0 }}  // Fly down into place
                                transition={{ duration: 1, type: 'spring', stiffness: 50 }} // Smooth flying effect
                            >
                                <Rocket className="mr-2" size={20} /> {/* Rocket Icon */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="relative z-10"
                                >
                                    REGISTER NOW
                                </motion.span>
                            </motion.button>
                        </Link>
                    </div>

                    {/* Additional Text */}
                    <p className="text-md text-pink-200">
                        Don’t miss out on this opportunity to be a part of something big!
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PopUp;
