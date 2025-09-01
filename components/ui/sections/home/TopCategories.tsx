import { ArrowRight } from "lucide-react";
import { Button } from "../../button";
import TopCategoriesCard from "../../card/topCategoriesCard";

export default function TopCategories() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex justify-between items-center py-10">
                <div className="my-6">
                    <h1 className="text-4xl font-bold">Our Featured Tours</h1>
                    <p className="text-neutral-500 text-sm">Favorite destinations based on customer reviews</p>
                </div>
                <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 items-center md:space-y-0">
                    <Button variant="destructive" size="lg" className="h-12 px-6"> view more <ArrowRight /> </Button>
                </div>
            </div>
            {/* <TopCategoriesCard /> */}
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
                <TopCategoriesCard image="/images/categories/1.png" title="Mountains" tours={456} activities={342} />
                <TopCategoriesCard image="/images/categories/2.png" title="Beaches" tours={123} activities={456} />
                <TopCategoriesCard image="/images/categories/3.png" title="Cities" tours={789} activities={123} />
                <TopCategoriesCard image="/images/categories/4.png" title="Countryside" tours={321} activities={654} />
                <TopCategoriesCard image="/images/categories/5.png" title="Deserts" tours={987} activities={321} />
                <TopCategoriesCard image="/images/categories/6.png" title="Islands" tours={654} activities={987} />
                <TopCategoriesCard image="/images/categories/7.png" title="Islands" tours={654} activities={987} />
                <TopCategoriesCard image="/images/categories/8.png" title="Islands" tours={654} activities={987} />
            </div>
        </div>
    )
}