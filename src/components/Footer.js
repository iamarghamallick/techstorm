import { actor, inter, righteous } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#01002A] px-4 md:px-12 pt-20 pb-2'>
            <div className='container mx-auto flex flex-col md:flex-row gap-12 md:gap-2 justify-between items-center md:items-start border-b pb-8'>
                <Link href="/" className='flex flex-col justify-center items-center'>
                    <h1 className={`${righteous.className} text-4xl leading-none`}>TechStorm</h1>
                    <h1 className={`${righteous.className} text-[5.75rem] text-[#A4A4A4] leading-none`}>2.25</h1>
                </Link>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Events</h1>
                    <Link href='/events/brainteasers' className='text-[#A4A4A4] underline underline-offset-2'>Brain Teasers</Link>
                    <Link href='/events/technicals' className='text-[#A4A4A4] underline underline-offset-2'>Technicals</Link>
                    <Link href='/events/rovers' className='text-[#A4A4A4] underline underline-offset-2'>Rovers</Link>
                    <Link href='/events/games' className='text-[#A4A4A4] underline underline-offset-2'>Games</Link>
                    <Link href='/events/creative' className='text-[#A4A4A4] underline underline-offset-2'>Creative</Link>
                </div>

                <div className={`${actor.className} flex flex-col items-center md:items-start`}>
                    <h1 className='font-ribes text-3xl mb-4'>Member Details</h1>
                    <Link href='/team/faculty' className='text-[#A4A4A4] underline underline-offset-2'>Faculty Coordinators</Link>
                    <Link href='/team' className='text-[#A4A4A4] underline underline-offset-2'>Core Members</Link>
                    <Link href='/team/student' className='text-[#A4A4A4] underline underline-offset-2'>Student Coordinators</Link>
                    <Link href='/team/volunteer' className='text-[#A4A4A4] underline underline-offset-2'>Volunteers</Link>
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
                </div>
            </div>

            <p className={`${inter.className} my-6 text-xl text-center`}><Link href="/">TechStorm</Link> &copy; 2025</p>
        </footer>
    )
}

export default Footer