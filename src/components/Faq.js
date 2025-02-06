"use client";
import { actor, inter, righteous } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import { faqs } from "@/lib/faqs";

const AnimatedImage = motion(Image);

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className="relative p-2 my-14 flex flex-col md:flex-row justify-center items-center md:items-start gap-0 md:gap-8">

            {/* bg effects: styled in /src/app/globals.css  */}
            {/* left bg  */}
            <div className="home-bg-cyan hidden md:block"></div>

            {/* top center  */}
            <div className="home-bg-faq-top md:hidden"></div>

            <h1 className={`md:hidden font-ribes text-5xl text-white`}>FAQ&apos;s</h1>

            <AnimatedImage
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                src="/assets/faq/faq.svg"
                alt="FAQ"
                width={500}
                height={500}
                className="w-[75%] md:w-1/2 h-[28rem]"
            />

            <div className="w-full md:w-1/2 mx-auto p-0 md:p-6 rounded-lg shadow-lg">
                <h1 className={`hidden md:block font-ribes text-7xl text-white mb-8`}>FAQ&apos;s</h1>
                <motion.div
                    initial={{ opacity: 0, y: "30px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <div key={index} className="overflow-hidden">
                            <button
                                className="w-full px-6 py-4 flex justify-between items-center bg-[#3F3F3F] hover:bg-[#272727] transition-colors duration-200 rounded-lg"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`content-${index}`}
                            >
                                <span className={`${inter.className} text-lg md:only:text-xl text-left text-white`}>{faq.question}</span>
                                <IoIosArrowDropdown
                                    className={`w-6 h-6 text-white transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                id={`content-${index}`}
                                className={`transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                            >
                                <div className="px-6 py-4 bg-transparent">
                                    <p className={`${actor.className} text-white text-lg md:text-xl`}>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Faq;