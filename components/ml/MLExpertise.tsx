// components/ml/MLExpertise.tsx
"use client";

import React from "react";
import Image from "next/image";

const expertiseItems = [
    {
        title: "Предиктивная аналитика и модели прогнозирования",
        description:
            "Помогаем компаниям предсказывать спрос, churn, поведение клиентов и ключевые бизнес-показатели с помощью ML-моделей.",
        image: "/images/ml/predictive.png",
    },
    {
        title: "NLP и работа с текстами",
        description:
            "Обрабатываем и анализируем текстовые данные: от чат-ботов до классификации обращений и извлечения смысла.",
        image: "/images/ml/nlp.png",
    },
    {
        title: "Компьютерное зрение и автоматизация процессов",
        description:
            "Реализуем ML-решения для обработки изображений, видеоаналитики, контроля качества и распознавания объектов.",
        image: "/images/ml/computer-vision.png",
    },
];

export default function MLExpertise() {
    return (
        <section className="py-20 bg-white font-manrope">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-0">
                <h2 className="text-center text-3xl sm:text-4xl font-medium mb-12">
                    Экспертиза в машинном обучении: от модели до внедрения
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {expertiseItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-gray-100 rounded-2xl overflow-hidden"
                        >
                            {/* Картинка */}
                            <div className="relative h-[300px] w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}