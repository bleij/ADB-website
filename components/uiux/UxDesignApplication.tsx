// components/home/UxDesignApplication.tsx
"use client";

import React from "react";
import WireframeWave from "@/components/shared/WireframeWave";

const items = [
    { title: "Корпоративные сайты и лендинги",            desc: "Повышаем конверсию и улучшаем пользовательский путь от первого экрана до заявки" },
    { title: "Личный кабинет и портал клиента",           desc: "Проектируем интерфейсы с фокусом на простоту, доступность и регулярное взаимодействие" },
    { title: "UI-дизайн с визуальной иерархией",          desc: "Применяем современные паттерны, цветовые акценты, типографику и сетки" },
    { title: "UX-аналитика и поведенческие сценарии",      desc: "Изучаем целевую аудиторию, выстраиваем логику взаимодействия пользователя с продуктом" },
    { title: "Мобильные приложения (iOS / Android)",      desc: "Интерфейсы, соответствующие гайдлайнам и привычкам пользователей мобильных платформ" },
    { title: "Интернет-магазины и маркетплейсы",           desc: "Упрощаем покупательский путь, увеличиваем скорость принятия решения и покупки" },
    { title: "UX-дизайн с фокусом на бизнес-цели",         desc: "Дизайн, который решает задачи: регистрация, покупка, вовлечение, удержание" },
    { title: "Компонентная дизайн-система",                desc: "Повышаем скорость разработки и обеспечиваем единство в каждом элементе" },
];

export default function UxDesignApplication() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-black leading-tight mb-4">
                    UX/UI-дизайн, адаптированный под любые цифровые продукты
                </h2>
                <p className="text-base sm:text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8">
                    Создаём удобные, современные интерфейсы для сайтов, мобильных приложений, сервисов и маркетплейсов. Наши UX/UI решения масштабируются под любые цели бизнеса — от стартапов до комплексных платформ.
                </p>

                {/* DESKTOP PANEL */}
                <div className="hidden sm:block relative overflow-hidden">
                    {/* фоновые волны */}
                    <div className="absolute inset-0 z-0">
                        <WireframeWave
                            color={0xffffff}
                            opacity={0.1}
                            speed={0.002}
                            lineCount={45}
                            lineSpacing={35}
                            angle={20}
                        />
                    </div>

                    {/* красная панель с белой рамкой */}
                    <div className="relative z-10 bg-[#D7001D] border-8 border-white rounded-[32px] overflow-hidden">
                        <div className="py-12 px-8 lg:px-12">
                            {/* верхний ряд (4 колонки) */}
                            <div className="grid grid-cols-4 gap-8 mb-10 text-white">
                                {items.slice(0, 4).map((it, i) => (
                                    <div key={i} className="space-y-2">
                                        <h4 className="font-medium">▪ {it.title}</h4>
                                        <p className="text-sm text-white/90">{it.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* средний ряд с заголовками */}
                            <div className="grid grid-cols-4 gap-8 mb-10">
                                <div />
                                <div className="flex justify-center">
                                    <h3 className="text-xl font-medium text-white">Где применим UX/UI-дизайн</h3>
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-xl font-medium text-white">Что делает UX/UI-дизайн эффективным</h3>
                                </div>
                                <div />
                            </div>

                            {/* нижний ряд (оставшиеся 4) */}
                            <div className="grid grid-cols-4 gap-8 text-white">
                                {items.slice(4).map((it, i) => (
                                    <div key={i} className="space-y-2">
                                        <h4 className="font-medium">▪ {it.title}</h4>
                                        <p className="text-sm text-white/90">{it.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE PANELS */}
                <div className="sm:hidden space-y-6">
                    {/* Панель 1 */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <WireframeWave
                                color={0xffffff}
                                opacity={0.1}
                                speed={0.002}
                                lineCount={45}
                                lineSpacing={35}
                                angle={20}
                            />
                        </div>
                        <div className="relative z-10 bg-[#D7001D] border-8 border-white rounded-[32px] px-6 py-8 mx-2">
                            <h3 className="text-lg font-medium text-white text-center mb-4">
                                Где применим UX/UI-дизайн
                            </h3>
                            <div className="space-y-4 text-white">
                                {items.slice(0, 5).map((it, i) => (
                                    <div key={i}>
                                        <h4 className="font-medium">▪ {it.title}</h4>
                                        <p className="text-sm mt-1 text-white/90">{it.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Панель 2 */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <WireframeWave
                                color={0xffffff}
                                opacity={0.1}
                                speed={0.002}
                                lineCount={45}
                                lineSpacing={35}
                                angle={20}
                            />
                        </div>
                        <div className="relative z-10 bg-[#D7001D] border-8 border-white rounded-[32px] px-6 py-8 mx-2">
                            <h3 className="text-lg font-medium text-white text-center mb-4">
                                Что делает UX/UI-дизайн эффективным
                            </h3>
                            <div className="space-y-4 text-white">
                                {items.slice(3, 8).map((it, i) => (
                                    <div key={i}>
                                        <h4 className="font-medium">▪ {it.title}</h4>
                                        <p className="text-sm mt-1 text-white/90">{it.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}