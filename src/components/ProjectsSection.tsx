import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "UVIndia Enterprise",
    category: "Full-Stack Development",
    desc: "A mission-critical enterprise platform with complex state management and real-time backend synchronization.",
    tech: ["React 18", "Query", "Firebase", "Optimization"],
    demo: "https://uvindia.in",
  },
  {
    title: "Interior Vision SEPL",
    category: "UI/UX Architecture",
    desc: "A high-fidelity interior design portfolio featuring advanced layout systems and fluid motion engineering.",
    tech: ["TypeScript", "Motion", "Tailwind", "Architecture"],
    demo: "https://siyaattri.com",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A showcase of engineering excellence and creative problem-solving across diverse industries.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="h-[1px] w-24 bg-white/10 mb-2 hidden md:block" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <div className="glass-card p-8 h-full flex flex-col border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary py-1 px-3 bg-primary/10 rounded-full">
                  {p.category}
                </span>
                <a
                  href={p.demo}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:rotate-45"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground mb-8 line-clamp-2 leading-relaxed">{p.desc}</p>

              <div className="mt-auto flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-white/40 px-3 py-1 bg-white/5 rounded-md border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
