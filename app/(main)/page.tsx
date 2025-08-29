"use client";
import { ChevronLeft, ChevronRightIcon, Disc2Icon, EarthIcon } from "lucide-react";

import Search from "../ui/components/search/search";
import { Button } from "@/components/ui/button"
import Link from "next/link";

import { manrope } from "@/app/ui/fonts/fonts";
import DestinationsCard from "@/components/ui/card/DestinationsCard";


export default function Page() {
  const handleManage = () => {
    console.log('Clicked Manage');
  }
  return (
    <div className="w-full     ">
      {/* Hero */}
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
          {/* Top Searched Destinations */}

        </div>
      </div>


      {/* Sections */}

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
    </div >
  );
}
