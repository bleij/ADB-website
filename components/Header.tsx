"use client";

import React from "react";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-red-600 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-xl font-bold">Adb</div>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#projects" className="hover:underline">Проекты</a>
                    <a href="#services" className="hover:underline">Услуги</a>
                    <a href="#contacts" className="hover:underline">Контакты</a>
                </nav>
                <div className="flex gap-4 text-sm items-center">
                    <span className="hidden sm:inline">+7 (777) 123-12-12</span>
                    <a
                        href="#contact-form"
                        className="px-4 py-1 border border-white rounded hover:bg-white hover:text-red-600 transition"
                    >
                        Стать клиентом
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;