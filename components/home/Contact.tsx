"use client";

import React, { useState } from "react";
import { MAIN_COLOR_HEX } from "@/utils/colors";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const stats = [
    { value: "10", label: "разработчиков\nв команде" },
    { value: "6+", label: "лет опыта\nв разработке" },
    { value: "100 000", label: "строк кода\nнаписано" },
];

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone }),
            });

            if (res.ok) {
                setName("");
                setPhone("");
                setSent(true);

                // Через 3 секунды вернуть кнопку обратно
                setTimeout(() => {
                    setSent(false);
                }, 3000);
            } else {
                console.error("Ошибка при отправке");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact-form"
            className="relative z-20 bg-white py-20 px-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-medium mb-6 text-black leading-tight">
                        Превратим вашу идею в <br className="hidden sm:block" /> реальность
                    </h2>

                    {/* Mobile Stats */}
                    <div className="flex flex-col gap-6 mb-10 lg:hidden">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-100 rounded-[24px] flex flex-col"
                            >
                                <div className="text-4xl sm:text-5xl font-medium text-black mb-1 leading-none">
                                    {stat.value}
                                </div>
                                <div
                                    className="h-[2px] w-[32px] mb-3"
                                    style={{ backgroundColor: MAIN_COLOR_HEX }}
                                />
                                <div className="text-base text-black whitespace-pre-line">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-base sm:text-xl text-black mb-8 leading-relaxed">
                        Оставьте заявку и получите подробную <br className="hidden sm:block" />
                        консультацию о наших услугах
                    </p>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            disabled={sent}
                            className="w-full h-[60px] sm:h-[72px] px-6 rounded-full bg-gray-100 text-base sm:text-lg placeholder-gray-400 focus:outline-none"
                        />

                        <PhoneInput
                            defaultCountry="kz"
                            value={phone}
                            onChange={setPhone}
                            inputClassName="
                                !bg-[#F4F5F7] !text-black !text-lg
                                !w-full !h-[72px] !pl-[68px] !pr-6
                                !rounded-full !border-none !focus:outline-none
                            "
                            containerClassName="!w-full !relative"
                            buttonClassName="
                                !absolute !left-5 !top-1/2 !-translate-y-1/2
                                !w-[32px] !h-[32px]
                                !bg-transparent !rounded-none !shadow-none !border-none
                                !p-0 !m-0 !flex !items-center !justify-center
                            "
                            dropdownClassName="!rounded-xl !shadow-md"
                            required
                            disabled={sent}
                        />

                        <button
                            type="submit"
                            disabled={loading || sent}
                            className={`w-full sm:w-[220px] h-[60px] sm:h-[72px] text-white text-base sm:text-lg font-semibold rounded-full transition-colors ${
                                sent
                                    ? "bg-[#4B4B4B] opacity-70 cursor-not-allowed"
                                    : "bg-[#4B4B4B] hover:bg-[#D7001D]"
                            }`}
                        >
                            {sent
                                ? "Отправлено"
                                : loading
                                    ? "Отправка..."
                                    : "Отправить"}
                        </button>

                        <p className="text-sm text-black pt-2">
                            Нажимая на кнопку “отправить” вы соглашаетесь с{" "}
                            <a href="#" className="text-blue-600 underline">
                                политикой конфиденциальности
                            </a>
                        </p>
                    </form>
                </div>

                {/* Desktop Stats */}
                <div className="hidden lg:grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-6 bg-gray-100 rounded-[24px] flex flex-col ${
                                index === 2 ? "col-span-1 col-start-2" : ""
                            }`}
                        >
                            <div className="text-5xl font-medium text-black mb-1 leading-none">
                                {stat.value}
                            </div>
                            <div
                                className="h-[2px] w-[32px] mb-3"
                                style={{ backgroundColor: MAIN_COLOR_HEX }}
                            />
                            <div className="text-base text-black whitespace-pre-line">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;