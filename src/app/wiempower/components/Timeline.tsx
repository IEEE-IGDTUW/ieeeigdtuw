import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegFileAlt, FaChalkboardTeacher, FaCode, FaTrophy, FaBuilding, FaBullhorn, FaLightbulb } from "react-icons/fa";

interface EventItem {
    date: string;
    endDate?: string;
    title: string;
    description: string;
    isOffline?: boolean;
    location?: string;
    hasButton?: boolean;
    buttonText?: string;
    venue?: string;
    address?: string;
}

const EVENTS: EventItem[] = [
    {
        date: "13th January 2025",
        endDate: "22th January 2025",
        title: "Registration Opens",
        description: "Begin your journey by registering your team through our online portal. Ensure all team details and areas of interest are properly documented.",
        hasButton: true,
        buttonText: "Register Here",
    },
    {
        date: "22nd January 2025",
        title: "Ideation Phase Begins",
        description: "Start brainstorming your innovative solutions and submit your preliminary project slides.",
    },
    {
        date: "24th January 2025",
        title: "Ideation Phase End",
        description: "Last day to register your team and submit your project slides. Ensure all details are finalized.",
    },
    {
        date: "25th January 2025",
        endDate: "29th January 2025",
        title: "Development Phase & Mentorship",
        description: "Seek help from mentors and continue developing your project. This phase will be conducted online.",
    },
    {
        date: "29th January 2025",
        title: "Development Phase Ends",
        description: "Final submissions of all projects. Ensure your project is complete and ready for presentation.",
    },
    {
        date: "30th January 2025",
        title: "Shortlisted Teams Announced",
        description: "Teams shortlisted for the finals will be announced, and they are required to present their final projects offline at IGDTUW.",
    },
    {
        date: "31st January 2025",
        title: "Final Presentations & Results",
        description: "All shortlisted top teams must appear at the IGDTUW campus to present their projects to the judges and final judgement will be given on the same day.",
        isOffline: true,
        location: "https://www.google.com/maps/d/viewer?hl=en&ie=UTF8&t=h&source=embed&msa=0&ll=28.6655361%2C77.23200789999999&spn=0.007995%2C0.009109&z=17&mid=1rQQ1fphljUW4dQvPCGxo6EU_vO4",
        venue: "Auditorium, IGDTUW",
        address: "Madrasa Road, Opposite St. James Church, Kashmere Gate, Delhi-110006",
    },
];

const TimelineItem = ({ event, index, progress, isLargeScreen }: {
    event: EventItem;
    index: number;
    progress: number;
    isLargeScreen: boolean;
}) => {
    const isLeft = index % 2 === 0;
    const shouldShow = progress >= index / EVENTS.length;

    const contentClasses = `w-full ${isLargeScreen ? `lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}` : 'pl-8'}`;

    const linePosition = isLargeScreen ? "lg:left-1/2 lg:-translate-x-1/2" : "left-4";

    const icons: { [key: string]: React.ReactNode } = {
        "Registration Opens": <FaRegFileAlt className="text-pink-400 mr-2" />,
        "Ideation Phase Begins": <FaChalkboardTeacher className="text-green-400 mr-2" />,
        "Ideation Phase End": <FaLightbulb className="text-yellow-300 mr-2" />,
        "Development Phase & Mentorship": <FaCode className="text-red-400 mr-2" />,
        "Development Phase Ends": <FaCode className="text-purple-400 mr-2" />,
        "Shortlisted Teams Announced": <FaBullhorn className="text-teal-300 mr-4" />,
        "Final Presentations & Results": <FaTrophy className="text-orange-400 mr-2" />,
    };

    return (
        <motion.div
            className={`relative flex flex-col ${isLargeScreen ? `lg:flex-row ${!isLeft && 'lg:flex-row-reverse'}` : ''} items-start mb-12`}
            initial={{ opacity: 0, x: isLargeScreen ? (isLeft ? -50 : 50) : -30 }}
            animate={{ opacity: shouldShow ? 1 : 0, x: shouldShow ? 0 : (isLargeScreen ? (isLeft ? -50 : 50) : -30) }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div
                className={`absolute ${linePosition} w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 z-10`}
                initial={{ scale: 0 }}
                animate={{ scale: shouldShow ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            >
                {shouldShow && (
                    <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full -left-2 -top-2 animate-ping" style={{ animationDuration: '3s' }} />
                )}
            </motion.div>

            <div className={contentClasses}>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-lg border border-blue-500/20 
                             hover:border-purple-500/40 transition-colors duration-300
                             backdrop-blur-sm hover:backdrop-blur-lg
                             shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                    <div className="text-emerald-400 text-lg font-semibold mb-2 flex items-center justify-between">
                        <div>
                            {event.date}
                            {event.endDate && ` - ${event.endDate}`}
                        </div>
                        {event.isOffline && event.location && (
                            <a
                                href={event.location}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 ml-2"
                                title="View Location"
                            >
                                <FaMapMarkerAlt size={20} />
                            </a>
                        )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                                 bg-clip-text text-transparent mb-2 sm:mb-3 flex items-center">
                        {icons[event.title]} {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {event.description}
                    </p>

                    {event.venue && (
                        <div className="mt-4 border-t border-blue-500/20 pt-4">
                            <div className="flex items-center text-blue-400">
                                <FaBuilding className="mr-2" />
                                <span className="font-semibold">Venue: {event.venue}</span>
                            </div>
                            {event.address && (
                                <div className="mt-2 flex items-start">
                                    <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400" />
                                    <div>
                                        <p className="text-sm text-gray-400">{event.address}</p>
                                        <a
                                            href={event.location}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-1"
                                        >
                                            View on Map →
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {event.hasButton && (
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                            {event.buttonText}
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Timeline: React.FC = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [progress, setProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setProgress(Math.max(progress, latest));
        });
        return () => unsubscribe();
    }, [scrollYProgress, progress]);

    return (
        <div id="timeline" className="min-h-screen bg-black overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 text-center"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 sm:mb-6 flex items-center justify-center space-x-2">
                        <FaCalendarAlt className="text-3xl text-purple-400" />
                        <span>Hackathon Schedule</span>
                    </h1>
                </motion.div>

                <div ref={timelineRef} className="relative">
                    <div
                        className={`absolute w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full ${isLargeScreen ? 'lg:left-1/2 lg:-translate-x-1/2' : 'left-4'}`}
                        style={{
                            top: 0,
                            height: '100%'
                        }}
                    />

                    {EVENTS.map((event, index) => (
                        <TimelineItem
                            key={index}
                            event={event}
                            index={index}
                            progress={progress}
                            isLargeScreen={isLargeScreen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
