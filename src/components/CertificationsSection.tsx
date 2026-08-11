import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "AI Foundation Certification",
    issuer: "Infosys Springboard",
    category: "AI",
    file: "/certificates/ai-foundation.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    category: "AI",
    file: "/certificates/intro-ai.pdf",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    category: "ML",
    file: "/certificates/intro-dl.pdf",
  },
  {
    title: "Introduction to NLP",
    issuer: "Infosys Springboard",
    category: "NLP",
    file: "/certificates/intro-nlp.pdf",
  },
  {
    title: "Python Bootcamp",
    issuer: "Udemy",
    category: "Python",
    file: "/certificates/python-udemy.pdf",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Credentials</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 30, rotateX: 15 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 0 30px hsl(42 90% 55% / 0.15)" }}
              className="glass rounded-2xl p-6 group cursor-pointer transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award size={18} className="text-primary" />
                </div>
                <span className="text-[10px] tracking-[0.2em] text-primary uppercase px-2 py-1 rounded-full bg-primary/10">
                  {cert.category}
                </span>
              </div>
              <h3 className="text-foreground font-display font-bold text-lg mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Certificate <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
