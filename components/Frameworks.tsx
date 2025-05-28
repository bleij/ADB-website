"use client";

import React from "react";

const frameworks = [
    "Django", "FastAPI", "Laravel", "Spring",
    "React", "Next.js", "Vue", "Angular",
];

const Frameworks: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl font-bold mb-10">
                    Фреймворки и платформы
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                    {frameworks.map((fw, idx) => (
                        <div
                            key={idx}
                            className="w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow text-sm text-gray-700"
                        >
                            {fw}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Frameworks;