import "@/app/ui/global.css";
import { popins } from "@/app/ui/fonts/fonts";

import { Metadata } from 'next';

// Set Meta Data for the application
export const metadata: Metadata = {
  title: {
    template: '%s | Wanderplan ',
    default: 'Wanderplan - Your Travel Companion',
  },
  description: 'Discover and plan your next adventure with Wanderplan, the ultimate travel companion.',
  metadataBase: new URL('https://wanderplan.com'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${popins.className} antialiased`}>{children}</body>
    </html>
  );
}
