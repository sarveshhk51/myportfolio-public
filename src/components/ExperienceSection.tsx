import { motion } from "framer-motion";
import { Heart, Users, Mic, Award } from "lucide-react";

const experiences = [
  {
    icon: Heart,
    title: "SPANDAN Social Initiative",
    role: "Active Volunteer",
    description: "Participated in cleanliness drives at Taljai Tekdi & Omkareshwar. Conducted AI awareness sessions for school students, developing teamwork, communication, teaching skills, and civic responsibility.",
    highlights: ["Cleanliness drives", "AI awareness for students", "Leadership & teamwork", "Appreciation Certificate"],
    color: "from-rose-500 to-pink-400",
  },
  {
    icon: Mic,
    title: "VishwaConclave",
    role: "Media Volunteer",
    description: "Contributed as media volunteer for VIT Pune's flagship event, handling event coverage, coordination, and digital media management.",
    highlights: ["Event media coverage", "Digital coordination", "Team collaboration"],
    color: "from-violet-500 to-purple-400",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Impact & Activities</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16">
            Experience & <span className="text-gradient">Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                viewport={{ margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{exp.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{exp.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span key={h} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
