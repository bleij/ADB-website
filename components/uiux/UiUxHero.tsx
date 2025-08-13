"use client";

import React from "react";
import Image from "next/image";

const UiUxHero: React.FC = () => {
    const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // чтобы не прыгало к #contact-form
        window.dispatchEvent(new Event("openProjectModal"));
    };

    return (
        <section
            className="bg-[#D7001D] text-white px-6 sm:px-10 lg:px-20 min-h-screen flex items-center rounded-b-[40px]"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                {/* Левая часть */}
                <div className="flex-1">
                    <div className="w-10 h-[6px] bg-white rounded-full mb-6" />
                    <h1 className="text-5xl lg:text-6xl font-normal mb-6">UX/UI design</h1>
                    <p className="text-lg sm:text-xl mb-8 max-w-xl font-light leading-relaxed">
                        Разрабатываем UX/UI-дизайн для сайтов, мобильных приложений и веб-сервисов.
                        Фокус на удобство, визуальную чистоту и цели бизнеса. Адаптируем под пользователей
                        из Казахстана и СНГ.
                    </p>
                    <a
                        href="#contact-form"
                        onClick={handleOpenModal}
                        className="inline-flex items-center gap-2 bg-white text-[#D7001D] font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                    >
                        Реализовать
                        <span className="text-xl">→</span>
                    </a>
                </div>

                {/* Правая часть */}
                <div className="flex-[1.3] flex justify-center">
                    <Image
                        src="/images/uxui/mockups.png"
                        alt="UIUX design preview"
                        className="w-full h-auto max-w-[1000px]"
                        width={1200}
                        height={1000}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default UiUxHero;