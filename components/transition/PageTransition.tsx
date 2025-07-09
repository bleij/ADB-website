"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import pageCodeMap from "@/utils/codeMap";
import clsx from "clsx";
import styles from "./PageTransition.module.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism.css";

interface Props {
    children: React.ReactNode;
}

const PageTransition: React.FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const [phase, setPhase] = useState<'fadeIn'|'typing'|'fadeOut'|'done'>('fadeIn');
    const [typedLines, setTypedLines] = useState<string[]>([]);
    const [cursorVisible, setCursorVisible] = useState(true);
    const scrollRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        setPhase('fadeIn');
        setTypedLines([]);

        const fadeInTimeout = setTimeout(() => {
            setPhase('typing');
            const code = pageCodeMap[pathname] || ["// Страница загружается..."];
            let idx = 0;

            const interval = setInterval(() => {
                const line = Prism.highlight(code[idx], Prism.languages.jsx, "jsx");
                setTypedLines(prev => [...prev, line]);
                scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
                idx++;
                if (idx >= code.length) {
                    clearInterval(interval);
                    setTimeout(() => setPhase('fadeOut'), 250);
                    setTimeout(() => setPhase('done'), 500);
                }
            }, 35);
        }, 500);

        return () => clearTimeout(fadeInTimeout);
    }, [pathname]);

    useEffect(() => {
        const blink = setInterval(() => setCursorVisible(v => !v), 500);
        return () => clearInterval(blink);
    }, []);

    if (phase === 'done') return <>{children}</>;

    return (
        <div className={clsx(
            styles.wrapper,
            phase === 'fadeIn'   && styles.fadeInWhite,
            phase === 'typing'   && styles.typing,
            phase === 'fadeOut'  && styles.fadeOut,
        )}>
            {phase !== 'fadeIn' && (
                <pre ref={scrollRef} className={styles.codeContent}>
                    <code
                        dangerouslySetInnerHTML={{
                            __html: typedLines.join("\n") + (cursorVisible ? '<span class="blinking">_</span>' : "")
                        }}
                    />
                </pre>
            )}
        </div>
    );
};

export default PageTransition;