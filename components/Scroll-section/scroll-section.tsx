"use client";
import { useTransform, useScroll, motion } from "framer-motion";

export default function ScrollSection() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    return (
        <section>
            <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-br from-zinc-600/20 via-black to-black">
                <div style={{
                    width: '150px',
                    height: '150px',
                    position: 'absolute',
                    // top: '50%',
                    // left: '50%',
                    transform: 'translateX(-50 %) translateY(- 50 %)'
                }}>
                    <motion.div
                        className="w-full h-full overflow-hidden bg-white/[0.2] rounded-[30px]"
                        style={{ scale }}
                    >
                        <motion.div
                            style={{
                                scaleY: scrollYProgress,
                                width: 'inherits',
                                height: 'inherits',
                                transformOrigin: '50% 100%'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}