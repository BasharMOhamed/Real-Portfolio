"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { socialButtons } from "@/constants/socialBtns";

const Hero = () => {
  const goToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        className="absolute inset-0"
        src={"/hero-bg.jpg"}
        alt="Hero Image"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Bashar
              </span>
              <br />
              <span className="text-foreground">Mohamed</span>
            </h1>
            <p className="text-sl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A full stack developer crafting digital experiences with modern
              technologies and clean code architecture
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant={"default"}
              size={"lg"}
              className="group cursor-pointer"
              onClick={goToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex gap-4">
              {socialButtons.map((socialbtn) => (
                <Button
                  key={socialbtn.link}
                  variant={"outline"}
                  size={"icon"}
                  className="hover:shadow-glow transition-all"
                >
                  <Link href={socialbtn.link}>
                    <socialbtn.Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-secondary rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  );
};

export default Hero;
