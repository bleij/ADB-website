"use client";

import React, {useState} from "react";

// ДАННЫЕ
const steps = [
    {
        name: "Обращение",
        actions: ["Принимаем запрос", "Перезваниваем клиенту", "Обсуждаем задачи"],
    },
    {
        name: "Брифинг и анализ",
        actions: ["Проводим интервью", "Устанавливаем цели", "Собираем требования"],
    },
    {
        name: "Коммерческое предложение",
        actions: ["Формируем КП", "Согласовываем", "Утверждаем сроки и бюджет"],
    },
    {
        name: "Дизайн и разработка",
        actions: ["Создаем дизайн", "Разрабатываем MVP", "Интегрируем модули"],
    },
    {
        name: "Тестирование и запуск",
        actions: ["Проводим тестирование", "Исправляем баги", "Запускаем проект"],
    },
    {
        name: "Поддержка",
        actions: ["Обслуживаем", "Обновляем", "Развиваем проект"],
    },
];

const Workflow: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(1); // по макету "Брифинг и анализ" активен

    const activeStep = steps[activeIndex];

    return (
        <section
            id="workflow"
            className="relative z-20 bg-gray-50 py-16 px-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-medium mb-10 text-black flex items-center gap-1">
                    Этапы работы
                </h2>

                {/* Навигация по шагам */}
                {/* Desktop */}
                <div className="hidden sm:flex flex-wrap justify-center gap-4 bg-white p-6 rounded-[50px] mb-12">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-300
            ${
                                activeIndex === index
                                    ? "bg-black text-white"
                                    : "bg-white text-black border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            {step.name}
                        </button>
                    ))}
                </div>

                {/* Mobile */}
                <div className="sm:hidden overflow-x-auto flex gap-2 mb-10 no-scrollbar px-1">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300
            ${
                                activeIndex === index
                                    ? "bg-black text-white"
                                    : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                            }`}
                        >
                            {step.name}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {activeStep.actions.map((action, index) => (
                        <div
                            key={index}
                            className="px-5 py-2 sm:px-8 sm:py-4 rounded-full border border-black text-black text-[14px] sm:text-[16px] font-medium text-center transition-all duration-300"
                        >
                            {action}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;