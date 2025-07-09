// components/web/WebServices.tsx
"use client";

import React from "react";
import Image from "next/image";

const services = [
    {
        icon: "/icons/web/frontend.svg",
        title: "Frontend & Backend Development",
        description:
            "Реализуем адаптивный, быстрый и безопасный сайт. Используем современные фреймворки и архитектуры (React, Node.js, Headless CMS).",
    },
    {
        icon: "/icons/web/research.svg",
        title: "Research & Planning",
        description:
            "Мы погружаемся в бизнес-задачи, изучаем рынок и пользователей, чтобы точно определить стек технологий и архитектуру проекта.",
    },
    {
        icon: "/icons/web/prototype.svg",
        title: "UX/UI Дизайн и Прототипирование",
        description:
            "Создаём прототипы и визуальные интерфейсы, фокусируясь на удобстве, скорости и актуальности визуального языка.",
    },
    {
        icon: "/icons/web/support.svg",
        title: "Тестирование, запуск и поддержка",
        description:
            "Запускаем проект, проверяя каждую деталь. Обеспечиваем техническую поддержку, обновления и масштабируемость.",
    },
];

const WebServices: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto bg-[#D7001D] text-white rounded-2xl overflow-hidden">
            <div
                className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_2fr]
          gap-10
          py-16
          px-6
          sm:px-10
          lg:px-20
        "
            >
                {/* Заголовок */}
                <h2
                    className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-medium leading-snug text-center lg:text-left h-full"
                >
                    Как мы создаём эффективные веб-сервисы
                </h2>

                {/* Сетка сервисов */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                    {services.map(({icon, title, description}, i) => (
                        <div key={i} className="flex-col items-start gap-4">
                            <div className="flex-none w-12 h-12">
                                <Image src={icon} alt={title} width={32} height={32}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium mb-1">{title}</h3>
                                <p className="text-lg font-thin leading-relaxed text-gray-200">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default WebServices;