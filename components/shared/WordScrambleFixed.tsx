"use client";

import React, { useEffect, useState, useRef } from "react";

interface WordScrambleFixedProps {
    words: string[];
    interval?: number;
    scrambleSpeed?: number;
    scrambleChars?: string;
    className?: string;
}

const WordScrambleFixed: React.FC<WordScrambleFixedProps> = ({
                                                                 words,
                                                                 interval = 3000,
                                                                 scrambleSpeed = 50,
                                                                 scrambleChars = "!<>-_\\/[]{}—=+*^?#________",
                                                                 className = "",
                                                             }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [displayed, setDisplayed] = useState(words[0]);
    const [isScrambling, setIsScrambling] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const getMaxLength = () => Math.max(...words.map(w => w.length));

    const scrambleOnce = () => {
        setDisplayed(prev => {
            return prev
                .split("")
                .map(() =>
                    scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length))
                )
                .join("");
        });
    };

    useEffect(() => {
        const cycleWords = () => {
            setIsScrambling(true);

            let scrambleCount = 10; // how many frames scramble runs
            const scrambleInterval = setInterval(() => {
                scrambleOnce();
                scrambleCount--;
                if (scrambleCount <= 0) {
                    clearInterval(scrambleInterval);
                    // Pick new word
                    let newWord = currentWord;
                    while (newWord === currentWord) {
                        newWord = words[Math.floor(Math.random() * words.length)];
                    }
                    setCurrentWord(newWord);
                    setDisplayed(newWord);
                    setIsScrambling(false);
                }
            }, scrambleSpeed);
        };

        timeoutRef.current = setInterval(cycleWords, interval);

        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [currentWord, words, interval, scrambleSpeed, scrambleChars]);

    return (
        <span
            className={className}
            style={{
                display: "inline-block",
                minWidth: `${getMaxLength()}ch`,
                textAlign: "left",
                whiteSpace: "nowrap",
            }}
        >
            {displayed}
        </span>
    );
};

export default WordScrambleFixed;