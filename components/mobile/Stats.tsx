"use client";

import React from "react";

const stats = [
    {
        label: "85%",
        title: "Времени на смартфоне тратится в приложениях",
        description:
            "Мировая аналитика показывает: пользователи выбирают приложения вместо браузеров — особенно для покупок, финансов и общения",
        tag: null,
    },
    {
        label: "+55% рост",
        title:
            "Объёма онлайн-платежей через мобильные приложения (2025)",
        description:
            "В Казахстане наблюдается стремительный рост безналичной экономики — особенно через кастомные приложения финтех и ритейл-компаний",
        tag: "Казахстан",
    },
    {
        label: "59% компаний",
        title:
            "Заявили, что мобильное приложение повысило вовлечённость клиентов",
        description:
            "Companies that invest in Sumsub avoided additional headcount cost, as the Total Economic Impact™ (TEI) study concludes",
        tag: "Про бизнес",
    },
    {
        label: "70% пользователей в Казахстане используют Android-смартфоны",
        title: null,
        description:
            "Важно учитывать локальный рынок при разработке — кастомное Android-приложение даст максимальный охват в СНГ и Центральной Азии",
        tag: "Казахстан",
    },
    {
        label: "в 3 раза быстрее через MVP-продукт",
        title: null,
        description:
            "MVP-подход позволяет бизнесу протестировать идею, получить обратную связь и начать зарабатывать в кратчайшие сроки",
        tag: "MVP и time-to-market",
    },
];

const Stats = () => {
    return (
        <section className="bg-[#f8f9fb] py-20 px-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <div className="max-w-7xl mx-auto flex flex-col gap-6">

                {/* Верхние карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.slice(0, 3).map((stat, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl p-6 bg-white text-black overflow-hidden transition-colors duration-500 hover:text-white hover:bg-[#D7001D]"
                        >
                            {/* Анимированный круг */}
                            <div className="absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#D7001D] opacity-0 group-hover:opacity-100 group-hover:scale-[800%] transition-transform duration-500 z-0" />

                            <div className="relative z-10 flex flex-col gap-4">
                                {stat.tag && (
                                    <div className="w-fit text-xs font-medium px-3 py-1 rounded-md bg-gray-200 text-gray-800 group-hover:bg-white group-hover:text-[#D7001D] transition-colors">
                                        {stat.tag}
                                    </div>
                                )}
                                <h3 className="text-3xl font-medium leading-tight">{stat.label}</h3>
                                {stat.title && <p className="text-xl font-medium leading-snug">{stat.title}</p>}
                                <p className="text-base leading-relaxed">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Нижние карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stats.slice(3).map((stat, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl p-6 bg-white text-black overflow-hidden transition-colors duration-500 hover:text-white hover:bg-[#D7001D]"
                        >
                            {/* Анимированный круг */}
                            <div className="absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#D7001D] opacity-0 group-hover:opacity-100 group-hover:scale-[800%] transition-transform duration-500 z-0" />

                            <div className="relative z-10 flex flex-col gap-4">
                                {stat.tag && (
                                    <div className="w-fit text-xs font-medium px-3 py-1 rounded-md bg-gray-200 text-gray-800 group-hover:bg-white group-hover:text-[#D7001D] transition-colors">
                                        {stat.tag}
                                    </div>
                                )}
                                <h3 className="text-2xl font-medium leading-tight">{stat.label}</h3>
                                {stat.title && <p className="text-lg font-medium leading-snug">{stat.title}</p>}
                                <p className="text-base leading-relaxed">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;