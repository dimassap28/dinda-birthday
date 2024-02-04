"use client";
import styles from "./photos.module.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";


interface Props {
    image: typeof Image;
    hueA: number;
    hueB: number;
}


const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ image, hueA, hueB }: Props) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <div id={`${styles.root}`}>
            <motion.div
                className={`${styles.container}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "all" }}
            >
                <div className={`${styles.splash}`} style={{ background }} />
                <motion.div
                    className={`${styles.card}`}
                    variants={cardVariants}>
                    <div className="">
                        <Image src={image} alt=""
                            width={250}
                            height={250}
                            className="relative object-none w-64 h-80 bottom-7"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

const food: [any, number, number][] = [
    ['/image-1.jpeg', 340, 10],
    ["/image-2.jpeg", 20, 40],
    ["/image-3.jpeg", 60, 90],
    ["/image-4.jpg", 80, 120],
    ["/image-5.JPG", 100, 140],
    ["/image-6.JPG", 205, 245],
    ["/image-7.JPG", 260, 290],
    ["/image-8.jpeg", 290, 320]
];

export default function Photos() {
    return food.map(([image, hueA, hueB]) => (
        <Card image={image} hueA={hueA} hueB={hueB} key={image} />
    ));
}
