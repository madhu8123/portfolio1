import React from "react";

function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of the project.",
            link: "#"
        },
        {
            title: "Project 2",
            description: "A brief description of the project.",
            link: "#"
        },
        {
            title: "Project 3",
            description: "A brief description of the project.",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-emerald-500 mb-6">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-emerald-50 p-6 shadow rounded">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="mt-2">{project.description}</p>
                            <a href={project.link} className="text-emerald-500 hover:underline mt-4 inline-block">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
