"use client";

import React, { useState, useRef, useEffect } from "react";
import { TextScramble } from "@/utils/TextScramble";

const solutions = [
    { key: "android", title: "Android Development", description: "Нативные приложения под Android — оптимизированные под все устройства и версии ОС. Быстро. Надёжно. Масштабируемо." },
    { key: "ios", title: "iOS Development", description: "Нативные приложения под iPhone и iPad с высочайшей производительностью и соответствием гайдлайнам Apple." },
    { key: "cross", title: "Кроссплатформенные решения", description: "Одна база — все платформы. React Native, Flutter и другие технологии для быстрого запуска без потери качества." },
    { key: "design", title: "UI/UX-дизайн для мобильных", description: "Дизайн, который не просто красиво выглядит, а ведёт пользователя к цели — понятно, удобно, логично." },
    { key: "backend", title: "Серверная логика и API", description: "Мощный бэкенд для ваших мобильных решений. Архитектура, безопасность, масштабирование." },
    { key: "publishing", title: "Публикация в App Store и Google Play", description: "Мы берём на себя всю техническую и бюрократическую работу по публикации и релизу приложения." },
    { key: "performance", title: "Оптимизация производительности", description: "Ускорим загрузку, снизим расход батареи и памяти. Ваше приложение будет работать как часы." },
    { key: "support", title: "Техническая поддержка и развитие", description: "Оперативное устранение багов, обновления, развитие функционала. Мы рядом — даже после релиза." },
];

const Solutions: React.FC = () => {
    const [activeKey, setActiveKey] = useState("android");
    const active = solutions.find((s) => s.key === activeKey)!;

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
        <section className="bg-white py-8 px-2 md:py-20 md:px-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <div className="max-w-7xl mx-auto bg-[#f4f4f4] rounded-[40px] p-6 md:p-14 flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Левая часть */}
                <div className="flex-1 flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black text-center md:text-left">
                        Мобильные решения, которые двигают бизнес вперёд
                    </h2>
                    <p className="text-gray-800 text-[14px] md:text-[16px] leading-relaxed text-center md:text-left">
                        Создаём масштабируемые приложения с нуля под ваш рынок, задачи и аудиторию. От MVP до сложных экосистем — мы превращаем идеи в стабильный и гибкий продукт.
                    </p>

                    {/* Мобильная карусель */}
                    <div className="md:hidden overflow-x-auto pb-2 -mx-2">
                        <div className="flex gap-2 px-2">
                            {solutions.map((s) => (
                                <button
                                    key={s.key}
                                    onClick={() => setActiveKey(s.key)}
                                    className={`flex-shrink-0 h-8 px-3 text-xs rounded-full whitespace-nowrap transition
                                        ${activeKey === s.key
                                        ? "bg-[#D7001D] text-white"
                                        : "bg-white text-black hover:bg-gray-200"}
                                    `}
                                >
                                    {s.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Десктоп список */}
                    <div className="hidden md:flex flex-col gap-3">
                        {solutions.map((s) => (
                            <button
                                key={s.key}
                                onClick={() => setActiveKey(s.key)}
                                className={`flex items-center justify-between h-14 px-4 text-lg rounded-full transition
                                    ${activeKey === s.key
                                    ? "bg-[#D7001D] text-white"
                                    : "bg-white text-black hover:bg-gray-200"}
                                `}
                            >
                                <span>{s.title}</span>
                                {activeKey === s.key && (
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

                {/* Правая часть — карточка */}
                <div className="flex-[1.2] bg-white rounded-3xl border border-gray-200 p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
                    <div>
                        <div className="w-full max-w-full max-h-[300px] sm:max-h-[360px] overflow-hidden rounded-xl mb-4 md:mb-6 flex items-center justify-center">
                            <img
                                src={`/images/solutions/${active.key}.png`}
                                alt={active.title}
                                className="w-full h-auto max-h-[300px] sm:max-h-[360px] object-contain"
                            />
                        </div>
                        <h3 ref={titleRef} className="text-xl md:text-2xl font-medium mb-2 text-black" />
                        <p ref={descRef} className="text-gray-800 text-[14px] md:text-[18px] leading-relaxed min-h-[60px]" />
                    </div>
                    <button className="mt-6 self-start px-5 py-2 rounded-md bg-[#D7001D] text-white font-semibold hover:bg-[#c10019] transition">
                        Узнать больше →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Solutions;