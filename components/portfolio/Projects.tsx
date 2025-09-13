"use client";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { ProjectProps } from "@/types/project";
import { Card } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects: ProjectProps[] = [
  {
    image: "/uTeachme.png",
    title: "uTeach.me LMS Platform",
    description: `A modern, full-stack Learning Management System (LMS) built with Next.js 15 (App Router), TypeScript, Prisma, Stripe, Clerk authentication, and Tailwind CSS. This platform enables instructors to create, manage, and sell online courses, while providing students with a seamless learning experience.`,
    liveUrl: "",
    githubUrl: "https://github.com/BasharMOhamed/uTeach.me-LMS-Platform",
    tags: [
      "dnd",
      "strip",
      "nextjs",
      "axios",
      "recharts",
      "mux",
      "prisma",
      "tailwind-css",
      "zod",
      "zustand",
      "react-confetti",
      "clerk",
      "react-hot-toast",
      "uploadthing",
      "lucide-react",
      "react-quill-new",
    ],
  },
  {
    image: "/BudgetTracker.jpg",
    title: "Budget Tracker",
    description:
      "A budget tracking application built with the Next.js that helps users manage their finances efficiently. This app allows users to select a currency, categorize their transactions, and monitor income and expenses. It features a secure and responsive interface, offering clear insights into financial activity and making budgeting simple and effective.",
    liveUrl: "https://budget-tracker-one-wheat.vercel.app/",
    githubUrl: "https://github.com/BasharMOhamed/Budget-Tracker",
    tags: [
      "clerk",
      "prisma",
      "postgreSQL",
      "zod",
      "tailwind-css",
      "lucide-react",
      "recarts",
      "axios",
    ],
  },
  {
    image: "/E-Commerce.png",
    title: "E-Commerce",
    description: `This MERN E-Commerce project is a full-featured web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides a robust platform for buying and selling products online, offering a seamless and engaging shopping experience for users.`,
    liveUrl: "",
    githubUrl: "https://github.com/BasharMOhamed/E-Commerce-Project",
    tags: [
      "nodejs",
      "jwt",
      "mongodb",
      "reactjs",
      "mongoose",
      "expressjs",
      "bcrypt",
      "tailwind-css",
    ],
  },
  {
    image: "/Mini-Instapay.png",
    title: "Mini InstaPay",
    description: `Mini-Instapay is a microservices-based payment application designed to handle user management, transactions, and notifications. It features a frontend client and multiple backend services, all deployed on Kubernetes for scalability and reliability.`,
    liveUrl: "",
    githubUrl:
      "https://github.com/BasharMOhamed/Mini-instapay/tree/transaction-service",
    tags: [
      "reactjs",
      "mongoDB",
      "Express",
      "nodejs",
      "docker",
      "kubernetes",
      "node-mailer",
      "tailwind-css",
    ],
  },
  {
    image: "/modified_image (6).png",
    title: "Chatty-app",
    description: `A real-time chat application built with the MERN stack (MongoDB,
          Express.js, React, Node.js) and Socket.io for instant messaging. This
          app provides secure authentication, real-time communication, and a
          responsive UI, making it a seamless messaging platform.`,
    liveUrl: "",
    githubUrl: "https://github.com/BasharMOhamed/chat-app",
    tags: [
      "nodejs",
      "jwt",
      "mongodb",
      "reactjs",
      "mongoose",
      "expressjs",
      "bcrypt",
      "zustand",
      "daisyUI",
    ],
  },
];

const Projects = () => {
  const [isAll, setIsAll] = useState(false);
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and expertise"
          gradient="bg-gradient-primary"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:shadow-glow transition-all cursor-pointer"
            onClick={() => setIsAll(!isAll)}
          >
            {isAll ? "View Less Projects" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  return (
    <Card className="group bg-glass border-2 backdrop-blur-sm shadow-card shadow-test-hover transition-all">
      <div className="aspect-video relative overflow-hidden hover:scale-110">
        <Image src={image} alt={title} fill />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={"secondary"}
              className="text-xs font-medium px-3 py-1 rounded-full border border-primary/30 text-foreground bg-primary/10 hover:bg-primary/20 hover:border-primary/40 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full shadow-test-hover transition-all text-white cursor-pointer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              className="flex-1 w-full text-gray-400 cursor-not-allowed"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Not Hosted Yet
            </Button>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full shadow-test-hover transition-all text-white cursor-pointer"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};
