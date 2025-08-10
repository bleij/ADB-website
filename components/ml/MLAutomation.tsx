"use client";

import React, { useState, useRef, useEffect } from "react";
import { TextScramble } from "@/utils/TextScramble";
import Image from "next/image";

const features = [
    {
        key: "realtime",
        title: "Анализ данных в реальном времени",
        description:
            "Обрабатывайте и анализируйте большие объёмы данных мгновенно с помощью кастомных ML-моделей.",
        image: "/images/ml/realtime.png",
    },
    {
        key: "automation",
        title: "Автоматизация рутины",
        description:
            "Исключите человеческий фактор: от классификации документов до интеллектуальной фильтрации данных.",
        image: "/images/ml/automation.png",
    },
    {
        key: "predictions",
        title: "Точные прогнозы и рекомендации",
        description:
            "ML-алгоритмы помогают предсказывать поведение пользователей, спрос и отклонения в бизнесе.",
        image: "/images/ml/predictions.png",
    },
    {
        key: "risk",
        title: "Контроль рисков и безопасность",
        description:
            "Интеллектуальные модели снижают уровень ошибок и помогают соответствовать стандартам AML, KYC, GDPR.",
        image: "/images/ml/risk.png",
    },
    {
        key: "scale",
        title: "Масштабируемость и кастомизация",
        description:
            "Каждое решение адаптируется под ваш стек, цели и отраслевые требования.",
        image: "/images/ml/scale.png",
    },
];

export default function MLAutomation() {
    const [activeKey, setActiveKey] = useState("realtime");
    const active = features.find((f) => f.key === activeKey)!;

    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const scrambleTitle = useRef<TextScramble | null>(null);
    const scrambleDesc = useRef<TextScramble | null>(null);

    useEffect(() => {
        if (titleRef.current && descRef.current) {
            scrambleTitle.current = new TextScramble(titleRef.current);
            scrambleDesc.current = new TextScramble(descRef.current);
        }
    }, []);

    useEffect(() => {
        scrambleTitle.current?.setText(active.title);
        scrambleDesc.current?.setText(active.description);
    }, [active.title, active.description]);

    return (
        <section
            className="bg-white py-8 px-2 md:py-20 md:px-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto bg-[#f4f4f4] rounded-[40px] p-6 md:p-14 flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Левая панель */}
                <div className="flex-1 flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black text-center md:text-left">
                        Комплексное ML-решение для автоматизации, анализа и масштабирования
                    </h2>
                    <p className="text-gray-800 text-[14px] md:text-[16px] leading-relaxed text-center md:text-left">
                        Инструменты на основе машинного обучения, которые помогают бизнесу принимать решения быстрее,
                        точнее и безопаснее.
                    </p>

                    {/* Моб. кнопки */}
                    <div className="md:hidden overflow-x-auto pb-2 -mx-2">
                        <div className="flex gap-2 px-2">
                            {features.map((f) => (
                                <button
                                    key={f.key}
                                    onClick={() => setActiveKey(f.key)}
                                    className={`flex-shrink-0 h-8 px-3 text-xs rounded-full whitespace-nowrap transition
                    ${activeKey === f.key ? "bg-[#D7001D] text-white" : "bg-white text-black hover:bg-gray-200"}`}
                                >
                                    {f.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Десктоп кнопки */}
                    <div className="hidden md:flex flex-col gap-3">
                        {features.map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setActiveKey(f.key)}
                                className={`flex items-center justify-between h-14 px-4 text-lg rounded-full transition
                  ${activeKey === f.key ? "bg-[#D7001D] text-white" : "bg-white text-black hover:bg-gray-200"}`}
                            >
                                <span>{f.title}</span>
                                {activeKey === f.key && (
                                    <div className="ml-3 w-4 h-4 relative">
                                        <div className="spinner absolute w-full h-full">
                                            <div className="face" />
                                            <div className="face" />
                                            <div className="face" />
                                            <div className="face" />
                                            <div className="face" />
                                            <div className="face" />
                                        </div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Правая карточка */}
                <div className="flex-[1.2] bg-white rounded-3xl border border-gray-200 p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
                    <div>
                        <div className="w-full rounded-xl mb-4 md:mb-6 overflow-hidden relative" style={{ aspectRatio: "4 / 3" }}>
                            <Image
                                src={active.image}
                                alt={active.title}
                                fill
                                className="object-contain bg-white"
                            />
                        </div>
                        <h3 ref={titleRef} className="text-xl md:text-2xl font-medium mb-2 text-black" />
                        <p
                            ref={descRef}
                            className="text-gray-800 text-[14px] md:text-[18px] leading-relaxed min-h-[60px]"
                        />
                    </div>
                    <button className="mt-6 self-start px-5 py-2 rounded-md bg-[#D7001D] text-white font-semibold hover:bg-[#c10019] transition">
                        Узнать больше →
                    </button>
                </div>
            </div>
        </section>
    );
}