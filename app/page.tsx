import Hero from "@/components/Hero/hero";
import Photos from "@/components/Photos-scroll-section/photos";
import Picture from "@/components/Big-picture/picture";
import HorPhotos from "@/components/Hor-photos/horphotos";
import Content from "@/components/Content/content";
import Greetings from "@/components/Greetings/greetings";
import FlowerServer from "@/components/Flower-footer/flowerserver";
import Text from "@/components/Scroll-section/txt";

export default function Home() {
  return (
    <main>
      <Hero />
      <Text />
      <Photos />
      <Picture />
      <HorPhotos />
      <Content />
      <Greetings />
      <FlowerServer />

    </main>
  );
}
