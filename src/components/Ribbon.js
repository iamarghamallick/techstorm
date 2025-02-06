"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Ribbon = () => {
    return (
        <div className="relative h-12 bg-black/80 flex select-none">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {[...Array(15)].map((_, index) => (
                    <div key={index} className="flex items-center gap-8 mr-8">
                        <div className="font-stretchpro text-xl text-white">TEECHSTOORM</div>
                        <Image
                            src="/assets/logo/techstorm-logo.png"
                            alt="techstorm"
                            width={600}
                            height={600}
                            className="w-7 h-7"
                        />
                    </div>
                ))}
            </motion.div>

            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {[...Array(15)].map((_, index) => (
                    <div key={index} className="flex items-center gap-8 mr-8">
                        <div className="font-stretchpro text-xl text-white">TEECHSTOORM</div>
                        <Image
                            src="/assets/logo/techstorm-logo.png"
                            alt="techstorm"
                            width={600}
                            height={600}
                            className="w-7 h-7"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Ribbon;
