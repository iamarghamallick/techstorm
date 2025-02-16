"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { poppins } from "@/app/fonts";

export default function TeamsAccordion({ teams }) {
    const [activeTeam, setActiveTeam] = useState(null);

    const toggleAccordion = (index) => {
        setActiveTeam(activeTeam === index ? null : index);
    };

    return (
        <div className="space-y-4 px-2 md:px-20">
            {teams.map((team, index) => (
                <motion.div
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className={`${index === 0 ? "hidden" : ""} border rounded-lg shadow border-gray-700`}
                >
                    <button
                        className="w-full flex justify-between items-center p-4 bg-gray-800 text-left text-lg font-semibold text-gray-100 hover:bg-gray-700 hover:text-gray-200 hover:shadow-lg hover:scale-[1.02] rounded-lg hover:rounded-xl transition-all duration-300 ease-in-out"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className={`${poppins.className} text-xl`}>{team.teamName}</span>
                        <span className="text-xl">{activeTeam === index ? "-" : "+"}</span>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${activeTeam === index ? "h-auto p-4 bg-gray-900/50" : "max-h-0 p-0"
                            }`}
                    >
                        {activeTeam === index && (
                            <div className="text-gray-300 rounded-lg shadow-md">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        {/* Faculty Co-ordinators */}
                                        {/* <h1 className="text-xl font-bold text-gray-100 mb-4 border-b border-gray-700 pb-2">
                                            Faculty Co-ordinators
                                        </h1>
                                        <div className="space-y-4 mb-6">
                                            {team.members.faculty.map((member, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 p-2 bg-gray-800 rounded-md shadow-sm"
                                                >
                                                    <h2 className="text-lg font-semibold text-gray-100">
                                                        {member.name}{" "}
                                                        <span className="text-gray-400">
                                                            ({member.department})
                                                        </span>
                                                    </h2>
                                                    <p className="text-lg text-gray-400">{member.phone}</p>
                                                </div>
                                            ))}
                                        </div> */}

                                        {/* Student Co-ordinators */}
                                        <h1 className="text-xl font-bold text-gray-100 mb-4 border-b border-gray-700 pb-2">
                                            Student Co-ordinators
                                        </h1>
                                        <div className="space-y-4">
                                            {team.members.student.map((member, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 p-2 bg-gray-800 rounded-md shadow-sm"
                                                >
                                                    <h2 className="text-lg font-semibold text-gray-100">
                                                        {member.name}{" "}
                                                        <span className="text-gray-400">
                                                            ({member.department})
                                                        </span>
                                                    </h2>
                                                    { }
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Volunteers */}
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-100 mb-4 border-b border-gray-700 pb-2">
                                            Volunteers
                                        </h1>
                                        <div className="space-y-4">
                                            {team.members.volunteer.map((member, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 p-3 bg-gray-800 rounded-md shadow-sm"
                                                >
                                                    <h2 className="text-lg font-semibold text-gray-100">
                                                        {member.name}{" "}
                                                        <span className="text-gray-400">
                                                            ({member.department})
                                                        </span>
                                                    </h2>
                                                    {/* <p className="text-lg text-gray-400">Place for Mobile No</p> */}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
