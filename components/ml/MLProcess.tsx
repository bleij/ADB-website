// components/ml/MlProcess.tsx
"use client";

import React from "react";
import Image from "next/image";

const steps = [
    {
        icon: "/icons/ml/step1.svg",
        title: "Формулировка бизнес-задачи",
        description:
            "Первый шаг в разработке модели машинного обучения — чёткое определение цели. Мы помогаем сформулировать бизнес-проблему, определить тип задачи (классификация, регрессия, кластеризация) и составить техническое задание.",
    },
    {
        icon: "/icons/ml/step2.svg",
        title: "Сбор, очистка и разметка данных",
        description:
            "Качественные данные — залог успешной модели. Собираем, очищаем и структурируем данные из внутренних и внешних источников, проводим разметку и готовим датасет для обучения.",
    },
    {
        icon: "/icons/ml/step3.svg",
        title: "Обучение и тестирование модели",
        description:
            "Обучаем модель с использованием современных алгоритмов (нейросети, градиентный бустинг, деревья решений и др.). Производим тестирование, настройку гиперпараметров и оптимизацию по ключевым метрикам качества.",
    },
];

const MlProcess: React.FC = () => {
    return (
        <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white font-manrope">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
                        >
                            {/* Иконка */}
                            <div className="w-12 h-12 bg-[#D7001D] rounded-lg flex items-center justify-center">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </div>
                            {/* Заголовок */}
                            <h3 className="text-xl font-semibold leading-snug">
                                {step.title}
                            </h3>
                            {/* Описание */}
                            <p className="text-base text-gray-700 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MlProcess;