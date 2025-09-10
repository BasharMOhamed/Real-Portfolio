import About from "@/components/portfolio/About";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
