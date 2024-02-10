"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import Image from "next/image";
import Image1 from '@/images/greetings/shabrina.jpeg'
import Image2 from '@/images/greetings/salwa.jpg'
import Image3 from '@/images/greetings/saras.jpeg'
import Image4 from '@/images/greetings/naila.jpeg'
import Image5 from '@/images/greetings/maudy.jpeg'
import Image6 from '@/images/greetings/rika.jpeg'
import Image7 from '@/images/greetings/livia.jpeg'
import Image8 from '@/images/greetings/salsa.jpeg'
import Image9 from '@/images/greetings/oca.jpeg'
import Image10 from '@/images/greetings/stefani.jpeg'
import Image11 from '@/images/greetings/rafi.jpg'
import Image12 from '@/images/greetings/ayu.jpeg'
import Image13 from '@/images/greetings/mita.jpeg'

const testimonials = [
    [
        [
            {
                id: 0,
                body: 'Selamat memasuki 1/4 abad Dinda! Katanya orang-orang tua di internet, ini usia rentan overthinking karena kita tau dewasa adalah satu hal baru bagi kita yang dulunya terpaku pada nilai-nilai rapor, dan sekarang rasanya waktu berjalan terlalu cepat di saat dunia masih memiliki banyak tempat yang mau kita lihat dan jelajahi. Kalau menurutku kita nggak perlu terlalu terpaku menjadi dewasa seperti apa yang kita bayangkan dari tumbuh melihat orang-orang dewasa di sekitar kita, karena ternyata mereka juga tumbuh versi mereka masing-masing. Jadi semoga kamu menjadi the best version of yourself, meskipun langkah-langkahnya tidak selalu sama, tapi semoga suatu saat kamu sampai di cita-cita yang kamu inginkan. Karena hidup rasanya nggak mungkin selalu manis, semoga kamu selalu menemukan bahagia-bahagiamu di setiap hal kecil hari-harimu, dan meskipun ada hari-hari sedih, semoga semua terluap. Doa baik untuk Dinduy uy uy. Happy birthday!',
                name: 'Shabrina Ishmah',
                handle: 'shaabrina13',
                imageUrl:
                    Image1,

            },
            {
                id: 1,
                body:
                    `Welcome to 25, Dinda! You've become such a beautiful, caring, and reliable friend to all of us.I'm happy to see you grow and reach what you've been working for, and you deserve all the happiness in this world.

                    May well- being, health, and blessings shower upon you and your family by Allah.

                Love, Wawa`,

                name: 'Salwa Nur Fitri',
                handle: 'salwanf',
                imageUrl:
                    Image2,

            },
            {
                id: 2,
                body: `Selamat 10 februari ke 25 Didinnn!! Semoga sehat selaluu terus kerjaan lancar ga membuat kemumetan, moga taun ini only good things happen to you, bisa konseran banyak-banyak, travelling banyak-banyak, kuliner banyak-banyak!! I hope you'll be nothing but happy this year too!! Happy bday once again dinda luv youuu💕💕💕
                
                Xoxo popo`,

                name: 'Raras',
                handle: 'adsaraaswati',
                imageUrl:
                    Image3,

            },
            {
                id: 3,
                body: `Hi Dindin, happy birthdayy! 
25 neeeh, semoga diberikan kesehatan dan bahagia selalu yg penting, karena makin tua sebenarnya cm butuh waras ajaaa 😃😃😃 betah2 di blankon supaya aku betah sisan HAHAHA maaf attached🤣🙏🏻 udah kalau dari aku doanya yg penting sehat dan bahagia, semoga sukses karir dan percintaannya bun aamiin ❤️`,

                name: 'Gusti Naila Elfara',
                handle: 'gtnaila',
                imageUrl:
                    Image4,

            },
            // More testimonials...
        ],
        [
            {
                id: 4,
                body: 'Mabruk alfa mabruk, Happy Birthday Dindaa 🥳🥳. Semoga diberikan kesehatan, diberikan umur yang panjang dan barokah. Lancar rezekinya, langgeng sm Dimas dan bahagia terus. Semoga semua keinginan tercapai, aamiin ya rabbal alamin',

                name: 'Salsabilla Maudy',
                handle: 'maudy_03',
                imageUrl:
                    Image5,

            },
            {
                id: 5,
                body: `Selamat ulang tahun dindaaaaaaa....
                
                Semoga diberikan kesehatan dan kebahagiaan selalu dimanapun, kapanpun dan dengan siapapun, dilancarkan pekerjaannya, dimudahkan dalam mencari rezekinya.Aamiinn
                
                Semoga lancar terus urusan asmaranya hihihihihi...
                Semoga tetap menjadi dinda yang periang 💕💕
                Dan semoga selalu dilindungi Allah SWT dimanapun dan kapanpun dinda berada.Aamiinn 🥰🥰`,

                name: 'Rika Permatasari',
                handle: 'rikaper_13',
                imageUrl:
                    Image6,

            },
            {
                id: 6,
                body: `Dear Dinda!
                Happy, happy birthday! 🎉 Just wanted to drop a quick note to let you know how awesome you are. Your kindness and caring vibes are like a breath of fresh air. Even though we're not super tight, I've definitely picked up on the warmth and friendliness you bring to the table.
                And can we talk about our mutual clumsiness? It's like we're two peas in a pod! 😄 But hey, it just adds to your uniqueness and lovable charm, right? May your day be bursting with joy, laughter, and all kinds of delightful surprises.
                Here's to celebrating you, Dinda! 🎂🎈 Sending tons of good vibes your way!
                Cheers,
                Livia`,

                name: 'Livia Kristina',
                handle: 'liviakris_',
                imageUrl:
                    Image7,

            },
            // More testimonials...
        ],
    ],
    [
        [
            {
                id: 7,
                body: 'Tan Dinnn happy birthday to you🫶 semoga di umur 25 tahun ini bisa tercapai semua yang diinginkan, sehat2 dan bahagia terusss. Karir lancar dan relationship bersama keluarga, teman, dan pasangan ttp hangat dan eratt🖤Semoga selese sakit giginya supaya ttp bisa seneng2 tanpa merintih wkwkwkwk ayoooo kita laksanakan trip kbrbrz juga di tahun ini!! Love you and miss you semoga di tahun selanjutnya bisa ngerayain ultahmu sama2🥺',

                name: 'Salsabila Andika P.',
                handle: 'salandika',
                imageUrl:
                    Image8,

            },
            {
                id: 8,
                body: 'Selamat quarter life Dinda, semoga semakin makin akan kemakinan yang makin makin diperuntukkan untuk kemakinan yang dimakinkan oleh termakinkan pada kemakinannya. Semoga semakin makin ♥️♥️♥️',

                name: 'Oca',
                handle: '0.oca.0',
                imageUrl:
                    Image9,

            },
            {
                id: 9,
                body: 'happy birthday Dinda, hope your special day is as good to you as you are to others! Wishing you all the best on your birthday, filled with lots of love, joy, and peace 🫶🏻 Your existence means a lot to me and you deserve everything you get, I hope this year brings you only the best of the best!! love you Dinda 💋',

                name: 'Gabriella Stefani',
                handle: 'gabriellastefani',
                imageUrl:
                    Image10,

            },
            // More testimonials...
        ],
        [
            {
                id: 10,
                body: 'Selamat hari lahir, din! Berkah umurnya, sehat selalu, dimudahkan urusan2nnya, semoga Allah selalu lindungin kamu! Doa yg baik2 juga buat kamu sama dimas 🤲🏻',

                name: 'Raafi Gita Fisabila',
                handle: 'raafigf',
                imageUrl:
                    Image11,

            },
            {
                id: 11,
                body: 'Selamat mengulang tanggal dan menandai umur yang lebih tua ya Din... semoga di tahun ini dan tahun depan selalu diberi kesehatan baik mental dan fisik serta dimudahkan banyak jalan yg kamu mau. Oh iya semoga prabowo ga jadi presiden, mari kita aminkan semwaaa',

                name: 'Ayu Nurfaizah',
                handle: 'ayunfzh',
                imageUrl:
                    Image12,

            },
            {
                id: 12,
                body: `Happy birthday 25x Dindin!!
                Lancar selaluu dan dimudahkan selalu urusannya, happyy trss dan berkah dunia akhirat, oiya makin deres jg rejekinyaa!
                Jangan capek buat terus berproses, nyebarin positive vibes dimanapun km pergi, n put yourself first💖

                Much love from me!!`,

                name: 'Danaparamita Pratista',
                handle: 'mitapratista',
                imageUrl:
                    Image13,

            },
            // More testimonials...
        ],
    ],

]

