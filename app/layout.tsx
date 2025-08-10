import "./globals.css";
import type {Metadata} from "next";
import {Manrope, Roboto_Mono} from "next/font/google";
import SimpleFadeTransition from "@/components/transition/SimpleFadeTransition";
import "react-international-phone/style.css";

const manrope = Manrope({
    weight: ["400", "500", "600"],
    subsets: ["latin", "cyrillic"],
    variable: "--font-manrope",
});
const robotoMono = Roboto_Mono({
    weight: ["400"],
    subsets: ["latin", "cyrillic"],
    variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
    title: "Adb — Профессиональное программирование",
    description: "Разработка цифровых продуктов: Web, Mobile, ML, AI.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html
            lang="ru"
            className={`${manrope.variable} ${robotoMono.variable}`}
        >
        <body className="font-sans">
        <SimpleFadeTransition>{children}</SimpleFadeTransition>
        </body>
        </html>
    );
}