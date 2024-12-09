"use client";

import Image from "next/image";

export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <section className="bg-gray-800">
            <div className="lg:flex md:flex md:justify-between lg:justify-between sm:grid-cols-1 border-t border-gray-200 dark:border-gray-700 p-8 py-8 gap-4">
                <div className="lg:pt-1 flex justify-center sm:justify-center md:justify-start lg:justify-start pb-4 lg:pb-0 md:pb-0">
                    <p className="text-sm text-gray-300">{date} Mustafa BAGCI. © All rights reserved.</p>
                </div>

                <div className="pb-4 md:pb-0 flex justify-center sm:justify-center md:justify-start lg:justify-center">
                    <Image src="/logo-dark.png" alt="logo" width={100} height={100} className="object-contain" />
                </div>

                <nav className="lg:pt-1 flex justify-center sm:justify-center md:justify-end lg:justify-end">
                    <ul className="flex text-gray-300 font-semibold gap-6">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">About Me</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
