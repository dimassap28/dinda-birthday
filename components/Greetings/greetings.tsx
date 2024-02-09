import GreetingsDetails from "./greetings-details"

export default function Greetings() {

    return (
        <section>
            <div className="relative isolate my-32 sm:my-60 sm:py-32">
                <svg
                    className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                            width={200}
                            height={200}
                            x="50%"
                            y={0}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={0} className="overflow-visible fill-zinc-600/20">
                        <path
                            d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" />
                </svg>
                <div className="relative">
                    <div
                        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-xl sm:text-center">
                            <h2 className="text-xl font-semibold leading-8 tracking-tight bg-gradient-to-b from-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent text-center">Heartfelt Wishes and Prayers from Family and Friends</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-b from-[#fafafa] via-[#fafafa]/90 to-[#4d4d4d] bg-clip-text text-transparent sm:text-4xl">
                                A Collective Shower of Love and Support
                            </p>
                        </div>
                        <GreetingsDetails />
                    </div>
                </div>
            </div>
        </section>
    )
}