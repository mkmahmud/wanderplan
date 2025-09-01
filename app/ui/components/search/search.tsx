import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { useState } from "react";
import { heroSearch } from "@/app/lib/constants";

import { Button } from "@/components/ui/button";
import { HotelForm } from "@/components/ui/search/HotelSearch";
import { TourSearch } from "@/components/ui/search/TourSearch";





export default function Search() {
    // Active Search Option
    const [activeOption, setActiveOprion] = useState(heroSearch.tours);
   




    return (
        <div className="bg-white py-2 w-[90%] md:w-[80%] max-w-6xl rounded-lg  mx-auto z-10 px-4 shadow-lg">
            <div className="p-2 md:py-4 md:flex justify-between">
                <div className="grid grid-cols-3 gap-2 my-2 md:flex">
                    <Button size="sm" asChild>
                        <button
                            className={activeOption === heroSearch.tours ? "bg-primary-dark text-white px-4 py-2 rounded-lg shadow" : "bg-primary text-black px-4 py-2 rounded-lg shadow"}
                            onClick={() => setActiveOprion(heroSearch.tours)}
                        >
                            Tours
                        </button>
                    </Button>
                    <Button size="sm" asChild>
                        <button
                            className={activeOption === heroSearch.hotels ? "bg-primary-dark text-white px-4 py-2 rounded-lg shadow" : "bg-primary text-black px-4 py-2 rounded-lg shadow"}
                            onClick={() => setActiveOprion(heroSearch.hotels)}
                        >
                            Hotels
                        </button>
                    </Button>

                    <Button size="sm" asChild>
                        <button
                            className={activeOption === heroSearch.activities ? "bg-primary-dark text-white px-4 py-2 rounded-lg shadow" : "bg-primary text-black px-4 py-2 rounded-lg shadow"}
                            onClick={() => setActiveOprion(heroSearch.activities)}
                        >
                            Activities
                        </button>
                    </Button>
                    <Button size="sm" asChild>
                        <button
                            className={activeOption === heroSearch.tickets ? "bg-primary-dark text-white px-4 py-2 rounded-lg shadow" : "bg-primary text-black px-4 py-2 rounded-lg shadow"}
                            onClick={() => setActiveOprion(heroSearch.tickets)}
                        >
                            Tickets
                        </button>
                    </Button>
                </div>
                <div >

                    <Link href={'/'} className="flex items-center "> <LinkIcon className="pr-2" />  Need some help?</Link>
                </div>
            </div>
            {/* Card */}
            <div className="p-2  ">
                {/* Hotels */}
                {
                    activeOption === heroSearch.hotels && <div>
                        <HotelForm />
                    </div>
                }
                {/* Tours */}
                {
                    activeOption === heroSearch.tours && <div>
                        <TourSearch />
                    </div>
                }

                {
                    activeOption === heroSearch.activities && <div>
                        <h2 className="text-lg font-semibold text-center text-error py-4">Activities Search Coming Soon...</h2>
                    </div>
                }

                {
                    activeOption === heroSearch.tickets && <div>
                        <h2 className="text-lg font-semibold text-center text-error py-4">Tickets Search Coming Soon...</h2>
                    </div>
                }
            </div>
        </div>
    )
}