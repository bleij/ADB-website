"use client";

import React from "react";
import Image from "next/image";

const UiUxHero: React.FC = () => {
    return (
        <section className="bg-[#D7001D] text-white py-24 px-6 sm:px-10 lg:px-20 rounded-b-[40px]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Левая часть */}
                <div className="flex-1">
                    <div className="w-10 h-[6px] bg-white rounded-full mb-6"/>
                    <h1 className="text-5xl font-normal mb-6">UX/UI design</h1>
                    <p className="text-lg sm:text-xl mb-8 max-w-xl font-light leading-relaxed">
                        Разрабатываем UX/UI-дизайн для сайтов, мобильных приложений и веб-сервисов.
                        Фокус на удобство, визуальную чистоту и цели бизнеса. Адаптируем под пользователей
                        из Казахстана и СНГ.
                    </p>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center gap-2 bg-white text-[#D7001D] font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                    >
                        Реализовать
                        <span className="text-xl">→</span>
                    </a>
                </div>

                {/* Правая часть */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/images/uiux/mockups.png"
                        alt="UIUX design preview"
                        width={700}
                        height={600}
                        className="rounded-3xl shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default UiUxHero;