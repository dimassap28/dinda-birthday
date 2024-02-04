import Image from "next/image"
import Script from "next/script"
import PictureClient from "./picture-client"

export default function Picture() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
            <PictureClient />
        </section>

    )
}