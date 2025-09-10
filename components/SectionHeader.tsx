import { SectionHeaderProps } from "@/types/sectionHeader";
import React from "react";

const SectionHeader = ({ title, subtitle, gradient }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className={`${gradient} bg-clip-text text-transparent`}>
          {title}
        </span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
