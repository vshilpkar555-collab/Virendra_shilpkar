"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink, Smartphone, X, CheckCircle2, ChevronRight, Tablet } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary dark:text-gray-400 max-w-2xl mx-auto"
          >
            A selection of mobile applications and products I've worked on, showcasing Flutter and native expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-dark-border"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                {/* Visual Section */}
                <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-dark-border relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent rounded-full blur-[80px]" />
                  </div>

                  {/* Phone Mockup Representation */}
                  <div className="relative w-56 h-[450px] bg-dark-bg rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                    <div className="absolute top-0 w-24 h-6 bg-slate-900 rounded-b-2xl" />
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                      <Smartphone size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <div className="text-[10px] text-primary font-bold tracking-widest uppercase mb-4">
                      {selectedProject.category}
                    </div>
                    <div className="space-y-2 w-full px-4">
                      <div className="h-1 w-full bg-white/10 rounded" />
                      <div className="h-1 w-2/3 bg-white/10 rounded mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-8 md:p-16 flex flex-col">
                  <div className="mb-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                      {selectedProject.category}
                    </div>
                    <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
                    <p className="text-lg text-secondary dark:text-gray-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-foreground text-xs font-semibold rounded-lg border border-gray-200 dark:border-dark-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Platforms</h4>
                      <div className="flex gap-4">
                        {selectedProject.platforms.map((platform) => (
                          <div key={platform} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 size={16} className="text-primary" />
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-10 border-t border-gray-100 dark:border-dark-border flex flex-wrap gap-4">
                    {selectedProject.link ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                      >
                        Launch Application <ExternalLink size={18} />
                      </a>
                    ) : (
                      <span className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-secondary rounded-2xl font-bold">
                        Private Project / Case Study
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
        {/* Mockup Top Section */}
        <div className="relative h-72 w-full flex items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 pointer-events-none" />

          {/* Abstract Phone Shape */}
          <div className="relative w-40 h-[260px] bg-dark-bg rounded-[2.5rem] border-[6px] border-slate-900 shadow-xl flex flex-col items-center justify-center p-4 transform group-hover:scale-110 transition-transform duration-500">
             <div className="absolute top-0 w-16 h-4 bg-slate-900 rounded-b-xl" />
             <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
               <Smartphone size={24} />
             </div>
             <div className="w-16 h-2 bg-white/5 rounded-full mb-2" />
             <div className="w-12 h-2 bg-white/5 rounded-full" />
          </div>

          {/* Floating tags */}
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-primary border border-primary/20">
              {project.platforms[0]}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                {project.category}
              </div>
              <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-dark-border flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
              <ChevronRight size={20} />
            </div>
          </div>

          <p className="text-sm text-secondary dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-[10px] font-bold px-2 py-1 bg-gray-50 dark:bg-slate-800 rounded text-secondary dark:text-gray-400 border border-gray-200 dark:border-dark-border">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] font-bold px-2 py-1 text-primary">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
