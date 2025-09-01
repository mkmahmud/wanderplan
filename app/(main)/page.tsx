"use client";

import Hero from "@/components/ui/sections/home/Hero";
import TopDestination from "@/components/ui/sections/home/TopDestination";
import Featured from "@/components/ui/sections/home/Featured";
import Payments from "@/components/ui/sections/home/Payments";
import TopCategories from "@/components/ui/sections/home/TopCategories";
import Downloads from "@/components/ui/sections/home/Downloads";
import WhyWoderPlan from "@/components/ui/sections/home/WhyBookWonder";
import Trending from "@/components/ui/sections/home/Trending";


export default function Page() {

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero />
      {/* Sections Top Destinations */}
      <TopDestination />
      {/* Our Featured Tours */}
      <Featured />
      {/* Payments */}
      <Payments />
      {/* Top Categories */}
      <TopCategories />
      {/* Download Apps */}
      <Downloads />
      {/* Why Book Wonder Plan */}
      <WhyWoderPlan />
      {/* Trending Destination */}
      <Trending />
    </div >
  );
}
