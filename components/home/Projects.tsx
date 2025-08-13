"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const projects = [
    {
        title: "Elim Taxi — Платформа заказа такси",
        description: `Платформа заказа такси с гибкой логикой ценообразования и умным подбором водителей.

Создали сервис, который сочетает алгоритмическую подачу машины и возможность вручную предлагать цену за поездку. В системе реализован приоритет ближайших водителей, фильтры по авто и опыту, чат и отслеживание маршрута в реальном времени. Гибкий, масштабируемый продукт под любые рынки.`,
        image: "/images/projects/elim-taxi.png",
    },
    {
        title: "TAMGA — Автоматизация таможенного оформления",
        description: `Разработали решение, которое позволяет сканировать таможенные документы и автоматически формировать на их основе декларации.

Система использует машинное обучение для распознавания структуры документов, поддерживает многоязычность и адаптируется под форматы разных стран. Ускоряет процесс и снижает риски ошибок.`,
        image: "/images/projects/tamga.png",
    },
    {
        title: "Kostanay Minerals — Интеллектуальное извлечение полезных компонентов",
        description: `В рамках консорциума AlmaU, Adb и АО «Костанайские минералы» разработали ИИ-модель, интегрированную в перерабатывающее оборудование. Она в реальном времени анализирует состав руды и автоматически корректирует процесс для максимального извлечения. Повысили коэффициент на 7–12%, снизили потери и создали решение, готовое к масштабированию.`,
        image: "/images/projects/kostanay-minerals.png",
    },
];

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="relative z-20 bg-white py-16 px-6 sm:px-10 lg:px-20"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-medium mb-12 text-black flex items-center gap-1">
                    Наши проекты
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block" />
                </h2>

                {/* Мобильный слайдер */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true, el: ".custom-pagination" }}
                        spaceBetween={24}
                        slidesPerView={1}
                        className="mb-6"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <div className="mb-4 h-full rounded-xl overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-[20px] font-medium text-black mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 text-base">
                                        {project.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Пагинация */}
                    <div className="custom-pagination flex justify-center gap-2 mt-4" />

                    <style>{`
                        .custom-pagination .swiper-pagination-bullet {
                            background: #d7001d !important;
                            opacity: 0.4;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                        }
                        .custom-pagination .swiper-pagination-bullet-active {
                            opacity: 1;
                        }
                    `}</style>
                </div>

                {/* Десктопная сетка */}
                <div className="hidden md:flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
                        >
                            <div
                                className={`
                                    ${index % 2 === 1 ? "md:order-2" : "md:order-1"}
                                    order-2
                                `}
                            >
                                <h3 className="text-[24px] sm:text-[28px] font-medium text-black mb-4 leading-snug">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 text-base">
                                    {project.description}
                                </p>
                            </div>

                            <div
                                className={`
                                    ${index % 2 === 1 ? "md:order-1" : "md:order-2"}
                                    order-1
                                `}
                            >
                                <div className="w-full h-full rounded-[20px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;