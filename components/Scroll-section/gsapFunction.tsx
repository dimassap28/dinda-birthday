"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './text.module.scss'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TextScroll({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const container = useRef(null);

    useGSAP(() => {
        const textElements = gsap.utils.toArray(`.text`);

        textElements.forEach((text: any) => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 80%',
                    end: 'center 20%',
                    scrub: true,
                }
            });
        }, { scope: container });
    })
    return (
        <>
            <div className="relative bg-gradient-to-tl from-black via-black to-zinc-600/20 overflow-hidden">
                <div className={`${styles.container} max-w-7xl mx-auto`} ref={container}>
                    {children}
                </div>
            </div>
        </>
    )
}

