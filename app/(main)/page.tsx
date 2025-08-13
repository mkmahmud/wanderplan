"use client";
import { ArrowLeft, ArrowRight, Disc2Icon } from "lucide-react";
import Button from "../ui/components/buttons/button";
import Image from "next/image";
import Search from "../ui/components/search/search";

export default function Page() {
  const handleManage = () => {
    console.log('Clicked Manage');
  }
  return (
    <div className="w-full     ">
      {/* Hero */}
      <div
        className="bg-[url('/hero/8.jpg')] bg-cover bg-center h-[80vh] w-full  "
      >
        <div className="  h-full bg-black bg-opacity-70 py-20 relative ">

          {/* Content */}
          <div className="   py-10 flex justify-between items-center px-10 md:px-20 ">
            <div>
              <Button text='Discover The World' icon={<Disc2Icon />} path='/' />
              <h2 className="pt-10 leading-[1.1] text-5xl font-bold text-white">Unleash Your Wanderlust <br />
                Book Your Next Journey</h2>
              <p className="text-neutral-100 pb-10 pt-4" >Crafting Exceptional Journeys: Your Global Escape Planner. Unleash Your Wanderlust:
                Seamless Travel, Extraordinary Adventures lorem10</p>

              <div className="flex space-x-4 mt-10 md:mt-20">
                <Button icon={<ArrowLeft />} func={handleManage} />
                <Button icon={<ArrowRight />} func={handleManage} />

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
