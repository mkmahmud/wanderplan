"use client";
import Image from "next/image";
import Link from "next/link";
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { Home, EqualApproximately, Contact, User } from "lucide-react";

import React from "react";

export default function Navbar() {

    // State to manage mobile menu open/close
    const [menuOpen, setMenuOpen] = React.useState(false);

    const menus = [
        { name: "Home", href: "/", icon: <Home className="h-6 w-6" /> },
        { name: "About", href: "/about", icon: <EqualApproximately className="h-6 w-6" /> },
        { name: "Contact", href: "/contact", icon: <Contact className="h-6 w-6" /> },
        // Accounts 
        { name: "Account", href: "/dashboard", icon: <User className="h-6 w-6" /> }
    ]

    return (
        <header className="fixed top-4 left-0 w-[90%]   ml-[5%] rounded-lg bg-neutral-100 shadow-md  ">
            <nav className="flex justify-between items-center   ">
                <div className="flex items-center justify-between w-full mr-4  ">
                    <div className="logo  ">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Wanderplan Logo"
                                width={40}
                                height={40}
                                className="rounded-full py-2"
                            />
                        </Link>
                    </div>
                    {/* Search */}
                    <div className="md:  w-[60%]">
                        <input
                            type="text"
                            placeholder="ex : Paris, France"
                            className="  block w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>
                </div>
                {/* Desktop Menus */}


                <ul className="hidden  md:flex rounded-r-lg  ">

                    {
                        menus.map((menu) => (
                            <li

                                key={menu.name}
                                className="groupmenu px-4 py-4 hover:bg-primary-dark transition cursor-pointer"
                            >
                                <Link
                                    href={menu.href}

                                    className="flex items-center space-x-2 text-primary transition groupmenu-hover:text-white"
                                >
                                    <span>{menu.icon}</span>
                                    <span>{menu.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden "
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Open menu"
                    type="button"
                >
                    <Bars3CenterLeftIcon className="h-8 w-8 text-primary" />
                </button>
            </nav>
            {/* Mobile view */}


            {
                menuOpen && <ul className="w-full   mt-2 md:hidden      py-2  ">
                    {
                        menus.map((menu) => (
                            <li
                                key={menu.name}
                                className="group my-4 px-4 py-3 hover:bg-primary-dark transition cursor-pointer "
                            >
                                <Link
                                    onClick={() => setMenuOpen(false)}
                                    href={menu.href}
                                    className="flex items-center space-x-2 text-primary transition group-hover:text-white"
                                >
                                    <span>{menu.icon}</span>
                                    <span>{menu.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </header>
    )
}