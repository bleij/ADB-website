"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const projects = [
    {
        title: "КХД Министерство финансов Таджикистана",
        desc: `Проект реализован в рамках международного тендера OSCE по созданию корпоративного хранилища данных для Министерства финансов Таджикистана.

Основная цель — разработка централизованной системы для хранения, обработки и анализа финансовой информации, обеспечивающей безопасность данных и их доступность для принятия управленческих решений. Проект включает интеграцию существующих систем, оптимизацию рабочих процессов и внедрение современных инструментов аналитики для повышения эффективности управления финансовыми ресурсами страны.`,
        link: "https://moliya.tj",
        image: "/images/projects/khd-tj.png",
    },
    {
        title: "Мобильное приложение Alligator Car Rental",
        desc: `Проект разработан для компании “Alligator” и включает создание мобильного приложения для аренды автомобилей.

Основные функции приложения: бронирование автомобилей в режиме реального времени, поиск авто по карте, выбор транспортных средств по фильтрам, а также интеграция с платежной системой для безопасных и удобных онлайн-оплат. Решение оптимизирует процесс аренды, упрощая взаимодействие с клиентами и повышая их удовлетворенность за счет интуитивно понятного интерфейса и автоматизированной системы управления заказами.`,
        link: "https://alligator.rent",
        image: "/images/projects/alligator-car.png",
    },
    {
        title: "Цифровая система GIS System для реагирования на ЧС",
        desc: `Разработали комплексную платформу для оперативного реагирования на чрезвычайные ситуации.

Система включает карту происшествий, каталог бедствий и ущерба, модуль планирования реагирования и прогнозирования будущих катаклизмов. Решение усиливает контроль, ускоряет координацию и повышает готовность к ЧС на государственном уровне.`,
        link: "",
        image: "/images/projects/gis-system.png",
    },
    {
        title: "Elim Taxi — Платформа заказа такси",
        desc: `Платформа заказа такси с гибкой логикой ценообразования и умным подбором водителей.

Создали сервис, который сочетает алгоритмическую подачу машины и возможность вручную предлагать цену за поездку. В системе реализован приоритет ближайших водителей, фильтры по авто и опыту, чат и отслеживание маршрута в реальном времени. Гибкий, масштабируемый продукт под любые рынки.`,
        link: "https://apps.apple.com/ru/app/elim-client/id6477772383",
        image: "/images/projects/elim-taxi.png",
    },
    {
        title: "Мобильное приложение для автоматизации таможенного оформления",
        desc: `Разработали решение, которое позволяет сканировать таможенные документы и автоматически формировать на их основе декларации.

Система использует машинное обучение для распознавания структуры документов, поддерживает многоязычность и адаптируется под форматы разных стран. Ускоряет процесс и снижает риски ошибок.`,
        link: "",
        image: "/images/projects/tamga.png",
    },
    {
        title: "Мобильное приложение для автоматизации таможенного оформления (вариант 2)",
        desc: `Разработали решение, которое позволяет сканировать таможенные документы и автоматически формировать на их основе декларации.

Система использует машинное обучение для распознавания структуры документов, поддерживает многоязычность и адаптируется под форматы разных стран. Ускоряет процесс и снижает риски ошибок.`,
        link: "",
        image: "/images/projects/starbrands.png",
    },
];

export default function ProjectsPage() {
    return (
        <>
            <Header/>

            <main
                className="bg-white min-h-screen mt-16 py-12 px-4 sm:px-6 lg:px-0"
                style={{fontFamily: "'Manrope', sans-serif"}}
            >
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-semibold text-black mb-12">
                        Проекты
                    </h1>

                    <div className="space-y-16">
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-8 ${
                                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Текст */}
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed mb-4 whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-black text-sm px-4 py-2 border border-gray-900 rounded-xl flex items-center gap-2 hover:bg-black hover:text-white transition duration-200"
                                        >
                                            Узнать больше
                                            <span className="ml-1">→</span>
                                        </a>
                                    )}
                                </div>

                                {/* Картинка */}
                                <div className="w-full md:w-1/2">
                                    <div className="p-4 w-full h-72 md:h-96 rounded-[30px] overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}