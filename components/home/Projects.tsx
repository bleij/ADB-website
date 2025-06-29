"use client";

import React from "react";
import {MAIN_COLOR_HEX} from "@/utils/colors";

const projects = [
    {
        title: "Разработка e-commerce платформы с интеграцией платежных систем.",
        description:
            "Обеспечиваем полный цикл разработки: предлагаем дизайн, разрабатываем цифровое решение, тестируем и обеспечиваем техподдержку.",
        tags: ["iOS", "Android", "React", "Flutter"],
        // image: "/images/projects/project1.png", // временно закомментируем
    },
    {
        title: "Разработка e-commerce платформы с интеграцией платежных систем.",
        description:
            "Обеспечиваем полный цикл разработки: предлагаем дизайн, разрабатываем цифровое решение, тестируем и обеспечиваем техподдержку.",
        tags: ["iOS", "Android", "React", "Flutter"],
    },
    {
        title: "Разработка e-commerce платформы с интеграцией платежных систем.",
        description:
            "Обеспечиваем полный цикл разработки: предлагаем дизайн, разрабатываем цифровое решение, тестируем и обеспечиваем техподдержку.",
        tags: ["iOS", "Android", "React", "Flutter"],
    },
];

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="relative z-20 bg-white py-16 px-6"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-bold mb-12 text-black flex items-center gap-1">
                    Наши проекты
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block"/>
                </h2>

                {/* Проекты */}
                <div className="flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
                        >
                            {index % 2 === 1 ? (
                                <>
                                    {/* Фото слева */}
                                    <div
                                        className="w-full h-[300px] bg-gray-100 flex items-center justify-center rounded-[20px] text-gray-400 text-xl font-semibold">
                                        Заглушка
                                    </div>

                                    {/* Текст справа */}
                                    <div>
                                        <h3 className="text-[24px] sm:text-[28px] font-bold text-black mb-4 leading-snug">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-700 text-base mb-6">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-4 py-1 border border-gray-300 rounded-full text-sm text-black"
                                                >
                            {tag}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Текст слева */}
                                    <div>
                                        <h3 className="text-[24px] sm:text-[28px] font-bold text-black mb-4 leading-snug">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-700 text-base mb-6">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-4 py-1 border border-gray-300 rounded-full text-sm text-black"
                                                >
                            {tag}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Фото справа */}
                                    <div
                                        className="w-full h-[300px] bg-gray-100 flex items-center justify-center rounded-[20px] text-gray-400 text-xl font-semibold">
                                        Заглушка
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;