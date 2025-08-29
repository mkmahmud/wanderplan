"use client"
import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"

import { SearchIcon } from "lucide-react"


// @ts-ignore
import { useForm } from "react-hook-form"
import { z } from "zod"

const tourSearch = z.object({
    destination: z.string().min(3).max(50),
    startplace: z.string().min(3).max(50),
    endplace: z.string().min(3).max(50),
    travelers: z.coerce.number().min(1).max(20),
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
import { SearchAndSelect } from "../custom/searchAndSelect"





export function TourSearch() {

    // Define  form.
    const hotelform = useForm<z.infer<typeof tourSearch>>({
        resolver: zodResolver(tourSearch),
        defaultValues: {
            destination: "",
            startplace: "",
            endplace: "",
            travelers: 1,
        },
    })

    //     submit handler.
    function onSubmit(values: z.infer<typeof tourSearch>) {

        console.log(values)
    }


    return (
        <Form {...hotelform}>
            <form onSubmit={hotelform.handleSubmit(onSubmit)} className="space-y-4 md:flex justify-between  items-center md:space-y-0 md:space-x-4 p-2">


                <SearchAndSelect hotelform={hotelform} name="destination" label="Destination" defaultPlaceHolder='Madrid, Spain' />
                <SearchAndSelect hotelform={hotelform} name="startplace" label="Start Place" defaultPlaceHolder='Dhaka, BD' />
                <SearchAndSelect hotelform={hotelform} name="endplace" label="End Place" defaultPlaceHolder='New York, USA' />

                <FormField
                    control={hotelform.control}
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

                <Button size='xl' className="" variant="destructive" type="submit"><SearchIcon /> Search</Button>
            </form>
        </Form>
    )
}