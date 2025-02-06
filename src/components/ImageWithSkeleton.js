"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageWithSkeleton({
    className = "",
    skeletonClassName = "bg-gray-500",
    ...props
}) {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative w-full h-full">
            {loading && (
                <div
                    className={`absolute inset-0 animate-pulse rounded-lg ${skeletonClassName}`}
                />
            )}
            <Image
                {...props}
                className={`${className} transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
                    }`}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
}
