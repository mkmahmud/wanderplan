import { Construction } from "lucide-react";

export default function UnderConst() {
    return (
        <div className="mt-20 h-96 flex items-center justify-center">
            <div>
                <div className="    flex flex-col items-center ">

                    <Construction className="h-16 w-16 text-yellow-500 mb-4" />
                </div>
                <h1 className="text-4xl font-semibold text-yellow-500">This Page is Under <b className="text-primary">Construction</b></h1>
            </div>
        </div>
    )
}