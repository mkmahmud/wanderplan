import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "lucide-react";


export default function Footer() {
    return (
        <footer className="    w-full bg-primary     pb-4 pt-10 text-white rounded-t-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-10   ">
                {/* Column 1: Logo & Company Info */}
                <div>
                    <div className="flex items-center mb-8">
                        <img src="/logo.png" alt="Wanderplan Logo" className="h-10 w-10 mr-3 rounded-lg shadow" />
                        <span className="font-extrabold text-xl text-white tracking-tight">Wanderplan</span>
                    </div>
                    <p className="text-sm   mb-1">123 Main St, City, Country</p>
                    <p className="text-sm   mb-1">info@wanderplan.com</p>
                    <p className="text-sm  ">+1 234 567 890</p>

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
                    <h3 className="font-semibold text-white mb-3 uppercase tracking-wide">Links</h3>
                    <ul className="spa</svg>ce-y-2">
                        <li><a href="/about" className="text-sm   hover:text-neutral-300 transition">About Us</a></li>
                        <li><a href="/services" className="text-sm   hover:text-neutral-300 transition">Services</a></li>
                        <li><a href="/contact" className="text-sm   hover:text-neutral-300 transition">Contact</a></li>
                        <li><a href="/blog" className="text-sm   hover:text-neutral-300 transition">Blog</a></li>
                    </ul>
                </div>
                {/* Column 4: More Links */}
                <div>
                    <h3 className="font-semibold text-white mb-3 uppercase tracking-wide">More</h3>
                    <ul className="space-y-2">
                        <li><a href="/privacy" className="text-sm   hover:text-neutral-300 transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-sm   hover:text-neutral-300 transition">Terms of Service</a></li>
                        <li><a href="/faq" className="text-sm   hover:text-neutral-300 transition">FAQ</a></li>
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