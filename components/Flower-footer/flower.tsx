"use client";

import { animate, inView, useInView } from 'framer-motion';
import main from './main.module.scss';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { root } from 'postcss';


export default function Flower({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return (
        <motion.div
            id='flower-container'
            className={`${main.container}`}
            style={{ '--play': isInView ? 'running' : 'paused' }}
            viewport={{ once: true, amount: "all" }}
            ref={ref}
        >
            {children}
            <Script id="main.js" dangerouslySetInnerHTML={{
                __html: `
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
`}
            } />
        </motion.div>
    )

}