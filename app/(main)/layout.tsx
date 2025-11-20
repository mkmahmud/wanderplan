import "@/app/ui/global.css";
 import { Metadata } from "next";
import Navbar from "../ui/navbar/navbar";
import Footer from "../ui/footer/Footer";
 import ReduxWrapper from "../redux/ReduxWrapper";

export const metadata: Metadata = {
    title: {
        template: "%s | Wanderplan ",
        default: "Wanderplan - Your Travel Companion",
    },
    description: "Discover and plan your next adventure with Wanderplan, the ultimate travel companion.",
    metadataBase: new URL("https://wanderplan.com"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <ReduxWrapper>
            <Navbar />
            <main className="bg-white dark:bg-neutral-700">{children}</main>
            <Footer />
        </ReduxWrapper>

    );
}
