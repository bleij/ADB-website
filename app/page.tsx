import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Services from "@/components/home/Services";
import Stack from "@/components/home/Stack";
import Industries from "@/components/home/Industries";
import Projects from "@/components/home/Projects";
import Workflow from "@/components/home/Workflow";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="bg-white">
            <Header/>

            <Hero/>
            {/* Spacer — создает место под Hero */}
            <div className="h-screen"/>

            {/* Main Content — наплывает поверх Hero */}
            <main className="relative z-10 bg-white">
                <Mission/>
                <Services/>
                <Stack/>
                <Industries/>
                <Projects/>
                <Workflow/>
                <Contact/>
                <Footer/>
            </main>
        </div>
    );
}
