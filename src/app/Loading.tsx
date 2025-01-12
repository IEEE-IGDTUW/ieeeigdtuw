'use client';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <div className="relative w-32 h-32 flex items-center justify-center">
                <motion.div
                    className="absolute w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 0.5, 1],
                        translateX: [0, 50, 0],
                        translateY: [0, 50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: -360,
                        scale: [1, 0.5, 1],
                        translateX: [0, -50, 0],
                        translateY: [0, -50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 0.5, 1],
                        translateX: [0, 50, 0],
                        translateY: [0, -50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: -360,
                        scale: [1, 0.5, 1],
                        translateX: [0, -50, 0],
                        translateY: [0, 50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                />
            </div>
        </div>
    );
};

export default Loading;
