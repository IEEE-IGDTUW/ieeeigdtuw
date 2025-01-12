'use client';

import Link from 'next/link';
import { useState, useEffect, SetStateAction } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Events, scrollSpy, scroller } from "react-scroll";
import Image from "next/image";
import { SiX } from 'react-icons/si';
import { IoClose } from "react-icons/io5";
import PopUp from './PopUp';
import PopupStrip from './PopupStrip';

const SOCIALS = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={24} />,
        link: "https://www.linkedin.com/company/ieee-igdtuw/",
    },
    {
        name: "X",
        icon: <SiX size={24} />,
        link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
    },
    {
        name: "Instagram",
        icon: <FaInstagram size={24} />,
        link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D",
    },
    {
        name: "Email",
        icon: <FaEnvelope size={24} />,
        link: "#",
        onClick: (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            const emailParams = {
                to: "igdtuieee@gmail.com",
                cc: "igdtuieee@gmail.com",
                subject: "Contact from Website",
                body: "Hello IEEE IGDTUW Team,"
            };
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailParams.to}&cc=${emailParams.cc}&su=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;
            window.open(gmailLink, "_blank") || alert("Please allow pop-ups for this site.");
        }
    }
];

const WIEMPOWER_VERSIONS = [
    { version: "4.0", url: "https://ieee-igdtuw.github.io/wie-website/index.html" },
    { version: "3.0", url: "https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/index.html" },
    { version: "2.0", url: "https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/about2.html" },
    { version: "1.0", url: "https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/about.html" }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubBarOpen, setIsSubBarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    const handleScroll = (targetId: string) => {
        scroller.scrollTo(targetId, {
            spy: true,
            smooth: true,
            offset: -70,
            duration: 1000,
            easing: 'easeInOutQuart',
        });
        setActiveSection(targetId);
        setIsMenuOpen(false);
        setIsSubBarOpen(false);
    };


    useEffect(() => {
        scrollSpy.update();
        const handleScrollSpy = () => {
            const sections = ['about', 'Wiempower-2024', 'past-events', 'team', 'projects', 'contact-us'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return Math.abs((rect.top + rect.height / 2) - (window.innerHeight / 2)) < window.innerHeight / 3;
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const navLinkClass = (section: string) => `
        cursor-pointer 
        transition-all 
        duration-300
        hover:text-[#a855f7]
        ${activeSection === section ? 'text-[#a855f7]' : 'text-gray-200'}
    `;

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
            <div className="w-full h-full flex items-center justify-between">
                <div onClick={() => handleScroll('about')} className="cursor-pointer">
                    <Image
                        src={require('../assets/logos/white_logo.png')}
                        alt="logo"
                        width={100}
                        height={100}
                        className="hover:animate-slowspin"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center flex-grow">
                    <div className="flex items-center justify-between w-[600px] h-auto border border-[rgba(112,66,248,0.38)] bg-[#0300145e] px-[20px] py-[10px] rounded-full">
                        <button onClick={() => handleScroll('about')} className={navLinkClass('about')}>About</button>
                        <div className="relative">
                            <button onClick={() => setIsSubBarOpen(!isSubBarOpen)} className={navLinkClass('events')}>
                                Events
                            </button>
                            <AnimatePresence>
                                {isSubBarOpen && (
                                    <motion.div
                                        variants={menuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 mt-2 w-48 bg-[#0300145e] border border-[rgba(112,66,248,0.38)] rounded-lg shadow-lg"
                                    >
                                        {WIEMPOWER_VERSIONS.map(({ version, url }) => (
                                            <button
                                                key={version}
                                                onClick={() => {
                                                    window.open(url, '_blank');
                                                    setIsSubBarOpen(false);
                                                }}
                                                className="w-full px-4 py-2 text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 hover:bg-[#a855f7] hover:text-white transition-colors"
                                            >
                                                WIEMPOWER {version}
                                                <span className="ml-2 animate-pulse text-xl">🎉</span>
                                            </button>

                                        ))}
                                        <button
                                            onClick={() => handleScroll('past-events')}
                                            className="w-full px-4 py-2 text-left text-gray-200 hover:bg-[#a855f7] hover:text-white transition-colors"
                                        >
                                            Past Events
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <button onClick={() => handleScroll('team')} className={navLinkClass('team')}>
                            Team
                        </button>

                        <Link
                            href="/wiempower"
                            className={`${navLinkClass('wiempower')} font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400`}
                        >
                            WIEMPOWER
                            <span className="ml-2 animate-pulse text-xl text-yellow-400">🎉</span>
                        </Link>

                        <button onClick={() => handleScroll('contact-us')} className={navLinkClass('contact-us')}>
                            Contact
                        </button>


                    </div>
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-5">
                    {SOCIALS.map(({ name, icon, link, onClick }) => (
                        <a
                            key={name}
                            href={link}
                            target={name === "Email" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            onClick={onClick}
                            className="text-white hover:text-[#a855f7] transition-colors duration-300"
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white hover:text-[#a855f7] transition-colors duration-300"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute left-0 right-0 top-[65px] bg-[#030014] border border-[rgba(112,66,248,0.38)] rounded-b-lg shadow-lg p-4"
                    >
                        <div className="flex flex-col gap-4">
                            <button onClick={() => handleScroll('about')} className="text-gray-200 hover:text-[#a855f7] text-left">About</button>
                            <button onClick={() => setIsSubBarOpen(!isSubBarOpen)} className="text-gray-200 hover:text-[#a855f7] text-left">Events</button>
                            {isSubBarOpen && (
                                <div className="pl-4 flex flex-col gap-2">
                                    {WIEMPOWER_VERSIONS.map(({ version, url }) => (
                                        <button
                                            key={version}
                                            onClick={() => {
                                                window.open(url, '_blank');
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-gray-200 hover:text-[#a855f7] text-left"
                                        >
                                            WIEMPOWER {version}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handleScroll('past-events')}
                                        className="text-gray-200 hover:text-[#a855f7] text-left"
                                    >
                                        Past Events
                                    </button>
                                </div>
                            )}
                            <button onClick={() => handleScroll('team')} className="text-gray-200 hover:text-[#a855f7] text-left">Team</button>
                            <Link
                                href="/wiempower"
                                className="text-gray-200 hover:text-[#a855f7] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 sm:text-lg text-base"
                            >
                                WIEMPOWER
                                <span className="ml-2 animate-pulse text-xl text-yellow-400">🎉</span>
                            </Link>

                            <button onClick={() => handleScroll('contact-us')} className="text-gray-200 hover:text-[#a855f7] text-left">Contact</button>

                            <div className="flex justify-center gap-5 mt-4">
                                {SOCIALS.map(({ name, icon, link, onClick }) => (
                                    <a
                                        key={name}
                                        href={link}
                                        target={name === "Email" ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        onClick={onClick}
                                        className="text-white hover:text-[#a855f7] transition-colors duration-300"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <PopupStrip />
        </nav>

    );
};

export default Navbar;