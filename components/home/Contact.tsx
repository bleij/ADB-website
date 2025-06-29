"use client";

import React from "react";
import {MAIN_COLOR_HEX} from "@/utils/colors";

const stats = [
    {value: "10", label: "разработчиков\nв команде"},
    {value: "6+", label: "лет опыта\nв разработке"},
    {value: "100 000", label: "строк кода\nнаписано"},
];

const Contact: React.FC = () => {
    return (
        <section
            id="contact-form"
            className="relative z-20 bg-white py-20 px-6"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Левая часть — текст + форма */}
                <div>
                    {/* Заголовок */}
                    <h2 className="text-5xl font-bold mb-6 text-black leading-tight">
                        Превратим вашу идею в<br/>реальность
                    </h2>

                    {/* Подзаголовок */}
                    <p className="text-xl text-black mb-8 leading-relaxed">
                        Оставьте заявку и получите подробную<br/>консультацию о наших услугах
                    </p>

                    {/* Форма */}
                    <form className="space-y-4">
                        {/* Имя */}
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="w-full max-w-md h-[72px] px-6 rounded-full bg-gray-100 text-lg placeholder-gray-400 focus:outline-none"
                        />

                        {/* Телефон */}
                        <div className="flex items-center gap-4 max-w-md">
                            {/* Заглушка для выбора страны */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-full">
                                <img src="/icons/flags/kz.svg" alt="KZ" className="w-6 h-4"/>
                                <span className="text-gray-600">▼</span>
                            </div>

                            <input
                                type="tel"
                                placeholder="+7 (000) 000-00-00"
                                className="flex-1 h-[72px] px-6 rounded-full bg-gray-100 text-lg placeholder-gray-400 focus:outline-none"
                            />
                        </div>

                        {/* Кнопка */}
                        <button
                            type="submit"
                            className="w-[220px] h-[72px] bg-[#4B4B4B] text-white text-lg font-semibold rounded-full"
                        >
                            Отправить
                        </button>

                        {/* Политика */}
                        <p className="text-sm text-black max-w-md pt-2">
                            Нажимая на кнопку “отправить” вы соглашаетесь с{" "}
                            <a href="#" className="text-blue-600 underline">
                                политикой конфиденциальности
                            </a>
                        </p>
                    </form>
                </div>

                {/* Правая часть — блоки со статистикой */}
                <div className="flex flex-wrap gap-6 items-start justify-end">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-[260px] p-6 bg-gray-100 rounded-[24px] flex flex-col"
                        >
                            <div className="text-5xl font-bold text-black mb-1 leading-none">
                                {stat.value}
                            </div>
                            <div
                                className="h-[2px] w-[32px] mb-3"
                                style={{backgroundColor: MAIN_COLOR_HEX}}
                            />
                            <div className="text-base text-black whitespace-pre-line">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;