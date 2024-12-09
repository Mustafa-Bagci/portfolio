"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ProjectsCard from "@/components/ui/projects-card";

export default function Projects() {
    return (
        <div>
            <Navbar/>
            <section className="dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        My Projects
                    </h1>
                    <br />
                    <div className="border-t border-gray-200">
                        <p className="pt-4 text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400">
                            As a full-stack developer, I specialize in creating responsive, scalable, and user-friendly web applications that deliver seamless digital experiences. Let me show you what I can do!
                        </p>
                        <div>
                        <ProjectsCard
                            text="A blog website built with Next.js, providing a clean, modern interface for creating and managing blog posts. The app allows users to sign in, view posts, and create new ones with ease. It uses server-side rendering for optimized performance and SEO."
                            tech="Technologies: Next.js, JavaScript, TypeScript, Tailwind CSS, React.js, Clerk, PostgreSQL"
                            images={[
                                { src: "blog-homepage.png", alt: "Homepage view" },
                                { src: "blog-homepage-mobil.png", alt: "Mobile homepage view" },
                                { src: "blog-signin.png", alt: "Sign-in page" },
                                { src: "blog-posts.png", alt: "Posts listing" },
                                { src: "blog-write.png", alt: "Write new post page" },
                                { src: "blog-post.png", alt: "Individual post page" },
                            ]}
                            demoLink="https://blog-website-nextjs-beta.vercel.app/"
                            githubLink="https://github.com/Mustafa-Bagci/blog-website-nextjs"
                        />
                        </div>
                        <div>
                        <ProjectsCard
                            text="A real-time chat application built with Node.js, offering live messaging, friend requests, and user management. The app provides an intuitive interface for users to communicate seamlessly, whether on desktop or mobile. Features include secure sign-in, dynamic friend lists, and interactive chat pages."
                            tech="Technologies: Node.js, Express.js, Socket.io, EJS, Tailwind CSS, JavaScript, PostgreSQL"
                            images={[
                                { src: "chat-homepage.png", alt: "Homepage view" },
                                { src: "chat-homepage-mobile.png", alt: "Mobile homepage view" },
                                { src: "chat-signin.png", alt: "Sign-in page" },
                                { src: "chat-login.png", alt: "Login page" },
                                { src: "chat-chatpage.png", alt: "Chat page" },
                                { src: "chat-friendrequests.png", alt: "Friend requests" },
                                { src: "chat-addfriend.png", alt: "Add friend page" },
                            ]}
                            demoLink="https://realtime-chat-website-nextjs-beta.vercel.app/"
                            githubLink="https://github.com/Mustafa-Bagci/realtime-chat-express"
                        />
                        </div>
                        <div>
                            <ProjectsCard
                                text="An educational website built with Next.js, offering a clean and responsive design. The site features articles, community discussions, FAQs, and resource categories for an interactive learning experience. It’s optimized for both desktop and mobile views."
                                tech="Technologies: Next.js, TypeScript, Tailwind CSS, React.js"
                                images={[
                                    { src: "edu-homepage.png", alt: "Homepage view" },
                                    { src: "edu-community.png", alt: "Community page" },
                                    { src: "edu-faq.png", alt: "FAQ page" },
                                    { src: "edu-articlepage.png", alt: "Article page" },
                                    { src: "edu-article.png", alt: "Article preview" },
                                    { src: "edu-categories.png", alt: "Categories view" },
                                    { src: "edu-species.png", alt: "Species page" },
                                    { src: "edu-about.png", alt: "About page" },
                                    { src: "edu-contact.png", alt: "Contact page" },
                                    { src: "edu-faqpage.png", alt: "FAQ page view" },
                                ]}
                                demoLink="https://educational-website-nextjs-beta.vercel.app/"
                                githubLink="https://github.com/Mustafa-Bagci/educational-website-nextjs"
                            />
                        </div>
                        <div>
                            <ProjectsCard
                                text="A Node.js API that provides real-time data on cryptocurrency prices and market trends. This API allows easy integration with other applications for tracking the latest updates in the crypto market."
                                tech="Technologies: Node.js, Express.js, JavaScript, CSS, API Integration"
                                images={[
                                    { src: "cryptocurrency-api.png", alt: "Crypto Currency API Screenshot" },
                                ]}
                                demoLink="https://cryptocurrencyApi-website-nextjs-beta.vercel.app/"
                                githubLink="https://github.com/Mustafa-Bagci/crypto-currency-api"
                            />
                        </div>
                    </div>
                </div>    
            </section>
            <Footer/>
        </div>
    )
}