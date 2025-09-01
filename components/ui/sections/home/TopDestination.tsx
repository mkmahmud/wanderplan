import DestinationsCard from "../../card/DestinationsCard";

export default function TopDestination() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center py-10">
                <h1 className=" text-4xl font-bold">Top Searched Destinations</h1>
                <p>Favorite destinations of professional tourists</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4   gap-6 pb-20">
                <DestinationsCard place="Paris" image="/hero/2.jpg" tours={120} />
                <DestinationsCard place="New York" image="/hero/3.jpg" tours={95} />
                <DestinationsCard place="Tokyo" image="/hero/4.jpg" tours={80} />
                <DestinationsCard place="London" image="/hero/5.jpg" tours={75} />
                <DestinationsCard place="Sydney" image="/hero/6.jpg" tours={60} />
                <DestinationsCard place="Rome" image="/hero/7.jpg" tours={50} />
            </div>
        </div>
    )
}