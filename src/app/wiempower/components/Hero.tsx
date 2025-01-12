'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/HeroPagePic/bg.jpg";

const styles = `
  .hero-title {
    background: linear-gradient(to right, #60a5fa, #7c3aed, #f472b6, #2563eb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
    user-select: none;
  }

  .dot-pattern {
    background-image: radial-gradient(
      circle at 1px 1px,
      rgba(255, 255, 255, 0.3) 1px,
      transparent 0
    );
    background-size: 24px 24px;
    animation: moveDots 15s linear infinite;
    opacity: 0;
    animation: fadeInDots 2.5s ease forwards, moveDots 15s linear infinite;
  }

  @keyframes fadeInDots {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes moveDots {
    0% { 
      background-position: 0 0;
      opacity: 0.3;
    }
    50% { opacity: 0.7; }
    100% { 
      background-position: 24px 24px;
      opacity: 0.3;
    }
  }

  .magical-button {
    background: linear-gradient(120deg, #0f172a, #1a237e, #1e1b4b, #064e3b);
    background-size: 200% 100%;
    transition: all 0.5s ease;
    border: 2px solid transparent;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .magical-button::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(120deg, #60a5fa, #8b5cf6, #4c1d95, #047857);
    background-size: 200% 100%;
    z-index: -1;
    animation: shimmer 3s linear infinite;
    transition: all 0.5s ease;
    opacity: 0.7;
  }

  .magical-button::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: linear-gradient(120deg, 
      #0f172a,    /* Dark slate */
      #1e1b4b,    /* Dark purple */
      #172554,    /* Dark blue */
      #064e3b     /* Dark green */
    );
    background-size: 200% 100%;
    z-index: -1;
    transition: all 0.5s ease;
  }

  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .magical-button:hover::before {
    opacity: 1;
    animation: shimmer 2s linear infinite;
  }

  .magical-button:hover::after {
    background: linear-gradient(120deg, 
      #0f172a,    /* Dark slate */
      #1e1b4b,    /* Dark purple */
      #1e3a8a,    /* Navy blue */
      #064e3b     /* Dark green */
    );
  }

  .magical-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -4px rgba(139, 92, 246, 0.4);
  }

  .unselectable {
    user-select: none;
  }

  @media (max-width: 640px) {
    .hero-title {
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
    }
  }
`;

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <style>{styles}</style>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 dot-pattern" />
      </div>

      {/* Content */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full pt-24 pb-12">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="space-y-8 md:space-y-12 w-full max-w-6xl"
            >
              {/* Main Title */}
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.5 }}
                className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-transparent 
                         drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]"
              >
                WIEMPOWER
              </motion.h1>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-6 md:space-y-8"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] flex flex-wrap justify-center items-center gap-2 md:gap-3">
                  <span className="text-blue-400">INSPIRE</span>
                  <span className="text-white">•</span>
                  <span className="text-violet-400">CREATE</span>
                  <span className="text-white">•</span>
                  <span className="text-indigo-400">INNOVATE</span>
                </p>

                {/* Register Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="magical-button px-8 md:px-12 py-3 md:py-4
                           text-white text-lg md:text-xl font-bold rounded-lg
                           shadow-lg transition-all duration-500"
                >
                  REGISTER NOW
                </motion.button>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="space-y-6 md:space-y-8 mt-6 md:mt-8"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 max-w-4xl mx-auto
                               border border-white/10 shadow-lg"
                  >
                    <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                      <span className="font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        WIEMPOWER
                      </span> – Where Ideas Ignite and Innovation Thrives. A platform
                      that empowers women to address real-life challenges head-on and
                      showcase their creativity and ingenuity.
                    </p>
                  </div>

                  {/* Organization Names */}
                  <p className="text-gray-300 text-sm md:text-lg font-light tracking-wide max-w-4xl mx-auto px-4">
                    Institute of Electrical and Electronics Engineers,
                    Indira Gandhi Delhi Technical University for Women
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}