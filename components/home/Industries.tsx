"use client";

import React, {useState} from "react";

const industries = [
    {
        name: "Fintech",
        description: "Мы разрабатываем кастомные цифровые решения для финтеха: от мобильных банков и P2P-переводов до инвестиционных платформ, антифрод-систем и модулей KYC/AML. Интегрируем Open Banking, PSD2, API-платформы, обеспечиваем защиту данных и удобство UX. Ускорьте запуск продукта и соответствуйте регуляциям.",
        icon: "/icons/industries/fintech.svg",
        iconSizeForButton: 28,
    },
    {
        name: "Enterprise Solution",
        description: "Автоматизируем бизнес-процессы для крупного и среднего бизнеса. Внедряем ERP, CRM, BI-системы, внутренние порталы, корпоративные маркетплейсы. Оптимизируем рабочие процессы, сокращаем затраты, масштабируем решения под нужды команды и отрасли.",
        icon: "/icons/industries/enterprise.svg",
        iconSizeForButton: 28,
    },
    {
        name: "E-commerce & Retail",
        description: "Создаём высоконагруженные e-commerce платформы, CRM для ритейла, системы онлайн-оплаты, трекинга и управления складом. Подключаем маркетплейсы, программы лояльности, CMS и омниканальные стратегии. От MVP до масштабного магазина.",
        icon: "/icons/industries/ecommerce.svg",
        iconSizeForButton: 28,
    },
    {
        name: "Healthcare & MedTech",
        description: "Разрабатываем цифровые медрешения с учётом HIPAA, GDPR и локальных стандартов. Это EMR-системы, телемедицина, трекинг состояний пациентов, онлайн-запись, ИИ для диагностики и мед BI-панели. Повышаем точность и доступность медицины.",
        icon: "/icons/industries/healthcare.svg",
        iconSizeForButton: 30,
    },
    {
        name: "Transportation & Logistics",
        description: "Создаём логистические платформы, TMS-системы, трекинг-грузов, решения для водителей и диспетчеров, карты и маршруты с ИИ. Повышаем эффективность доставки, минимизируем издержки, интегрируем с 1С, SAP, API перевозчиков.",
        icon: "/icons/industries/logistics.svg",
        iconSizeForButton: 36,
    },
    {
        name: "Education & eLearning",
        description: "Разрабатываем обучающие платформы, LMS, образовательные маркетплейсы, системы сертификации и онлайн-курсов. Поддержка SCORM, геймификация, аналитика успеваемости, AI-тестирование и мобильные приложения для EdTech.",
        icon: "/icons/industries/education.svg",
        iconSizeForButton: 34,
    },
    {
        name: "Foodtech",
        description: "Создаём решения для доставки еды, облачных кухонь, ERP для ресторанов, онлайн-меню и системы предзаказа. Интеграция с агрегаторами, аналитика продаж, система отзывов, персонализация меню и UI/UX для повышения конверсий.",
        icon: "/icons/industries/foodtech.svg",
        iconSizeForButton: 32,
    },
];

const Industries: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndustry = industries[activeIndex];

    return (
        <section
            id="industries"
            className="relative z-20 bg-white py-16 px-6"
            style={{fontFamily: "'Manrope', sans-serif"}}
        >
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-medium mb-12 text-black flex items-center gap-1">
                    Отрасли, в которых мы обладаем практической экспертизой
                </h2>

                {/* Навигация — desktop */}
                <div className="hidden sm:flex flex-wrap gap-4 mb-10">
                    {industries.map((industry, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-[16px] font-medium border transition-all duration-300
                            ${
                                activeIndex === index
                                    ? "bg-[#D7001D] text-white border-[#D7001D]"
                                    : "bg-white text-black border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            <img
                                src={industry.icon}
                                alt={industry.name}
                                style={{
                                    width: `${industry.iconSizeForButton}px`,
                                    height: `${industry.iconSizeForButton}px`,
                                }}
                                className={`transition-all duration-300 ${
                                    activeIndex === index
                                        ? "filter invert brightness-0"
                                        : "filter grayscale"
                                }`}
                            />
                            {industry.name}
                        </button>
                    ))}
                </div>

                {/* Навигация — mobile */}
                <div className="sm:hidden flex overflow-x-auto gap-2 mb-8 no-scrollbar px-1">
                    {industries.map((industry, index) => (
                        <button
                            key={index}  // ← вот этого не хватало
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center h-9 rounded-full border text-[13px] font-medium transition-all duration-300
                ${
                                activeIndex === index
                                    ? "bg-[#D7001D] text-white border-[#D7001D]"
                                    : "bg-white text-black border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            <div className="flex items-center px-3 space-x-2">
                                <img
                                    src={industry.icon}
                                    alt={industry.name}
                                    className={`w-4 h-4 shrink-0 ${
                                        activeIndex === index
                                            ? "filter invert brightness-0"
                                            : "filter grayscale"
                                    }`}
                                />
                                <span className="whitespace-nowrap leading-none">
                    {industry.name}
                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Контент */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-[30px] p-6 sm:p-10 transition-all duration-500 ease-in-out">
                    {/* Описание */}
                    <div
                        className="flex items-center justify-center text-[16px] sm:text-[20px] text-gray-800 font-medium leading-relaxed text-justify md:text-left">
                        {activeIndustry.description}
                    </div>

                    {/* Иконка */}
                    <div className="relative flex items-center justify-center overflow-hidden">
                        <img
                            key={activeIndustry.icon}
                            src={activeIndustry.icon}
                            alt={activeIndustry.name}
                            className="w-[160px] h-[160px] sm:w-[300px] sm:h-[300px] object-contain transition-all duration-700 ease-in-out opacity-100 scale-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;