import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import logoImage from '@/assets/logos/white_logo.png';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,    
        });
    }, []);

    return (
        <div id="contact-us" className="relative" data-aos="fade-up" data-aos-offset="200">
            <div className="w-full h-[2px] bg-gradient-to-r from-[#7042f8] to-[#00c6ff] shadow-lg mb-5" data-aos="fade-down" data-aos-duration="1500"></div>

            <div className="w-full bg-[#03001417] text-gray-300 py-6 backdrop-blur-md shadow-inner shadow-[#2A0E61]/50">
                <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    
                    {/* Get In Touch */}
                    <div className="mb-8 md:mb-0" data-aos="fade-right">
                        <Image
                            src={logoImage} 
                            alt="IEEE Logo"
                            width={120}
                            height={120}
                            className="mb-4 mx-auto md:mx-0"
                        />
                        <h3 className="font-bold mb-2">Get In Touch</h3>
                        <p className="mb-2">Indira Gandhi Delhi Technical University for Women, New Church Rd, Opp. St James Church, Kashmere Gate, Delhi 110006</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-8 md:mb-0" data-aos="fade-up">
                        <h3 className="font-bold mb-2">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-[#7042f8] transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-[#7042f8] transition-colors">Events</a></li>
                            <li><a href="#team" className="hover:text-[#7042f8] transition-colors">Team</a></li>
                        </ul>
                    </div>

                    {/* Follow Us and Contact Information */}
                    <div className="mb-8 md:mb-0" data-aos="fade-left">
                        <h3 className="font-bold mb-2">Follow Us On:</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a href="https://www.instagram.com/ieeeigdtuw/" target="_blank" className="text-white hover:text-[#e4405f] transition-colors" rel="noopener noreferrer">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://x.com/ieeeigdtuw" target="_blank" className="text-white hover:text-[#1da1f2] transition-colors" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/ieee-igdtuw/" target="_blank" className="text-white hover:text-[#0077b5] transition-colors" rel="noopener noreferrer">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                        <div className="mt-4">
                            <p>For more information, contact:</p>
                            <p>• Sakshi Sahu: +91 7217797045</p>
                            <p className="mb-4">• Adhishree: +91 9149368190</p>
                            <p>Email: <a href="mailto:igdtuieee@gmail.com" className="underline">igdtuieee@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div style={{ textAlign: 'center' }}>
                    <p>This website is developed with <span style={{ color: '#7042f8' }}>❤️</span> by IEEE Web Admin. Team</p>
                    <p> &copy; IEEE IGDTUW 2024 | All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
