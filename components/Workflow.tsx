"use client";

import React from "react";

const steps = [
    "Обращение",
    "Брифинг",
    "Коммерческое предложение",
    "Подписание договора",
    "Разработка",
    "Запуск и поддержка",
];

const Workflow: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl font-bold mb-12">Этапы работы</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center gap-3"
                        >
                            <div
                                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                                {idx + 1}
                            </div>
                            <p className="text-sm font-medium text-gray-800">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;