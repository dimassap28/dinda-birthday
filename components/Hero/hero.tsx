import Particles from "@/components/Particles/particles";

export default function Hero() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                />

                <h1 className="z-10 text-4xl text-transparent duration-1000 bg-gradient-to-b from-[#fafafa] to-[#4d4d4d] cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Hi, Dinda!
                </h1>
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>
        </section>
    )
}

