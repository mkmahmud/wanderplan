
import { ArrowRight, Flag } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

export default function TrendingDestinationCard({ place, image, tours }: any) {
    return (
        <div
            className="flex items-center min-h-[250px] rounded-xl border border-neutral-200 p-4 gap-6 relative overflow-hidden"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
            <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Flag size={18} />
                    {place}
                </h3>
                <p className="text-sm text-white">{tours} tours available</p>
                <Link href={`/destinations/${place}`} passHref>
                    <Button variant="secondary" className="mt-2 flex items-center gap-1">
                        Explore <ArrowRight size={16} />
                    </Button>
                </Link>
            </div>
        </div>
    )
}