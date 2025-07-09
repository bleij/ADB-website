"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import pageCodeMap from "@/utils/codeMap";
import styles from "./PageTransition.module.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism.css";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [phase, setPhase] = useState<"fadeInWhite"|"typing"|"fadeOut"|"done">("fadeInWhite");
    const [typedLines, setTypedLines] = useState<string[]>([]);
    const [cursorVisible, setCursorVisible] = useState(true);
    const scrollRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        setPhase("fadeInWhite");
        const fadeToTyping = setTimeout(() => {
            setPhase("typing");
            const code = pageCodeMap[pathname] || ["// Loading..."];
            let idx = 0;
            setTypedLines([]);

            const interval = setInterval(() => {
                const line = Prism.highlight(code[idx], Prism.languages.jsx, "jsx");
                setTypedLines(prev => [...prev, line]);
                requestAnimationFrame(() => {
                    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                });
                idx++;
                if (idx >= code.length) {
                    clearInterval(interval);
                    setTimeout(() => setPhase("fadeOut"), 75);
                    setTimeout(() => setPhase("done"), 250);
                }
            }, 9);
        }, 500);

        return () => clearTimeout(fadeToTyping);
    }, [pathname]);

    useEffect(() => {
        const blink = setInterval(() => setCursorVisible(v => !v), 500);
        return () => clearInterval(blink);
    }, []);

    return (
        <>
            {phase !== "done" && (
                <div className={
                    styles.wrapper + " " +
                    (phase === "fadeInWhite" ? styles.fadeInWhite : "") +
                    (phase === "typing"     ? styles.typing     : "") +
                    (phase === "fadeOut"    ? styles.fadeOut    : "")
                }>
                    {phase === "typing" && (
                        <pre ref={scrollRef} className={styles.codeContent}>
                            <code
                                dangerouslySetInnerHTML={{
                                    __html: typedLines.join("\n") + (cursorVisible ? '<span class="blinking">_</span>' : "")
                                }}
                            />
                        </pre>
                    )}
                </div>
            )}
            <div style={{
                opacity: phase === "done" ? 1 : 0,
                transition: "opacity 0.5s ease"
            }}>
                {children}
            </div>
        </>
    );
}