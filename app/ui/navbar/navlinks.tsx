import { EqualApproximately, Contact, User, ArrowDown, LayoutDashboard } from "lucide-react";
export const navlinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Tours",
        href: "/tours",
        icon: <LayoutDashboard className="h-6 w-6" />,
        dropdown: [
            {
                type: "group",
                label: "Tours",
                children: [
                    { type: "item", label: "Solo", href: "/tours/solo" },
                    { type: "item", label: "Package", href: "/tours/package" },
                    { type: "item", label: "Group", href: "/tours/group" },
                ]
            }
        ]
    },
    {
        label: "Destinations",
        href: "/destinations",
        icon: <EqualApproximately className="h-6 w-6" />
    },
    {
        label: "Activities",
        href: "/activities",
        icon: <Contact className="h-6 w-6" />,
        dropdown: [
            {
                type: "group",
                label: "Activities",
                children: [
                    { type: "item", label: "Adventure", href: "/activities/adventure" },
                    { type: "item", label: "Cultural Tours", href: "/activities/cultural" },
                    { type: "item", label: "Wildlife Safari", href: "/activities/wildlife" },
                    { type: "item", label: "Water Sports", href: "/activities/watersports" },
                    { type: "item", label: "Hiking & Trekking", href: "/activities/hiking" },
                    { type: "item", label: "Food & Culinary", href: "/activities/culinary" }
                ]
            }
        ]
    },
    {
        label: "Hotels",
        href: "/hotels",
        icon: <User className="h-6 w-6" />
    },
    {
        label: "Rental",
        href: "/rental",
        icon: <ArrowDown className="h-6 w-6" />,
        dropdown: [
            {
                type: "group",
                label: "Rental",
                children: [
                    { type: "item", label: "Bike", href: "/rental/bike" },
                    { type: "item", label: "Car", href: "/rental/car" },
                    { type: "item", label: "Jeep", href: "/rental/jeep" },
                    { type: "item", label: "Boat", href: "/rental/boat" }
                ]
            }
        ]
    },
    {
        label: "Tickets",
        href: "/tickets",
        icon: <LayoutDashboard className="h-6 w-6" />,
        dropdown: [
            {
                type: "group",
                label: "Tickets",
                children: [
                    { type: "item", label: "Air", href: "/tickets/air" },
                    { type: "item", label: "Bus", href: "/tickets/bus" },
                    { type: "item", label: "Train", href: "/tickets/train" },
                    { type: "item", label: "Cruise", href: "/tickets/cruise" }
                ]
            }
        ]
    }
]
