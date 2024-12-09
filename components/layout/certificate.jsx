const certificates = [
    { src: "certificate-se.png", alt: "Software Engineering Certificate" },
    { src: "certificate-css.png", alt: "CSS Certificate" },
    { src: "certificate-jsbasic.png", alt: "JavaScript Basics Certificate" },
    { src: "certificate-jsinter.png", alt: "JavaScript Intermediate Certificate" },
    { src: "certificate-node.png", alt: "Node.js Certificate" },
    { src: "certificate-ps.png", alt: "Photoshop Certificate" },
    { src: "certificate-python.png", alt: "Python Certificate" },
    { src: "certificate-react.png", alt: "React Certificate" },
    { src: "certificate-sqlbasic.png", alt: "SQL Basics Certificate" },
    { src: "certificate-sqlinter.png", alt: "SQL Intermediate Certificate" },
    { src: "certificate-sqladv.png", alt: "SQL Advanced Certificate" },
];

export default function Certificate() {
    return (
        <section className="dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Certificates</h1>
                <br />
                <div className="border-t border-gray-200 py-8">
                    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {certificates.map((certificate, index) => (
                            <img
                                key={index}
                                src={certificate.src}
                                alt={certificate.alt}
                                className="rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}