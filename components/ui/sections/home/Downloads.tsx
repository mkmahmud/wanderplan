import Image from "next/image";
import { Button } from "../../button";

export default function Downloads() {
    return (
        <div className="max-w-7xl mx-auto bg-primary-dark w-full md:flex items-center justify-center  space-x-6">
            <div className="w-full md:w-1/2 text-left text-white px-4 py-8 md:py-  md:px-20">
                <Button variant="destructive" size="lg" className="h-12 px-6">Install APP & Get discount code   </Button>
                <h1 className="max-w-md text-2xl font-bold py-4">Up to 55% Discount
                    and lots of special gifts</h1>
                <div>
                    <Image src="/logo/applestore.png" alt="Apps" width={150} height={50} className="mt-6 mr-4 inline cursor-pointer" />
                    <Image src="/logo/googleplay.png" alt="Apps" width={150} height={50} className="mt-6 inline cursor-pointer" />
                </div>
            </div>
            <div className="w-1/2 hidden md:block">
                <Image src="/images/apps.png" alt="Apps" width={1920} height={200} className="w-full h-full object-cover " />
            </div>
        </div>
    )
}