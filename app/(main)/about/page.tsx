'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
{/* ===== Hero Section ===== */}
<section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-24 pb-32 px-4 md:px-20 lg:px-32">
  {/* Floating decorative shapes */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-slow-pulse"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-slow-pulse"></div>
  
  <div className="relative flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Left Text Content */}
    <div className="flex-1 z-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
        Discover Your Next Adventure
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl">
        Wanderplan helps you explore, plan, and book unforgettable trips with expert recommendations and curated experiences. Let your journey begin today.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <Button asChild className="hover:scale-105 transition-transform duration-300">
          <Link href="/tours" className="flex items-center gap-2">
            Explore Tours <ArrowRight size={16} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-300">
          <Link href="/contact" className="flex items-center gap-2">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>

    {/* Right Image with floating cards */}
    <div className="flex-1 relative w-full md:w-[550px] h-[450px] rounded-3xl shadow-2xl overflow-hidden group">
      {/* Main Image */}
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Travel"
        fill
        className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
      />

      {/* Floating Glass Card 1 */}
      <div className="absolute top-6 left-6 w-48 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Top Destinations</h3>
        <p className="text-gray-500 dark:text-gray-300 text-xs">500+ destinations worldwide</p>
      </div>

      {/* Floating Glass Card 2 */}
      <div className="absolute bottom-10 right-6 w-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-3 shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Adventure Trips</h3>
        <p className="text-gray-500 dark:text-gray-300 text-xs">Tailored adventure experiences</p>
      </div>

      {/* Floating Icon Elements */}
      <div className="absolute top-1/3 right-10 w-10 h-10 bg-primary/30 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-1/4 left-12 w-12 h-12 bg-secondary/30 rounded-full animate-bounce-slow delay-200"></div>
    </div>
  </div>
</section>

       

      {/* ===== Mission & Vision ===== */}
      <section className="py-20 px-4 md:px-20 lg:px-32 bg-gray-50 dark:bg-gray-800 rounded-t-3xl transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Our mission is to make travel planning effortless. Our vision is to connect travelers 
            with authentic experiences across the globe, helping them create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Personalized Trips</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We tailor travel experiences based on your preferences, ensuring every trip feels unique.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expert Recommendations</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Our travel experts provide insights and hidden gems that make your journey extraordinary.
            </p>
          </Card>
        </div>
      </section>

      {/* ===== Stats / Achievements ===== */}
      <section className="py-20 px-4 md:px-20 lg:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white dark:bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-extrabold text-primary mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Destinations</p>
          </div>
          <div className="p-6 bg-white dark:bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-extrabold text-primary mb-2">10k+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Happy Travelers</p>
          </div>
          <div className="p-6 bg-white dark:bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-extrabold text-primary mb-2">1k+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Tours Organized</p>
          </div>
          <div className="p-6 bg-white dark:bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-extrabold text-primary mb-2">5+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="py-20 px-4 md:px-20 lg:px-32 bg-gray-50 dark:bg-gray-800 rounded-t-3xl transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member */}
          {[
            {
              name: 'Mahmudul Hasan',
              role: 'Founder & Developer',
              bio: 'Passionate about seamless web experiences and travel.',
              image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
            },
            {
              name: 'Jane Doe',
              role: 'Travel Expert',
              bio: 'Loves discovering hidden gems for travelers.',
              image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
            },
            {
              name: 'John Smith',
              role: 'Marketing Lead',
              bio: 'Expert in social media and travel marketing.',
              image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
            },
          ].map((member) => (
            <Card
              key={member.name}
              className="p-6 bg-white dark:bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-20 px-4 md:px-20 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          What Our Travelers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Alice Johnson',
              review: 'Wanderplan made my trip to Europe seamless and unforgettable!',
              rating: 5,
            },
            {
              name: 'Michael Lee',
              review: 'The recommendations and planning tools saved me so much time.',
              rating: 5,
            },
          ].map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 bg-white dark:bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl"
            >
              <div className="flex items-center mb-4 gap-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">{testimonial.rating}.0</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.review}</p>
              <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 px-4 md:px-20 lg:px-32 text-center bg-primary text-primary-foreground rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Next Adventure?
        </h2>
        <p className="mb-6 text-lg">
          Explore, plan, and travel with Wanderplan. Your next journey starts here.
        </p>
        <Button asChild>
          <Link href="/tours" className="flex items-center gap-2">
            Explore Tours <ArrowRight size={16} />
          </Link>
        </Button>
      </section>
    </div>
  );
}