const featuredTestimonial = {
    body: `Barakallah Fii Umrik Anakku Sayank...😘😘😘Dengan Bertambahnya Usiamu Hari Ini...Semoga Selalu Dalam Lindungan Allah SWT..
Semoga Selalu Sehat Diberi Panjang Umur dan Rezeki Melimpah Yang Berkah Diberi Jodoh Yang Sholeh Aamiin Ya Robbal Alamiin 🤲😘🥰🤲💐🎂`,
    name: 'Sincere Love',
    handle: 'Ibu & Abah',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',

}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const testimonialBody = testimonials.map((columnGroup) =>
    columnGroup.map((column) =>
        column.map((testimonial) => testimonial.body)
    )
);

const testimonialAuthor = testimonials.map((columnGroup) =>
    columnGroup.map((column) =>
        column.map((testimonial) => testimonial.name)
    )
);


const testimonialAuthorImage = testimonials.map((columnGroup) =>
    columnGroup.map((column) =>
        column.map((testimonial) => testimonial.imageUrl)
    )
);

const testimonialAuthorHandle = testimonials.map((columnGroup) =>
    columnGroup.map((column) =>
        column.map((testimonial) => testimonial.handle)
    )
);

const flatbody = testimonialBody.flat(Infinity)
const flatauthor = testimonialAuthor.flat(Infinity)
const flatauthorimage = testimonialAuthorImage.flat(Infinity)
const flatauthorhandle = testimonialAuthorHandle.flat(Infinity)

