import React from "react";
import Image from "next/image";

const projects = [
    {
        title: "КХД Министерство финансов Таджикистана",
        link: "https://moliya.tj",
        image: "/images/projects/khd-tj.png",
    },
    {
        title: "Мобильное приложение Alligator Car Rental",
        link: "https://alligator.rent",
        image: "/images/projects/alligator-car.png",
    },
    {
        title: "Цифровая система GIS System для реагирования на ЧС",
        link: "/projects",
        image: "/images/projects/gis-system.png",
    },
    {
        title: "Elim Taxi — Платформа заказа такси",
        link: "https://apps.apple.com/ru/app/elim-client/id6477772383",
        image: "/images/projects/elim-taxi.png",
    },
    {
        title: "Мобильное приложение для автоматизации таможенного оформления",
        link: "/projects",
        image: "/images/projects/tamga.png",
    },
    {
        title: "Мобильное приложение для автоматизации таможенного оформления (вариант 2)",
        link: "/projects",
        image: "/images/projects/starbrands.png",
    },
];

export default function ProjectsGrid() {
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
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link || "#"}
                            target={project.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="group block w-full h-56 md:h-72 rounded-[20px] overflow-hidden relative"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-scale-down"
                            />
                        </a>
                    ))}
                </div>

                {/* Карусель для мобильных */}
                <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-6">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link || "#"}
                            target={project.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="snap-start flex-shrink-0 w-4/5 h-56 rounded-[20px] overflow-hidden relative"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-scale-down"
                            />
                        </a>
                    ))}
                </div>

                {/* Ссылка на все проекты */}
                <div className="text-center mt-6">
                    <a href="/projects" className="text-red-700 hover:underline">
                        Смотреть все проекты →
                    </a>
                </div>
            </div>
        </section>
    );
}