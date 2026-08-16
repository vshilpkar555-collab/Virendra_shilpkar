"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export default function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A comprehensive overview of the technologies, frameworks, and tools I use to architect and build production-grade mobile applications.
          </motion.p>
        </div>

        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                  {category}
                </h3>
                <div className="h-px flex-[4] bg-gradient-to-l from-primary/20 to-transparent" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="glass-morphism p-6 md:p-8 rounded-[2rem] border border-gray-200 dark:border-dark-border hover:border-primary/40 transition-all group relative overflow-hidden"
                    >
                      {/* Interactive Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />

                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100 dark:border-dark-border group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <skill.icon size={24} />
                        </div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{skill.name}</h4>
                      </div>

                      <p className="text-sm text-secondary dark:text-gray-400 leading-relaxed mb-4">
                        {skill.description}
                      </p>

                      <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors">
                        Expertise <ChevronRight size={10} />
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
