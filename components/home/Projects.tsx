"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import {MAIN_COLOR_HEX} from "@/utils/colors";

const projects = [
    {
        title: "Разработка e-commerce платформы с интеграцией платежных систем.",
        description:
            "Обеспечиваем полный цикл разработки: предлагаем дизайн, разрабатываем цифровое решение, тестируем и обеспечиваем техподдержку.",
        tags: ["iOS", "Android", "React", "Flutter"],
    },
    {
        title: "Автоматизация логистики и складского учёта.",
        description:
            "Создание платформы управления поставками с интеграцией API перевозчиков, трекингом и генерацией отчётности.",
        tags: ["Node.js", "Next.js", "PostgreSQL"],
    },
    {
        title: "Мобильное приложение для фитнес-клуба.",
        description:
            "Личный кабинет клиента, расписание тренировок, онлайн-оплата и интеграция с CRM-клуба.",
        tags: ["Flutter", "Firebase", "Stripe"],
    },
];

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="relative z-20 bg-white py-16 px-6 sm:px-10 lg:px-20"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-medium mb-12 text-black flex items-center gap-1">
                    Наши проекты
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block"/>
                </h2>

                {/* Мобильный слайдер */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: ".custom-pagination"}}
                        spaceBetween={24}
                        slidesPerView={1}
                        className="mb-6" // убираем pb-10
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <div
                                        className="mb-4 h-[200px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-semibold">
                                        Картинка
                                    </div>
                                    <h3 className="text-[20px] font-medium text-black mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 text-base mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1 border border-gray-300 rounded-full text-sm text-black"
                                            >
                            {tag}
                        </span>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Пагинация снизу вне слайда */}
                    <div className="custom-pagination flex justify-center gap-2 mt-4"/>

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

                            <div
                                className={`
                                    ${index % 2 === 1 ? "md:order-1" : "md:order-2"}
                                    order-1
                                `}
                            >
                                <div
                                    className="w-full h-[300px] bg-gray-100 flex items-center justify-center rounded-[20px] text-gray-400 text-xl font-semibold">
                                    Картинка
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