"use client"

import Image from "next/image"
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { animate, motion, stagger } from "framer-motion"
import { useEffect } from "react"

export function ClientPhotos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
    // useEffect(() => {
    //     animate("image1", {
    //         rotate: 80
    //     })
    // }), []
    return (
        <motion.div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
        >
            {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                <div
                    key={image.src}
                    className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${rotations[imageIndex % rotations.length]}`}
                >
                    <Image
                        src={image}
                        alt=""
                        sizes="(min-width: 640px) 18rem, 11rem"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                </div>
            ))
            }
        </motion.div >
    )
}

