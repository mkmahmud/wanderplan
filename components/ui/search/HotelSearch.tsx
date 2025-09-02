"use client"
import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"

import { SearchIcon } from "lucide-react"


// @ts-ignore
import { useForm } from "react-hook-form"
import { z } from "zod"

const hotelformSchema = z.object({
    location: z.string().min(3).max(50),
    checkIn: z.date().transform((val) => new Date(val)),
    checkOut: z.date().transform((val) => new Date(val)),

    guests: z.coerce.number().min(1).max(10),
})


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


import { DatePicker } from "../custom/datePicker"
import { SearchAndSelect } from "../custom/searchAndSelect"



export function HotelForm() {

    // Define  form.
    const hotelform = useForm<z.infer<typeof hotelformSchema>>({
        resolver: zodResolver(hotelformSchema),
        defaultValues: {
            location: "",
            checkIn: new Date(),
            checkOut: new Date(),
            guests: 1,
        },
    })

    //     submit handler.
    function onSubmit(values: z.infer<typeof hotelformSchema>) {

        console.log(values)
    }


    return (
        <Form {...hotelform}>
            <form onSubmit={hotelform.handleSubmit(onSubmit)} className="space-y-4 md:flex justify-between  items-center md:space-y-0 md:space-x-4 p-2">

                <SearchAndSelect hotelform={hotelform} name="location" label="Location" defaultPlaceHolder='Barishal, BD' />


                <DatePicker form={hotelform} name="checkIn" label="Check In" />
                <DatePicker form={hotelform} name="checkOut" label="Check Out" />

                <FormField
                    control={hotelform.control}
                    name="guests"
                    render={({ field }: any) => (
                        <FormItem>
                            <FormLabel>Guests</FormLabel>
                            <FormControl>
                                <Input type="number" min={1} max={10} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button size='xl' className="" variant="destructive" type="submit"><SearchIcon /> Search</Button>
            </form>
        </Form>
    )
}