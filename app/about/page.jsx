"use client";

import Certificate from "@/components/layout/certificate";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Skills from "@/components/layout/skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div>
            <Navbar />
            <main className="dark:bg-gray-900 mx-auto">
                <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-18 lg:px-6">
                    <h1 className="border-b border-gray-200 pb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <br />
                    <div className="flex flex-col md:flex-row sm:flex-col items-center md:items-start md:space-x-8">
                        <div className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-xl">
                            <Image
                                src="/me.jpeg"
                                alt="Mustafa BAGCI, Full-Stack Web Developer"
                                layout="responsive"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>

                        <div className="w-full md:w-2/3 py-4 lg:py-0">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                                Hello! I’m Mustafa Enes BAGCI
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                                I'm a passionate Full-Stack Web Developer, creating interactive and elegant solutions for the web. I love solving complex problems and building intuitive applications. I specialize in both front-end and back-end development, working with the latest technologies like React.js, Node.js, and PostgreSQL. I’m always learning and improving my skills to keep up with the ever-evolving tech world.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Graduated in Computer Engineering from KTO Karatay University. During my time at university, I deepened my understanding of computer science concepts such as algorithms, data structures, and software engineering. This knowledge laid the foundation for my career as a developer.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Values & Work Philosophy</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        I believe the success of a project lies in three key principles: rigor, creativity, and a deep commitment to the user experience. I strive for clarity and scalable solutions in my code.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                                        Innovation drives me to explore new technologies that can meet project requirements, and collaboration strengthens the results we achieve as a team. Transparent communication is key. I always ensure to keep clients and team members in the loop and deliver high-quality work on time.
                                    </p>
                                </div>

                                <div className="gap-2 flex">
                                    <Link href="/contact">
                                        <Button>
                                            Contact Me
                                        </Button>
                                    </Link>
                                    <a href="/Mustafa's Resume.pdf" download>
                                        <Button variant="link">Download CV</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Skills />
                <Certificate />
            </main>
            <Footer />
        </div>
    );
}
