import React from 'react';

// Header Component
function Header() {
    return (
        <header className="bg-emerald-500 text-white py-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Portfolio</h1>
                <ul className="flex gap-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

// Home Section
function Home() {
    return (
        <section id="home" className="min-h-screen bg-emerald-100 flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-emerald-600">Hi, I'm [Your Name]</h2>
                <p className="mt-4 text-xl">A passionate Web Developer and Data Science Enthusiast</p>
                <a href="#contact" className="mt-6 inline-block bg-emerald-500 text-white py-2 px-4 rounded shadow hover:bg-emerald-600">
                    Contact Me
                </a>
            </div>
        </section>
    );
}

// About Section
function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-emerald-500 mb-6">About Me</h2>
                <p className="text-lg">
                    I am a software developer specializing in front-end development and data science.
                    I enjoy building interactive and user-friendly applications that make an impact.
                </p>
            </div>
        </section>
    );
}

// Projects Section
function Projects() {
    return (
        <section id="projects" className="py-20 bg-emerald-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-emerald-500 mb-6">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-bold">Project 1</h3>
                        <p className="mt-2">Description of the project.</p>
                        <a href="#" className="text-emerald-500 hover:underline mt-4 inline-block">View Project</a>
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-bold">Project 2</h3>
                        <p className="mt-2">Description of the project.</p>
                        <a href="#" className="text-emerald-500 hover:underline mt-4 inline-block">View Project</a>
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-bold">Project 3</h3>
                        <p className="mt-2">Description of the project.</p>
                        <a href="#" className="text-emerald-500 hover:underline mt-4 inline-block">View Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Contact Section
function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-emerald-500 mb-6">Contact Me</h2>
                <p className="text-lg">Feel free to reach out to me via email or LinkedIn.</p>
                <a href="mailto:your-email@example.com" className="mt-6 inline-block bg-emerald-500 text-white py-2 px-4 rounded shadow hover:bg-emerald-600">
                    Email Me
                </a>
            </div>
        </section>
    );
}

// Footer
function Footer() {
    return (
        <footer className="bg-emerald-500 text-white py-4 text-center">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
        </footer>
    );
}

// Main Portfolio Component
export default function Portfolio() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
