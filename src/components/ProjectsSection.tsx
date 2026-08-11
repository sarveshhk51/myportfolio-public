import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const current = projects.find((p) => p.id === activeProject)!;
  const Icon = current.icon;

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">What I've Built</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16">
            Systems, Not <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(p.id)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider font-medium transition-all duration-300 inline-flex items-center gap-2 ${
                activeProject === p.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.title}
              {p.featured && (
                <span className="text-[9px] tracking-[0.15em] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  FEATURED
                </span>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${current.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{current.label}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">{current.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{current.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{current.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {current.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {current.link && (
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)]"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                  {current.hasDetails && (
                    <Link
                      to={`/projects/${current.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Key Features</p>
                {current.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors group"
                  >
                    <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="text-sm text-foreground">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
