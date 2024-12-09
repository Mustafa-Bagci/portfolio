import { Button } from "../ui/button";

export default function Jumbotron() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center pb-8">
                    <img 
                        src="me.jpeg" 
                        alt="Mustafa BAGCI, Full-Stack Web Developer" 
                        className="object-cover rounded-full w-32 h-32 sm:w-48 sm:h-48 border border-white shadow-xl" 
                    />
                </div>
                <div className="flex justify-center">
                    <div className="text-gray-700 dark:text-gray-300 px-4 sm:px-8 text-center max-w-3xl md:max-w-4xl lg:max-w-6xl space-y-6">
                        <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white leading-tight">
                            Welcome to my Portfolio! I'm a Full-Stack Web Developer Building Creative Solutions.
                        </h1>
                        <p className="text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400 leading-relaxed">
                            Hello! I'm Mustafa BAGCI, a passionate full-stack web developer with a keen eye for detail and a love for building impactful digital experiences. Whether it's designing a sleek and intuitive user interface or developing robust and efficient back-end systems, I enjoy every aspect of crafting functional and beautiful web applications.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/projects"><Button>View My Work</Button></a>
                            <a href="/contact"><Button variant="link">Contact Me</Button></a>
                        </div>
                    </div>         
                </div> 
            </div> 
        </section>
    );
}
