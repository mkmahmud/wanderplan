"use client";
import "../ui/global.css";
import ReduxProvider from "../redux/providers/provider";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// app/dashboard/layout.tsx (Dashboard Layout)
import { useRouter } from "next/navigation";
import { Edit, LayoutDashboard, Settings, Users } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();
  return (
    <html>
      <body>
        <ReduxProvider>

          <div className="container mx-auto h-screen">
            <nav className="flex items-center justify-between   px-6 bg-gray-100 mb-6">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
                  <Image
                    src="/logo.png"
                    alt="Wanderplan Logo"
                    width={40}
                    height={40}
                    className="rounded-full py-2 "
                  />
                  <h2>WonderPlan</h2>
                </Link>
              </div>

              <div>
                <Button variant="destructive" onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' });
                  localStorage.clear();
                  router.push('/auth/login');
                }} className="mr-4 bg-error">Log Out</Button>
              </div>
            </nav>
            <div className="flex  flex-col md:flex-row md:overflow-hidden space-x-4 ">
              {/* Sidebar */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <div className="w-full bg-gray-100   max-w-[300px] pb-4">
                  <h2 className="text-lg font-bold"> </h2>
                  {/*   sidebar content  */}
                  <div className="flex justify-between  items-center bg-primary/10 rounded-lg   p-2">
                    <div>
                      <Image
                        src="/logo.png"
                        alt="Sidebar Image"
                        width={60}
                        height={60}
                        className="rounded-full mx-auto mb-4 bg-gray-300 p-1"
                      />
                    </div>
                    <div>
                      <Button variant="ghost" className="w-full text-left mt-4 font-bold text-lg"> <Edit /> <span>Edit</span></Button>
                    </div>
                  </div>
                  <div>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <Link href="/dashboard/personalinfo" className="block px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2">
                          <Users /> <span>Personal Info</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2">
                          <LayoutDashboard /> <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dashboard/settings" className="block px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2">
                          <Settings /> <span>Settings</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 text-center  ">
                    <Button variant="destructive" onClick={async () => {
                      await fetch('/api/auth/logout', { method: 'POST' });
                      localStorage.clear();
                      router.push('/auth/login');
                    }} className="mr-4 bg-error">Log Out</Button>
                  </div>
                </div>
              </div>
              <main className="flex-grow md:overflow-y-auto w-full md:w-3/4 ">{children}</main> {/* Dashboard specific content */}
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
