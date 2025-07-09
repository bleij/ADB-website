"use client";

import React from "react";
import Link from "next/link";
import { MAIN_COLOR_HEX } from "@/utils/colors";
import PixelCard from "@/components/shared/PixelCard";

const services = [
    {
        title: "Mobile",
        description: "Разработка мобильных приложений под iOS и Android — полный цикл",
        icon: "/icons/mobile.svg",
        iconSize: 44,
        link: "/mobile",
    },
    {
        title: "Web",
        description: "Разрабатываем веб-продукты любой сложности — быстро и надёжно.",
        icon: "/icons/web.svg",
        iconSize: 54,
        link: "/web",
    },
    {
        title: "ML",
        description: "Разрабатываем и внедряем модели машинного обучения для бизнеса и продуктов.",
        icon: "/icons/ml.svg",
        iconSize: 44,
        link: "/ml",
    },
    {
        title: "UX / UI design",
        description: "Создаём структуру, логику и визуальный стиль цифровых продуктов",
        icon: "/icons/design.svg",
        iconSize: 56,
        link: "/uxui",
    },
];

const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="relative z-20 bg-white py-16 px-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-medium mb-12 text-black flex items-center gap-1">
                    Услуги
                    <img src="/icons/logo.svg" alt="logo" className="w-5 h-5 inline-block" />
                </h2>

                <div className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:items-stretch">
                    {services.map((service, index) => (
                        <Link key={index} href={service.link} className="group block flex justify-center">
                            <div className="relative w-full max-w-[420px] max-[640px]:max-w-[320px] h-[300px] max-[640px]:h-[280px] mx-auto overflow-hidden rounded-[20px] group">

                                {/* Полупрозрачный красный фон под описанием */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-[130px] bg-[#D7001D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 hidden sm:block"
                                    style={{ borderBottomLeftRadius: "1.7rem", borderBottomRightRadius: "1.7rem" }} // 20px между 3xl (1rem = 16px) и 4xl
                                />
                                <PixelCard variant="pink" className="relative z-10 h-full">
                                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between h-full">
                                        {/* Верхние иконки */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#fcd6dd]">
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
                                            <div className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#D7001D]">
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
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Заголовок и линия */}
                                        <div className="mb-2">
                                            <h3 className="text-[28px] font-medium text-black mb-2">{service.title}</h3>
                                            <div className="h-[2px] w-full" style={{ backgroundColor: MAIN_COLOR_HEX }} />
                                        </div>

                                        {/* Описание */}
                                        <p className="font-medium transition-colors duration-300 group-hover:text-white text-gray-700 z-10 relative">
                                            {service.description}
                                        </p>
                                    </div>
                                </PixelCard>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;