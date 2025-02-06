import TeamSlug from "@/components/TeamSlug";

export default async function TeamSlugPage({ params }) {
    const { slug } = await params; // faculty || student || volunteer

    return (
        <main className="mt-16 md:mt-24 gallery-container min-h-screen flex justify-center p-2 md:px-20">
            <TeamSlug slug={slug} />
        </main>
    );
};