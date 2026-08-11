import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import sarveshPhoto from "@/assets/sarvesh.jpg";

const taglines = [
  "Building AI-powered systems for real-world impact",
  "Turning ideas into scalable SaaS products",
  "Engineering productivity with intelligence",
];

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98]);
  const photoY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 });
  const photoScale = useSpring(rawScale, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 40);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 25);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (sectionRef.current) {
          gsap.to(sectionRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            y: 150,
            opacity: 0.3,
          });
          cleanup = () => ScrollTrigger.getAll().forEach(t => t.kill());
        }
      });
    });
    return () => cleanup?.();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-6 md:mb-8 justify-center md:justify-start"
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full status-dot-online-ping opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full status-dot-online" />
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground uppercase">
                Available · Pune, India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display font-bold leading-[0.9] mb-2"
            >
              <span className="text-3xl sm:text-4xl md:text-6xl text-foreground">Hi, I'm</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-display font-bold leading-[0.95] mb-6 md:mb-8"
            >
              <span className="block text-5xl sm:text-6xl md:text-[7rem] lg:text-[9rem] text-foreground">Sarvesh</span>
              <span className="block text-5xl sm:text-6xl md:text-[7rem] lg:text-[9rem] text-gradient">Kuber</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground mb-6 md:mb-8 px-2 md:px-0"
            >
              AI & Full Stack Developer · Systems Builder · Product Thinker
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="h-8 mb-8 md:mb-12"
            >
              <span className="text-base sm:text-lg md:text-xl text-foreground/70 font-light">
                {displayText}
                <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wider hover:shadow-[0_0_30px_hsl(42_90%_55%/0.3)] transition-all duration-300"
              >
                Explore My Systems
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-border text-foreground font-semibold text-sm tracking-wider hover:bg-secondary transition-all duration-300 flex items-center gap-2 justify-center"
              >
                View Projects <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            ref={photoRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ y: photoY, scale: photoScale }}
            className="relative flex-shrink-0 mt-2 md:mt-20 will-change-transform"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-2xl overflow-hidden border-2 border-primary/30 glow-border"
            >
              <img
                src={sarveshPhoto}
                alt="Sarvesh Kuber — AI & Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
