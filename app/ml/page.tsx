// app/ml/page.tsx
"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MLHero from "@/components/ml/MLHero";
import MLProcess from "@/components/ml/MLProcess";
import MLExpertise from "@/components/ml/MLExpertise";
import MLAutomation from "@/components/ml/MLAutomation";
import ProjectsGrid from "@/components/uiux/ProjectsGrid";
import Reviews from "@/components/shared/Reviews";

export default function MLPage() {
    return (
        <>
            <Header/>

            <main className="bg-white">
                {/* Hero-секция ML */}
                <MLHero/>

                {/* Процесс ML (MLProcess) */}
                <MLProcess/>

                {/* Комплексное решение (MLAutomation) */}
                <MLAutomation/>

                {/* Экспертиза (MLExpertise) */}
                <MLExpertise/>

                {/* Проекты */}
                <ProjectsGrid/>

                {/* Отзывы */}
                {/*<section className="bg-white">*/}
                {/*    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">*/}
                {/*        <Reviews/>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </main>

            <Footer/>
        </>
    );
}