"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"; 
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DashboardPage() {
    const router = useRouter();
    return (
        <div className="container mx-auto  ">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
              <ReactMarkdown remarkPlugins={[remarkGfm]}> "Sure, here are some recommendations for traveling to Bangkok:\n\n1. **Visit the Grand Palace:** This is a must-see site due to its architectural significance and beautiful artwork. Also, visit the Wat Phra Kaew temple within the palace grounds, which houses the Emerald Buddha.\n\n2. **Explore Wat Arun (Temple of Dawn):** This landmark on the banks of Chao Phraya River is an awe-inspiring sight to behold, often lit up in the evenings to display the incredible detailing of the prangs (towers).\n\n3. **Shop at Chatuchak Weekend Market:** It is one of the largest markets in the world where you can find almost anything ranging from clothes to antiques.\n\n4. **Enjoy a boat tour on Chao Phraya River:** It’s a romantic and leisurely way to see the city's landmarks.\n\n5. **Experience the nightlife in Khao San Road:** This is backpacker's hub, full of bars, clubs, street"</ReactMarkdown>
        </div>
    );
}

