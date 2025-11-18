
import { ArrowRight, Flag } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

export default function DestinationsCard({ place, image, tours }: any) {
    return (
      <div className="
    flex items-center bg-white rounded-xl border border-neutral-200 p-4 gap-6
    transition-all duration-500 ease-out
    hover:shadow-lg hover:-translate-y-1
    group
">
    {/* Destination Image */}
    <div className="relative">
        <Image
            src={image}
            alt="Destination"
            width={64}
            height={64}
            className="
                rounded-full object-cover h-16 w-16 border-2 border-primary
                transition-transform duration-500 ease-out
                group-hover:scale-110
            "
        />
    </div>

    {/* Text */}
    <div className="flex-1 transition-all duration-500 group-hover:translate-x-1">
        <h3 className="text-xl font-bold text-gray-800">{place}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
            <Flag size={16} />
            <span>{tours} Tours</span>
        </p>
    </div>

    {/* Button */}
    <Button
        variant="subtle"
        size="sm"
        className="
            flex items-center gap-2
            transition-all duration-300 
            group-hover:bg-primary group-hover:text-white
            rounded-md
        "
    >
        <Link href={`/tours?destination=${place}`}>
            <ArrowRight size={16} />
        </Link>
    </Button>
</div>

    )
}