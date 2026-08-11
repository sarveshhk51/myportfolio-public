import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn } from "lucide-react";
import { getProject } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProject(id) : undefined;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!project?.images?.length) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, index]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-display font-bold text-foreground mb-3">Project not found</h1>
        <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    );
  }

  const images = project.images ?? [];
  const next = () => images.length && setIndex((i) => (i + 1) % images.length);
  const prev = () => images.length && setIndex((i) => (i - 1 + images.length) % images.length);

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-background relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-24">
        {/* Back */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> BACK TO PROJECTS
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
              <Icon size={22} className="text-primary-foreground" />
            </div>
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{project.label}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-3">
            {project.title}
          </h1>
          <p className="text-primary text-base md:text-lg font-medium mb-6">{project.tagline}</p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
            {project.longDescription ?? project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)]"
            >
              Visit Live Project <ExternalLink size={14} />
            </a>
          )}
        </motion.div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {project.highlights.map((h) => (
              <span
                key={h}
                className="px-4 py-2 rounded-full glass text-xs tracking-wider font-medium text-foreground border border-primary/20"
              >
                {h}
              </span>
            ))}
          </motion.div>
        )}

        {/* Image slideshow */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3">Visual Walkthrough</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              System & Architecture
            </h2>

            <div className="relative glass rounded-2xl p-3 sm:p-5 overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={index}
                    onClick={() => setLightbox(true)}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full group cursor-zoom-in"
                  >
                    <img
                      src={images[index].src}
                      alt={images[index].alt}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-background/70 backdrop-blur-md border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={16} className="text-foreground" />
                    </div>
                  </motion.button>
                </AnimatePresence>

                {/* Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Caption + counter */}
              <div className="flex items-center justify-between mt-4 px-2">
                <p className="text-sm text-muted-foreground truncate pr-4">
                  {images[index].caption ?? images[index].alt}
                </p>
                <p className="text-xs tracking-widest text-muted-foreground flex-shrink-0">
                  {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </p>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      onClick={() => setIndex(i)}
                      className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        i === index
                          ? "border-primary shadow-[0_0_16px_hsl(var(--primary)/0.4)]"
                          : "border-border opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="space-y-12">
            {project.sections.map((sec, i) => (
              <motion.div
                key={sec.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 md:p-10"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-5">
                  {sec.heading}
                </h3>
                {sec.body && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{sec.body}</p>
                )}
                {sec.bullets && (
                  <ul className="space-y-3">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Features fallback */}
        {(!project.sections || project.sections.length === 0) && (
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 p-2 rounded-full glass border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              src={images[index].src}
              alt={images[index].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
