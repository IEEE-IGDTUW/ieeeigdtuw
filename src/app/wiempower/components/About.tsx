import React from 'react';
import { useInView } from 'react-intersection-observer';
import Wieimage from '@/assets/collegePic/TeamPic.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-purple-900/20 p-8 sm:p-16"
      ref={ref}
    >
      <div
        className="max-w-[90rem] w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-24
        backdrop-blur-sm bg-black/30 p-6 sm:p-8 lg:p-12 rounded-3xl 
        border border-pink-500/20 shadow-[0_0_80px_-12px_rgba(236,72,153,0.25)]"
      >
        {/* Left Section - Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-left mb-4 
            bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            About WIEMPOWER
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <motion.p
              className="text-white text-opacity-90 text-sm sm:text-base lg:text-lg font-light 
              leading-relaxed tracking-wide p-4 sm:p-6 
              bg-gradient-to-r from-pink-500/10 to-purple-500/10 
              rounded-lg shadow-lg transform hover:translate-y-[-2px] 
              transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              WIEmpower 6.0 is the flagship event organized by IEEE IGDTUW. This event serves as a
              premier platform for innovation, leadership, and growth. With a series of workshops,
              competitions, and talks, WIEmpower brings together individuals from diverse fields,
              encouraging collaboration, skill enhancement, and the exchange of groundbreaking
              ideas. As IEEE IGDTUW's flagship event, it aims to provide a space for all
              participants to explore new opportunities in STEM and create lasting connections
              that drive future success.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 overflow-hidden rounded-xl 
          shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <img
            src={Wieimage.src}
            alt="WIEmpower 5.0"
            className="w-full h-auto object-cover rounded-xl 
              animate-fadeIn transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
