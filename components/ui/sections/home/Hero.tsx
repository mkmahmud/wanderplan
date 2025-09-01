import Link from "next/link";
import { Button } from "../../button";
import { EarthIcon } from "lucide-react";
import Search from "@/app/ui/components/search/search";

import { manrope } from "@/app/ui/fonts/fonts";

export default function Hero() {
    return (
        <div
            className="   "
        >
            <div
                className="h-full py-20 relative"
                style={{
                    backgroundImage: "url('/hero/4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

                {/* Content */}
                <div className="relative z-10 py-10 flex justify-center items-center px-10 md:px-20 mt-20">
                    <div className="flex flex-col items-center text-center max-w-5xl">
                        <Button variant="destructive" size="lg" asChild className="h-12">
                            <Link href="/">Discover The World <EarthIcon /> </Link>
                        </Button>
                        <h2 className={`pt-10 leading-[1.1] text-[50px] font-bold text-white ${manrope.className}`}>
                            Your Gateway to Extraordinary Adventures
                        </h2>
                        <p className="text-neutral-100 pb-10 pt-6 max-w-3xl">
                            Pack your bags and let Travila redefine your travel experience. Where
                            every journey is a story waiting to be told
                        </p>
                        <div className="flex space-x-4 mt-10 md:mt-20"></div>
                    </div>
                </div>
                {/* Search */}

            </div>
            <div className="relative z-10 -top-40 md:-top-20 ">
                <Search /> 
            </div>
        </div>
    )
}