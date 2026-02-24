import SectionWrapper from "./SectionWrapper";
import { Code2, Zap, Smartphone, Palette } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Modern Stack Expertise", desc: "Expertise in React, Node, and TypeScript ecosystems." },
  { icon: Zap, title: "Performance Engineering", desc: "Specializing in load speed and runtime optimizations." },
  { icon: Smartphone, title: "Cross-Platform Precision", desc: "Experience in building fluid, pixel-perfect mobile-first apps." },
  { icon: Palette, title: "Architectural Integrity", desc: "Committed to clean, maintainable, and scalable codebases." },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
        Professional <span className="gradient-text">Overview</span>
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-16 leading-relaxed">
        Software Engineer dedicated to building next-generation digital products.
        I bridge the gap between <span className="text-white font-medium">complex engineering</span> and <span className="text-white font-medium">intuitive user experiences</span>.
        Based in India, I focus on delivering high-impact solutions for startups and enterprises globally.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((h, i) => (
          <div key={i} className="glass-card p-8 flex items-start gap-6 group hover:border-white/20 transition-all duration-500">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <h.icon size={28} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{h.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
