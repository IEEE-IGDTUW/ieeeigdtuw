'use client';

import React, { useState, useEffect } from 'react';
import Header from "@/app/wiempower/components/Header";
import Hero from './components/Hero';
import About from './components/About';
import PastEvents from './components/PastEvents';
import Timeline from './components/Timeline';
import Theme from './components/Theme';
import SpeakerSection from './components/Speaker';
import Judges from './components/Judges';
import Faq from './components/Faq';
import BackToTop from './components/BackToTop';
import Loading from './Loading';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Events from './components/Events';

const Wiempower = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <Hero />
                    <About />
                    <PastEvents />
                    <Timeline />
                    <Theme />
                    <Events />
                    <SpeakerSection />
                    <Judges />
                    <Sponsors />
                    <Faq />
                    <Footer />
                    <BackToTop />
                </>
            )}
        </>
    );
};

export default Wiempower;
