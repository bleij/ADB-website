"use client";

import React from "react";
import Hero from "@/components/mobile/Hero";
import OfferGrid from "@/components/mobile/OfferGrid";
import Solutions from "@/components/mobile/Solutions";
import Philosophy from "@/components/mobile/Philosophy";
import ProjectsGrid from "@/components/uiux/ProjectsGrid";

import Stats from "@/components/mobile/Stats";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MobilePage() {
    return (
        <div className="bg-white">
            <Header />

            <main className="relative z-10 bg-white">
                <Hero />
                <OfferGrid />
                <Solutions />
                <Philosophy />
                <ProjectsGrid />
                <Stats />
                <Footer />
            </main>
        </div>
    );
}