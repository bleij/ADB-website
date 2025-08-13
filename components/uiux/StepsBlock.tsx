"use client";

import React from "react";
import Image from "next/image";

const steps = [
    {
        icon: "/icons/uxui/eye.svg",
        iconSize: 50,
        title: "Исследование и аналитика",
        description:
            "Глубокое понимание бизнеса и пользователей. Анализируем цели продукта, поведение аудитории и конкурентов. Закладываем прочную основу для пользовательского опыта.",
    },
    {
        icon: "/icons/uxui/prototype.svg",
        iconSize: 50,
        title: "Структура и прототипирование",
        description:
            "Функциональная логика будущего интерфейса. Создаём карту экранов, пользовательские сценарии (CJM) и кликабельные прототипы. Проверяем гипотезы до этапа визуального дизайна.",
    },
    {
        icon: "/icons/uxui/ui.svg",
        iconSize: 50,
        title: "UI-дизайн и визуальная система",
        description:
            "Современный, адаптивный и брендированный интерфейс. Формируем стиль, цветовую палитру, типографику и компоненты. Создаём понятный и визуально чистый дизайн, готовый к реализации.",
    },
    {
        icon: "/icons/uxui/dev.svg",
        iconSize: 50,
        title: "Подготовка к разработке",
        description:
            "Максимальная готовность для фронтенд-команды. Передаём макеты через Figma, документируем поведение элементов, собираем гайдлайн и проверяем на адаптивность и доступность.",
    },
];

const StepsBlock: React.FC = () => {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-center mb-20 leading-snug text-black">
                    Как мы создаём интерфейсы, которые работают на результат —
                    <br />
                    от исследования до готового цифрового решения.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group flex items-start border border-gray-200 rounded-2xl p-6 sm:p-8 gap-6 bg-white text-black overflow-hidden transition-colors duration-500 hover:text-white hover:bg-[#D7001D]"
                        >
                            {/* Анимированный круг */}
                            <div className="absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#D7001D] opacity-0 group-hover:opacity-100 group-hover:scale-[800%] transition-transform duration-500 z-0" />

                            <div className="relative z-10 flex items-center justify-center flex-shrink-0">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={step.iconSize}
                                    height={step.iconSize}
                                />
                            </div>
                            <div className="relative z-10 flex flex-col gap-2">
                                <h3 className="text-xl font-normal">{step.title}</h3>
                                <p className="text-sm font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsBlock;