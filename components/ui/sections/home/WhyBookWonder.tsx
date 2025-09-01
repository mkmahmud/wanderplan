import { Earth } from "lucide-react";
import { Button } from "../../button";
import WhyWoderPlanCard from "../../card/WhyWoderPlanCard";

export default function WhyWoderPlan() {
    const handleManage = () => {
        console.log('Clicked Manage');
    }
    return (<div className="relative overflow-hidden text-center text-white py-10">
        {/* Background Image */}

        {/* Content on top of background */}
        <div className="relative z-10  py-10 flex justify-center items-center">


            <div className="mt-10 text-left text-primary px-10">
                <Button variant="destructive" size="lg" onClick={handleManage} className="h-12 px-6  my-4">
                    <Earth /> Why Book WonderPlan
                </Button>

                <h1 className="text-4xl font-bold max-w-md my-4 ">Embracing Adventure
                    Since 2003</h1>
                <p className="text-sm max-w-md   text-gray-500">Choose one style or create a package, fill your passports with
                    adventures together.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 text-sm  mt-6">
                    <div>
                        <h1 className="text-4xl font-bold">45+</h1>
                        <p className="text-sm max-w-md   text-gray-500  ">Destinations</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">4k</h1>
                        <p className="text-sm max-w-md   text-gray-500  ">Collaboration</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">20+</h1>
                        <p className="text-sm max-w-md   text-gray-500  ">Years
                            Experience</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">165k+</h1>
                        <p className="text-sm max-w-md   text-gray-500  ">Happy
                            Customers </p>
                    </div>

                </div>
            </div>

            <div className="md:flex space-x-6 justify-center items-center">
                <div className="hidden md:block mt-20 ">
                    <WhyWoderPlanCard color="success" textColor="black" text="300,000+ Experiences" subtext="Make memories around the world." />
                    <WhyWoderPlanCard color="info" textColor="white" text="Reserve now, Pay later" subtext="Book your spot  first, pay later." />
                </div>

                <div className="hidden md:block">
                    <WhyWoderPlanCard color="error" textColor="white" text="Trusted Reviews" subtext="4.8 stars from 160,000+ Trustpilot reviews." />
                    <WhyWoderPlanCard color="warning" textColor="black" text="Security Assurance" subtext="Data security through encryption" /> </div>
            </div>
        </div>
    </div>)
}