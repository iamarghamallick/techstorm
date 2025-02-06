import EventCategorySlug from "@/components/EventCategorySlug";

export default async function EventDetails({ params }) {
    const { slug } = await params;

    return (
        <main className="mt-16 md:mt-24 event-details-container min-h-screen flex justify-center p-2 md:px-10 py-8">
            <EventCategorySlug slug={slug} />
        </main>
    );
}
