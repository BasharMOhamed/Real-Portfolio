import About from "@/components/portfolio/About";
import Hero from "@/components/portfolio/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
    </div>
  );
}
