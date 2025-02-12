"use client";
import { righteous } from '@/app/fonts';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from "react-icons/go";
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

const Gallery = () => {
    return (
        <div className='px-6 md:px-2 py-8 my-8 flex flex-col md:flex-row gap-4 justify-center items-center md:h-[530px] relative'>

            {/* bg effects: styled in /src/app/globals.css  */}
            {/* top center  */}
            <div className="home-bg-gallery-top md:hidden"></div>

            <motion.div
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='w-full md:w-2/5 md:h-full'
            >
                <ImageWithSkeleton src='/assets/gallery/img6.JPG' alt='gallery-image-1' width={400} height={400} className='grayscale w-full h-full object-cover rounded-lg aspect-square transition-colors duration-300 hover:filter-none' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 w-full md:w-[25%] md:h-full"
            >
                <ImageWithSkeleton src='/assets/gallery/img9.JPG' alt='gallery-image-2' width={400} height={400} className='grayscale w-full h-full object-cover rounded-lg aspect-square transition-colors duration-300 hover:filter-none' />
                <ImageWithSkeleton src='/assets/gallery/img4.JPG' alt='gallery-image-3' width={400} height={400} className='grayscale w-full h-full object-cover rounded-lg aspect-square transition-colors duration-300 hover:filter-none' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="md:grid md:grid-rows-3 gap-4 w-full md:w-[35%] md:h-full row-span-2"
            >
                <div className='hidden md:block row-span-2 grayscale w-full h-full object-cover rounded-lg'>
                    <ImageWithSkeleton src='/assets/gallery/img13.jpg' alt='gallery-image-4' width={400} height={400} className='hidden md:block row-span-2 grayscale w-full h-full object-cover rounded-lg transition-colors duration-300 hover:filter-none' />
                </div>

                <Link
                    href='/gallery'
                    className='flex flex-col gap-2 justify-center items-center row-span-1 bg-[#262626] rounded-lg py-8 md:py-0 group hover:shadow-lg hover:shadow-green-400 transition-all duration-300'
                >
                    <div className="flex gap-2 justify-center items-center group-hover:scale-105 transition-transform duration-300">
                        <h1
                            className={`${righteous.className} text-3xl text-[#00FFBB] group-hover:text-green-300 transition-colors duration-300`}
                        >
                            GALLERY
                        </h1>
                        <GoLinkExternal
                            color='#00FFBB'
                            size={30}
                            className='group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                    <p
                        className={`${righteous.className} text-[#808080] text-center px-8 md:px-20 leading-none group-hover:text-[#FFFFFF] transition-colors duration-300`}
                    >
                        Click to view glimpses from TechStorm 2.24
                    </p>
                </Link>
            </motion.div>
        </div>
    )
}

export default Gallery