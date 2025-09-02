"use client"

import TourTag from "@/components/ui/card/Tour/TourTag";
import { TourSearch } from "@/components/ui/search/TourSearch";
import { BluetoothSearching, Bold, ClipboardType, Dessert, Filter, Italic, Moon, Mountain, Sun, Underline, X } from "lucide-react";

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import TourSearchedCard from "@/components/ui/card/Tour/TourSearchedCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function SoloPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className=" container mx-auto px-4 pt-8">

            {/* Search */}
            <div className="mt-10 p-4 bg-neutral-300 rounded-lg shadow-sm">
                <TourSearch />
            </div>


            {
                /* Mobile Filter Button */
                !mobileMenuOpen && <div className="fixed bottom-6 left-0 w-full px-4 md:hidden z-50 flex justify-center">
                    <Button
                        variant="destructive"
                        className="rounded-md md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Filter className="w-5 h-5" /> Filter
                    </Button>
                </div>
            }

            <div>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
                        <div className="bg-white w-3/4 max-w-xs h-full p-4 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Filter    </h2>
                                <Button
                                    variant="ghost"
                                    onClick={() => setMobileMenuOpen(false)}
                                > <X /> </Button>

                            </div>
                            <div className="md:hidden md:w-1/5 mb-4 md:mb-0 bg-gray-100   rounded-lg">
                                <div className="p-4 text-primary">
                                    <p className="font-semibold text-sm">Destination: 33 places found
                                    </p>
                                    <p className="font-semibold text-sm pt-4    ">Filter By</p>
                                </div>
                                <hr className="  w-full bg-gray-300" />
                                <div className="p-4">
                                    <div>
                                        <p className="font-semibold          ">Price Range</p>
                                        <Slider
                                            defaultValue={[50]}
                                            max={100}
                                            step={1}
                                            className="w-full py-2"

                                        />
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <p className="font-bold ">BDT 0</p>
                                            <p className="font  -bold ">BDT 20,000</p>
                                        </div>
                                    </div>
                                    <hr className="  w-full bg-gray-300 my-6" />
                                    <div>
                                        <p className="font-semibold          ">Duration</p>
                                        <div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="less" />
                                                <Label htmlFor="less">Less than 6 hours</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="6to12" />
                                                <Label htmlFor="6to12">6 to 12 hours</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="1to3" />
                                                <Label htmlFor="1to3">1 to 3 days</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="more" />
                                                <Label htmlFor="more">More than 3 days</Label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="  w-full bg-gray-300 my-6" />
                                    <div>
                                        <p className="font-semibold          ">Time</p>
                                        <div className="  py-2">
                                            <ToggleGroup type="multiple" size="lg" className="w-full grid grid-cols-2 gap-2" >
                                                <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="morning" aria-label="Toggle bold">
                                                    <Sun className="h-4 w-4" />
                                                    <p>00-06</p>
                                                </ToggleGroupItem>
                                                <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="morning1" aria-label="Toggle italic">
                                                    <Moon className="h-4 w-4" />
                                                    <p>06-12</p>
                                                </ToggleGroupItem>
                                                <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="afternoon" aria-label="Toggle underline">
                                                    <Sun className="h-4 w-4" />
                                                    <p>12-18</p>
                                                </ToggleGroupItem>
                                                <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="night" aria-label="Toggle underline">
                                                    <Moon className="h-4 w-4" />
                                                    <p>18-24</p>
                                                </ToggleGroupItem>
                                            </ToggleGroup>
                                        </div>
                                    </div>
                                    <hr className="  w-full bg-gray-300 my-6" />
                                    <div>
                                        <p className="font-semibold          ">Tags</p>
                                        <div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="weekends" />
                                                <Label htmlFor="weekends">Weekends Getaways</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="family" />
                                                <Label htmlFor="family">Family Friendly</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="adventure" />
                                                <Label htmlFor="adventure">Adventure</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="nature" />
                                                <Label htmlFor="nature">Nature</Label>
                                            </div>
                                            <div className="flex items-center gap-3 py-2">
                                                <Checkbox id="Beauty" />
                                                <Label htmlFor="Beauty">Beauty</Label>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>



            {/* Content */}
            <div className="md:flex md:space-x-4 mt-10 w-full bg-gray-50  rounded-lg">
                <div className="hidden md:block md:w-1/5 mb-4 md:mb-0 bg-gray-100   rounded-lg">
                    <div className="p-4 text-primary">
                        <p className="font-semibold text-sm">Destination: 33 places found
                        </p>
                        <p className="font-semibold text-sm pt-4    ">Filter By</p>
                    </div>
                    <hr className="  w-full bg-gray-300" />
                    <div className="p-4">
                        <div>
                            <p className="font-semibold          ">Price Range</p>
                            <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                className="w-full py-2"

                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <p className="font-bold ">BDT 0</p>
                                <p className="font  -bold ">BDT 20,000</p>
                            </div>
                        </div>
                        <hr className="  w-full bg-gray-300 my-6" />
                        <div>
                            <p className="font-semibold          ">Duration</p>
                            <div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="less" />
                                    <Label htmlFor="less">Less than 6 hours</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="6to12" />
                                    <Label htmlFor="6to12">6 to 12 hours</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="1to3" />
                                    <Label htmlFor="1to3">1 to 3 days</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="more" />
                                    <Label htmlFor="more">More than 3 days</Label>
                                </div>
                            </div>
                        </div>
                        <hr className="  w-full bg-gray-300 my-6" />
                        <div>
                            <p className="font-semibold          ">Time</p>
                            <div className="  py-2">
                                <ToggleGroup type="multiple" size="lg" className="w-full grid grid-cols-2 gap-2" >
                                    <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="morning" aria-label="Toggle bold">
                                        <Sun className="h-4 w-4" />
                                        <p>00-06</p>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="morning1" aria-label="Toggle italic">
                                        <Moon className="h-4 w-4" />
                                        <p>06-12</p>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="afternoon" aria-label="Toggle underline">
                                        <Sun className="h-4 w-4" />
                                        <p>12-18</p>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem className="bg-primary text-white hover:bg-primary hover:text-white " value="night" aria-label="Toggle underline">
                                        <Moon className="h-4 w-4" />
                                        <p>18-24</p>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                        </div>
                        <hr className="  w-full bg-gray-300 my-6" />
                        <div>
                            <p className="font-semibold          ">Tags</p>
                            <div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="weekends" />
                                    <Label htmlFor="weekends">Weekends Getaways</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="family" />
                                    <Label htmlFor="family">Family Friendly</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="adventure" />
                                    <Label htmlFor="adventure">Adventure</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="nature" />
                                    <Label htmlFor="nature">Nature</Label>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <Checkbox id="Beauty" />
                                    <Label htmlFor="Beauty">Beauty</Label>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-4/5 py-4 px-2 ">

                    <div className="inline-flex   gap-4 overflow-x-scroll w-full   no-scrollbar  px-4">
                        <TourTag text="Mountain Adventure" icon={<Mountain />} />
                        <TourTag text="Beach Getaway" icon={<BluetoothSearching />} />
                        <TourTag text="City Exploration" icon={<ClipboardType />} />

                        <TourTag text="Desert Safari" icon={<Dessert />} />
                        <TourTag text="Desert Safari" icon={<Dessert />} />
                        <TourTag text="Desert Safari" icon={<Dessert />} />
                        <TourTag text="Desert Safari" icon={<Dessert />} />
                        <TourTag text="Desert Safari" icon={<Dessert />} />
                        <TourTag text="Desert Safari" icon={<Dessert />} />
                        <TourTag text="Desert Safari" icon={<Dessert />} />
                    </div>

                    {/* Results */}
                    <div>
                        <TourSearchedCard image="/images/tours/1.jpg" title="Car Transfer" location="Cox's Bazar" duration="4 hours" groupSize="From 1 to 100 people" price="88" />
                        <TourSearchedCard image="/images/tours/2.jpg" title="Boat Ride" location="Sundarbans" duration="2 hours" groupSize="From 1 to 10 people" price="50" />
                        <TourSearchedCard image="/images/tours/3.jpg" title="City Tour" location="Dhaka" duration="3 hours" groupSize="From 1 to 20 people" price="30" />
                        <TourSearchedCard image="/images/tours/4.jpg" title="Mountain Trekking" location="Chittagong" duration="5 hours" groupSize="From 1 to 15 people" price="100" />
                        <TourSearchedCard image="/images/tours/2.jpg" title="Beach Volleyball" location="Cox's Bazar" duration="2 hours" groupSize="From 1 to 12 people" price="40" />
                        <TourSearchedCard image="/images/tours/1.jpg" title="Cultural Dance" location="Dhaka" duration="1 hour" groupSize="From 1 to 30 people" price="20" />

                    </div>

                    <div className="flex justify-between items-center mt-10 px-4 mb-10 shadow-md py-4 bg-white rounded-lg">
                        <p>Need Customize Tour?</p>
                        <Button variant="destructive" className=""> <Link href="/customize-tour">Request</Link></Button>
                    </div>

                </div>
            </div>
        </div>
    );
}