export default function GreetingsDetails() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleItemClick = (itemId: any) => {
        setSelectedId(itemId);
    };

    const handleClose = useCallback(() => {
        setSelectedId(null);
    }, []);

    return (
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl shadow-2xl shadow-[#ff80b5]/50 sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>{`${featuredTestimonial.body}`}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-12 py-4">
                    <div className="flex-auto">
                        <div className="text-gray-600">{featuredTestimonial.name}</div>
                        <div className="font-semibold">{`${featuredTestimonial.handle}`}</div>
                    </div>
                </figcaption>
            </figure>

            {testimonials.map((columnGroup, columnGroupIdx) => (
                <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                    {columnGroup.map((column, columnIdx) => (
                        <div
                            key={columnIdx}
                            className={classNames(
                                (columnGroupIdx === 0 && columnIdx === 0) ||
                                    (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                    ? 'xl:row-span-2'
                                    : 'xl:row-start-1',
                                'space-y-8'
                            )}
                        >
                            {column.map((testimonial) => (
                                <motion.figure
                                    layoutId={testimonial.id.toString()}
                                    key={testimonial.id}
                                    onClick={() => handleItemClick(testimonial.id)}
                                    // initial={{ borderRadius: '1rem' }}
                                    className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-[#ff80b5]/50 ring-1 ring-gray-900/5 cursor-pointer will-change-transform transform-cpu hover:ring-[#ff80b5] hover:ring-4 hover:ring-offset-1"
                                >

                                    <blockquote className="text-gray-900">
                                        <p className="line-clamp-4">{`${testimonial.body}`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <Image
                                            className="h-10 w-10 rounded-full bg-gray-50"
                                            width={40}
                                            height={40}
                                            src={testimonial.imageUrl}
                                            alt=""
                                        />
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-gray-600">{`@${testimonial.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </motion.figure>
                            ))}
                            <AnimatePresence>
                                {selectedId != null && (
                                    <>
                                        <div className="absolute z-[1] top-0 left-0 flex w-full h-full place-content-center place-items-center pointer-events-none">
                                            <motion.figure
                                                layoutId={`${selectedId}`}
                                                key={selectedId}
                                                className="relative overflow-hidden w-[600px] h-fit bg-white p-6 rounded-2xl shadow-lg shadow-[#ff80b5]/50 ring-1 ring-gray-900/5 will-change-transform transform-cpu"
                                                style={{ pointerEvents: 'all' }}
                                            >
                                                <blockquote className="text-gray-900 pr-4 whitespace-pre-line">
                                                    <p>{`${flatbody.at(selectedId)}`}</p>
                                                </blockquote>
                                                <figcaption className="mt-6 flex items-center gap-x-4">
                                                    <div>
                                                        <div className="font-semibold">{`${flatauthor.at(selectedId)}`}</div>
                                                        <div className="text-gray-600">{`@${flatauthorhandle.at(selectedId)}`}</div>
                                                    </div>
                                                </figcaption>
                                                <motion.div
                                                    className="absolute top-[10px] right-[10px] w-[30px] h-[30px] border-none rounded-[50%] bg-[#bb00ff]/10 cursor-pointer outline-none"
                                                    style={{ color: '#bb00ff' }}
                                                    layoutId={`close-${selectedId}`}
                                                    onClick={handleClose}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="absolute w-[18px] h-[18px] top-[6px] left-[6px]">
                                                        <path
                                                            d="M15 5L5 15M5 5l5.03 5.03L15 15"
                                                            fill="transparent"
                                                            strokeWidth="2"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </motion.div>
                                            </motion.figure>
                                        </div>
                                        <motion.div
                                            className="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-tr from-[#ff80b5]/35 to-[#9089fc]/35 cursor-pointer"
                                            key="backdrop"
                                            onClick={handleClose}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.1
                                                    }
                                                },
                                                visible: {
                                                    opacity: 0.8,
                                                    transition: {
                                                        delay: 0.04,
                                                        duration: 0.16
                                                    }
                                                }
                                            }}
                                            initial="hidden"
                                            exit="hidden"
                                            animate="visible"
                                        />
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))
                    }
                </div >
            ))
            }
        </div >


    );
}
