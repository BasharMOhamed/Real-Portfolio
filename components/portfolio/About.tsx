import React from "react";
import { Card } from "../ui/card";
import { StatsCardProps } from "@/types/statsCard";
import SectionHeader from "../SectionHeader";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer with expertise in modern web technologies"
          gradient="bg-gradient-secondary"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <div className="space-y-6">
            <Card className="p-8 bg-glass backdrop-blur-sm shadow-test-hover transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 2 years of experience in full-stack development, I
                specialize in creating scalable web applications using React,
                Node.js, Next.js and modern cloud technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about writing clean, maintainable code and
                staying up-to-date with the latest industry trends and best
                practices.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <StatCard
              value="2+"
              title="Years Experience"
              subtitle="In web development"
            />
            <StatCard
              value="50+"
              title="Projects Completed"
              subtitle="Across various industries"
            />
            <StatCard
              value="24/7"
              title="Continuous Learning"
              subtitle="Always improving skills"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const StatCard = ({ value, title, subtitle }: StatsCardProps) => {
  return (
    <Card className="p-6 bg-glass border-glass backdrop-blur-sm shadow-card shadow-test-hover transition-all group">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">{value}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};
