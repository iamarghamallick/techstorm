import { poppins } from "../fonts";
import { sponsors } from "@/lib/sponsors";
import SponsorCard from "@/components/SponsorCard";

export default function Sponsors() {
    return (
        <main className="mt-16 md:mt-24 sponsors-container min-h-screen flex justify-center items-center p-2 py-8">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-center text-white font-bold mb-2 md:mb-0`}>Our Previous Sponsors</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 my-2 md:my-10 gap-2 md:gap-4">
                    {sponsors.map((card, index) => (
                        <SponsorCard key={index} title={card.title} image={card.image} category={card.category} />
                    ))}
                </div>
            </div>
        </main>
    )
}