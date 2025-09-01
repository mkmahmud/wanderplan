import Image from "next/image";
import { Button } from "../../button";
import { Check } from "lucide-react";

export default function Payments() {

    const handleManage = () => {
        console.log('Clicked Manage');
    }

    return (
        <div className="relative overflow-hidden text-center text-white py-10">
            {/* Background Image */}
            <Image
                src="/images/payment/bg.jpg"
                alt="Payments"
                width={1920}
                height={300}
                className="w-full h-full object-cover absolute inset-0 opacity-10 pointer-events-none"
            />
            {/* Content on top of background */}
            <div className="relative z-10  py-10 flex justify-center items-center">
                <div className="md:flex space-x-6 justify-center items-center">
                    <div className="hidden md:block">

                        <Image src="/images/payment/1.png" alt="Payments" width={300} height={300} className="mx-auto py-4 rounded-lg" />
                        <Image src="/images/payment/2.png" alt="Payments" width={300} height={300} className="mx-auto py-4 rounded-lg" />
                    </div>

                    <div className="mt-20 hidden md:block">
                        <Image src="/images/payment/3.png" alt="Payments" width={300} height={300} className="mx-auto py-4 rounded-lg" />
                        <Image src="/images/payment/4.png" alt="Payments" width={300} height={300} className="mx-auto py-4 rounded-lg" />
                    </div>
                </div>

                <div className="mt-10 text-left text-primary px-10">
                    <Button variant="subtle" size="lg" onClick={handleManage} className="h-12 px-6 bg-gray-100">
                        Easy Payment
                    </Button>
                    <h1 className="max-w-lg  text-4xl font-bold py-4">We offer tours in a
                        range of locations</h1>
                    <p className="max-w-xl">Choose one style or create a package, fill your passports with
                        adventures together.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm  mt-6">
                        <div className="flex justify-start items-center  mt-4">
                            <Check className="inline mr-2 text-green-500" />
                            <p>Security Assurance</p>
                        </div>

                        <div className="flex justify-start items-center  mt-4">
                            <Check className="inline mr-2 text-green-500" />
                            <p>Customer Support</p>
                        </div>

                        <div className="flex justify-start items-center  mt-4">
                            <Check className="inline mr-2 text-green-500" />
                            <p>Transparent Policies</p>
                        </div>

                        <div className="flex justify-start items-center  mt-4">
                            <Check className="inline mr-2 text-green-500" />
                            <p>Reputable Affiliations</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p>Payment is secure and safe</p>
                        <div className="flex justify-start items-center space-x-2 mt-4">
                            <Button variant="subtle" size="lg" className="h-12 px-6 bg-gray-100 border border-gray-200 ">
                                <Image src="/logo/m.png" alt="Payments" width={100} height={30} className="w-full w-full mx-auto py-4 rounded-lg" />
                            </Button>
                            <Button variant="subtle" size="lg" className="h-12 px-6 bg-gray-100 border border-gray-200 ">
                                <Image src="/logo/p.png" alt="Payments" width={100} height={30} className="w-full w-full mx-auto py-4 rounded-lg" />
                            </Button>
                            <Button variant="subtle" size="lg" className="h-12 px-6 bg-gray-100 border border-gray-200 ">
                                <Image src="/logo/s.png" alt="Payments" width={100} height={30} className="w-full w-full mx-auto py-4 rounded-lg" />
                            </Button>
                            <Button variant="subtle" size="lg" className="h-12 px-6 bg-gray-100 border border-gray-200  ">
                                <Image src="/logo/st.png" alt="Payments" width={100} height={30} className="w-full w-full mx-auto py-4 rounded-lg" />
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}