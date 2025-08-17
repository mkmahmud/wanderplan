import Link from "next/link";
import Button from "../buttons/button";
import { Link2, LinkIcon, SearchCheck, Torus } from "lucide-react";
import { useState } from "react";
import { heroSearch } from "@/app/lib/constants";
import Select from "../Inputs/selectgroup";
import SelectDate from "../Inputs/dateGroup";
import SelectUser from "../Inputs/selectUser";




export default function Search() {
    const [activeOption, setActiveOprion] = useState(heroSearch.hotels);

    const search = () => {
        console.log('object');
    }


    return (
        <div className="bg-white md:h-[230px] w-[90%] md:w-[80%] rounded-lg  mx-auto z-10">
            <div className="p-2 md:p-4 md:flex justify-between">
                <div className="grid grid-cols-3 gap-2 my-2 md:flex">
                    <Button text='Tours' func={() => (setActiveOprion(heroSearch.tours))} />
                    <Button text='Hotels' func={() => (setActiveOprion(heroSearch.hotels))} />
                    <Button text='Tickets' func={() => (setActiveOprion(heroSearch.tickets))} />
                    <Button text='Rental' func={() => (setActiveOprion(heroSearch.rental))} />
                    <Button text='Activities' func={() => (setActiveOprion(heroSearch.activities))} />

                </div>
                <div >

                    <Link href={'/'} className="flex items-center "> <LinkIcon className="pr-2" />  Need some help?</Link>
                </div>
            </div>
            {/* Card */}
            <div className="p-2 ">
                {/* Tours */}
                {
                    activeOption === heroSearch.hotels && <div className="border border-neutral-500 rounded md:flex justify-between">
                        {/* Location */}

                        <Select />
                        <SelectDate />
                        <SelectDate />
                        <SelectUser />

                        <div className="flex  justify-center items-center my-4">
                            <Button text="Search" icon={<SearchCheck />} func={search} />

                        </div>

                    </div>
                }
            </div>
        </div>
    )
}