'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { motion } from 'framer-motion';
import bgImage from "@/assets/collegePic/TeamPic.jpg";

const Hero: React.FC = () => {
  const [members, setMembers] = useState<number>(0);
  const [awards, setAwards] = useState<number>(0);
  const [events, setEvents] = useState<number>(0);
  const iconSize = 32;

  useEffect(() => {
    startCounting();
  }, []);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const emailTo = 'igdtuieee@gmail.com';
    const ccEmail = 'igdtuieee@gmail.com';
    const subject = encodeURIComponent('Contact from Website');
    const body = encodeURIComponent('Hello IEEE IGDTUW Team,');

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
  };

  const startCounting = () => {
    const targetMembers = 230;
    const targetAwards = 30;
    const targetEvents = 50;
    const duration = 7000;

    const memberIntervalTime = duration / targetMembers;
    const awardsIntervalTime = duration / targetAwards;
    const eventsIntervalTime = duration / targetEvents;

    const memberInterval = setInterval(() => {
      setMembers((prev) => (prev < targetMembers ? prev + 1 : prev));
    }, memberIntervalTime);

    const awardsInterval = setInterval(() => {
      setAwards((prev) => (prev < targetAwards ? prev + 1 : prev));
    }, awardsIntervalTime);

    const eventsInterval = setInterval(() => {
      setEvents((prev) => (prev < targetEvents ? prev + 1 : prev));
    }, eventsIntervalTime);

    return () => {
      clearInterval(memberInterval);
      clearInterval(awardsInterval);
      clearInterval(eventsInterval);
    };
  };

  const Socials = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={iconSize} color="#ffffff" />,
      link: 'https://www.linkedin.com/company/ieee-igdtuw/',
      hoverColor: '#0077b5',
    },
    {
      name: 'X',
      icon: <SiX size={iconSize} color="#ffffff" />,
      link: 'https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09',
      hoverColor: '#1DA1F2',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={iconSize} color="#ffffff" />,
      link: 'https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D',
      hoverColor: '#E1306C',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={iconSize} color="#ffffff" />,
      link: '#',
      hoverColor: '#d44638',
      onClick: handleEmailClick,
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Team Picture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-10 text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title Section */}
        <motion.div
          className="mb-6 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              IEEE IGDTUW
            </span>
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Institute of Electrical and Electronics Engineers IGDTUW Student Branch.
          </p>
        </motion.div>

        {/* Explore Button */}
        <motion.button
          className="mb-10 rounded-lg border-2 border-gradient-to-r from-purple-600 to-blue-500 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2 text-md font-medium text-white transition-all duration-700 ease-in-out hover:scale-105"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore our student branch
        </motion.button>

        {/* Social Icons */}
        <motion.div
          className="mb-12 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target={social.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={social.onClick}
              className="flex items-center justify-center text-gray-200 hover:text-gray-300 hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

     
      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/10 py-10">
        <motion.div
          className="flex justify-between px-8 md:px-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {/* Members */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-purple-500 text-base md:text-4xl">Members</span>
            <span className="text-white text-lg md:text-3xl font-bold">{members}+</span>
          </div>

          {/* Awards */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-purple-500 text-base md:text-4xl">Awards</span>
            <span className="text-white text-lg md:text-3xl font-bold">{awards}+</span>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-purple-500 text-base md:text-4xl">Events</span>
            <span className="text-white text-lg md:text-3xl font-bold">{events}+</span>
          </div>
        </motion.div>
      </div>



    </div>
  );
};

export default Hero;
