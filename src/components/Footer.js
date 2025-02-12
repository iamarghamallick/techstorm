"use client";
import { actor, inter, pixelify, righteous } from '@/app/fonts'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const [count, setCount] = useState(null);

    const fetchCount = async () => {
        try {
            const response = await fetch('/api/visit-count', { method: 'GET' });
            const data = await response.json();
            setCount(data.count);
        } catch (error) {
            // console.error('Failed to fetch visit count:', error);
        }
    };

    const incrementVisitCount = async () => {
        try {
            await fetch('/api/visit-count', { method: 'POST' });
        } catch (error) {
            // console.error('Failed to increment visit count:', error);
        }
    };

    useEffect(() => {
        fetchCount();
        incrementVisitCount();
    }, []);

    return (
        <footer className='bg-[#01002A] px-4 md:px-12 pt-20 pb-2'>
            <div className='container mx-auto flex flex-col md:flex-row gap-12 md:gap-2 justify-between items-center md:items-start border-b pb-8'>
                <Link href="/" className='flex flex-col justify-center items-center'>
                    <h1 className={`${righteous.className} text-4xl leading-none`}>TechStorm</h1>
                    <h1 className={`${righteous.className} text-[5.75rem] text-[#A4A4A4] leading-none hover:text-white transition-colors duration-300`}>2.25</h1>
                </Link>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Events</h1>
                    <Link href='/events/brainteasers' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Brain Teasers</Link>
                    <Link href='/events/technicals' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Technicals</Link>
                    <Link href='/events/rovers' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Rovers</Link>
                    <Link href='/events/games' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Games</Link>
                    <Link href='/events/creative' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Creative</Link>
                </div>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Member Details</h1>
                    <Link href='/team/faculty' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Faculty Coordinators</Link>
                    <Link href='/team' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Core Members</Link>
                    <Link href='/team/student' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Student Coordinators</Link>
                    <Link href='/team/volunteer' className='text-[#A4A4A4] underline underline-offset-2 hover:text-white transition-colors duration-300'>Volunteers</Link>
                </div>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Connect with us</h1>
                    <div className="flex gap-2">
                        <Link href='https://in.linkedin.com/company/techstorm-2-23' target="_blank">
                            <FiLinkedin className='w-12 h-12 text-[#A4A4A4] hover:text-white transition-colors duration-300' />
                        </Link>
                        <Link href='https://www.facebook.com/techstorm2.23' target="_blank">
                            <FiFacebook className='w-12 h-12 text-[#A4A4A4] hover:text-white transition-colors duration-300' />
                        </Link>
                        <Link href='https://www.instagram.com/techstorm_2.25/' target="_blank">
                            <FiInstagram className='w-12 h-12 text-[#A4A4A4] hover:text-white transition-colors duration-300' />
                        </Link>
                        <Link href='https://x.com/techstorm25/' target="_blank">
                            <FaXTwitter className='w-12 h-12 text-[#A4A4A4] hover:text-white transition-colors duration-300' />
                        </Link>
                    </div>

                    <div className="flex flex-col my-2 mt-10 md:mt-6">
                        <h1 className={`font-ribes text-3xl font-semibold`}>Visitor Count</h1>
                        <p className={`${pixelify.className} text-[#A4A4A4] text-4xl text-center md:text-left hover:text-white transition-colors duration-300 tracking-widest`}>{count || "Loading..."}</p>
                    </div>
                </div>
            </div>

            <p className={`${inter.className} my-6 text-xl text-center`}><Link href="/">TechStorm</Link> &copy; 2025</p>
        </footer >
    )
}

export default Footer