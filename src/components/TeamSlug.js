"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { allTeams } from '@/lib/team';
import { poppins, righteous } from '@/app/fonts';

const TeamSlug = ({ slug }) => {
    const router = useRouter();

    const validSlugSet = new Set(["faculty", "student", "volunteer"]);

    const [isValidSlug, setIsValidSlug] = useState(false);
    const [currList, setCurrList] = useState(null);

    useEffect(() => {
        if (validSlugSet.has(slug)) {
            setIsValidSlug(true);
            switch (slug) {
                case "faculty":
                    setCurrList("Faculty Co-ordinators");
                    break;
                case "student":
                    setCurrList("Student Co-ordinators");
                    break;
                case "volunteer":
                    setCurrList("Volunteers");
                    break;
                default:
                    break;
            }
        }
        else
            router.push("/404");
    }, [slug])

    return (
        <div className='container'>
            {isValidSlug && currList && (
                <div className='px-2 md:px-36'>
                    <h1 className={`${poppins.className} text-center text-2xl font-bold`}>{currList} List</h1>
                    <div className={`flex justify-between gap-2 p-4 font-semibold text-xl bg-gray-700 rounded-lg my-4 ${righteous.className}`}>
                        <h1>Event</h1>
                        <h1>Member Name</h1>
                    </div>

                    {allTeams.map((team, index) => (
                        <div key={index} className={`${index === 0 ? "hidden" : ""} flex justify-between gap-2 p-4 my-4 border-t border-white`}>
                            <h1 className={`${poppins.className} uppercase text-sm md:text-xl font-semibold`}>{team.teamName}</h1>
                            <div className="flex flex-col gap-1 md:gap-2">
                                {Array.isArray(team.members[slug]) && team.members[slug].length > 0 ? (
                                    team.members[slug].map((member, index) => (
                                        <h1 key={index} className={`${poppins.className} text-right text-sm md:text-xl`}>
                                            {member.name}
                                        </h1>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-right">No members found.</p>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TeamSlug