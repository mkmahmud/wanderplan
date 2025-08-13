export default function SelectDate() {
    return (
        <div className="p-2 mt-4">
            <p className="text-neutral-500">Check In </p>
            <input className="  block w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary focus:ring-primary" type="date" name="date" id="date" />
        </div>
    )
}