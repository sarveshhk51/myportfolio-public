import { motion } from "framer-motion";
import { Music } from "lucide-react";

export default function ExtracurricularsSection() {
  const bars = Array.from({ length: 30 }, (_, i) => ({
    height: Math.random() * 60 + 20,
    delay: i * 0.05,
  }));

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Beyond Code</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16">
            Extra<span className="text-gradient">curriculars</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-300 flex items-center justify-center">
                  <Music size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Professional Tabla Player</h3>
                  <p className="text-primary text-sm">10+ Years of Practice</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                A decade-long journey with Tabla — blending rhythm, discipline, and creativity. 
                The precision of Indian classical music mirrors the systematic thinking applied to engineering and code.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">Indian Classical</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">10+ Years</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">Discipline</span>
              </div>
            </div>

            <div className="flex items-end justify-center gap-[3px] h-40">
              {bars.map((bar, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 4 }}
                  whileInView={{
                    height: [4, bar.height, 4, bar.height * 0.6, 4],
                  }}
                  viewport={{ once: false }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5 + Math.random(),
                    delay: bar.delay,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 rounded-full bg-gradient-to-t from-primary to-amber-300 opacity-70"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
