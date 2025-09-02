"use client"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// Date Piker
function formatDate(date: Date | undefined) {
    if (!date) {
        return ""
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}


export function DatePicker({ form, name, label }: any) {

    const [opendatePicker, setOpenDatePicker] = React.useState(false)




    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }: any) => (
                <FormItem className="flex flex-col gap-2">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Popover open={opendatePicker} onOpenChange={setOpenDatePicker}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-[200px] justify-start"
                                >
                                    <CalendarIcon className="mr-2" />
                                    {field.value ? formatDate(field.value) : "Select date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    required={true}
                                    selected={field.value}
                                    onSelect={(date: Date) => {
                                        field.onChange(date) // ✅ update react-hook-form
                                        setOpenDatePicker(false)
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />


    )
}