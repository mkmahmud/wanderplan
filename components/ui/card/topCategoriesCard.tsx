import Image from "next/image";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";


export default function TopCategoriesCard({ image, title, tours, activities }: { image?: string, title?: string, tours?: number, activities?: number }) {
    return (
        <div className="group bg-white rounded-lg border-2 border-gray-100 p-4 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">

            <div className="relative overflow-hidden rounded-lg">
                {image && (
                    <Image
                        src={image}
                        alt="topCategories"
                        width={1200}
                        height={400}
                        className="
                    rounded-lg shadow-md 
                    transition-transform duration-700 ease-out 
                    group-hover:scale-110   /* Zoom effect */
                "
                    />
                )}

                {/* Soft dark fade on hover */}
                <div className="
            absolute inset-0 bg-black/0 
            group-hover:bg-black/10 
            transition-colors duration-500
        " />
            </div>

            <div className="flex justify-between items-end mt-4">

                <div className="transition-all duration-500 group-hover:translate-x-1">
                    <h3 className="font-bold py-2">{title}</h3>
                    <p className="text-sm text-gray-500">
                        {tours} tours, {activities} Activities
                    </p>
                </div>

                <div>
                    <Button
                        variant="subtle"
                        className="
                    h-8 w-8 px-6 bg-gray-100 
                    transition-all duration-500 
                    hover:bg-gray-200 hover:text-primary
                    group-hover:translate-x-1
                "
                    >
                        <ArrowRight />
                    </Button>
                </div>

            </div>
        </div>

    )
}