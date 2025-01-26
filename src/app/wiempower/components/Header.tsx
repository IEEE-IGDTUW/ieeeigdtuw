'use client';

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope, FaTimes, FaDiscord } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Events, scrollSpy, scroller } from "react-scroll";
import Image from "next/image";

const iconSize = 24;

const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const emailTo = "igdtuieee@gmail.com";
    const ccEmail = "igdtuieee@gmail.com";
    const subject = encodeURIComponent("Contact from Website");
    const body = encodeURIComponent("Hello IEEE IGDTUW Team,");

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;

    const newWindow = window.open(gmailLink, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert("It seems like the pop-up was blocked. Please allow pop-ups for this site.");
    }
};


const Socials = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={iconSize} color="#ffffff" />,
        link: "https://www.linkedin.com/company/ieee-igdtuw/",
        hoverColor: "#0077b5"
    },
    {
        name: "X",
        icon: <SiX size={iconSize} color="#ffffff" />,
        link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
        hoverColor: "#1DA1F2"
    },
    {
        name: "Instagram",
        icon: <FaInstagram size={iconSize} color="#ffffff" />,
        link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D",
        hoverColor: "#E1306C"
    },
    {
        name: "Discord",
        icon: <FaDiscord size={iconSize} color="#ffffff" />,
        link: "https://discord.gg/VDhHjBsdCc",
        hoverColor: "#7289da"
    },
    {
        name: "Email",
        icon: <FaEnvelope size={iconSize} color="#ffffff" />,
        link: "#",
        hoverColor: "#d44638",
        onClick: handleEmailClick
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const scrollConfig = {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 2500,
        isDynamic: true,
        spyThrottle: 100,
        easing: 'easeInOutQuart'
    };

    const handleCustomScroll = (targetId: string) => {
        scroller.scrollTo(targetId, scrollConfig);
        setActiveSection(targetId);
        setIsMenuOpen(false); // Close menu after clicking
    };

    useEffect(() => {
        scrollSpy.update();
        Events.scrollEvent.register('begin', (to, element) => { });
        Events.scrollEvent.register('end', (to, element) => { });

        let timeoutId: string | number | NodeJS.Timeout | undefined;
        const handleScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                const sections = ['home', 'about', 'events', 'timeline', 'registration', 'contact'];
                const viewportHeight = window.innerHeight;

                const currentSection = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const elementMiddle = rect.top + rect.height / 2;
                        const viewportMiddle = viewportHeight / 2;
                        return Math.abs(elementMiddle - viewportMiddle) < viewportHeight / 3;
                    }
                    return false;
                });

                if (currentSection) {
                    setActiveSection(currentSection);
                }
            }, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    const navLinkClass = (section: string) => `cursor-pointer transition-all duration-500 hover:text-[#a855f7] ${activeSection === section ? 'text-[#a855f7]' : 'text-gray-200'}`;

    const handleRegistrationClick = () => {
        window.open('https://example-registration-link.com', '_blank');
    };

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <div onClick={() => window.location.href = '/wiempower2/'} className="h-auto w-auto flex flex-row items-center justify-center cursor-pointer">
                    <Image src={require('src/assets/logos/white_logo.png')} alt="logo" width={100} height={100} className="hover:animate-slowspin" />
                </div>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <div className="flex items-center justify-between w-[700px] h-auto border border-[rgba(112,66,248,0.38)] bg-[#0300145e] px-[20px] py-[10px] rounded-full">
                        <Link href="https://ieee-igdtuw.github.io/ieeeigdtuw" passHref>
                            <div className={navLinkClass('home')}>IEEE IGDTUW</div>
                        </Link>
                        <div onClick={() => handleCustomScroll('about')} className={navLinkClass('about')}>About</div>
                        <div onClick={() => handleCustomScroll('timeline')} className={navLinkClass('timeline')}>Timeline</div>
                        <div onClick={() => window.location.href = 'https://wiegnite2025.devfolio.co/'} className={navLinkClass('registration')}>Registration</div>
                        <div onClick={() => handleCustomScroll('contact')} className={navLinkClass('contact')}>Contact</div>
                    </div>
                </div>

                <div className="hidden md:flex flex-row gap-5 items-center">
                    {Socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.name === "Email" ? "#" : social.link}
                            target={social.name === "Email" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            onClick={social.onClick}
                            className="flex items-center justify-center text-gray-200 hover:text-gray-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div onClick={toggleMenu} className={`md:hidden rounded-md p-2 ${isMenuOpen ? 'bg-[#a855f7]' : 'bg-transparent'} cursor-pointer transition-colors duration-300`}>
                    {isMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                            height: { duration: 0.4 }
                        }}
                        className="md:hidden absolute left-0 right-0 top-[65px] bg-[#030014] border border-[rgba(112,66,248,0.38)] rounded-b-md shadow-lg overflow-hidden"
                    >
                        <motion.div
                            className="flex flex-col gap-4 p-4"
                            initial="closed"
                            animate="open"
                            variants={{
                                open: { transition: { staggerChildren: 0.1 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                        >
                            {[
                                { text: 'IEEE IGDTUW', onClick: () => (window.location.href = './') },
                                { text: 'About', action: () => handleCustomScroll('about') },
                                { text: 'Timeline', action: () => handleCustomScroll('timeline') },
                                { text: 'Registration', action: () => window.location.href = 'https://wiegnite2025.devfolio.co/' },
                                { text: 'Contact', action: () => handleCustomScroll('contact') },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: -20 },
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    onClick={item.onClick || item.action}
                                    className="text-gray-200 cursor-pointer hover:text-[#a855f7] transition-colors duration-300"
                                >
                                    {item.text}
                                </motion.div>
                            ))}

                            <div className="flex gap-4 pt-4">
                                {Socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.name === "Email" ? "#" : social.link}
                                        target={social.name === "Email" ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        onClick={social.onClick}
                                        className="flex items-center justify-center text-gray-200 hover:text-gray-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
