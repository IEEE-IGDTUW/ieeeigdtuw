import React from 'react';

const Judges = () => {
    return (
        <div id="judges" className="max-w-5xl mx-auto p-8 rounded-lg bg-transparent shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Our Judges</h2>

            {/* Uncomment the following code when you want to display judge profiles */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {JUDGES.map((judge, index) => (
                    <div
                        className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-transparent to-gray-900/90"
                        key={index}
                    >
                        <div className="relative w-32 h-32 mx-auto mt-6 rounded-full overflow-hidden border-2 border-white/20">
                            <Image
                                src={judge.image}
                                alt={judge.name}
                                className="w-full h-full object-cover rounded-full"
                                loading="lazy"
                            />
                        </div>
                        {judge.linkedin && (
                            <div className="absolute top-0 right-0 p-2">
                                <a
                                    href={judge.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center"
                                >
                                    <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-400 transition-colors duration-300" />
                                </a>
                            </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center">
                            <div className="text-center mb-3">
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {formatName(judge.name)}
                                </h3>
                                <h4 className="text-sm text-gray-200 font-medium">
                                    {judge.profession}
                                </h4>
                            </div>
                            <p className="text-sm text-gray-300 text-center px-2 line-clamp-3">
                                {judge.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* To be announced message */}
            <p className="text-lg text-gray-500 mt-4 text-center">
                To be announced soon....
            </p>
        </div>
    );
};

export default Judges;
