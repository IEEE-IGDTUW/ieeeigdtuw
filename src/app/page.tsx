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
import BackToTop from '@/sections/BackToTop';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsPopupOpen(true);
    }, 3000);

    const hasClosedPopup = localStorage.getItem('hasClosedPopup');
    if (!hasClosedPopup) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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
      <BackToTop/>
    </>
  );
};

export default Home;