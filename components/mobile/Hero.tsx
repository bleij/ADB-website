"use client";

import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            className="bg-white min-h-screen flex items-center px-6 pt-20 sm:pt-32 lg:pt-0 sm:px-10 lg:px-20"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Левая часть */}
                <div className="flex-1 max-w-[540px]">
                    {/* Красная черта */}
                    <div className="w-10 h-[6px] bg-[#D7001D] rounded-full mb-6"></div>

                    {/* Заголовок */}
                    <h1 className="text-4xl sm:text-5xl font-medium leading-tight mb-4 text-black">
                        Мобильная Разработка
                    </h1>

                    {/* Подзаголовок */}
                    <p className="text-gray-800 text-[18px] leading-relaxed mb-8">
                        Мобильная разработка под ключ для бизнеса в Казахстане и СНГ.
                        Чистая архитектура, продуманный UX/UI и стабильная работа на
                        iOS и Android. От идеи до готового приложения — системный и
                        надёжный подход.
                    </p>

                    {/* Кнопка */}
                    <a
                        href="#contact-form"
                        className="relative inline-block px-6 py-3 font-semibold border-2 border-[#D7001D] text-[#D7001D] rounded-md overflow-hidden transition-colors duration-300 group"
                    >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Реализовать продукт →
            </span>
                        <span
                            className="
                absolute z-0 bottom-0 right-0 w-0 h-0
                bg-[#D7001D] rounded-full
                transition-all duration-700 ease-in-out
                group-hover:w-[400%] group-hover:h-[400%]
                group-hover:bottom-[-100%] group-hover:right-[-100%]
              "
                        ></span>
                    </a>
                </div>

                {/* Правая часть — телефоны */}
                <div className="flex-1 flex justify-center items-end gap-6">
                    <img
                        src="/images/phones/phone-1.png"
                        alt="Phone 1"
                        className="w-[160px] sm:w-[180px] md:w-[200px]"
                    />
                    <img
                        src="/images/phones/phone-2.png"
                        alt="Phone 2"
                        className="w-[160px] sm:w-[180px] md:w-[200px]"
                    />
                    <img
                        src="/images/phones/phone-3.png"
                        alt="Phone 3"
                        className="w-[160px] sm:w-[180px] md:w-[200px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;