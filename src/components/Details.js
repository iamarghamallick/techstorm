"use client";
import React from 'react'
import GoogleMap from './GoogleMap'
import { righteous } from '@/app/fonts'
import { motion } from 'framer-motion'

const Details = () => {
    return (
        <div className='p-2 py-8 my-12 flex flex-col md:flex-row gap-8 justify-center items-center'>
            <motion.div
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={`${righteous.className} date-time-container flex flex-col justify-center items-center relative pr-10 md:mr-10 md:w-[25%]`}
            >
                {/* Vertical Line */}
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/5 w-0.5 border-r border-dashed border-white"></span>
                {/* Top Circle */}
                <span className="absolute top-16 left-full transform -translate-x-1/2 w-8 h-8 bg-[#D9D9D9] rounded-full"></span>
                {/* Bottom Circle */}
                <span className="absolute bottom-16 left-full transform -translate-x-1/2 w-8 h-8 bg-[#D9D9D9] rounded-full"></span>

                <h1 className="text-2xl text-center relative after:content-[''] after:block after:h-0.5 after:w-40 after:border-t after:border-dotted after:border-white after:mt-2 after:mx-auto">
                    START
                </h1>

                <h2 className='text-7xl text-[#A1FF90]'>20th</h2>
                <h2 className='text-6xl text-[#A1FF90] leading-[60%] mb-8'>March</h2>
                <h2 className='text-7xl text-[#FF9595]'>22nd</h2>
                <h2 className='text-6xl text-[#FF9595] leading-[60%] mb-8'>March</h2>

                <h1 className="text-2xl text-center relative before:content-[''] before:block before:h-0.5 before:w-40 before:border-t before:border-dotted before:border-white before:mb-2 before:mx-auto">
                    THE END
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='map-container rounded-xl w-11/12 md:w-[35%] z-0'
            >
                <GoogleMap />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={`${righteous.className} date-time-container flex flex-col gap-6 w-11/12 md:w-[40%]`}
            >
                <h1 className="text-2xl text-left relative after:content-[''] after:block after:h-0.5 after:w-full after:border-t after:border-dotted after:border-white after:mt-4 after:mx-auto">VENUE</h1>
                <h1 className='text-3xl md:text-5xl text-[#63B1FF]'>B. P. Poddar Institute of Management and Technology</h1>
                <p className="text-xl text-left relative before:content-[''] before:block before:h-0.5 before:w-full before:border-t before:border-dotted before:border-white before:mb-4 before:mx-auto">137, VIP Rd, Mali Bagan, Poodar Vihar, Poddar Vihar, Kolkata, West Bengal 700052</p>
            </motion.div>
        </div>
    )
}

export default Details