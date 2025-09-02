"use client"
import { MapPin, Users, Clock, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "../../button"
import { redirect } from 'next/navigation';


export default function TourSearchedCard({ image, title, location, duration, groupSize, price }: any) {


    function handleDetails() {
        redirect('/tours/solo/1');
    }

    return (
        <div className="md:flex bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition w-full max-w-5xl my-4">
            {/* Left - Image */}
            <div className="relative w-full md:w-1/3">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={200}
                    className="max-h-[200px] h-full w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-white">
                    Get Points
                </span>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col justify-between flex-1 p-4">
                {/* Title and Location */}
                <div>
                    <h2 className="text-lg font-semibold text-primary">
                        {title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {location}
                    </div>
                </div>

                {/* Details */}
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span> {duration}</span>
                    </div>
                    <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span> {groupSize}</span>
                    </div>
                    <div className="flex items-start">
                        <Info className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                        <span>
                            80% of the fees will be refunded if the booking is canceled more
                            than Seventy-Two (72) hours before the beginning of the
                            experience/tour.
                        </span>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className="flex flex-col items-end justify-between bg-gray-50 px-4 py-2 min-w-[120px]">
                <div className="flex flex-col items-end space-y-1   ">
                    <span className="text-xs text-gray-500">Starting From</span>
                    <span className="text-lg font-bold text-primary">BDT {price}</span>
                    <span className="text-xs text-gray-500">Per Person</span>
                </div>
                <Button className="w-full" size="sm" variant="destructive" onClick={handleDetails}>View Details</Button>
            </div>
        </div>
    )
}
