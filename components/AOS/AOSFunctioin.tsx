"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSinit() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000
        });
    }, []);
    return null;
}