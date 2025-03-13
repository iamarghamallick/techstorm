"use client";
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ deadline }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const [isClient, setIsClient] = useState(false); // To check if we are on the client

    useEffect(() => {
        // Set isClient to true once we are on the client
        setIsClient(true);

        const calculateTimeLeft = () => {
            const targetDate = new Date(deadline); // Set the target date and time
            const currentDate = new Date();

            const difference = targetDate - currentDate;

            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }

            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const { days, hours, minutes, seconds } = timeLeft;

        return (
            `${days > 0 ? `${days}d ` : ''}` +
            `${hours > 0 ? `${hours}h ` : ''}` +
            `${minutes > 0 ? `${minutes}m ` : ''}` +
            `${seconds > 0 ? `${seconds}s` : ''}`
        ).trim();
    };

    // Ensure that the timer only renders on the client
    if (!isClient) {
        return null;
    }

    return (
        <>
            {Object.keys(timeLeft).length > 0 ?
                <span>Closing in {formatTime()}</span> :
                <span></span>
            }
        </>
    );
};

export default CountdownTimer;
