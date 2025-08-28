"use client";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRightIcon, Disc2Icon } from "lucide-react";
import Image from "next/image";
import Search from "../ui/components/search/search";
import { Button } from "@/components/ui/button"
import Link from "next/link";

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
        <div className="  h-full bg-black bg-opacity-70 py-20 relative ">

          {/* Content */}
          <div className="   py-10 flex justify-between items-center px-10 md:px-20 ">
            <div className="md:pr-20">
              {/* <Button text='Discover The World' icon={<Disc2Icon />} path='/' /> */}
              <Button variant={"default"} asChild >
                <Link href="/">Discover The World <Disc2Icon /> </Link>

              </Button>
              <h2 className="pt-10 leading-[1.1] text-5xl font-bold text-white">Unleash Your Wanderlust <br />
                Book Your Next Journey</h2>
              <p className="text-neutral-100 pb-10 pt-4" >Crafting Exceptional Journeys: Your Global Escape Planner. Unleash Your Wanderlust:
                Seamless Travel, Extraordinary Adventures lorem10</p>

              <div className="flex space-x-4 mt-10 md:mt-20">

                <Button variant="secondary" size="icon" className="size-8">
                  <ChevronLeft />
                </Button>
                <Button variant="secondary" size="icon" className="size-8">
                  <ChevronRightIcon />
                </Button>

              </div>
            </div>
            {/* Images */}
            <div className="hidden md:block flex flex-col space-y-4">
              <div>
                <Image
                  src="/hero/2.jpg"
                  alt="Hero Image"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-lg border-4 border-primary"
                />
              </div>
              <div>
                <Image
                  src="/hero/3.jpg"
                  alt="Hero Image"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-lg border-4 border-primary"
                />
              </div>
              <div>
                <Image
                  src="/hero/4.jpg"
                  alt="Hero Image"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-lg border-4 border-primary"
                />
              </div>
            </div>
          </div>
          {/* Search */}
          <Search />
        </div>

      </div>


      {/* Sections */}

      <section className="h-screen flex items-center justify-center bg-neutral-500" >

      </ section >
    </div >
  );
}
