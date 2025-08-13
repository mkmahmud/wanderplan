export default function Select() {
    return (
        <div className="p-2 mt-4">
            <p className="text-neutral-500">Location</p>
            <select className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary focus:ring-primary" name="location" id="location"  >
                <option value="Selected ">Selected City</option>
                <option value="New York"> New York</option>
                <option value="Boston">Boston</option>
                <option value="Florida">Florida</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Bali">Bali</option>
            </select>
        </div>
    )
}