"use client";

import React, { useEffect, useRef } from "react";
import { Application } from "@pixi/app";
import { Graphics } from "@pixi/graphics";

interface WireframeWaveProps {
    color?: number;
    opacity?: number;
    speed?: number;
    lineCount?: number;
    lineSpacing?: number;
    angle?: number; // горизонтальный угол
    perspective?: number; // вертикальный наклон
}

const WireframeWave: React.FC<WireframeWaveProps> = ({
                                                         color = 0xFB0037,
                                                         opacity = 1.0,
                                                         speed = 0.0018,
                                                         lineCount = 18,
                                                         lineSpacing = 28,
                                                         angle = 25,
                                                         perspective = 20,
                                                     }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const app = new Application({
            resizeTo: window,
            backgroundAlpha: 0,
            antialias: true,
        });

        const canvas = app.view as HTMLCanvasElement;

        containerRef.current.appendChild(canvas);

        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.background = 'transparent';

        const graphics = new Graphics();
        app.stage.addChild(graphics);

        const points = new Array(400).fill(0);
        let time = 0;

        const angleRadians = (angle * Math.PI) / 180;
        const perspectiveRadians = (perspective * Math.PI) / 180;

        const xShiftPerLine = Math.tan(angleRadians) * lineSpacing;
        const yScalePerLine = Math.cos(perspectiveRadians);

        // HEIGHT — с движением по Z ("катятся вперед/назад")
        const height = (x: number, z: number, t: number): number => {
            const ampBase = 1.2;
            const zMotion = z + t * 0.5;  // движение по Z (вперёд-назад)

            return ampBase * (
                Math.sin(x * 0.002 + zMotion * 0.02 + t * 0.4) * 250 +
                Math.sin(x * 0.004 + zMotion * 0.03 + t * 0.7) * 120 +
                Math.sin(x * 0.007 + zMotion * 0.05 + t * 1.2) * 50
            );
        };

        app.ticker.add(() => {
            time += speed;

            graphics.clear();

            graphics.lineStyle(3.0, color, opacity);

            const startX = -window.innerWidth * 1.2;
            const totalWidth = window.innerWidth * 3;

            const baseY = window.innerHeight / 2 - 150;

            for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
                const z = lineIndex;
                const yOffset = lineIndex * lineSpacing * yScalePerLine;
                const xOffset = xShiftPerLine * lineIndex;

                graphics.moveTo(
                    startX + xOffset,
                    baseY + yOffset + height(startX, z, time)
                );

                points.forEach((_, i) => {
                    const x = startX + (i / (points.length - 1)) * totalWidth + xOffset;

                    const y =
                        baseY + yOffset + height(x, z, time);

                    graphics.lineTo(x, y);
                });
            }
        });

        return () => {
            app.destroy(true, { children: true });
        };
    }, [color, opacity, speed, lineCount, lineSpacing, angle, perspective]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
            style={{
                background: 'transparent',
            }}
        />
    );
};

export default WireframeWave;