import { Earth } from "lucide-react";


export default function WhyWoderPlanCard({ color, textColor, text, subtext }: any) {

    return (
        <div className={`h-48 w-64 bg-${color} rounded-lg flex flex-col justify-center items-center space-y-2 p-4 text-${textColor} mt-4`}>

            <Earth className="mx-auto" />


            <h3 className="text-lg font-bold">{text}</h3>
            <p className="text-sm max-w-xs  ">{subtext}</p>

        </div>
    )
}