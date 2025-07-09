"use client";

import React from "react";

const stats = [
    {
        label: "94%",
        description:
            "UX/UI-дизайн — ключевой фактор доверия. По данным исследований, почти каждый пользователь судит о качестве компании по внешнему виду сайта в первые секунды.",
    },
    {
        label: "Повышение конверсии до 200% после редизайна интерфейса",
        description:
            "Компании в Казахстане и СНГ фиксируют кратный рост заявок и заказов после внедрения эффективного UX/UI-дизайна, особенно в мобильных приложениях и маркетплейсах.",
    },
    {
        label: "В топ-5 навыков дизайнеров в СНГ — аналитика пользовательского поведения",
        description:
            "Современный UX/UI-дизайн — это не только красота, но и продуманная логика на основе данных, тепловых карт и метрик.",
    },
    {
        label: "До 88% посетителей не вернутся на сайт с плохим UX",
        description:
            "Недоработанный пользовательский опыт приводит к потере клиентов. Это особенно критично для интернет-магазинов, сервисов и лендингов.",
    },
    {
        label: "Более 60% интернет-пользователей в СНГ заходят с мобильных устройств",
        description:
            "Адаптивный UX-дизайн обязателен. Мобильная версия сайта или приложения должна быть интуитивной и удобной — это уже стандарт.",
    },
];

export default function StatsGrid() {
    return (
        <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* заголовок */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black text-center leading-snug mb-12">
                    Статистика и влияние UX/UI-дизайна                </h2>


                {/* Контейнер колонок */}
                <div className="flex flex-col gap-6 md:flex-row md:gap-6">                    {/* Первая колонка (2 блока: 6/10 + 4/10 высоты) */}
                    <div className="flex flex-col gap-6 md:flex-1 md:h-[600px]">
                        {/* 94% — 6/10 высоты */}
                        <div className="group bg-gray-100 text-black rounded-2xl p-6 flex-[6] overflow-hidden transition-colors duration-300 hover:bg-[#D7001D] hover:text-white">
                            <h3 className="text-3xl font-medium mb-4">{stats[0].label}</h3>
                            <p className="text-base leading-relaxed">{stats[0].description}</p>
                        </div>
                        {/* До 88% — 4/10 высоты */}
                        <div className="group bg-gray-100 text-black rounded-2xl p-6 flex-[4] overflow-hidden transition-colors duration-300 hover:bg-[#D7001D] hover:text-white">
                            <h3 className="text-xl font-medium mb-2">{stats[3].label}</h3>
                            <p className="text-base leading-relaxed">{stats[3].description}</p>
                        </div>
                    </div>

                    {/* Вторая колонка (2 блока: 4/10 + 6/10 высоты) */}
                    <div className="flex flex-col gap-6 md:flex-1 md:h-[600px]">
                        {/* Повышение конверсии — 4/10 высоты */}
                        <div className="group bg-gray-100 text-black rounded-2xl p-6 flex-[4] overflow-hidden transition-colors duration-300 hover:bg-[#D7001D] hover:text-white">
                            <h3 className="text-xl font-medium mb-2">{stats[1].label}</h3>
                            <p className="text-base leading-relaxed">{stats[1].description}</p>
                        </div>
                        {/* Более 60% — 6/10 высоты */}
                        <div className="group bg-gray-100 text-black rounded-2xl p-6 flex-[6] overflow-hidden transition-colors duration-300 hover:bg-[#D7001D] hover:text-white">
                            <h3 className="text-xl font-medium mb-2">{stats[4].label}</h3>
                            <p className="text-base leading-relaxed">{stats[4].description}</p>
                        </div>
                    </div>

                    {/* Третья колонка (1 блок на всю высоту 10/10) */}
                    <div className="md:flex-1 md:h-[600px]">
                        <div className="group bg-gray-100 text-black rounded-2xl p-6 h-full overflow-hidden transition-colors duration-300 hover:bg-[#D7001D] hover:text-white">
                            <h3 className="text-3xl font-medium mb-4">{stats[2].label}</h3>
                            <p className="text-base leading-relaxed">{stats[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}