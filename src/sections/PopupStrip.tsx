import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const PopupStrip = () => {
    const [isClosed, setIsClosed] = useState(false);

    if (isClosed) return null;

    return (
        <div className="fixed top-[65px] left-0 w-full text-white py-2 px-4 shadow-lg z-50">
            <div className="flex items-center bg-[#030014] bg-opacity-50 justify-between">
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        <div className="flex items-center space-x-4 shrink-0">
                            <span className="text-lg font-semibold whitespace-nowrap">
                                WIEMPOWER, the flagship event of IEEE IGDTUW, is back! Register Now to be a part of this exciting event...
                            </span>
                            <a
                                href="./wiempower"
                                className="text-purple-400 underline font-semibold whitespace-nowrap"
                            >
                                Register Now
                            </a>
                        </div>
                    </motion.div>
                </div>
                <button
                    onClick={() => setIsClosed(true)}
                    className="text-white hover:text-purple-400 transition-colors duration-700 ml-4 shrink-0"
                >
                    <IoClose size={20} />
                </button>
            </div>
        </div>
    );
};

export default PopupStrip;