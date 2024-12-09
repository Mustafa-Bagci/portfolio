export default function FeatureList() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        What I Bring to the Table
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400">
                        As a full-stack developer, I specialize in creating responsive, scalable, and user-friendly web applications that deliver seamless digital experiences. Let me show you what I can do!
                    </p>
                </div>
                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <svg
                                className="w-6 h-6 text-primary-600 dark:text-primary-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg sm:text-xl font-bold dark:text-white">
                            Front-End Development
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Crafting visually appealing, responsive, and interactive web interfaces using technologies like React.js, HTML5, and CSS3.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <svg
                                className="w-6 h-6 text-primary-600 dark:text-primary-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg sm:text-xl font-bold dark:text-white">
                            Back-End Development
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Building scalable and secure server-side applications using Node.js, Express.js, and PostgreSQL.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <svg
                                className="w-6 h-6 text-primary-600 dark:text-primary-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg sm:text-xl font-bold dark:text-white">
                            Full-Stack Projects
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Delivering complete web solutions by integrating front-end and back-end seamlessly.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <svg
                                className="w-6 h-6 text-primary-600 dark:text-primary-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg sm:text-xl font-bold dark:text-white">
                            Creative Solutions
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Solving complex problems with innovative and efficient approaches tailored to your needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
