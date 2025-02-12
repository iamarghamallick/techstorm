"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { toLinkText } from '@/utils/toLinkText';
import ImageWithSkeleton from './ImageWithSkeleton';

const AnimatedLink = motion(Link);

const EventCategoryCard = ({ active, title, icon, image }) => {
    return (
        <AnimatedLink
            initial={{ opacity: 0, y: "30px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            href={"/events/" + toLinkText(title)}
            className={`group w-full h-52 md:h-80 shadow-lg overflow-hidden relative rounded-lg block transform transition duration-300 ${active ? "hover:scale-105 hover:shadow-2xl" : ""}`}
            aria-disabled={active}
        >
            <ImageWithSkeleton
                src={image}
                alt={title}
                width={600}
                height={400}
                className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ${active ? "group-hover:scale-105 group-hover:opacity-80" : ""}`}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-90 transition-opacity duration-300"></div>

            <div className="absolute inset-0 w-full flex flex-col justify-center items-end p-4">
                <div className="flex flex-col w-1/2 md:w-1/3 justify-center items-center gap-4 md:gap-8">
                    <Image
                        src={icon}
                        alt={title}
                        width={100}
                        height={100}
                        className={`md:w-44 md:h-44 transition-transform duration-300 ${active ? "group-hover:scale-110" : ""}`}
                    />
                    <p className={`font-ribes text-4xl md:text-5xl font-semibold text-white text-center transition-transform duration-300 ${active ? "group-hover:translate-y-2 group-hover:scale-105" : ""}`}>
                        {title}
                    </p>
                </div>
            </div>
        </AnimatedLink>
    )
}

export default EventCategoryCard