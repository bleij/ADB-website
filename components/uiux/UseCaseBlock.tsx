"use client";

import React from "react";
import Image from "next/image";

const useCases = [
    {
        title: "Сложная навигация и низкая вовлеченность",
        desc: "Оптимизируем пользовательские сценарии, чтобы удерживать пользователей и увеличивать вовлеченность.",
        image: "/images/uxui/navigation.png",
    },
    {
        title: "Низкая конверсия на сайте или в приложении",
        desc: "Перерабатываем интерфейс с фокусом на целевые действия: покупки, заявки, регистрации.",
        image: "/images/uxui/conversion.png",
    },
    {
        title: "Недоступность и адаптивность на устройствах",
        desc: "Создаём полностью адаптивный дизайн с учётом accessibility-гайдлайнов.",
        image: "/images/uxui/accessibility.png",
    },
    {
        title: "Несовременный или нерелевантный визуал",
        desc: "Обновляем визуальный стиль с учётом бренд-стратегии и современных трендов UI/UX.",
        image: "/images/uxui/visual.png",
    },
];

export default function UseCaseBlock() {
    return (
        <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-center text-xl md:text-4xl font-semibold leading-tight mb-2 text-black">
                    Решаемые задачи UX/UI-дизайна
                </h2>
                <p className="text-center text-base md:text-lg text-gray-600 mb-16">
                    (Use Cases / Problem-Solution Format)
                </p>

                {/* Список use cases */}
                <div className="space-y-16">
                    {useCases.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Текст */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                                <button className="bg-white text-black text-sm px-4 py-2 border border-gray-900 rounded-xl flex items-center gap-2 hover:bg-black hover:text-white transition duration-200">
                                    Узнать больше
                                    <span className="ml-1">→</span>
                                </button>
                            </div>

                            {/* Картинка */}
                            <div className="p-4 w-0.9rem h-72 md:h-96 rounded-[30px] overflow-hidden bg-gray-100 flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}