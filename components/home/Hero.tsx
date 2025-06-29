"use client";

import React, { useEffect, useRef, useState } from "react";
import { TextScramble } from "@/utils/TextScramble";
import WireframeWave from "@/components/WireframeWave";
import ProjectModal from "@/components/ProjectModal";

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
            <div className="fixed top-0 left-0 w-full h-screen z-0" style={{ backgroundColor: "#D7001D" }}>
                <WireframeWave
                    color={0xFB0037}
                    opacity={1.0}
                    speed={0.002}
                    lineCount={45}
                    lineSpacing={35}
                    angle={20}
                />

                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center items-start pt-20 gap-8 text-white">
                    <h1
                        ref={titleRef}
                        onMouseEnter={handleHover}
                        className="cursor-pointer text-[90px] leading-[90px] tracking-[-0.04em] font-bold
                                   sm:text-[60px] sm:leading-[65px]
                                   xs:text-[40px] xs:leading-[45px]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                        Профессиональное программирование цифровых продуктов
                    </h1>

                    <p className="text-[32px] font-mono sm:text-[24px] xs:text-[20px]">
                        Web, mobile, design, ml, analytics, big.data
                    </p>

                    <a
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer px-10 py-6 border border-white rounded-full text-[32px] font-semibold hover:bg-white hover:text-red-600 transition sm:text-[24px] xs:text-[20px]"
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