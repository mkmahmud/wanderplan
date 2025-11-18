"use client";
import TrendingDestinationCard from "../../card/TrendingDestinationCard";

export default function Trending() {
    return (
        <div>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
                <h1 className="text-4xl font-bold   my-4 ">Embracing Adventure
                    Since 2003</h1>
                <p className="text-sm     text-gray-500">Choose one style or create a package, fill your passports with
                    adventures together.</p>
            </div>
            {/* Cards */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6  pb-10">
                {/* Top row: 2 cards */}
                <div className="col-span-2">
                    <TrendingDestinationCard place="Bali" image="/images/destination/1.png" tours={210} />
                </div>
                <div>
                    <TrendingDestinationCard place="Dubai" image="/images/destination/2.png" tours={180} />
                </div>

                <TrendingDestinationCard place="Istanbul" image="/images/destination/3.png" tours={150} />
                <TrendingDestinationCard place="Cape Town" image="/images/destination/4.png" tours={120} />
                <TrendingDestinationCard place="Rio de Janeiro" image="/images/destination/5.png" tours={100} />
            </div>

        </div>
    )
}