"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import UiUxHero from "@/components/uiux/UiUxHero";
import StepsBlock from "@/components/uiux/StepsBlock";
import UseCaseBlock from "@/components/uiux/UseCaseBlock";
import UxDesignApplication from "@/components/uiux/UxDesignApplication";
import ProjectsGrid from "@/components/uiux/ProjectsGrid";
import StatsImpact from "@/components/uiux/StatsImpact";
import Reviews from "@/components/shared/Reviews";

export default function UxUiPage() {
    return (
        <>
            <Header />
            <main>
                <UiUxHero />
                <StepsBlock />
                <UseCaseBlock />
                <UxDesignApplication />
                <StatsImpact />
                <ProjectsGrid />
                {/*<Reviews />*/}
            </main>
            <Footer />
        </>
    );
}