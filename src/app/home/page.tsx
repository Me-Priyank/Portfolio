import Hero from "@/components/home/Hero";
import Bento from "@/components/home/Bento";
import Skills from "@/components/home/Skills";
import FeaturedWork from "@/components/home/FeaturedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bento />
      <Skills />
      <FeaturedWork />
      <div className="h-24" />
    </>
  );
}
