import Script from "next/script";

export default function FlowerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section id="flowerSection">
            {children}

        </section>
    );
}