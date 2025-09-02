"use client"

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Check, Clock, Dock, Dot, Earth, Info, InfoIcon, MapPin, Option, SearchIcon, TrafficCone, Users, X } from "lucide-react";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { DatePicker } from "@/components/ui/custom/datePicker";


// @ts-ignore
import { useForm } from "react-hook-form"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const bookInfo = z.object({
    date: z.date().transform((val) => new Date(val)),
    travelers: z.coerce.number().min(1).max(20),
})



export default function SoloTourDetails() {

    //   Define booking form.
    const bookingform = useForm<z.infer<typeof bookInfo>>({
        resolver: zodResolver(bookInfo),
        defaultValues: {
            date: new Date(),
            travelers: 1,
        },
    })


    //     submit handler.
    function onSubmit(values: z.infer<typeof bookInfo>) {

        console.log(values)
    }

    return (
        <div className="container mx-auto px-4 mt-20  ">
            <div className="md:flex space-x-10 bg-gray-100 mt-6">
                <div className="w-full md:w-2/3 pr-4">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <Image
                                    src="/images/destination/1.png"
                                    alt="Image 1"
                                    width={500}
                                    height={300}
                                    className="object-cover h-[400px] w-full"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="/images/destination/2.png"
                                    alt="Image 2"
                                    width={500}
                                    height={300}
                                    className="object-cover h-[400px] w-full"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="/images/destination/3.png"
                                    alt="Image 3"
                                    width={500}
                                    height={300}
                                    className="object-cover h-[400px] w-full"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="w-full md:w-1/3  flex ">
                    <div className="flex flex-col   flex-1 p-2 md:p-4">
                        {/* Title and Location */}
                        <div>
                            <h2 className="text-lg font-semibold text-primary">
                                Cox's Bazar Airport - Car Transfer

                            </h2>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                Cox's Bazar
                            </div>
                        </div>

                        {/* Details */}
                        <div className="mt-3 text-sm text-gray-600 space-y-1">
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                <span> 4 hours</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2 text-gray-400" />
                                <span> 1 ~ 10</span>
                            </div>
                            <div className="flex items-start">
                                <Info className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                                <span>
                                    80% of the fees will be refunded if the booking is canceled more
                                    than Seventy-Two (72) hours before the beginning of the
                                    experience/tour.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="bg-gray-100  mt-4">
                {/* Top */}
                <div className="py-2">
                    <Button variant="subtle"  > Book Now </Button>
                    <Button variant="subtle"  >  ETC </Button>
                    <Button variant="subtle"  > Check </Button>
                </div>
                <hr className=" w-full" />

                <div className="flex flex-row-reverse md:flex-row  space-x-10 p-4 md:relative">


                    {/* Overview */}
                    <div className="w-full md:w-2/3 pr-4">

                        <Accordion
                            type="multiple"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg text-primary">      Overview </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-sm mb-2">
                                        Start your trip stress-free with GoZayaan's convenient private car transfers from Cox's Bazar Airport. We offer a diverse selection of vehicles to suit individuals, couples, and large groups heading to hotels and resorts near Sugandha, Laboni, and Kolatoli points, as well as Royal Tulip Sea Pearl Resort and Spa and Bay Watch Hotel. Enjoy a comfortable and cost-effective one-way journey. After booking, you'll receive your driver's contact details via email, and your car will be waiting at the airport for your specified pickup.
                                    </p>
                                    <p className="text-sm">
                                        For a customized pick and drop car rental service, please call our Hotline number +8809678332211
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg text-primary">      Location </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-sm">
                                        <b>Pick-Up:</b> Cox's Bazar Airport, Cox's Bazar Hotel-Motel Zone and Inani
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg text-primary">      Timing </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-sm">
                                        <b>Duration:</b> 4 Hours
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg text-primary">      Inclusion & Exclusion </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <div>
                                        <p ><b>Inclusion:</b> </p>
                                        <p className="flex space-x-2 items-center"><Check className="text-sm text-primary" /> <span>Private car transfer, Driver's contact details</span></p>
                                        <p className="flex space-x-2 items-center"><Check className="text-sm text-primary" /> <span>Private car transfer, Driver's contact details</span></p>
                                        <p className="flex space-x-2 items-center"><Check className="text-sm text-primary" /> <span>Private car transfer, Driver's contact details</span></p>
                                        <p className="flex space-x-2 items-center"><Check className="text-sm text-primary" /> <span>Private car transfer, Driver's contact details</span></p>
                                        <p className="flex space-x-2 items-center"><Check className="text-sm text-primary" /> <span>Private car transfer, Driver's contact details</span></p>
                                        <p className="flex space-x-2 items-center"><Check className="text-sm text-primary" /> <span>Private car transfer, Driver's contact details</span></p>
                                    </div>
                                    <div>
                                        <p ><b>Exclusion:</b> </p>
                                        <p className="flex space-x-2 items-center"><X className="text-sm text-error" /> <span>Personal expenses, Gratuities</span></p>
                                        <p className="flex space-x-2 items-center"><X className="text-sm text-error" /> <span>Personal expenses, Gratuities</span></p>
                                        <p className="flex space-x-2 items-center"><X className="text-sm text-error" /> <span>Personal expenses, Gratuities</span></p>
                                        <p className="flex space-x-2 items-center"><X className="text-sm text-error" /> <span>Personal expenses, Gratuities</span></p>
                                        <p className="flex space-x-2 items-center"><X className="text-sm text-error" /> <span>Personal expenses, Gratuities</span></p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-lg text-primary">      Description </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-sm">
                                        Experience seamless and stress-free transfers in Cox's Bazar with GoZayaan's convenient private car service. Upon arrival at the airport, your designated car, chosen from our diverse fleet including Sedan, Hiace, Noah, X-Noah, and CNG vehicles, will be readily waiting for you right outside your specified pickup point. Similarly, for departures or other travel needs, your pre-booked car will arrive directly at your hotel. To ensure a smooth connection, we provide you with the contact number of your experienced driver in advance, allowing you to communicate with them directly before your journey. For your comfort and well-being, our drivers will consistently wear face masks throughout the transfer. Each vehicle is also thoughtfully equipped with an ample supply of tissue paper, a refreshing air freshener, and mosquito repellent spray. With GoZayaan, enjoy the flexibility of reaching any hotel, resort, or restaurant located throughout the wider Cox's Bazar area in a comfortable and cost-effective manner, whether you are traveling alone, as a couple, or with a large group.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-lg text-primary">      Additional Information </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <div>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger className="text-lg text-primary">     Travel Tips</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <div>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger className="text-lg text-primary">      Policy</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <div>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>
                                        <p className="flex space-x-2 items-center"><Dot className="text-sm text-primary" /> <span>Our car transfer service allows you to reach any hotel, resort, or restaurant throughout the Cox's Bazar area, offering you complete flexibility.</span></p>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>




                        </Accordion>

                    </div>
                    {/* Booking Information */}
                    <div className="w-full md:w-1/3  ">
                        <div className="md:sticky md:top-20 space-y-4">


                            <div className="bg-white p-4 rounded-lg shadow-md">

                                <Form {...bookingform}>
                                    <form onSubmit={bookingform.handleSubmit(onSubmit)} className=" ">
                                        <div className="my-4">

                                            <DatePicker form={bookingform} name="date" label="Journey Date" />
                                        </div>

                                        <FormField
                                            control={bookingform.control}
                                            name="travelers"
                                            render={({ field }: any) => (
                                                <FormItem>
                                                    <FormLabel>Number of Travelers</FormLabel>
                                                    <FormControl>
                                                        <Input type="text" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="py-6 text-center ">
                                            <p className="text-sm">Starting from</p>
                                            <h1 className="font-bold text-lg text-primary">BDT 88</h1>
                                        </div>

                                        <Button size='lg' className="w-full" variant="destructive" type="submit">  Continue</Button>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}