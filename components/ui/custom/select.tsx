import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function CustomSelect({ options, onChange, placeholder }: { options: string[], onChange: (value: string) => void, placeholder?: string }) {
    return (
        <Select onValueChange={onChange} >
            <SelectTrigger className="w-full bg-gray-100 rounded  ">
                <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option} value={option}>
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}