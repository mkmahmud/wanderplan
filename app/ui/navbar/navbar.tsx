"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Languages, Sun, Grip, PinOff, ArrowRight, X, Moon } from "lucide-react";
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { navlinks } from "./navlinks";



export default function Navbar() {

    // State to manage mobile menu open/close
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Set Notification status
    const [notificationStatus, setNotificationStatus] = React.useState(false);

    // Get User Info from local storage

    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const parsed = user ? JSON.parse(user) : null;
        setUserInfo(parsed);
    }, []);

    const userFirstAlphabet = userInfo?.fullName ? userInfo.fullName.charAt(0).toUpperCase() : null;
    console.log(userFirstAlphabet);


    // Set Dark Mode based on user preference
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };


    return (
        <header className="fixed top-0 left-0 w-full bg-neutral-100 dark:bg-black shadow-md z-20 ">
            {
                notificationStatus && <div className="bg-success text-black text-center py-1 px-4 md:flex justify-center items-center space-x-2 text-sm relative">
                    <PinOff className="hidden md:inline-block" />
                    <p>Unlock the Magic of Travel with Travila - Your Gateway to Extraordinary Experiences</p>
                    <Button variant="link" className="text-black font-bold" >
                        <Link href="/get-started">Get it Now <ArrowRight className="inline-block h-4 w-4" /></Link>
                    </Button>
                    <button onClick={() => setNotificationStatus(false)} className="p-4 absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center" aria-label="Close">
                        <X />
                    </button>
                </div>
            }
            <nav className="flex justify-between items-center  px-4 ">
                {/* Logo */}
                <div className="flex items-center justify-between   mr-4  ">
                    <div className="logo pl-2 ">
                        <Link href="/" className="flex items-center space-x-2 text-primary dark:text-white font-bold text-xl">
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
                    {/* Search */}

                </div>

                {/* Desktop Menus */}
                <ul className="hidden  md:flex space-x-1  items-center  ">


                    {
                        navlinks.map((link) => (
                            link.dropdown ?
                                <DropdownMenu key={link.label}  >
                                    <DropdownMenuTrigger asChild className=" ">
                                        <Button variant="subtle">{link.label} {link.icon} </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56" align="start">
                                        {
                                            link.dropdown.map((item, index) => {
                                                if (item.type === "group") {
                                                    return (
                                                        <DropdownMenuGroup key={index}>
                                                            {item.children.map((child, idx) => (
                                                                <DropdownMenuItem key={idx}>
                                                                    <Link href={child.href} className="w-full hover:text-primary">{child.label}</Link>
                                                                </DropdownMenuItem>
                                                            ))}
                                                        </DropdownMenuGroup>
                                                    );
                                                } else if (item.type === "separator") {
                                                    return <DropdownMenuSeparator key={index} />;
                                                } else if (item.type === "sub") {
                                                    return (
                                                        <DropdownMenuSub key={index}>
                                                            <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                                                            <DropdownMenuPortal>
                                                                <DropdownMenuSubContent>
                                                                    {item.children.map((subChild, subIdx) => (
                                                                        <DropdownMenuItem key={subIdx}>{subChild.label}</DropdownMenuItem>
                                                                    ))}
                                                                </DropdownMenuSubContent>
                                                            </DropdownMenuPortal>
                                                        </DropdownMenuSub>
                                                    );
                                                }
                                                return null;
                                            })
                                        }
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                : <Link key={link.label} href={link.href}> <Button variant="subtle">{link.label} {link.icon} </Button></Link>
                        ))


                    }
                </ul>

                {/* Right Side menus */}
                <div className="md:flex items-center space-x-2 mr-2 hidden ">
                    <div>
                        <Select defaultValue="EN">
                            <SelectTrigger className="w-100px] ">
                                <Languages />
                                <SelectValue placeholder="EN" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="EN">EN</SelectItem>
                                    <SelectItem value="BN">BN</SelectItem>
                                    <SelectItem value="FN">FN</SelectItem>
                                    <SelectItem value="AR">AR</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select defaultValue="USD">
                            <SelectTrigger className="w-[70px]">
                                <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="USD">USD</SelectItem>
                                    <SelectItem value="EUR">EUR</SelectItem>
                                    <SelectItem value="GBP">GBP</SelectItem>
                                    <SelectItem value="JPY">JPY</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                    {/* Dark mode */}
                    <div>

                        {isDark ? <Button onClick={toggleDarkMode}
                            className=" transition-all duration-300" variant="secondary"  ><Sun /></Button> : <Button onClick={toggleDarkMode}
                                className=" transition-all duration-300" variant="secondary" ><Moon /></Button>}

                    </div>
                    {/* Accounts */}
                    <div>
                        {
                            userInfo ? <Button variant="destructive" className="bg-warning" ><Link href="/dashboard">{userFirstAlphabet}</Link></Button>
                                : <Button variant="secondary" className=" "><Link href="/auth/login">Log In</Link></Button>

                        }
                    </div>
                    <div>
                        <Button className="text-white font-bold"> <Grip /> </Button>
                    </div>
                </div>

                {/* Mobile Icons */}
                <div className="md:hidden flex space-x-2 items-center">
                    {/* Dark mode for mobile */}
                    <div  >

                        {isDark ? <Button onClick={toggleDarkMode}
                            className=" transition-all duration-300" variant="secondary"  ><Sun /></Button> : <Button onClick={toggleDarkMode}
                                className=" transition-all duration-300" variant="secondary" ><Moon /></Button>}

                    </div>
                    {/* Hamburger Menu for Mobile */}
                    <button
                        className=" ml-2 relative w-8 h-8 flex items-center justify-center"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {/* Bars Icon */}
                        <Bars3CenterLeftIcon
                            className={`
          absolute h-8 w-8 text-primary dark:text-white
          transition-all duration-300
          ${menuOpen ? "opacity-0 rotate-90 scale-90" : "opacity-100 rotate-0 scale-100"}
        `}
                        />

                        {/* X (Close) Icon */}
                        <XMarkIcon
                            className={`
          absolute h-8 w-8 text-primary dark:text-white
          transition-all duration-300
          ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-90"}
        `}
                        />
                    </button>
                </div>
            </nav>
            {/* Mobile view */}
            {
                menuOpen && <div className="w-full   mt-2 md:hidden      py-2 pb-4 ">
                    <ul className="   flex flex-col   space-x-1  items-start  ">


                        {

                            navlinks.map((link) => (
                                link.dropdown ?
                                    <DropdownMenu key={link.label}  >
                                        <DropdownMenuTrigger asChild className=" ">
                                            <Button variant="subtle">{link.label} {link.icon} </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="start">
                                            {
                                                link.dropdown.map((item, index) => {
                                                    if (item.type === "group") {
                                                        return (
                                                            <DropdownMenuGroup key={index}>
                                                                {item.children.map((child, idx) => (
                                                                    <DropdownMenuItem key={idx}>
                                                                        <Link href={child.href} className="w-full hover:text-primary">{child.label}</Link>
                                                                    </DropdownMenuItem>
                                                                ))}
                                                            </DropdownMenuGroup>
                                                        );
                                                    } else if (item.type === "separator") {
                                                        return <DropdownMenuSeparator key={index} />;
                                                    } else if (item.type === "sub") {
                                                        return (
                                                            <DropdownMenuSub key={index}>
                                                                <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                                                                <DropdownMenuPortal>
                                                                    <DropdownMenuSubContent>
                                                                        {item.children.map((subChild, subIdx) => (
                                                                            <DropdownMenuItem key={subIdx}>{subChild.label}</DropdownMenuItem>
                                                                        ))}
                                                                    </DropdownMenuSubContent>
                                                                </DropdownMenuPortal>
                                                            </DropdownMenuSub>
                                                        );
                                                    }
                                                    return null;
                                                })
                                            }
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    : <Link key={link.label} href={link.href}> <Button variant="subtle">{link.label} {link.icon} </Button></Link>
                            ))
                        }
                    </ul>

                    <div className=" mt-4 flex justify-between items-center space-x-2 mr-2   ">
                        <div>
                            <Select defaultValue="EN">
                                <SelectTrigger className="w-100px] ">
                                    <Languages />
                                    <SelectValue placeholder="EN" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="EN">EN</SelectItem>
                                        <SelectItem value="BN">BN</SelectItem>
                                        <SelectItem value="FN">FN</SelectItem>
                                        <SelectItem value="AR">AR</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select defaultValue="USD">
                                <SelectTrigger className="w-[70px]">
                                    <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="USD">USD</SelectItem>
                                        <SelectItem value="EUR">EUR</SelectItem>
                                        <SelectItem value="GBP">GBP</SelectItem>
                                        <SelectItem value="JPY">JPY</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>

                        {/* Accounts */}
                        <div>
                            {
                                userInfo ? <Button variant="destructive" className="bg-warning"  ><Link href="/dashboard">{userFirstAlphabet}</Link></Button>
                                    : <Button variant="secondary" className=" "><Link href="/auth/login">Log In</Link></Button>
                            }
                        </div>
                        <div>
                            <Button className="text-white font-bold"> <Grip /> </Button>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}