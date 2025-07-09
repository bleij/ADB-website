"use client";

import React, { useEffect, useState, useRef } from "react";

interface TypewriterCleanProps {
    words: string[];
    phase: "typing" | "pausing" | "deleting";
    typingSpeed?: number;
    deletingSpeed?: number;
    className?: string;
    style?: React.CSSProperties;
}

const TypewriterClean: React.FC<TypewriterCleanProps> = ({
                                                             words,
                                                             typingSpeed = 50,
                                                             deletingSpeed = 30,
                                                             delayBetween = 4000,
                                                             className = "",
                                                             style = {},
                                                         }) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        switch (phase) {
            case "typing": {
                if (text.length < currentWord.length) {
                    timeoutRef.current = setTimeout(() => {
                        setText(currentWord.slice(0, text.length + 1));
                    }, typingSpeed);
                } else {
                    setPhase("pausing");
                }
                break;
            }

            case "pausing": {
                timeoutRef.current = setTimeout(() => {
                    setPhase("deleting");
                }, delayBetween);
                break;
            }

            case "deleting": {
                if (text.length > 0) {
                    timeoutRef.current = setTimeout(() => {
                        setText(currentWord.slice(0, text.length - 1));
                    }, deletingSpeed);
                } else {
                    let nextIndex = wordIndex;
                    while (nextIndex === wordIndex) {
                        nextIndex = Math.floor(Math.random() * words.length);
                    }
                    setWordIndex(nextIndex);
                    setPhase("typing");
                }
                break;
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

    return (
        <span className={className} style={style}>
            {text}
        </span>
    );
};

export default TypewriterClean;