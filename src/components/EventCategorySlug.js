"use client";
import React, { useEffect, useState } from 'react'
import { events } from "@/lib/events";
import { useRouter } from 'next/navigation';
import EventCategoryCard from './EventCategoryCard';
import EventCard from './EventCard';
import { allEvents } from '@/lib/event-details/all-events';
import Link from 'next/link';
import { toLinkText } from '@/utils/toLinkText';
import { motion } from 'framer-motion';

const AnimatedLink = motion(Link);

const EventCategorySlug = ({ slug }) => {
    const router = useRouter();

    const validEventCategories = events.reduce((map, event, index) => {
        map.set(event.title.toLowerCase().replace(/\s+/g, ''), index);
        return map;
    }, new Map());

    const [isValidSlug, setIsValidSlug] = useState(false);
    const [currEvents, setCurrEvents] = useState(null);

    useEffect(() => {
        if (!validEventCategories.has(slug)) {
            router.push("/404");
        } else {
            setCurrEvents(events[validEventCategories.get(slug)]);
            setIsValidSlug(true);
        }
        // console.log(allEvents.get("omegatrix"));
    }, [slug]);

    const getMdGridCols = (eventCount) => {
        switch (eventCount) {
            case 1:
                return "md:grid-cols-1";
            case 2:
                return "md:grid-cols-2";
            default:
                return "md:grid-cols-6";
        }
    }

    const getMdGridColSpan = (index, eventCount) => {
        switch (index) {
            case 0:

            case 1:

            case 2:
                if (eventCount >= 3)
                    return "md:col-span-2";
                return "";
            case 3:
                return "md:col-span-3 md:w-full md:flex md:flex-row-reverse";
            case 4:
                return "md:col-span-3 md:w-full md:flex";
            default:
                return "";
        }
    }

    return (
        <div className="container">
            {isValidSlug && currEvents && <div className="">
                <EventCategoryCard active={false} title={currEvents.title} icon={currEvents.icon} image={currEvents.image} />
                <div className={`w-full grid grid-cols-1 ${getMdGridCols(currEvents.eventCount)} gap-4 md:gap-8 my-8`}>
                    {currEvents.eventNames.map((card, index) => {
                        const event = allEvents.get(card);
                        if (!event) {
                            console.error(`Event not found for card: ${card}`);
                            return null;
                        }
                        return (
                            <AnimatedLink
                                initial={{ opacity: 0, y: "30px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={card}
                                href={"/eventdetails/" + toLinkText(event.link_title)}
                                className={`${getMdGridColSpan(index, currEvents.eventCount)} m-auto`}
                            >
                                <EventCard
                                    title={event.title}
                                    icon={event.icon}
                                    image={event.bgImage}
                                />
                            </AnimatedLink>
                        );
                    })}
                </div>
            </div>}
        </div >
    )
}

export default EventCategorySlug