import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 80 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 75 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend & AI",
    skills: [
      { name: "Supabase", level: 82 },
      { name: "AI/LLM Integration", level: 85 },
      { name: "Genetic Algorithms", level: 78 },
      { name: "NLP", level: 70 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Tech Arsenal
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px", once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500"
            >
              <h3 className="text-sm tracking-[0.2em] text-primary uppercase font-medium mb-6">
                {cat.title}
              </h3>

              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    
                    {/* Skill label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>

                      {/* Animated % */}
                      <motion.span
                        key={skill.level}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs text-muted-foreground"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        key={skill.level} // 🔥 forces re-animation
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: ci * 0.15 + si * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-amber-300"
                      />
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
