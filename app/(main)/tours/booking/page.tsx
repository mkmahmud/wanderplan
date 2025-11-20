"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Coins, Pointer, SlashIcon, Torus, User } from "lucide-react";
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
// @ts-ignore
import { useForm } from "react-hook-form"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
 
import Image from "next/image";
import { setUserInfo } from "@/app/redux/features/bookingSlice";

const bookInfo = z.object({
    traveler: z.string().min(1, "Please select a traveler"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    gender: z.string().min(1, "Please select a gender"),

})



export default function BookingPage() {

    //   Define booking form.
    const bookingform = useForm<z.infer<typeof bookInfo>>({
        resolver: zodResolver(bookInfo),
        defaultValues: {
            traveler: "user",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            gender: "male",
        },
    })
    // Redux 
    const bookingState = useSelector((state: RootState) => state.booking);
    const dispatch = useDispatch();

    //     submit handler.
    function onSubmit(values: z.infer<typeof bookInfo>) {

        // redirect to checkout page with query params.

        console.log("Booking Info: ", bookingState);

        dispatch(setUserInfo({
            FirstName: values.firstName,
            LastName: values.lastName,
            Email: values.email,
            Phone: values.phone,
            gender: values.gender
        }));
        console.log(values)
    }


    return (
        <div className="container mx-auto px-4 pt-20 bg-gray-100 md:flex relative ">
            <div className="w-full md:w-2/3 md:pr-8">

                {/* Breadcrumb */}
                <div className="flex justify-between items-center my-6">
                    <h3 className="text-lg font-semibold text-primary">Review Your Booking
                    </h3>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/tours/solo">Tours</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <Link href="/tours/solo/1">Tours Details</Link>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {/* Tour Details */}
                <div className="bg-white p-2 rounded-lg shadow-md mb-6">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg text-primary">
                                <div>
                                    <h1>Cox's Bazar Airport - Car Transfer | Tue, Sep 02t</h1>
                                    <p className="text-sm">Cox Bazar</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance mt-4">
                                <p className="flex items-center space-x-2"><User /> <span>1 Adult</span></p>
                                <p className="text-sm text-right"><Link href="/tours/solo/1">Tearms And Conditions</Link></p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                {/* Enter Traveler Details  */}
                <h1 className="text-lg font-semibold text-primary">Enter Traveler Details </h1>
                <div className="bg-white p-6 rounded-lg shadow-md my-6">
                    <h4 className="text-semibold">Passenger: Adult (Primary Contact)

                    </h4>
                    <Form {...bookingform}>
                        <form onSubmit={bookingform.handleSubmit(onSubmit)} className="w-full">
                            <FormField
                                control={bookingform.control}
                                name="traveler"
                                render={({ field }: any) => (
                                    <FormItem className="w-full my-10">
                                        <FormLabel>Select Traveler</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Choose Traveler" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">Mahmud</SelectItem>
                                                    <SelectItem value="2">MK</SelectItem>
                                                    <SelectItem value="3">New</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex space-x-4 items-center w-full my-10">
                                <FormField
                                    control={bookingform.control}
                                    name="firstName"
                                    render={({ field }: any) => (
                                        <FormItem className="w-full">
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input className="w-full" placeholder="Enter First Name" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={bookingform.control}
                                    name="lastName"
                                    render={({ field }: any) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input className="w-full" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex space-x-4 items-center w-full my-10">
                                <FormField
                                    control={bookingform.control}
                                    name="gender"
                                    render={({ field }: any) => (
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue="male"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="male" id="male" />
                                                <Label htmlFor="male">Male</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="female" id="female" />
                                                <Label htmlFor="female">Female</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="others" id="others" />
                                                <Label htmlFor="others">Others</Label>
                                            </div>
                                        </RadioGroup>
                                    )}
                                />

                                <FormField
                                    control={bookingform.control}
                                    name="phone"
                                    render={({ field }: any) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input className="w-full" type="number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={bookingform.control}
                                name="email"
                                render={({ field }: any) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input className="w-full" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                size="lg"
                                className="w-full mt-10"
                                variant="destructive"
                                type="submit"
                            >
                                Continue
                            </Button>
                        </form>
                    </Form>

                </div>
            </div>
            <div className="w-full md:w-1/3  ">
                <div className="md:sticky md:top-20 space-y-4">


                    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">

                        <p className="text-gray-500 text-sm">Complete Booking to Earn Rewards</p> <p className="font-bold text-primary flex items-center space-x-2"><Coins /><span> 12 Points</span></p>
                    </div>

                    <div className="bg-white   rounded-lg shadow-md">
                        <div className="flex p-4 space-x-4">
                            <Image
                                src="/images/tours/1.jpg"
                                alt="Tour Image"
                                width={80}
                                height={80}
                                className="max-h-[200px] h-20 w-20 object-cover rounded-t-lg"
                            />
                            <div>
                                <div className="text-sm flex items-center space-x-1 mb-1">
                                    <Torus />
                                    <p>Tour</p>
                                </div>
                                <h2 className="font-semibold text-primary">Radient Fish World </h2>
                                <p className="text-xs">Cox bazar </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="font-semibold text-primary text-sm">Fee Summary</h5>
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <p>Total</p><p>$100</p>
                                </div>
                                <div className="flex justify-between text-sm mt-4">
                                    <p>Convenience Charge
                                    </p><p>$7</p>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <p>Subtotal</p><p>$100</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 text-sm font-bold text-primary p-4 rounded-b-lg flex justify-between items-center">
                            <span>you pay </span>
                            <span>BDT 107</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}