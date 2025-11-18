import TourCard from "../../card/TourCard";
import { CustomSelect } from "../../custom/select";

export default function Featured() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex justify-between items-center py-10">
                <div className="my-6">
                    <h1 className="text-4xl font-bold">Our Featured Tours</h1>
                    <p className="text-neutral-500 text-sm">Favorite destinations based on customer reviews</p>
                </div>
                <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 items-center md:space-y-0">
                    <CustomSelect options={['Popular', 'Recommended', 'Price: Low to High', 'Price: High to Low']} onChange={(value) => console.log(value)} placeholder="Sort By" />
                    <CustomSelect options={['All', 'Adventure', 'Cultural', 'Relaxation', 'Wildlife']} onChange={(value) => console.log(value)} placeholder="Category" />
                    <CustomSelect options={['All', '1 Day', '2-3 Days', '4-7 Days', '8+ Days']} onChange={(value) => console.log(value)} placeholder="Duration" />
                    <CustomSelect options={['All', 'Budget', 'Standard', 'Luxury']} onChange={(value) => console.log(value)} placeholder="Price Range" />
                </div>
            </div>
            {/* Cards */}
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                <TourCard image='/images/cards/1.jpg' />
                <TourCard image='/images/cards/2.jpg' />
                <TourCard image='/images/cards/4.jpg' /> 

            </div>
        </div>
    )
}