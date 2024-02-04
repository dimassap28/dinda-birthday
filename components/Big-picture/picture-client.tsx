"use client";

import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';

export default function PictureClient() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000
        });
    });
    return (
        <>
            <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"
                data-aos="fade-up"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                    Blog.
                </h1>
                <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                    A statically generated blog example using{" "}
                    <a
                        href="https://nextjs.org/"
                        className="underline hover:text-success duration-200 transition-colors"
                    >
                        Next.js
                    </a>{" "}
                    and{" "}
                </h4>
            </div>

            <div className="mb-8 md:mb-16"
                data-aos="fade-up"
                data-delay="1000"
            >
                <Image
                    width={1920}
                    height={1080}
                    alt={''}
                    quality={90}
                    priority={true}
                    src={'/big-image.jpg'}
                    className={"shadow-small hover:shadow-medium transition-shadow duration-200 object-none object-[55%_15%] aspect-video"}
                />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div
                    data-aos="fade-right"
                >
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <span className="hover:underline">
                            asdasd
                        </span>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <span>June 2, 2022</span>
                    </div>
                </div>
                <div className="text-lg leading-relaxed mb-4"
                    data-aos="fade-left"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>
                </div>
            </div>
        </>
    )
}