"use client";

import React from "react";

const techStack = [
    "Python", "Java", "JavaScript", "TypeScript",
    "Go", "Rust", "Kotlin", "Swift",
];

const Stack: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl font-bold mb-10">
                    Используемые технологии
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                    {techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg text-sm text-gray-600"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;