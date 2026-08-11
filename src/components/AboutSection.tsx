import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Brain, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "SSC Board — 94.6%",
    description: "Strong academic foundation with a passion for problem-solving and mathematics.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "MHT-CET — 95.65 Percentile",
    description: "Ranked among the top performers, proving competitive edge under pressure.",
    icon: Award,
  },
  {
    year: "2025",
    title: "VIT Pune — CSE (FY CGPA: 8.73)",
    description: "Began Computer Science Engineering at Vishwakarma Institute of Technology. FY SEM 1 — 8.45 SGPA, FY SEM 2 — 9.00 SGPA, resulting in an FY CGPA of 8.73.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "From Academics → Systems Builder",
    description: "Transitioned from pure academics to building real AI-powered systems and SaaS products in first year itself.",
    icon: Brain,
  },
  {
    year: "2026",
    title: "AI + Full Stack Focus",
    description: "Building EduLink, FocusAI, and multiple AI-driven products. Competing, creating, shipping.",
    icon: Rocket,
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  return (
    <section id="about" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div style={{ y: headingY, opacity: headingOpacity }}>
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">The Journey</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Background track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent md:-translate-x-1/2 shadow-[0_0_12px_hsl(var(--glow)/0.5)]"
          />

          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-xs tracking-[0.2em] text-primary font-medium">{item.year}</span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>

                <motion.div
                  whileInView={{ scale: [0.6, 1.15, 1], rotate: [0, 8, 0] }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 + 0.2 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface border border-primary/40 flex items-center justify-center z-10 glow-border"
                >
                  <Icon size={18} className="text-primary" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

