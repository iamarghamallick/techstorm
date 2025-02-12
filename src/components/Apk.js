"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MdOutlineFileDownload } from "react-icons/md";
import { poppins, righteous } from '@/app/fonts';
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

const Apk = () => {
    const [downloadStatus, setDownloadStatus] = useState("Download Installer Package for Android");

    const handleDownload = (e) => {
        e.preventDefault();

        const link = document.createElement("a");
        link.href = "/assets/apk/TechStorm-2-25.apk";
        link.download = "TechStorm-2-25.apk";
        link.click();

        setTimeout(() => {
            setDownloadStatus("Thank you for downloading the app!");
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative md:h-[425px] mx-4 md:px-0 my-10 flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 bg-gradient-to-br from-transparent to-gray-600/50 rounded-xl border-[1px] border-[#e9c6e4]/50"
        >
            <div className='w-full md:h-full md:w-auto rounded-t-xl md:rounded-tr-none md:rounded-l-xl'>
                <ImageWithSkeleton src="/assets/apk/apk_image.png" alt='apk-image' width={500} height={600} className='w-full h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl' />
            </div>

            <div className="h-full flex flex-col justify-around items-center mx-auto gap-4 p-2 md:px-6">
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className={`${poppins.className} text-[#FF9595] md:text-xl text-center font-medium leading-none`}>
                        Make TechStorm 2.25 more accessible
                    </p>
                    <h1 className={`${righteous.className} font-bold text-4xl md:text-5xl text-center text-white mb-5 leading-none`}>
                        Download the app now!
                    </h1>
                </div>

                <button
                    onClick={handleDownload}
                    className="flex md:flex-row justify-center items-center gap-3 bg-[#292929] border border-[#A1FF90] text-[#A1FF90] p-2 md:px-4 rounded-full hover:bg-[#A1FF90] hover:text-black transition-all duration-300"
                >
                    <MdOutlineFileDownload size={30} className='w-20 md:w-auto' />
                    <div className={`${poppins.className} font-semibold md:text-lg text-left pr-2 md:pr-0 leading-tight`}>
                        {downloadStatus}
                    </div>
                </button>
            </div>
        </motion.div>
    )
}

export default Apk