"use client";

import React from "react";
import {MAIN_COLOR_HEX} from "@/utils/colors";
import PixelCard from "@/components/PixelCard"; // подключаем PixelCard

const services = [
    {
        title: "Mobile",
        description: "Разработка мобильных приложений под iOS и Android — полный цикл",
        icon: "/icons/mobile.svg",
        iconSize: 44,
        link: "/services/mobile",
    },
    {
        title: "Web",
        description: "Проектируем и разрабатываем веб-продукты любой сложности — быстро и надёжно.",
        icon: "/icons/web.svg",
        iconSize: 54,
        link: "/services/web",
    },
    {
        title: "ML",
        description: "Разрабатываем и внедряем модели машинного обучения для бизнеса и продуктов.",
        icon: "/icons/ml.svg",
        iconSize: 44,
        link: "/services/ml",
    },
    {
        title: "UX / UI design",
        description: "Создаём структуру, логику и визуальный стиль цифровых продуктов",
        icon: "/icons/design.svg",
        iconSize: 56,
        link: "/services/design",
    },
];

const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="relative z-20 bg-white py-16 px-6"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-black flex items-center gap-1">
                    Услуги
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block"/>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.link}
                            className="group block"
                        > <PixelCard variant="pink">
                            <div
                                className="absolute inset-0 p-6 flex flex-col h-full w-full transition-colors duration-300 ease-in-out">
                                <div className="flex items-start justify-between mb-6">
                                    {/* Левая иконка */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#fcd6dd]">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            style={{
                                                width: `${service.iconSize}px`,
                                                height: `${service.iconSize}px`,
                                            }}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Правая кнопка со стрелкой */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#D7001D]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 group-hover:text-white text-black transition-colors duration-300 ease-in-out"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                            <polyline points="12 5 19 12 12 19"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Заголовок + линия */}
                                <div style={{minHeight: "70px"}} className="flex flex-col justify-end mb-4">
                                    <h3 className="text-[28px] font-bold text-black mb-2">{service.title}</h3>
                                    <div
                                        className="h-[2px] w-full"
                                        style={{backgroundColor: MAIN_COLOR_HEX}}
                                    />
                                </div>

                                {/* Описание */}
                                <p className="text-base text-gray-700">{service.description}</p>
                            </div>
                        </PixelCard>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;