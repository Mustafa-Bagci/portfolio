 "use client";

import ProjectsCard from "../ui/projects-card";

export default function FeaturedProjects() {
    return (
        <section className="dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Featured Projects
            </h1>
            <br />
            <div className="border-t border-gray-200">
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
            </div>
        </div>    
    </section>
    );
}