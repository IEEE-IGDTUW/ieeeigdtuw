'use client';

import React, { useEffect, useState } from 'react';
import Header from "@/sections/Header";
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Faq from '@/sections/Faq';
import AboutSb from '@/sections/AboutSb';
import Team from '@/sections/Team';
import AimAndMission from '@/sections/AimAndMission';
import Loading from '@/app/Loading';
import PopUp from '@/sections/PopUp';
import Events from '@/sections/Events';
import PhotoSlider from '@/sections/PhotoSlider';
import PopupStrip from '@/sections/PopupStrip';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Handle loading state
    setTimeout(() => {
      setIsLoading(false);
      // Show popup after loading is complete
      setIsPopupOpen(true);
    }, 3000);

    // Check if popup has been closed before
    const hasClosedPopup = localStorage.getItem('hasClosedPopup');
    if (!hasClosedPopup) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    // Store in localStorage that popup has been closed
    localStorage.setItem('hasClosedPopup', 'true');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Hero />
      <PhotoSlider />
      <AboutSb />
      <AimAndMission />
      <Events />
      <Team />
      <Faq />
      <Footer />
      <PopUp isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default Home;