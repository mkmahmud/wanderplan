import "@/app/ui/global.css";
import { popins } from "@/app/ui/fonts/fonts";
import { Metadata } from "next";
import Navbar from "../ui/navbar/navbar";
import Footer from "../ui/footer/Footer";
import ReduxProvider from "../redux/providers/provider";

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
        <html lang="en">
            <body className={`${popins.className} antialiased relative w-full mx-auto`}>
                <ReduxProvider>
                    <Navbar />
                    <main className="bg-primary-dark">{children}</main>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}
