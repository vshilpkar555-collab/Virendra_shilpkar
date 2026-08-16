"use client";

import { motion } from "framer-motion";
import { Smartphone, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer glass-morphism rounded-3xl border border-gray-200 dark:border-dark-border overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="relative h-64 w-full bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center p-8 overflow-hidden">
        {/* Mockup Frame */}
        <div className="relative w-40 h-[260px] bg-slate-950 rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl flex flex-col items-center justify-center p-4 transform group-hover:scale-105 transition-transform duration-500">
           <div className="absolute top-0 w-16 h-4 bg-slate-900 rounded-b-xl" />
           <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
             <Smartphone size={24} />
           </div>
           <div className="w-16 h-1.5 bg-white/5 rounded-full mb-2" />
           <div className="w-10 h-1.5 bg-white/5 rounded-full" />
        </div>

        {/* Floating Platform Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-primary border border-primary/10">
            {project.platforms[0]}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
          <p className="text-sm font-medium mb-4">Click to view project details</p>
          <div className="px-6 py-2 bg-white text-primary rounded-full font-bold text-sm">
            Case Study
          </div>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-3">
          {project.category}
        </div>
        <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-sm text-secondary dark:text-gray-400 mb-6 flex-1 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-dark-border">
           <div className="flex gap-2">
             {project.technologies.slice(0, 3).map((tech) => (
               <span key={tech} className="text-[10px] font-bold text-secondary dark:text-gray-500">
                 #{tech}
               </span>
             ))}
           </div>
           <ChevronRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
