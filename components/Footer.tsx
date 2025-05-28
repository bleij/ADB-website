"use client";

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
                {/* Блок 1: Логотип */}
                <div>
                    <div className="text-lg font-bold mb-2">Adb</div>
                    <p className="text-gray-400">
                        Цифровые решения под ключ: от идеи до масштабирования.
                    </p>
                </div>

                {/* Блок 2: Меню */}
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Навигация</span>
                    <a href="#projects" className="text-gray-400 hover:text-white">Проекты</a>
                    <a href="#services" className="text-gray-400 hover:text-white">Услуги</a>
                    <a href="#contacts" className="text-gray-400 hover:text-white">Контакты</a>
                </div>

                {/* Блок 3: Контакты */}
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Контакты</span>
                    <p className="text-gray-400">info@adb.kz</p>
                    <p className="text-gray-400">+7 (777) 123-12-12</p>
                    <p className="text-gray-400">г. Астана, Казахстан</p>
                </div>

                {/* Блок 4: Политика */}
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Правовая информация</span>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Политика конфиденциальности
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Adb. Все права защищены.
            </div>
        </footer>
    );
};

export default Footer;