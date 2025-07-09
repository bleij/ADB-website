"use client";

import React from "react";

const projects = [
    {id: 1, image: "/images/projects/project1.jpg"},
    {id: 2, image: "/images/projects/project2.jpg"},
    {id: 3, image: "/images/projects/project3.jpg"},
    {id: 4, image: "/images/projects/project4.jpg"},
    {id: 5, image: "/images/projects/project5.jpg"},
    {id: 6, image: "/images/projects/project6.jpg"},
];

const MobileProjects: React.FC = () => {
    return (
        <section
            id="projects"
            className="bg-white py-24 px-6"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-medium mb-12 text-center text-black">
                    Проекты
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-100 rounded-[24px] overflow-hidden aspect-[4/3]"
                        >
                            <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileProjects;