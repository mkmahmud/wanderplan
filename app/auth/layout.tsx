// app/layout.tsx (Root Layout)
import "@/app/ui/global.css";
import { popins } from "@/app/ui/fonts/fonts";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: {
        template: "%s | Wanderplan ",
        default: "Wanderplan - Your Travel Companion",
    },
    description:
        "Discover and plan your next adventure with Wanderplan, the ultimate travel companion.",
    metadataBase: new URL("https://wanderplan.com"),
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${popins.className} antialiased `}>
                
                <main className=" ">{children}</main> {/* Child content of the current layout */}
                
            </body>
        </html>
    );
}
