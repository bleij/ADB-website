"use client";

import React from "react";
import Image from "next/image";

const WebHero: React.FC = () => {
    return (
        <section
            className="bg-white min-h-screen pt-12 sm:pt-32 lg:pt-0 flex items-center"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col items-center px-6 sm:px-10 gap-8">
                <div className="w-full">
                    <Image
                        src="/images/web/desktop.png"
                        alt="Web development preview"
                        width={800}
                        height={500}
                        className=""
                        priority
                    />
                </div>
                <div className="text-left px-4">
                    <h1 className="text-3xl font-semibold text-black mb-4">Веб - разработка</h1>
                    <p className="text-gray-800 text-base leading-relaxed mb-6">
                        Предлагаем веб-разработку под ключ для бизнеса в Казахстане и странах СНГ. Создаём сайты и веб-сервисы, которые быстро работают, масштабируются и решают реальные задачи.
                    </p>
                    <a
                        href="#contact-form"
                        className="inline-block px-6 py-3 font-semibold bg-[#D7001D] text-white rounded-md hover:bg-[#bb0017] transition"
                    >
                        Реализовать продукт →
                    </a>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex max-w-7xl mx-auto h-full w-full items-center justify-between gap-12">
                <div className="max-w-[540px]">
                    <div className="w-10 h-[6px] bg-[#D7001D] rounded-full mb-6" />
                    <h1 className="text-5xl font-medium leading-tight mb-4 text-black">
                        Веб-разработка
                    </h1>
                    <p className="text-gray-800 text-[18px] leading-relaxed mb-8">
                        Предлагаем веб-разработку под ключ для бизнеса в Казахстане и странах СНГ. Создаём сайты и веб-сервисы, которые быстро работают, масштабируются и решают реальные задачи.
                    </p>
                    <a
                        href="#contact-form"
                        className="relative inline-block px-6 py-3 font-semibold border-2 border-[#D7001D] text-[#D7001D] rounded-md overflow-hidden transition-colors duration-300 group"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            Реализовать продукт →
                        </span>
                        <span
                            className={
                                "absolute z-0 bottom-0 right-0 w-0 h-0 bg-[#D7001D] rounded-full transition-all duration-700 ease-in-out " +
                                "group-hover:w-[400%] group-hover:h-[400%] group-hover:bottom-[-100%] group-hover:right-[-100%]"
                            }
                        />
                    </a>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/images/web/desktop.png"
                        alt="Web development preview"
                        width={800}
                        height={500}
                        className=""
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default WebHero;