"use client";

import Image from "next/image";

const skills = [
    { src: "/html.png", alt: "HTML logo" },
    { src: "/css.png", alt: "CSS logo" },
    { src: "/javascript.png", alt: "JavaScript logo" },
    { src: "/jquery.png", alt: "jQuery logo" },
    { src: "/python.png", alt: "Python logo" },
    { src: "/react.png", alt: "React logo" },
    { src: "/bootstrap.png", alt: "Bootstrap logo" },
    { src: "/nodejs.png", alt: "Node.js logo" },
    { src: "/express.png", alt: "Express.js logo" },
    { src: "/tailwind.png", alt: "Tailwind CSS logo" },
    { src: "/next.png", alt: "Next.js logo" },
    { src: "/git.png", alt: "Git logo" },
    { src: "/postgresql.png", alt: "PostgreSQL logo" },
    { src: "/sql.png", alt: "SQL logo" },
    { src: "/bash.png", alt: "Bash logo" },
    { src: "/npm.png", alt: "npm logo" },
];

export default function Skills() {
    return (
        <section className="dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Skills</h1>
            <br />
            <div className="border-t border-gray-200">
                <div className="my-8 px-8 border flex flex-wrap justify-around items-center gap-4 p-4 rounded-lg shadow-lg border-t border-gray-200">
                    {skills.map((skill, index) => (
                        <div key={index} className="group">
                            <Image
                                src={skill.src}
                                alt={skill.alt}
                                width={50}
                                height={50}
                                className="object-contain transition-transform transform group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>    
    );
}
