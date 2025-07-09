"use client";

import React from "react";
import TypewriterClean from "@/components/shared/TypewriterClean";
import {MAIN_COLOR_HEX} from "@/utils/colors";
import Image from "next/image";

const words1 = ["усиливают", "продвигают", "ускоряют", "трансформируют"];
const words2 = ["масштабируются", "адаптируются", "развиваются", "растут"];
const words3 = ["превращаются", "улучшают", "формируют", "закрепляют"];

const Mission: React.FC = () => {
    return (
        <section
            id="mission"
            className="relative z-20 bg-white px-6 overflow-hidden pt-32 pb-24"
            style={{
                fontFamily: "'Manrope', sans-serif",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Image
                src="/icons/logoback.svg"
                alt="background logo"
                fill
                style={{
                    objectFit: "cover",
                    zIndex: 1,
                    transform: "scale(1)",
                    transformOrigin: "top right",
                    pointerEvents: "none",
                }}
                className="absolute top-0 right-0"
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div
                    className="text-[32px] sm:text-[40px] font-medium text-gray-800 leading-[1.5]"
                >
                    {/* Заголовок */}
                    <div className="max-w-full sm:max-w-[60%]">
            <span className="block sm:inline font-black">
              Мы внедряем технологии,
            </span>{" "}
                        <span className="block sm:inline font-black">
              которые работают на результат:
            </span>
                    </div>

                    <div className="mt-6 space-y-3">
                        {/* Строка 1 */}
                        <div className="block sm:flex sm:whitespace-nowrap">
              <span style={{color: MAIN_COLOR_HEX}}>
                <TypewriterClean
                    words={words1}
                    typingSpeed={50}
                    deletingSpeed={30}
                    delayBetween={4000}
                />
              </span>
                            <span className="ml-2 text-gray-800">бизнес,</span>
                        </div>

                        {/* Строка 2 */}
                        <div>
                            <div className="sm:inline-block">
                <span style={{color: MAIN_COLOR_HEX}}>
                  <TypewriterClean
                      words={words2}
                      typingSpeed={50}
                      deletingSpeed={30}
                      delayBetween={4000}
                  />
                </span>
                                <span className="ml-2 text-gray-800">без</span>
                            </div>
                            <div className="text-gray-800 sm:inline-block sm:ml-2">
                                ограничений и
                            </div>
                        </div>

                        {/* Строка 3 */}
                        <div>
                            <div className="sm:inline-block">
                <span style={{color: MAIN_COLOR_HEX}}>
                  <TypewriterClean
                      words={words3}
                      typingSpeed={50}
                      deletingSpeed={30}
                      delayBetween={4000}
                  />
                </span>
                                <span className="ml-2 text-gray-800">ваше</span>
                            </div>
                            <div className="text-gray-800 sm:inline-block sm:ml-2">
                                стратегическое преимущество.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;