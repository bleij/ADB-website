"use client";

import React from "react";

const Philosophy = () => {
    return (
        <section
            id="philosophy"
            className="bg-white py-24 px-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto bg-[#D7001D] text-white rounded-[32px] border border-white p-10 flex flex-col md:flex-row-reverse gap-12 items-center justify-between">
                {/* Левая часть (теперь справа на десктопе) */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-medium">Ценности и философия</h2>

                    <p className="text-lg leading-relaxed">
                        Мы подходим к каждому проекту как к своему: глубоко погружаемся в задачу,
                        изучаем бизнес-процессы и создаём решения, которые действительно работают.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Наша цель — не просто написать код, а построить понятный, удобный и масштабируемый продукт.
                        Работаем честно, прозрачно и всегда на стороне клиента.
                    </p>

                    <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-red-600 transition">
                        Обсудить проект →
                    </button>
                </div>

                {/* Правая часть (теперь слева на десктопе) */}
                <div className="flex-1 flex justify-center">
                    <div className="p-4 overflow-hidden max-w-[400px]">
                        <img
                            src="/images/philosophy/chart.svg"
                            alt="График, отражающий философию"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;