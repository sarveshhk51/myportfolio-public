import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/sarveshhk51", handle: "@sarveshhk51" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sarvesh-kuber-722536397", handle: "Sarvesh Kuber" },
  { icon: Mail, label: "Email", href: "mailto:kubersarvesh303@gmail.com", handle: "kubersarvesh303@gmail.com" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Let's Connect</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Ready to <span className="text-gradient">Build</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
            Open to collaborations, internships, and building impactful products together.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl px-8 py-6 flex items-center gap-4 group hover:glow-border transition-all duration-300"
              >
                <Icon size={22} className="text-primary" />
                <div className="text-left">
                  <p className="text-foreground font-medium text-sm">{link.label}</p>
                  <p className="text-muted-foreground text-xs">{link.handle}</p>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-xs mt-20 tracking-wider"
        >
          Designed & Built by Sarvesh Kuber · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
