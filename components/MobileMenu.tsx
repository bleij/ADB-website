"use client";

import {useState} from "react";

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden relative z-50">
            {/* Hamburger Button */}
            <button
                className="flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Открыть меню"
            >
                <div
                    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                        isOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                />
                <div
                    className={`w-6 h-0.5 bg-white transition-all duration-300 my-1 ${
                        isOpen ? "opacity-0" : ""
                    }`}
                />
                <div
                    className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                        isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute right-0 mt-4 w-48 bg-white text-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 origin-top-right ${
                    isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
            >
                <a
                    href="#projects"
                    className="block px-4 py-3 hover:bg-gray-100 transition"
                >
                    Проекты
                </a>
                <a
                    href="#services"
                    className="block px-4 py-3 hover:bg-gray-100 transition"
                >
                    Услуги
                </a>
                <a
                    href="#contacts"
                    className="block px-4 py-3 hover:bg-gray-100 transition"
                >
                    Контакты
                </a>
                <div className="border-t border-gray-200"/>
                <div className="px-4 py-3 text-sm text-gray-700">+7 (777) 123-12-12</div>
            </div>
        </div>
    );
};

export default MobileMenu;