import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

import logoImage from '@/assets/logos/white_logo.png';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.div id="contact" className="relative w-full overflow-hidden" data-aos="fade-up" data-aos-offset="200">
            <motion.div className="w-full h-[2px] bg-gradient-to-r from-[#7042f8] to-[#00c6ff] shadow-lg mb-5" data-aos="fade-down" data-aos-duration="1500" />

            <motion.div className="w-full bg-[#03001417] text-gray-300 py-6 backdrop-blur-md shadow-inner shadow-[#2A0E61]/50">
                <motion.div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                        {/* Address Section */}
                        <motion.div className="flex flex-col items-center md:items-start space-y-3" data-aos="fade-right">
                            <Image
                                src={logoImage}
                                alt="IEEE Logo"
                                width={100}
                                height={100}
                                className="mb-2"
                            />
                            <h3 className="font-bold">Get In Touch</h3>
                            <div className="text-center md:text-left">
                                <p className="text-sm">Indira Gandhi Delhi Technical University for Women,</p>
                                <p className="text-sm">New Church Rd, Opp. St James Church,</p>
                                <p className="text-sm">Kashmere Gate, Delhi 110006</p>
                            </div>
                        </motion.div>

                        {/* Links Section */}
                        <motion.div className="flex flex-col items-center space-y-3" data-aos="fade-up">
                            <h3 className="font-bold">Links</h3>
                            <ul className="space-y-2 text-center">
                                <li><a href="./" className="hover:text-[#7042f8] transition-colors">IEEE Home</a></li>
                                <li><a href="https://wiegnite2025.devfolio.co/" className="hover:text-[#7042f8] transition-colors">Registration</a></li>
                                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#7042f8] transition-colors">About</button></li>
                                <li><button onClick={() => scrollToSection('timeline')} className="hover:text-[#7042f8] transition-colors">Timeline</button></li>
                                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#7042f8] transition-colors">Contact</button></li>
                            </ul>
                        </motion.div>

                        {/* Contact Section */}
                        <motion.div className="flex flex-col items-center md:items-start space-y-3" data-aos="fade-left">
                            <h3 className="font-bold">Follow Us On:</h3>
                            <div className="flex justify-center space-x-4">
                                <a href="https://www.instagram.com/ieeeigdtuw/" target="_blank" className="text-white hover:text-[#e4405f] transition-colors" rel="noopener noreferrer">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://x.com/ieeeigdtuw" target="_blank" className="text-white hover:text-[#1da1f2] transition-colors" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="currentColor">
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/ieee-igdtuw/" target="_blank" className="text-white hover:text-[#0077b5] transition-colors" rel="noopener noreferrer">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                            <div className="text-center md:text-left space-y-1">
                                <p className="font-medium">For more information, contact:</p>
                                <p className="text-sm">• Sakshi Sahu: +91 7217797045</p>
                                <p className="text-sm">• Adhishree: +91 9149368190</p>
                                <p className="text-sm">Email: <a href="mailto:igdtuieee@gmail.com" className="underline">igdtuieee@gmail.com</a></p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div className="mt-8 text-center text-sm">
                        <p>Developed by IEEE IGDTUW Web Admin team</p>
                        <p>&copy; IEEE IGDTUW 2024 | All rights reserved.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Footer;