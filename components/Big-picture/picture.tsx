import Image from "next/image"
import ImageBig from '@/images/big-image.jpg'

export default function Picture() {
    return (
        <div className="my-60 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"
                data-aos="fade-up"
            >
                <h1 className="text-6xl md:text-8xl h-28 font-bold text-transparent font-poppins bg-gradient-to-b from-[#fafafa] to-[#4d4d4d] tracking-tighter leading-tight md:pr-8 bg-clip-text">
                    24 Club.
                </h1>

                <h4 className="text-center md:text-left text-transparent bg-gradient-to-b from-[#fafafa] to-[#4d4d4d] bg-clip-text text-xl mt-5 md:pl-8">
                    Something special for you!
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
                    src={ImageBig}
                    className={"shadow-small hover:shadow-medium rounded-3xl transition-shadow duration-200 object-none object-[55%_15%] aspect-video"}
                />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div
                    data-aos="fade-right"
                >
                    <h3 className="mb-4 text-4xl lg:text-7xl leading-tight bg-gradient-to-b from-[#fafafa] via-[#fafafa]/90 to-[#4d4d4d] bg-clip-text text-transparent">
                        <span className="hover:underline font-semibold">
                            Happy <br /> Lovely <br /> Birthday!
                        </span>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg bg-gradient-to-b from-[#fafafa] to-[#4d4d4d] bg-clip-text text-transparent">
                        <span>February 10, 2024</span>
                    </div>
                </div>
                <div className="text-lg leading-relaxed mb-4"
                    data-aos="fade-left"
                >
                    <p className="bg-gradient-to-b from-[#fafafa] to-[#fafafa]/70 bg-clip-text text-transparent text-lg font-normal">
                        I hope God always keeps that lovely smile of yours safe because seeing you happy makes me the happiest. You should be loved for who you are without hiding any parts you think are unlovable. If I could give you one thing in life, it would be the ability to see how special you are through my eyes. You&apos;re my first in a big way—not just my first in relationships or saying &quot;I love you,&quot; but the first person who makes me feel truly enough and shows me what love really means. I don&apos;t know how to thank you, but I&apos;m so glad you came into my life because you&apos;ve made it so much better.</p>
                </div>
            </div>
        </div>

    )
}