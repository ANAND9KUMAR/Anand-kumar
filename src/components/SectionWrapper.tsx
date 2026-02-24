import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`section-padding max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
