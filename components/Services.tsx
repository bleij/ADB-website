"use client";

import React from "react";

const services = [
    {
        title: "Мобильная разработка",
        placeholder: "Mobile Icon",
    },
    {
        title: "Веб-разработка",
        placeholder: "Web Icon",
    },
    {
        title: "Машинное обучение",
        placeholder: "ML Icon",
    },
    {
        title: "Искусственный интеллект",
        placeholder: "AI Icon",
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                    >
                        {/* Placeholder for icon */}
                        <div
                            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
                            {service.placeholder}
                        </div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;