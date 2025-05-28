"use client";

import React from "react";

const projects = [
    {
        title: "Фитнес-приложение",
        description: "Мобильное приложение для отслеживания тренировок и питания.",
        tags: ["Android", "Flutter", "Firebase"],
    },
    {
        title: "CRM для малого бизнеса",
        description: "Веб-платформа для автоматизации работы отдела продаж.",
        tags: ["React", "Django", "PostgreSQL"],
    },
    {
        title: "AI-анализатор документов",
        description: "Сервис для обработки и анализа PDF с помощью NLP.",
        tags: ["Python", "FastAPI", "Transformers"],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl font-bold mb-12">Примеры проектов</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="p-6 border rounded-lg shadow hover:shadow-md transition bg-gray-50 flex flex-col gap-4"
                        >
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;