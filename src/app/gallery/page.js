"use client";
import { gallery } from "@/lib/gallery";
import { poppins, righteous } from "../fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

export default function Gallery() {
    return (
        <main className="mt-16 md:mt-24 gallery-container min-h-screen flex flex-col items-center p-2 md:p-8 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-center text-white font-bold`}>Gallery</h1>
                <p className={`${righteous.className} text-gray-400 text-center px-2`}>Glimpses from TechStorm 2.24</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-8 md:px-8">
                    {gallery.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: "30px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            key={index}
                            className="gallery-item mx-auto relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Image with hover zoom and techy animation */}
                            <ImageWithSkeleton
                                src={item.image}
                                alt="gallery pic"
                                width={400}
                                height={300}
                                className="aspect-square object-cover w-full h-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 grayscale group-hover:filter-none"
                            />

                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Title Badge */}
                            <span className="absolute top-2 md:top-4 right-2 md:right-4 bg-gray-800/80 rounded-lg px-4 py-2 text-white text-xs md:text-sm font-semibold transition-transform duration-500 group-hover:scale-105 group-hover:translate-y-1">
                                {item.title}
                            </span>

                            {/* Animated Border Glow */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-pulse"></div>

                            {/* Floating techy overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-indigo-500 text-xl md:text-2xl font-bold animate-bounce">⚡</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}