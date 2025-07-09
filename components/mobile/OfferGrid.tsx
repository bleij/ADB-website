"use client";

import React from "react";

const offers = [
    {
        icon: "/icons/mobile/concept.svg",
        iconSize: 26,
        title: "Концепция и планирование",
        text: "Проводим брифинг, формулируем цели, продумываем архитектуру и пользовательские сценарии",
    },
    {
        icon: "/icons/mobile/uiux.svg",
        iconSize: 30,
        title: "UI/UX-дизайн мобильного приложения",
        text: "Создаём прототипы и дизайн-решения, адаптированные под iOS и Android",
    },
    {
        icon: "/icons/mobile/frontend.svg",
        iconSize: 24,
        title: "Разработка frontend и логики",
        text: "Программируем клиентскую часть и бизнес-логику на современных технологиях",
    },
    {
        icon: "/icons/mobile/integration.svg",
        iconSize: 28,
        title: "Интеграция с внешними сервисами",
        text: "Настраиваем API, подключаем карты, оплату, уведомления и сторонние системы",
    },
    {
        icon: "/icons/mobile/testing.svg",
        iconSize: 26,
        title: "Тестирование и отладка",
        text: "Проводим ручное и автоматизированное тестирование для стабильной работы на всех устройствах",
    },
    {
        icon: "/icons/mobile/deploy.svg",
        iconSize: 24,
        title: "Публикация и сопровождение",
        text: "Готовим и размещаем приложение в App Store и Google Play, оказываем поддержку после запуска",
    },
];

const OfferGrid: React.FC = () => {
    return (
        <section
            className="bg-white py-24 px-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-semibold text-black text-center mb-20">
                    Что мы можем вам предложить?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    {offers.map((offer, idx) => (
                        <div key={idx} className="flex items-start gap-6">
                            <div className="min-w-[56px] min-h-[56px] rounded-[14px] bg-[#D7001D] flex items-center justify-center">
                                <img
                                    src={offer.icon}
                                    alt={offer.title}
                                    style={{
                                        width: `${offer.iconSize}px`,
                                        height: `${offer.iconSize}px`,
                                    }}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[22px] font-semibold text-black">
                                    {offer.title}
                                </h3>
                                <p className="text-gray-700 text-[16px] leading-relaxed">
                                    {offer.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferGrid;