"use client";

import React from "react";
import { MAIN_COLOR_HEX } from "@/utils/colors";

const techStack = [
    { name: "Golang", icon: "/icons/stack/golang.svg" },
    { name: "Java", icon: "/icons/stack/java.svg" },
    { name: "Php", icon: "/icons/stack/php.svg" },
    { name: "Kotlin", icon: "/icons/stack/kotlin.svg" },
    { name: "NodeJs", icon: "/icons/stack/nodejs.svg" },
    { name: "C#", icon: "/icons/stack/csharp.svg" },
    { name: "Javascript", icon: "/icons/stack/javascript.svg" },
    { name: "Dart", icon: "/icons/stack/dart.svg" },
];

const frameworks = [
    { name: "Laravel", icon: "/icons/stack/laravel.svg" },
    { name: "Spring", icon: "/icons/stack/spring.svg" },
    { name: "Symfony", icon: "/icons/stack/symfony.svg" },
    { name: "Flutter", icon: "/icons/stack/flutter.svg" },
    { name: "Vuejs", icon: "/icons/stack/vuejs.svg" },
    { name: "React", icon: "/icons/stack/react.svg" },
    { name: "Angular", icon: "/icons/stack/angular.svg" },
];

const Stack: React.FC = () => {
    return (
        <section className="relative z-20 bg-white py-32 px-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-bold mb-12 text-black flex items-center gap-1">
                    Стек технологий
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block" />
                </h2>

                {/* Технологии */}
                <div className="mb-16 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
                    {techStack.map((tech, index) => (
                        <div
                            key={`tech-${index}`}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="w-[72px] h-[72px] rounded-[12px] overflow-hidden mb-2">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-black text-center">{tech.name}</p>
                        </div>
                    ))}
                </div>

                {/* Заголовок Framework — такого же размера как "Стек технологий" */}
                <h2 className="text-4xl font-bold mb-12 text-black flex items-center gap-1">
                    Framework
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block" />
                </h2>

                {/* Framework — 7 штук → равномерно */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8">
                    {frameworks.map((fw, index) => (
                        <div
                            key={`fw-${index}`}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="w-[72px] h-[72px] rounded-[12px] overflow-hidden mb-2">
                                <img
                                    src={fw.icon}
                                    alt={fw.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-black text-center">{fw.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;