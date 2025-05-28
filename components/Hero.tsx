"use client";

import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="relative bg-red-600 text-white py-24 px-6 overflow-hidden">
            {/* Background pattern placeholder */}
            <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-cover opacity-20 pointer-events-none"/>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
                    Профессиональное программирование цифровых продуктов
                </h1>
                <p className="text-sm sm:text-base text-white/80 font-mono">
                    Web, mobile, design, ml, analytics, big.data
                </p>
                <a
                    href="#contact-form"
                    className="mt-4 px-6 py-3 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-red-600 transition"
                >
                    Реализовать проект
                </a>
            </div>
        </section>
    );
};

export default Hero;