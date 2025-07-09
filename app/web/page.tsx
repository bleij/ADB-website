// app/web/page.tsx
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import WebHero from "@/components/web/WebHero";
import WebServices from "@/components/web/WebServices";
import Approach from "@/components/web/Approach";
import ProjectsGrid from "@/components/uiux/ProjectsGrid"; // переиспользуем
import Reviews from "@/components/shared/Reviews";

export default function WebPage() {
    return (
        <>
            <Header />

            <main>
                <WebHero />

                <WebServices />

                {/* Блок «От идеи до релиза: наш подход» */}
                <Approach />

                <ProjectsGrid />

                {/* Отзывы */}
                {/*<Reviews />*/}
            </main>

            <Footer />
        </>
    );
}