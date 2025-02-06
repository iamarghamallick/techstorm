"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

export default function Loading() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => {
                setFadeOut(true);
            }, 500); // Match the transition duration

            setTimeout(() => {
                setLoading(false);
            }, 1000); // Simulate a longer loading time
        };

        // Listen for the page load event
        if (document.readyState === "complete") {
            handlePageLoad(); // If already loaded
        } else {
            window.addEventListener("load", handlePageLoad);
        }

        return () => {
            window.removeEventListener("load", handlePageLoad);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1E1336] to-gray-800 overflow-hidden transition-all duration-500 ease-out ${fadeOut ? "opacity-0 scale-90" : "opacity-100 scale-100 z-[9999]"
                }`}
        >
            <div className="relative">
                <div className="w-32 h-32 rounded-full bg-blue-600 bg-opacity-20 absolute animate-ping" />
                <div className="w-32 h-32 rounded-full bg-blue-500 bg-opacity-40 absolute animate-pulse" />
                <div className="w-32 h-32 rounded-full bg-transparent flex items-center justify-center relative">
                    <ClockLoader color="#ffffff" />
                    <Image
                        height={60}
                        width={60}
                        src="/assets/logo/techstorm-logo.png"
                        alt="TechStorm Logo"
                        className="w-16 h-16 object-contain absolute"
                    />
                </div>
            </div>
            <div className="mt-8 text-center">
                <h1 className="text-3xl font-bold text-white mb-2">TechStorm 2.25</h1>
                <p className="text-blue-300 text-lg">Loading Amazing Experience...</p>
            </div>
        </div>
    );
}
