"use client";

import React from "react";

const MLHero: React.FC = () => {
    return (
        <section
            // full screen height on desktop, center content vertically
            className="bg-white py-20 px-6 sm:px-10 lg:px-20 min-h-screen flex items-center"
            style={{ fontFamily: "var(--font-manrope)" }}
        >
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left column */}
                <div className="flex-1">
                    {/* red bar */}
                    <div className="w-10 h-1.5 bg-[#D7001D] rounded-full mb-6" />
                    {/* title */}
                    <h1 className="text-5xl lg:text-6xl font-normal mb-6 text-black leading-tight">
                        ML разработка
                    </h1>
                    {/* description */}
                    <p className="text-lg sm:text-xl mb-8 text-gray-800 max-w-lg leading-relaxed">
                        ML-разработка и искусственный интеллект под ключ — для бизнеса в Казахстане и СНГ.
                        Создаём решения на основе машинного обучения и нейросетей: от предиктивной аналитики
                        до интеллектуальной автоматизации процессов.
                    </p>
                    {/* button */}
                    <a
                        href="#contact-form"
                        className="inline-flex items-center bg-[#D7001D] text-white font-semibold px-6 py-3 rounded-md transition hover:bg-opacity-90"
                    >
                        Реализовать продукт&nbsp;<span className="text-xl">→</span>
                    </a>
                </div>

                {/* Right column */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/images/ml/stack.png"
                        alt="Описание картинки"
                        className="w-full object-contain"
                        style={{ aspectRatio: "4/3" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default MLHero;