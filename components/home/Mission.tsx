"use client";

import React from "react";
import TypewriterClean from "@/components/TypewriterClean";
import { MAIN_COLOR_HEX } from "@/utils/colors";

const words1 = ["усиливают", "продвигают", "ускоряют", "трансформируют"];
const words2 = ["масштабируются", "адаптируются", "развиваются", "растут"];
const words3 = ["превращаются", "улучшают", "формируют", "закрепляют"];

const Mission: React.FC = () => {
    return (
        <section
            id="mission"
            className="relative z-20 bg-white px-6 overflow-hidden"
            style={{
                fontFamily: "'Manrope', sans-serif",
                minHeight: "calc(1.5em * 6)", // 6 строк
                display: "flex",
                alignItems: "center",
                paddingTop: "4rem",
                paddingBottom: "3rem"
            }}
        >

            {/* ЛОГОБЭК — на всю-всю высоту */}
            <img
                src="/icons/logoback.svg"
                alt="background logo"
                className="absolute top-0 right-0 h-full object-cover pointer-events-none"
                style={{
                    zIndex: 20,
                    transform: "scale(1.3)", // увеличить на 30%
                    transformOrigin: "top right" // чтобы увеличивалось вправо вниз
                }}
            />

            {/* ТЕКСТ */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div
                    className="text-left text-[32px] sm:text-[40px] font-medium text-gray-800 leading-[1.5] max-w-[55%]"
                    style={{
                        minHeight: "calc(1.5em * 6)", // 6 строк жёстко
                    }}
                >
                    Мы внедряем технологии, которые работают на результат: <br />

                    <div style={{ whiteSpace: "nowrap" }}>
                        <span style={{ color: MAIN_COLOR_HEX }}>
                            <TypewriterClean
                                words={words1}
                                typingSpeed={50}
                                deletingSpeed={30}
                                delayBetween={4000}
                            />
                        </span>
                        <span style={{ color: "#1F2937", marginLeft: "8px" }}>
                            бизнес,
                        </span>
                    </div>

                    <div style={{ whiteSpace: "nowrap" }}>
                        <span style={{ color: MAIN_COLOR_HEX }}>
                            <TypewriterClean
                                words={words2}
                                typingSpeed={50}
                                deletingSpeed={30}
                                delayBetween={4000}
                            />
                        </span>
                        <span style={{ color: "#1F2937", marginLeft: "8px" }}>
                            без ограничений и
                        </span>
                    </div>

                    <div style={{ whiteSpace: "nowrap" }}>
                        <span style={{ color: MAIN_COLOR_HEX }}>
                            <TypewriterClean
                                words={words3}
                                typingSpeed={50}
                                deletingSpeed={30}
                                delayBetween={4000}
                            />
                        </span>
                        <span style={{ color: "#1F2937", marginLeft: "8px" }}>
                            ваше стратегическое преимущество.
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Mission;