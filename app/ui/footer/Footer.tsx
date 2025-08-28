import { Clock, FacebookIcon, HelpCircle, InstagramIcon, Locate, LocateIcon, Mail, Phone, XIcon, YoutubeIcon } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Footer() {
    return (
        <footer className="    w-full bg-primary     pb-4 pt-10 text-white overflow-hidden ">
            <div className="my-6 md:flex justify-between  items-center gap-4 px-8 space-y-4 md:space-y-0">
                <h2 className="text-2xl font-bold ">Subscribe to see <br /> secret deals prices
                    drop the moment you sign up!</h2>

                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input type="email" placeholder="Email" className="text-white" />
                    <Button type="submit" variant="destructive">
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-8 py-10  mt-6 ">
                {/* Column 1: Logo & Company Info */}
                <div>
                    <div className="flex items-center mb-8">
                        <img src="/logo.png" alt="Wanderplan Logo" className="h-10 w-10 mr-3 rounded-lg shadow" />
                        <span className="font-extrabold text-xl text-white tracking-tight">Wanderplan</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center text-sm mb-1">
                            <LocateIcon className="h-4 w-4 mr-2 text-neutral-300" />
                            4517 Washington Ave. Manchester,
                            Kentucky 39495
                        </div>
                        <div className="flex items-center text-sm mb-1">
                            <Mail className="h-4 w-4 mr-2 text-neutral-300" />

                            info@wanderplan.com
                        </div>
                        <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-2 text-neutral-300" />

                            Hours: 8:00 - 17:00, Mon - Sat
                        </div>
                    </div>

                    <div className="my-6">
                        <h2 className="flex items-center">                            <HelpCircle className="h-4 w-4 mr-2 text-neutral-300" />
                            <span>Need Help? Call Us</span>
                        </h2>
                        <a href="tel:+1234567890" className="font-bold text-warning text-lg">+1 234 567 890</a>
                    </div>

                    <div className="flex space-x-4 mt-8">
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-neutral-300 transition">
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-neutral-300 transition">
                                <InstagramIcon className="h-6 w-6" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-neutral-300 transition">
                                <XIcon className="h-6 w-6" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-neutral-300 transition">
                                <YoutubeIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Column 2: Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 uppercase tracking-wide">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="/help" className="text-sm   hover:text-neutral-300 transition">Help Center</a></li>
                        <li><a href="/contact" className="text-sm   hover:text-neutral-300 transition">Contact Us</a></li>
                        <li><a href="/faq" className="text-sm   hover:text-neutral-300 transition">FAQ</a></li>
                        <li><a href="/booking" className="text-sm   hover:text-neutral-300 transition">Booking Tips</a></li>
                        <li><a href="/cancellation" className="text-sm   hover:text-neutral-300 transition">Cancellation Options</a></li>
                        <li><a href="/affiliates" className="text-sm   hover:text-neutral-300 transition">Affiliates</a></li>
                        <li><a href="/feedback" className="text-sm   hover:text-neutral-300 transition">Feedback</a></li>
                    </ul>
                </div>
                {/* Column 4: More Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 uppercase tracking-wide">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="/about" className="text-sm   hover:text-neutral-300 transition">About Us</a></li>
                        <li><a href="/careers" className="text-sm   hover:text-neutral-300 transition">Careers</a></li>
                        <li><a href="/press" className="text-sm   hover:text-neutral-300 transition">Press</a></li>
                        <li><a href="/blog" className="text-sm   hover:text-neutral-300 transition">Blog</a></li>
                        <li><a href="/investors" className="text-sm   hover:text-neutral-300 transition">Investors</a></li>
                        <li><a href="/sustainability" className="text-sm   hover:text-neutral-300 transition">Sustainability</a></li>
                    </ul>
                </div>
                {/* Column 4: More Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 uppercase tracking-wide">service</h3>
                    <ul className="space-y-2">
                        <li><a href="/customer-support" className="text-sm   hover:text-neutral-300 transition">Customer Support</a></li>
                        <li><a href="/live-chat" className="text-sm   hover:text-neutral-300 transition">Live Chat</a></li>
                        <li><a href="/phone-support" className="text-sm   hover:text-neutral-300 transition">Phone Support</a></li>
                        <li><a href="/feedback" className="text-sm   hover:text-neutral-300 transition">Feedback</a></li>
                        <li><a href="/affiliate-program" className="text-sm   hover:text-neutral-300 transition">Affiliate Program</a></li>
                        <li><a href="/partnerships" className="text-sm   hover:text-neutral-300 transition">Partnerships</a></li>

                    </ul>
                </div>
                {/* Column 4: More Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 uppercase tracking-wide">leagal</h3>
                    <ul className="space-y-2">
                        <li><a href="/privacy-policy" className="text-sm   hover:text-neutral-300 transition">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" className="text-sm   hover:text-neutral-300 transition">Terms of Service</a></li>
                        <li><a href="/cookie-policy" className="text-sm   hover:text-neutral-300 transition">Cookie Policy</a></li>
                        <li><a href="/disclaimer" className="text-sm   hover:text-neutral-300 transition">Disclaimer</a></li>
                        <li><a href="/accessibility" className="text-sm   hover:text-neutral-300 transition">Accessibility</a></li>
                        <li><a href="/sitemap" className="text-sm   hover:text-neutral-300 transition">Sitemap</a></li>
                        <li><a href="/dmca" className="text-sm   hover:text-neutral-300 transition">DMCA</a></li>
                    </ul>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <p className="text-sm text-neutral-300">
                    &copy; {new Date().getFullYear()} Wanderplan. All rights reserved.
                </p>
            </div>
        </footer>
    )
}