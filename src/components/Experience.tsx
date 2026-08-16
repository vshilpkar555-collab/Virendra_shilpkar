"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50/50 dark:bg-dark-bg/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          {/* Timeline Line: Left on mobile, Center on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-border -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                {/* Timeline Dot: Always on the line */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-dark-bg z-20 -translate-x-1/2 shadow-lg shadow-primary/20" />

                {/* Alternating Layout for Desktop */}
                <div className={`flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                  >
                    <div className="glass-morphism p-6 md:p-8 rounded-[2rem] border border-gray-200 dark:border-dark-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group relative bg-white/5 dark:bg-slate-900/40">
                      <div className="flex items-center gap-2 text-primary font-bold mb-3 uppercase tracking-widest text-[10px] md:text-xs">
                        <Briefcase size={16} />
                        <span>{exp.role}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                        {exp.company}
                      </h3>

                      <div className="flex items-center gap-2 text-secondary dark:text-gray-400 text-sm mb-6">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-secondary dark:text-gray-400 text-sm md:text-base leading-relaxed">
                            <ChevronRight size={16} className="mt-1 flex-shrink-0 text-primary" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-dark-border">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-secondary dark:text-gray-300 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gray-200 dark:border-dark-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-[10%]" />
                  <div className="hidden md:block w-[45%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
