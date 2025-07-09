"use client";

import React, { useEffect, useRef, useState } from "react";
import { TextScramble } from "@/utils/TextScramble";
import WireframeWave from "@/components/shared/WireframeWave";
import ProjectModal from "@/components/layout/ProjectModal";

const Hero: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const fxRef = useRef<TextScramble | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (titleRef.current) {
            const fx = new TextScramble(titleRef.current);
            fx.setText("Профессиональное программирование цифровых продуктов");
            fxRef.current = fx;
        }
    }, []);

    const handleHover = () => {
        if (fxRef.current) {
            fxRef.current.setText("Профессиональное программирование цифровых продуктов");
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#D7001D]">
                <WireframeWave
                    color={0xFB0037}
                    opacity={1.0}
                    speed={0.002}
                    lineCount={45}
                    lineSpacing={35}
                    angle={20}
                />

                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-center items-start pt-28 sm:pt-32 gap-8 text-white">
                    <h1
                        ref={titleRef}
                        onMouseEnter={handleHover}
                        className="cursor-pointer font-bold tracking-tight leading-tight
                            text-[34px] leading-[40px]
                            sm:text-[48px] sm:leading-[55px]
                            md:text-[72px] md:leading-[78px]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                        Профессиональное программирование цифровых продуктов
                    </h1>

                    <p className="font-mono text-[20px] sm:text-[24px] md:text-[32px]">
                        Web, mobile, design, ml, analytics, big.data
                    </p>

                    <a
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer px-6 py-3 border border-white rounded-full
                            text-[14px] sm:text-[18px] md:text-[20px] font-semibold
                            hover:bg-white hover:text-red-600 transition"
                    >
                        Реализовать проект
                    </a>
                </div>
            </div>

            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;