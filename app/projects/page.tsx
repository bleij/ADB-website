"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const projects = [
    {
        title: "Automated Corporate Documents Reading",
        description:
            "Parse contracts, agreements, regulations and unstructured corporate data using ML pipelines.",
    },
    {
        title: "Worldwide Registry Checks",
        description:
            "Access global registries via API to verify legal entities. Sanctions, blacklists, UBOs — in one integrated dashboard.",
    },
    {
        title: "Manual Corporate Document Review",
        description:
            "Fallback to manual review by compliance experts for non-structured formats and low-confidence results.",
    },
    {
        title: "Sanctions Screening System",
        description:
            "Real-time entity screening with global sanctions lists and AML support.",
    },
    {
        title: "Tax Compliance Automation",
        description:
            "Ensure cross-border compliance with up-to-date VAT, corporate, and digital tax checks.",
    },
];

export default function ProjectsPage() {
    return (
        <>
            <Header />

            <main
                className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-0"
                style={{ fontFamily: "'Manrope', sans-serif" }}
            >
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-semibold text-black mb-12">
                        Проекты
                    </h1>

                    <div className="flex flex-col gap-24">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
                                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                <div className="w-full h-[240px] md:h-[260px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-lg font-medium">
                                    Картинка
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-medium mb-3 text-black">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}