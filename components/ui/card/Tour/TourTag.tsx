 
export default function TourTag({ text, icon }: any) {
    return (
        <div className="text-sm max-w-[200px] font-medium text-primary inline-flex items-center space-x-1 bg-primary/10 p-4   rounded-md">
            <h2 className="font-semibold">{text}</h2>
            {icon}
        </div>
    )
}