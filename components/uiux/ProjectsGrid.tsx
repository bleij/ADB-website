import React from "react";

export default function ProjectsGrid() {
    const placeholders = Array.from({ length: 6 });

    return (
        <section
            id="projects"
            className="bg-white py-16 px-6 sm:px-10 lg:px-20"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-14 text-black">
                    Проекты
                </h2>

                {/* Сетка для планшетов и десктопов */}
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {placeholders.map((_, idx) => (
                        <div
                            key={idx}
                            className="w-full h-56 md:h-72 bg-gray-100 rounded-[20px]"
                        />
                    ))}
                </div>

                {/* Карусель для мобильных */}
                <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-6">
                    {placeholders.map((_, idx) => (
                        <div
                            key={idx}
                            className="snap-start flex-shrink-0 w-4/5 h-56 bg-gray-100 rounded-[20px]"
                        />
                    ))}
                </div>

                {/* Ссылка на все проекты */}
                <div className="text-center mt-6">
                    <a href="#projects" className="text-red-700 hover:underline">
                        Смотреть все проекты →
                    </a>
                </div>
            </div>
        </section>
    );
}