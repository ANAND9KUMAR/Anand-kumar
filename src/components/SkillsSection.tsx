import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    category: "Development Core",
    skills: ["Java","React 18+", "TypeScript", "JavaScript (ES6+)", "Vite", "Zustand", "React Query"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "Framer Motion", "Shadcn UI", "CSS Modules", "Responsive Design", "Aesthetics"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    category: "Workflow & Backend",
    skills: ["Firebase", "Node.js", "Git / GitHub", "Vercel / Netlify", "REST APIs", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const SkillBadge = ({ name, i }: { name: string; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05 }}
    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
  >
    {name}
  </motion.div>
);

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Technical <span className="gradient-text">Stack</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col h-full">
            <h3 className="font-display text-xs font-black uppercase tracking-[0.3em] mb-6 text-white/40 pl-2 border-l-2 border-primary/50">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s, i) => (
                <SkillBadge key={s} name={s} i={i + groupIdx * 5} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
