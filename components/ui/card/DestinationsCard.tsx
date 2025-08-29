
import { ArrowRight, Flag } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

export default function DestinationsCard({ place, image, tours }: any) {
    return (
        <div className="flex items-center bg-white rounded-xl  border border-neutral-200 p-4 gap-6">
            <Image
                src={image}
                alt="Destination"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16 border-2 border-primary"
            />
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{place}</h3>
                <p className="text-sm text-gray-500 flex space-x-1 items-center"><Flag size={16} /> <span>{tours} Tours</span></p>
            </div>
            <Button variant="subtle" size="sm" className="flex items-center gap-2">
                <Link href={`/tours?destination=${place}`}><ArrowRight size={16} /></Link> 
            </Button>
        </div>
    )
}