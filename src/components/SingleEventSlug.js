"use client"
import { poppins, righteous } from '@/app/fonts';
import { allEvents } from '@/lib/event-details/all-events';
import { eventTitles } from '@/lib/event-titles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const SingleEventSlug = ({ slug }) => {
    const router = useRouter();

    const validSingleEvent = eventTitles.reduce((map, event, index) => {
        map.set(event.toLowerCase().replace(/\s+/g, ''), index);
        return map;
    }, new Map());

    const registrationStatus = (datetime) => {
        const deadline = new Date(datetime).getTime();
        const now = new Date().getTime();
        return deadline > now;
    }

    const [isValidSlug, setIsValidSlug] = useState(false);
    const [currEvent, setCurrEvent] = useState(null);

    useEffect(() => {
        if (!validSingleEvent.has(slug)) {
            router.push("/404");
        } else {
            setCurrEvent(allEvents.get(slug));
            setIsValidSlug(true);
        }
    }, []);

    useEffect(() => {
        const container = document.getElementById("event-content");
        const image = document.getElementById("event-bg-image");
        if (container && image) {
            image.style.height = `${container.offsetHeight}px`;
        }
    }, [])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!currEvent?.bgImage) return; // ✅ Prevents errors when currEvent is null
        const img = document.createElement("img");
        img.src = currEvent.bgImage;
        img.onload = () => setLoading(false);
    }, [currEvent?.bgImage]);

    if (!currEvent) return null; // ✅ Early return if currEvent is not available

    return (
        <div className='container px-2'>
            {isValidSlug && currEvent && <div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                    <motion.div
                        initial={{ opacity: 0, y: "30px" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/3 h-80 md:h-auto relative rounded-t-3xl md:rounded-tl-3xl"
                    >
                        {/* Skeleton Loader */}
                        {loading && (
                            <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-t-3xl md:rounded-tl-3xl" />
                        )}

                        {/* Background Image */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-500 rounded-t-3xl md:rounded-tl-3xl ${loading ? "opacity-0" : "opacity-100"
                                }`}
                            style={{
                                backgroundImage: `url(${currEvent.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#1e1336] to-transparent rounded-t-3xl md:rounded-tl-3xl"></div>

                        {/* Title */}
                        <h1
                            className={`${righteous.className} md:hidden absolute bottom-0 left-0 text-4xl font-bold`}
                        >
                            {currEvent.title}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: "30px" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-2/3 flex flex-col gap-4"
                        id='event-content'
                    >
                        <h1 className={`${righteous.className} hidden md:block text-3xl font-bold`}>{currEvent.title}</h1>
                        <p className={`${poppins.className} px-2 text-xs md:text-base`}>{currEvent.description}</p>

                        <div className="flex gap-4 justify-between items-center">
                            {[
                                {
                                    heading: "Registration Fees for BPPIMT Students",
                                    text: currEvent.bppimtRegFees,
                                    image: "/assets/eventdetails-icons/bppimt-logo.png",
                                },
                                {
                                    heading: `Registration Fees for ${currEvent.bppimtRegFees === "" ? "ALL" : "OUTSIDE"} Students`,
                                    text: currEvent.outsideRegFees,
                                    image: "/assets/eventdetails-icons/avater.png",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`${item.text === "" ? "hidden" : ""} details-box w-full flex flex-col md:flex-row justify-between items-end p-2 rounded-lg bg-[#202020c4] min-h-24 group hover:shadow-lg hover:shadow-green-300 transition-all duration-300`}
                                >
                                    <div className="w-full md:w-2/3 flex flex-col md:pl-2 justify-end group-hover:scale-[1.02] group-hover:translate-x-1 transition-transform duration-300">
                                        <p className={`${poppins.className} text-sm md:text-base font-semibold`}>{item.heading}</p>
                                        <h1
                                            className={`${poppins.className} font-bold text-2xl md:text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300 hidden md:block`}
                                        >
                                            {item.text}
                                        </h1>
                                    </div>
                                    <div className="md:w-1/3 flex md:flex-col justify-between items-end">
                                        <h1
                                            className={`${poppins.className} font-bold text-2xl md:text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300 md:hidden`}
                                        >
                                            {item.text}
                                        </h1>
                                        <Image
                                            src={item.image}
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="w-1/3 md:w-auto max-h-28 aspect-square group-hover:rotate-6 group-hover:scale-[1.02] transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {currEvent.registrationInstruction && <p
                            className={`${poppins.className} text-xs md:text-base font-semibold px-2`}
                        >
                            {currEvent.registrationInstruction}

                        </p>}

                        <Link
                            href={currEvent.registrationLink}
                            target="_blank"
                            className={`${poppins.className} ${registrationStatus(currEvent.registrationDeadline)
                                ? "text-xl text-green-300 hover:scale-[1.02] hover:bg-green-300 hover:text-[#202020] border-green-300"
                                : "text-base text-gray-300 pointer-events-none opacity-75 border-red-300"
                                } w-full text-center uppercase bg-[#202020] rounded-lg font-semibold p-2 border transition-transform transform`}
                        >
                            {registrationStatus(currEvent.registrationDeadline) ? "Register Now!" : "Registration Closed"}
                        </Link>
                        {!currEvent.link_title.endsWith("jr") && <span className='text-center'>
                            <CountdownTimer deadline={currEvent.registrationDeadline} />
                        </span>}
                    </motion.div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 md:gap-8 my-6 md:my-10'>
                    <div className="md:w-1/3 flex flex-col gap-4 md:gap-6 items-center">
                        {[
                            {
                                heading: "Prize",
                                text: currEvent.prize,
                                desc: ["", ""],
                                image: "/assets/eventdetails-icons/prizes.png",
                                display: true,
                            },
                            {
                                heading: "On-spot registration",
                                text: currEvent.onspotReg,
                                desc: currEvent.onspotRegInfo || ["", ""],
                                image: "/assets/eventdetails-icons/on-spot.png",
                                display: true,
                            },
                            {
                                heading: currEvent.prelimsDate === "" ? "No Prelims" : currEvent.prelimsHeading || "Date of Prelims",
                                text: currEvent.prelimsDate || "Final Round Only",
                                desc: currEvent.prelimsTiming || ["", ""],
                                image: "/assets/eventdetails-icons/prelims.png",
                                display: true,
                            },
                            {
                                heading: currEvent.prelimsDate2 ? currEvent.prelimsHeading2 || "Date of Prelims" : "",
                                text: currEvent.prelimsDate2 || "",
                                desc: currEvent.prelimsTiming2 || ["", ""],
                                image: "/assets/eventdetails-icons/prelims.png",
                                display: currEvent.prelimsDate2,
                            },
                            {
                                heading: currEvent.finalsHeading || "Date of Finals",
                                text: currEvent.finalsDate,
                                desc: currEvent.finalsTiming || ["", ""],
                                image: "/assets/eventdetails-icons/finals.png",
                                display: true,
                            },
                        ].map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: "30px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={index}
                                className={`${item.display ? "" : "hidden"} details-box w-full flex justify-between items-end p-2 rounded-lg bg-[#202020c4] min-h-32 group hover:shadow-lg hover:shadow-green-300 transition-all duration-300`}
                            >
                                <div className="w-2/3 flex flex-col pl-2 justify-end group-hover:scale-[1.02] group-hover:translate-x-1 transition-transform duration-300">
                                    <p className={`${poppins.className} font-semibold`}>{item.heading}</p>
                                    <h1
                                        className={`${poppins.className} font-bold text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300`}
                                    >
                                        {item.text}
                                    </h1>
                                    <p
                                        className={`${poppins.className} font-semibold text-xs text-[#A4A4A4] group-hover:text-white transition-colors duration-300`}
                                    >
                                        {item.desc[0]}
                                    </p>
                                    <p
                                        className={`${poppins.className} font-semibold text-xs text-[#A4A4A4] group-hover:text-white transition-colors duration-300`}
                                    >
                                        {item.desc[1]}
                                    </p>
                                </div>
                                <div className="w-1/3">
                                    <Image
                                        src={item.image}
                                        width={100}
                                        height={200}
                                        alt="icon"
                                        className="h-full w-auto group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: "30px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="details-box w-full flex justify-between p-2 rounded-lg bg-[#202020c4] h-36 group hover:shadow-lg hover:shadow-green-400 hover:bg-[#2A2A2A] transition-all duration-300"
                        >
                            <div className="w-full flex flex-col gap-2 group-hover:scale-105 transition-transform duration-300">
                                <h1
                                    className={`${poppins.className} font-bold text-3xl text-[#7C7C7C] group-hover:text-green-300 transition-colors duration-300`}
                                >
                                    Student Coordinators
                                </h1>
                                {currEvent.studentCoordinators.map((coordinator, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex justify-between pl-2 pr-1 group-hover:pl-4 transition-all duration-300"
                                    >
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.name} ({coordinator.dept})
                                        </p>
                                        <p
                                            className={`${poppins.className} font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300`}
                                        >
                                            {coordinator.phone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3">
                        {currEvent.rules.map((rule, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: "30px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={index}
                            >
                                <h1 className={`${poppins.className} font-bold text-2xl md:text-3xl py-4`}>{rule.heading}</h1>
                                {rule.content.map((content, index) => (
                                    <div
                                        key={index}
                                        className={`${poppins.className} text-base md:text-lg mb-2`}
                                    >
                                        &bull; {content}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SingleEventSlug