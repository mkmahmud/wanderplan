import { useState } from "react"
import Button from "../buttons/button"

export default function SelectUser() {
    const [guest, setGuest] = useState({ adults: 1, childs: 0 })
    return (
        <div className="p-2 mt-4">

            <p className="text-neutral-500">Guest </p>
            <div className="md:flex ">
                <div className="flex items-center space-x-2">
                    <Button text="-" func={() => setGuest({ ...guest, adults: guest.adults - 1 })} />
                    <input className="w-10 h-10 rounded-lg p-2 text-center" value={guest.adults} type="number" name="adultPerson" id="adultPerson" />
                    <Button text="+" func={() => setGuest({ ...guest, adults: guest.adults + 1 })} />
                    <p>Person</p>
                </div>

            </div>
        </div>
    )
}