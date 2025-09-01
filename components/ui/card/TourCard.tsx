import { Heart, Star } from "lucide-react";
import { Button } from "../button";

export default function TourCard() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded   overflow-hidden relative group " >
            {/* Tour Image */}
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Tour"
                    className="w-full h-56 object-cover rounded-t-2xl scale-110 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Top Rated
                </span>
                {/* Favorite Button */}
                <Button variant="secondary" size="icon" className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 shadow">
                    <Heart className="w-5 h-5 text-red-500" />
                </Button>
            </div>
            {/* Content */}
            <div className="p-6 px-4  bg-gray-100 rounded-t-2xl relative">

                {/* Reviews */}
                <div className="absolute -top-4  right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center gap-1 shadow text-sm font-medium">
                    <Star className="w-4 h-4 text-yellow-400" />
                    4.7 <span className="text-gray-500 ml-1">(234 reviews)</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore the Alps</h2>
                <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        2 days
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h4m-2 0v4m0 0h-2a2 2 0 01-2-2v-2m4 4h2a2 2 0 002-2v-2" />
                        </svg>
                        3 nights
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M3 20h5v-2a4 4 0 013-3.87M16 7a4 4 0 10-8 0v4a4 4 0 008 0V7z" />
                        </svg>
                        4~6 guests
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-xl font-bold text-gray-800">$899</span>
                        <span className="text-gray-500 text-sm ml-1">/tour</span>
                    </div>

                    <Button variant="destructive" className="px-4 py-2 rounded-lg">Book Now</Button>

                </div>
            </div>
        </div>
    );
}