"use client";

import React from "react";

const reviews = [
    {
        name: "Александр Иванов",
        position: "CEO, Fintech Corp",
        text: "Команда ADB помогла нам с запуском мобильного банка за рекордные сроки. Отличное качество, понятный процесс и результат, который превзошёл ожидания.",
    },
    {
        name: "Мария Ким",
        position: "Product Manager, MedTechX",
        text: "Сотрудничество с ADB — это высокий профессионализм и отличная коммуникация. Нам помогли масштабировать продукт, улучшив его UX и стабильность.",
    },
];

const Reviews: React.FC = () => {
    return (
        <section
            id="reviews"
            className="bg-white py-24 px-6"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-medium text-black mb-12">
                    Отзывы клиентов
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-[#F9F9F9] rounded-2xl p-6 shadow-md">
                            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                                “{review.text}”
                            </p>
                            <div className="text-sm text-gray-600 font-medium">
                                — {review.name}, {review.position}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;