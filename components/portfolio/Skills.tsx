import React from "react";
import SectionHeader from "../SectionHeader";
import { Card } from "../ui/card";
import { CategorySkillsProps } from "@/types/categorySkills";
import { Badge } from "../ui/badge";

const skillCategories: CategorySkillsProps[] = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
    ],
    gradient: "bg-gradient-primary",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    gradient: "bg-gradient-secondary",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "CI/CD"],
    gradient: "bg-gradient-accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with to bring ideas to life"
          gradient="bg-gradient-accent"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const CategoryCard = ({ title, skills, gradient }: CategorySkillsProps) => {
  return (
    <Card className=" p-8 bg-glass border-2 backdrop-blur-sm shadow-test-hover transition-all group">
      <div
        className={`w-16 h-16 ${gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <span className="text-white font-bold text-xl">{title[0]}</span>
      </div>
      <h3 className="text-xl font-semibold mb-6 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant={"outline"}
            className="text-xs font-medium px-3 py-1 rounded-full border border-primary/30 text-foreground bg-primary/10 hover:bg-primary/20 hover:border-primary/40 transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
