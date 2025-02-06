import MemberCard from "@/components/MemberCard";
import { poppins } from "../fonts";
import { allTeams } from "@/lib/team";
import TeamsAccordion from "@/components/TeamsAccordion";

export default function Team() {
    return (
        <main className="mt-16 md:mt-24 gallery-container min-h-screen flex justify-center items-center p-2 md:px-12">
            <div className="container">
                <h1 className={`${poppins.className} text-4xl text-center text-white font-bold`}>Meet Our Team</h1>

                {/* Core Team Members  */}
                <div className="grid grid-cols-2 md:grid-cols-5 my-2 gap-1 md:gap-2">
                    {allTeams[0].members.map((card, index) => (
                        <MemberCard key={index} index={index} name={card.name} image={card.image} position={card.position} team={card.team} linkedin={card.linkedin} bg_image={card.bg_image} />
                    ))}
                </div>

                {/* Event wise members details  */}
                <TeamsAccordion teams={allTeams} />
            </div>
        </main>
    )
}