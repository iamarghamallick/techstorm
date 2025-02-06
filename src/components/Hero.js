"use client";
import { righteous } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import Ribbon from './Ribbon'
import { motion } from 'framer-motion';

const AnimatedImage = motion(Image);

const Hero = () => {
    return (
        <div className='relative py-2 px-2 md:px-20 min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-96px)] flex flex-col justify-around items-center gap-2 select-none'>
            <div className='flex flex-col gap-4 md:gap-8 justify-center items-center'>

                {/* below div is added to fix the design issue on mobile screens */}
                {/* and is kept hidden on large screens and invisible in mobile screens (taking the space but not visible)  */}
                <div className="flex w-full items-center">
                    <Image
                        src='/assets/hero/2-25.svg'
                        alt=''
                        width={10}
                        height={10}
                        className='w-5/12 invisible md:hidden'
                        style={{
                            mixBlendMode: 'color-dodge',
                            filter: 'drop-shadow(2px 3px 2px white)'
                        }}
                        priority
                    />
                </div>

                <AnimatedImage
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3 }}
                    src='/assets/hero/techstorm.svg'
                    alt='techstorm'
                    width={1217}
                    height={187}
                    className='w-full'
                    style={{
                        mixBlendMode: 'color-dodge',
                        filter: 'drop-shadow(2px 3px 2px white)'
                    }}
                    priority
                />

                <div className="flex w-full items-center">
                    <AnimatedImage
                        initial={{ opacity: 0, x: "30px" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3 }}
                        src='/assets/hero/2-25.svg'
                        alt='2.25'
                        width={334}
                        height={176}
                        className='w-5/12'
                        style={{
                            mixBlendMode: 'color-dodge',
                            filter: 'drop-shadow(2px 3px 2px white)'
                        }}
                        priority
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: "50px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                className="flex items-center"
            >
                <p className={`${righteous.className} w-11/12 text-base md:text-lg text-[#BEBEBE] leading-tight md:leading-normal`}>Step into the future with <span className='bg-[#AF52DE] text-black rounded-2xl px-2 capitalize font-ribes'>TECHSTORM 2.25</span> the flagship technical fest of B. P. Poddar Institute of Management and Technology, inspired by the limitless potential of the metaverse. Celebrating its 12th edition in 2025, TECHSTORM transcends boundaries, blending innovation and virtual realms to ignite the spirit of technological brilliance like never before.</p>
            </motion.div>

            <div className='absolute -bottom-12'>
                <Ribbon />
            </div>
        </div>
    )
}

export default Hero