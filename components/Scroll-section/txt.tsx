"use client"
import { useEffect, useState } from 'react';
import TextScroll from './gsapFunction'
import styles from './text.module.scss'
import stylesScroll from './scroll.module.css'

export default function Text() {
    const [isModalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        //Disable scrolling on the body when the modal is open
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        //Cleanup the effect when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);
    return (
        <>
            <TextScroll>
                <h1 className={`${styles.text} text`}>HAPPY BIRTHDAY!<span className={`${styles.span}`}>WISHING YOU
                </span></h1>
                <h1 className={`${styles.text} text`}>24 CLUB<span className={`${styles.span} `}>JOINING THE</span></h1>
                <h1 className={`${styles.text} text`}>LOVE & JOY<span className={`${styles.span} `}>FILLED WITH</span></h1>
                <h1 className={`${styles.text} text`}>CELEBRATING YOU<span className={`${styles.span}`}>ANOTHER YEAR</span></h1>
                <h1 className={`${styles.text} text`}>SURPRISE INSIDE<span className={`${styles.span} cursor-pointer`} onClick={() => setModalOpen(true)}>HOVER FOR LOVE</span></h1>

                {isModalOpen === true && (
                    <>
                        <div className={`fixed left-0 top-0 w-full h-full inset-0 bg-black bg-opacity-80 z-10`} aria-hidden="true" tabIndex={-1}></div>
                        <div className={`${stylesScroll.body} no-scrollbar overflow-y-auto absolute z-20`}>
                            <div className={`${stylesScroll.main} `}>
                                <div className={`${stylesScroll.scrollbar} `}></div>
                                <div className={`${stylesScroll.containerText}`}>
                                    <p className={`${stylesScroll.p}`}>
                                        Did you remember in June, we started chatting? Out of the blue. Talking every day, we just clicked, and I&apos;m so thankful to Allah for bringing us together. On July 29, 2023, we had our first date at Kudo Cafe, where we shared stories about our childhoods. After that, we got even closer.</p>
                                    <p className={`${stylesScroll.p}`}>
                                        I asked to going on more dates, maybe to the movies. You asked me if anyone would be mad if we got close. I reassured you, and we got even closer. We planned a second date for August 17, but you watch a tiktok video about infatuation and got worried. We talked it out at Amstirdam, and we&apos;ve talked a lot and be more open to each other. Though there was a hiccup, things fell into place. On September 1, 2023, at Seblak Mang Ndut, i asked you once more aaaanndd yeay! You knew the answer right? Ahahaha.. Then we&apos;ve been together since.</p>
                                    <p className={`${stylesScroll.p}`}>
                                        From the start till now, I&apos;m really grateful. You stuck with me when I was sick, went with me to work, always been kind, and did your best. I&apos;m just thankful to have you around. I hear you. Sometimes, words just ain&apos;t enough, and this platform&apos;s got its limits.</p>
                                    <p className={`${stylesScroll.p}`}>
                                        With love,
                                        <br />
                                        Dimas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="fixed top-[10px] right-[37rem] w-[30px] h-[30px] border-none rounded-[50%] bg-[#fafafa]/80 z-20 cursor-pointer outline-none"
                            style={{ color: '#4d4d4d' }}
                            onClick={() => setModalOpen(false)}
                            id='center'
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
                        </div>
                    </>
                )}

            </TextScroll>

        </>

    )

}
