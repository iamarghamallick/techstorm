"use client"
import { righteous } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    const pathname = usePathname();

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-screen top-0 p-2 md:px-24 md:py-4 ${isOpen ? "bg-[#1E1336]" : ""} ${isScrolled ? "backdrop-blur-md shadow-md" : ""} transition-colors duration-500 ease-in-out z-30`}>
            <div className="container mx-auto flex justify-between items-center h-11 md:h-16">
                <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    className="logo-container flex gap-4"
                >
                    <Link href='https://bppimt.ac.in' target='_blank'>
                        <Image
                            src='/assets/logo/bppimt-logo.png'
                            alt='bppimt'
                            width={600}
                            height={600}
                            className='w-8 h-8 md:w-14 md:h-14 drop-shadow-lg'
                        />
                    </Link>
                    <Image
                        src='/assets/logo/abhiyantran-logo.png'
                        alt='abhiyantran'
                        width={600}
                        height={600}
                        className='w-8 h-8 md:w-14 md:h-14 drop-shadow-lg'
                    />
                    <Link onClick={() => setIsOpen(false)} href="/">
                        <Image
                            src='/assets/logo/techstorm-logo.png'
                            alt='techstorm'
                            width={600}
                            height={600}
                            className='w-8 h-8 md:w-14 md:h-14 drop-shadow-lg'
                        />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={`hidden md:flex navlinks-container justify-around gap-8 border-2 border-[#7C7C7C]/80 rounded-3xl p-4 px-8 ${righteous.className} leading-8 bg-[#202020]/60 shadow-bottom-right shadow-gray-800/80`}
                >
                    <Link href='/' className={`text-lg group`}>Home
                        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400 ${activeTab === "/" ? "max-w-full" : ""}`}></span>
                    </Link>
                    <Link href='/events' className={`text-lg group`}>Events
                        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400 ${activeTab === "/events" ? "max-w-full" : ""}`}></span>
                    </Link>
                    <Link href='/sponsors' className={`text-lg group`}>Sponsors
                        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400 ${activeTab === "/sponsors" ? "max-w-full" : ""}`}></span>
                    </Link>
                    <Link href='/gallery' className={`text-lg group`}>Gallery
                        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400 ${activeTab === "/gallery" ? "max-w-full" : ""}`}></span>
                    </Link>
                    <Link href='/schedule' className={`text-lg group`}>Schedule
                        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400 ${activeTab === "/schedule" ? "max-w-full" : ""}`}></span>
                    </Link>
                    <Link href='/team' className={`text-lg group`}>Team
                        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400 ${activeTab === "/team" ? "max-w-full" : ""}`}></span>
                    </Link>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden'
                >
                    {isOpen ? <RxCross1 size={30} /> : <GiHamburgerMenu size={30} />}
                </motion.button>
            </div>

            {/* navbar for small screen devices */}
            <nav className={`overflow-hidden fixed top-14 left-0 w-full bg-[#1E1336] flex flex-col md:hidden justify-center items-center gap-4 p-4 ${righteous.className} leading-8 transition-all duration-500 ease-in-out ${isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                <Link onClick={() => setIsOpen(!isOpen)} href='/' className='text-lg'>Home</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/events' className='text-lg'>Events</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/sponsors' className='text-lg'>Sponsors</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/gallery' className='text-lg'>Gallery</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/schedule' className='text-lg'>Schedule</Link>
                <Link onClick={() => setIsOpen(!isOpen)} href='/team' className='text-lg'>Team</Link>
            </nav>
        </header>
    )
}

export default Header