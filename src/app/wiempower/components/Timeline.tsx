import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegFileAlt, FaChalkboardTeacher, FaCode, FaTrophy, FaBuilding, FaBullhorn, FaLightbulb, FaDiscord } from "react-icons/fa";

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
        date: "17th January 2025",
        endDate: "26th January 2025 6:00 PM [extended]",
        title: "Registration Opens [Online]",
        description: "Begin your journey by registering your team through our online portal. Ensure all team details and areas of interest are properly documented.",
        hasButton: true,
        buttonText: "Register Here",
    },
    {
        date: "24th January 2025",
        title: "Ideation Phase Begins [Online]",
        description: "This phase marks the official start of your brainstorming process. Team members should work together to ideate and plan their project. Reach out to mentors for guidance.",
        hasButton: false,
    },
    {
        date: "26st January 2025 12:00 PM",
        title: "Ideation Phase End [Online]",
        description: "Complete your ideas and submit your finalized project concept. Mentors will review your submission and provide feedback.",
        hasButton: false,
    },
    {
        date: "27th January 2025 12:00 PM",
        title: "Development Phase & Mentorship [Online]",
        description: "The development phase begins! Teams will start implementing their ideas, with mentorship available throughout the process.",
        hasButton: true,
    },
    {
        date: "31st January 2025 11:59 PM",
        title: "Development Phase Ends [Online]",
        description: "The development phase ends! Top teams will be announced soon on discord",
        hasButton: false,
    },
    {
        date: "1st February 2025",
        title: "Presentations And Screening [Online]",
        description: "All the teams selected in the development phase must present their PPT along with their prototype via an online presentation to the mentors.",
        hasButton: true,
    },
    {
        date: "2nd February 2025",
        title: "Shortlisted Teams Announced [Online]",
        description: "The best teams will be shortlisted, and they will receive further instructions for the final round.",
        hasButton: false,
    },
    {
        date: "3rd February 2025",
        title: "Final Presentations & Results [Offline]",
        description: "All shortlisted top teams must appear at the IGDTUW campus to present their projects to the judges and final judgement will be given on the same day. This is a pivotal moment where innovation meets opportunity.",
        isOffline: true,
        location: "https://maps.app.goo.gl/5WTUYbxuLWdJLLAj6",
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
        "Registration Opens [Online]": <FaRegFileAlt className="text-pink-400 mr-2" />,
        "Ideation Phase Begins [Online]": <FaChalkboardTeacher className="text-green-400 mr-2" />,
        "Ideation Phase End [Online]": <FaLightbulb className="text-yellow-300 mr-2" />,
        "Development Phase & Mentorship [Online]": <FaCode className="text-red-400 mr-2" />,
        "Development Phase Ends [Online]": <FaCode className="text-purple-400 mr-2" />,
        "Shortlisted Teams Announced [Online]": <FaBullhorn className="text-teal-300 mr-4" />,
        "Final Presentations & Results [Offline]": <FaTrophy className="text-orange-400 mr-2" />,
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
                            <div className="flex items-center space-x-2">
                                <a
                                    href={event.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                    title="View Location"
                                >
                                    <FaMapMarkerAlt size={20} />
                                </a>
                                <a
                                    href={event.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 text-sm"
                                    title="View Location"
                                >
                                    View on Maps
                                </a>
                            </div>
                        )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                                 bg-clip-text text-transparent mb-2 sm:mb-3 flex items-center">
                        {icons[event.title]} {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {event.description}
                    </p>

                    {event.title === "Final Presentations & Results [Offline]" && (
                        <div className="mt-4">
                            <div className="text-blue-300 font-semibold mb-2">Venue Details:</div>
                            <p className="text-gray-300 mb-2">
                                <strong>Location:</strong> {event.venue}
                            </p>
                            <p className="text-gray-300 mb-4">
                                <strong>Address:</strong> {event.address}
                            </p>
                            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7625202328366!2d77.23091717513982!3d28.669501075644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf5a53fc4a1%3A0xa54d47545c3fe7!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1703604199651!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {event.title === "Registration Opens [Online]" && (
                        <div className="mt-4 text-red-400 text-sm font-semibold">
                            Join Discord for all official announcements of our hackathon...
                        </div>
                    )}
                    {event.title === "Presentations And Screening [Online]" && (
                        <div className="mt-4 text-red-400 text-sm font-semibold">
                            Kindly join Discord to access the meeting links for the final presentation and mentoring sessions.
                        </div>
                    )}

                    {event.title === "Development Phase & Mentorship [Online]" && (
                        <div className="mt-4 text-red-400 text-sm font-semibold">
                            Kindly Join Our Discord Server For Mentoring Sessions.
                        </div>
                    )}

                    {event.hasButton && (
                        <>
                            {event.title === "Registration Opens [Online]" && (
                                <a
                                    href="https://wiegnite2025.devfolio.co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
                                >
                                    {event.buttonText}
                                </a>
                            )
                            }
                            {event.title === "Registration Opens [Online]" && (
                                <div className="mt-4 flex flex-col sm:flex-row items-center justify-start sm:space-x-4">
                                    <a
                                        href="https://discord.gg/VDhHjBsdCc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 w-full sm:w-auto"
                                    >
                                        <FaDiscord className="mr-2" /> Join Discord
                                    </a>
                                </div>
                            )}
                            {event.title === "Presentations And Screening [Online]" && (
                                <div className="mt-4 flex flex-col sm:flex-row items-center justify-start sm:space-x-4">
                                    <a
                                        href="https://discord.gg/VDhHjBsdCc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 w-full sm:w-auto"
                                    >
                                        <FaDiscord className="mr-2" /> Join Discord
                                    </a>
                                </div>
                            )}
                            {event.title === "Development Phase & Mentorship [Online]" && (
                                <div className="mt-4 flex flex-col sm:flex-row items-center justify-start sm:space-x-4">
                                    <a
                                        href="https://discord.gg/VDhHjBsdCc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 w-full sm:w-auto"
                                    >
                                        <FaDiscord className="mr-2" /> Join Discord
                                    </a>
                                </div>
                            )}
                        </>
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