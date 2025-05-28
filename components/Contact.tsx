"use client";

import React from "react";

const facts = [
    {label: "Разработчиков", value: "10"},
    {label: "Лет на рынке", value: "6+"},
    {label: "Строк кода", value: "100 000+"},
];

const Contact: React.FC = () => {
    return (
        <section id="contacts" className="bg-white py-20 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">Заполните форму — и мы свяжемся с вами</h2>
                    <p className="text-sm text-gray-600">
                        Мы свяжемся с вами в течение рабочего дня и обсудим ваш проект. Конфиденциальность
                        гарантирована.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        {facts.map((fact, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-xl font-bold text-red-600">{fact.value}</div>
                                <div className="text-sm text-gray-500">{fact.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Form */}
                <form id="contact-form" className="flex flex-col gap-4 w-full">
                    <input
                        type="tel"
                        placeholder="Ваш телефон"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;