"use client";
import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

const SponsorCard = ({ title, image, category }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between items-center m-auto p-2 md:p-6 rounded-xl bg-[#171717] md:my-4 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
            {/* Image with hover effects */}
            <ImageWithSkeleton
                src={image}
                width={300}
                height={300}
                alt={title + " Logo"}
                className="w-full aspect-square rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay animation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Text section */}
            <div className="flex flex-col justify-center items-center z-10">
                <h2 className={`${righteous.className} text-lg md:text-2xl transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-[1.02] text-white text-center`}>
                    {title}
                </h2>
                <p className={`${righteous.className} text-xs text-gray-400 transition-opacity duration-300 group-hover:opacity-80 text-center`}>
                    {category + " Sponsor"}
                </p>
            </div>
        </motion.div>
    )
}

export default SponsorCard