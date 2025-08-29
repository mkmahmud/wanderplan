"use client"
import * as React from "react"

import { CheckIcon, MapPin } from "lucide-react"



import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const destinations = [
    {
        value: "paris",
        label: "Paris, France",
    },
    {
        value: "rome",
        label: "Rome, Italy",
    },
    {
        value: "new-york",
        label: "New York, USA",
    },
    {
        value: "tokyo",
        label: "Tokyo, Japan",
    },
    {
        value: "london",
        label: "London, UK",
    },
    {
        value: "barcelona",
        label: "Barcelona, Spain",
    },
    {
        value: "dubai",
        label: "Dubai, UAE",
    },
    {
        value: "bangkok",
        label: "Bangkok, Thailand",
    },
    {
        value: "istanbul",
        label: "Istanbul, Turkey",
    },
    {
        value: "sydney",
        label: "Sydney, Australia",
    },
]


export function SearchAndSelect({ hotelform, name, label , defaultPlaceHolder}: any) {
    //  Location select
    const [open, setOpen] = React.useState(false)


    return (
        <FormField
            control={hotelform.control}
            name={name}
            render={({ field }: any) => (
                <FormItem className="flex flex-col">
                    <FormLabel className="my-2">{label}</FormLabel>
                    <FormControl>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="subtle"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-start"
                                >
                                    <MapPin />
                                    {field.value
                                        ? destinations.find((f) => f.value === field.value)?.label
                                        : defaultPlaceHolder}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search destination..." />
                                    <CommandList>
                                        <CommandEmpty>No destination found.</CommandEmpty>
                                        <CommandGroup>
                                            {destinations.map((destination) => (
                                                <CommandItem
                                                    key={destination.value}
                                                    value={destination.value}
                                                    onSelect={(currentValue) => {
                                                        field.onChange(currentValue) // Update react-hook-form
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            field.value === destination.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {destination.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </FormControl>
                    <FormMessage /> {/* Shows validation errors */}
                </FormItem>
            )}
        />
    )
}