import Image from "next/image";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";


export default function TopCategoriesCard({ image, title, tours, activities }: { image?: string, title?: string, tours?: number, activities?: number }) {
    return (
        <div className="bg-white rounded-lg border-2 border-gray-100 p-4 overflow-hidden">
            {image && (
                <Image src={image} alt="topCategories" width={1200} height={400} className="rounded-lg shadow-lg" />
            )}
            <div className="flex justify-between items-end mt-4">
                <div>

                    <h3 className="font-bold py-2">{title}</h3>
                    <p className="text-sm text-gray-500">{tours} tours, {activities} Activities</p>
                </div>
                <div>
                    <Button variant="subtle" className="h-8 w-8 px-6 bg-gray-100 hover:bg-gray-200 hover:text-primary"> <ArrowRight /> </Button>
                </div>
            </div>
        </div>
    )
}