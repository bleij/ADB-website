import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Frameworks from "@/components/Frameworks";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Header/>
            <Hero/>
            <Mission/>
            <Services/>
            <Stack/>
            <Frameworks/>
            <Projects/>
            <Workflow/>
            <Contact/>
            <Footer/>
        </main>
    );
}
