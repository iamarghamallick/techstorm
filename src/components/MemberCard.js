"use client";

import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin } from "react-icons/fi";
import LetterGlitch from './ReactBits/LetterGlitch';
import ImageWithSkeleton from './ImageWithSkeleton';

const MemberCard = ({ index, name, position, team, image, linkedin, bg_image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: "30px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${index === 25 ? "" : ""} group flex flex-col justify-between items-center m-auto p-2 rounded-xl bg-[#171717] my-2 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
        >
            {/* Image Container */}
            <div
                className="w-full aspect-square rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-0 relative"
            >
                {/* Black-and-white background image */}
                <div className="absolute inset-0 w-full h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
                        style={{
                            backgroundImage: `url(${bg_image})`,
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Letter Glitch */}
                <div className='absolute inset-0 w-full h-full opacity-50'>
                    <LetterGlitch
                        glitchColors={["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"]}
                        glitchSpeed={100}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    />
                </div>

                {/* Main Image */}
                <ImageWithSkeleton
                    src={image}
                    width={300}
                    height={300}
                    alt={"Pic of " + name}
                    className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
                    priority
                />

                {/* LinkedIn Button */}
                <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md bg-white z-20"
                >
                    <FiLinkedin color="blue" size={20} />
                </Link>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center">
                <h2
                    className={`${righteous.className} md:text-lg text-center text-white leading-none py-1`}
                >
                    {name}
                </h2>
                <p
                    className={`${righteous.className} text-xs text-gray-400 transition-opacity duration-300 group-hover:opacity-80 text-center leading-none`}
                >
                    {position}, {team}
                </p>
            </div>
        </motion.div>
    )
}

export default MemberCard