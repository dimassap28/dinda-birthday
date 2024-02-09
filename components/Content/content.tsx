import Image from 'next/image'
import Image6 from '@/images/photos/image-11.jpg'
import Image7 from '@/images/photos/image-7.jpg'
import Image8 from '@/images/photos/image-8.jpg'
import Image9 from '@/images/photos/image-9.jpg'

export default function Content() {
    return (
        <section>
            <div className="mt-32 overflow-hidden sm:mt-40">
                <div className="mx-auto max-w-[59rem] px-6 lg:flex lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8"
                            data-aos="fade-right"
                        >
                            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-b from-[#fafafa] to-[#fafafa]/70 bg-clip-text text-transparent sm:text-6xl">A Birthday Blessing of True Friends</h2>
                            <p className="mt-6 text-lg leading-relaxed bg-gradient-to-b from-[#fafafa] to-[#fafafa]/70 bg-clip-text text-transparent">
                                On this special day, as the sun bathes the world in a warm embrace, I find myself reflecting on the beautiful tapestry of your life. Today, as we celebrate your existence, I am reminded of the extraordinary blessing of true friendship that surrounds you. Your friends, like guardian stars, illuminate your path with kindness, support, and the genuine joy that only authentic connections bring.
                            </p>
                            <p className="mt-6 text-lg leading-relaxed bg-gradient-to-b from-[#fafafa] to-[#fafafa]/70 bg-clip-text text-transparent">
                                You are truly fortunate to be enveloped by the company of individuals who not only share in your laughter but also stand by you in times of need. Their goodness, kindness, and uplifting spirits are a testament to the wonderful person you are. May this birthday be a celebration not just of another year but also of the remarkable friendships that grace your journey. Happy Birthday to someone cherished and surrounded by the love of exceptional friends.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
                                data-aos="fade-down"
                            >
                                <Image
                                    src={Image6}
                                    alt=""
                                    width={768}
                                    height={604}
                                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
                                    data-aos="fade-right"
                                >
                                    <Image
                                        src={Image7}
                                        alt=""
                                        width={768}
                                        height={604}
                                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
                                    data-aos="fade-up"
                                >
                                    <Image
                                        src={Image8}
                                        alt=""
                                        width={2000}
                                        height={2000}
                                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
                                    data-aos="fade-left"
                                >
                                    <Image
                                        src={Image9}
                                        alt=""
                                        width={768}
                                        height={604}
                                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}