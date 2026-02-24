import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
}

const MagicalCursor = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setParticles((prev) => [...prev.slice(-20), newParticle]);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0, y: particle.y + 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: "absolute",
                            left: particle.x,
                            top: particle.y,
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "hsl(var(--primary))",
                            boxShadow: "0 0 10px hsl(var(--primary))",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default MagicalCursor;
