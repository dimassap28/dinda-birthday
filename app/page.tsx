import Hero from "@/components/Hero/hero";
import Photos from "@/components/Photos-scroll-section/photos";
import ScrollSection from "@/components/Scroll-section/scroll-section";
import Picture from "@/components/Big-picture/picture";
import HorPhotos from "@/components/Hor-photos/horphotos";
import Content from "@/components/Content/content";
import Greetings from "@/components/Greetings/greetings";
import FlowerServer from "@/components/Flower-footer/flowerserver";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollSection />
      <Photos />
      <Picture />
      <HorPhotos />
      <Content />
      <Greetings />
      <FlowerServer />


    </main>
  );
}
