import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";


import { Separator } from "@/components/ui/separator"

export default function PersonalInfoPage() {
    return (
        <div className=" mb-10">
            <div className="bg-gray-100 py-2 px-4 rounded-lg shadow-md">
                <div className="flex justify-between  items-center   rounded-lg    ">
                    <div>
                        <h2 className="text-xl   font-semibold text-primary">Profile</h2>
                        <p className="text-sm text-gray-600">Basic info, for a faster booking experience</p>
                    </div>
                    <div>
                        <Button variant="ghost" className="w-full text-left mt-4 font-bold text-lg"> <Edit /> <span>Edit</span></Button>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Name</p> <p className="w-3/4 text-primary font-semibold">MD  Mahmudul Hasan</p>
                </div>
                <Separator className="mt-2" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Gender</p> <p className="w-3/4 text-primary font-semibold">Male</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Date of Birth</p> <p className="w-3/4 text-primary font-semibold">January 1, 1990</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Occupation</p> <p className="w-3/4 text-primary font-semibold">Software Engineer</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Phone Number</p> <p className="w-3/4 text-primary font-semibold">+1 234 567 890</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Email</p> <p className="w-3/4 text-primary font-semibold">md.mahmudul.hasan@example.com</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Country/Region</p> <p className="w-3/4 text-primary font-semibold">United States</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">City</p> <p className="w-3/4 text-primary font-semibold">New York</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Address</p> <p className="w-3/4 text-primary font-semibold">123 Main St, New York, NY 10001</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Postal Code</p> <p className="w-3/4 text-primary font-semibold">10001</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">National ID</p> <p className="w-3/4 text-primary font-semibold">10001</p>
                </div>

                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Passport ID</p> <p className="w-3/4 text-primary font-semibold">10001</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Frequent Flyer Number</p> <p className="w-3/4 text-primary font-semibold">10001</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Travel Preferences</p> <p className="w-3/4 text-primary font-semibold">Window Seat, Vegetarian Meal</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Emergency Contact</p> <p className="w-3/4 text-primary font-semibold">Jane Doe, +1 987 654 3210</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Medical Information</p> <p className="w-3/4 text-primary font-semibold">None</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Special Assistance</p> <p className="w-3/4 text-primary font-semibold">None</p>
                </div>
                <Separator className="mt-1" />
                <div className="flex justify-between items-center mt-6  text-gray-600">
                    <p className="w-1/4">Travel Document Expiry</p> <p className="w-3/4 text-primary font-semibold">January 1, 2030</p>
                </div>
                <Separator className="mt-1" />


            </div>

            <div className="bg-gray-100 py-2 px-4 rounded-lg shadow-md mt-10">
                <div className="   rounded-lg    ">
                    <div>
                        <h2 className="text-xl   font-semibold text-primary">Traveler Info
                        </h2>
                        <p className="text-sm text-gray-600">You have 1 traveler

                        </p>
                    </div>
                    <div className="mt-6 text-primary font-semibold">
                        <h2>Md Mahmudul Hasan  </h2>

                        <p className="text-sm text-gray-600">mahmudulmk4@gmail.com</p>
                    </div>
                </div>

            </div>
            <div className="bg-gray-100 py-2 px-4 rounded-lg shadow-md mt-10">
                <div className="   rounded-lg    ">
                    <div>
                        <h2 className="text-xl   font-semibold text-primary">Settings
                        </h2>
                        <p className="text-sm text-gray-600">Manage your email address, mobile number and password



                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-6  text-gray-600">
                        <p className="w-1/4">Phone Number</p> <p className="w-3/4 text-primary font-semibold">+1 234 567 890</p>
                    </div>
                    <Separator className="mt-1" />
                    <div className="flex justify-between items-center mt-6  text-gray-600">
                        <p className="w-1/4">Email</p> <p className="w-3/4 text-primary font-semibold">md.mahmudul.hasan@example.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
}