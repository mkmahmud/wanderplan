import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SideContent() {
    return (
        <div className="hidden md:block bg-primary h-screen w-full relative overflow-hidden p-2">
            {/* Top circle Shape */}
            <div className="h-[1000px] w-[1000px] absolute bg-primary-dark rounded-full -top-[500px] -right-[500px] z-0"></div>

            {/* Image */}
            <div className="z-10 relative w-full max-w-lg text-center mx-auto flex flex-col items-center justify-around h-full  ">
                <div className="flex items-center justify-center space-x-4 mb-10 text-white">
                    <StarIcon className="h-6 w-6" />
                    <p>Support</p>
                </div>
                <Image
                    src="/auth.png"
                    alt="Login Image"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg mx-auto"
                />
                <div className="text-white">
                    <h1 className="text-4xl font-bold">Enjoy Ultimate Traveling</h1>
                    <p className="text-neutral-700 mt-6">Analyzing previous trends ensures that businesses always make the right decision. And as the scale of the decision and it’s impact magnifies...</p>
                </div>
                <div>
                    <Image
                        src="/skip.png"
                        alt="Skip Image"
                        width={200}
                        height={50}
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}