"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Globe, Cloud, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Flutter App Development",
    description: "Modern Android and iOS applications built with a single codebase using Flutter and Dart.",
    icon: Smartphone,
  },
  {
    title: "Mobile UI Development",
    description: "Pixel-perfect responsive interfaces based on Figma/design systems with smooth animations.",
    icon: Layout,
  },
  {
    title: "API Integration",
    description: "Expert REST API integration, authentication, networking and complex data handling.",
    icon: Globe,
  },
  {
    title: "Firebase Integration",
    description: "Authentication, notifications, analytics, realtime database and crash reporting setup.",
    icon: Cloud,
  },
  {
    title: "App Optimization",
    description: "Performance auditing, memory leak fixes, and UI optimization for a smooth 60fps experience.",
    icon: Zap,
  },
  {
    title: "App Deployment",
    description: "Seamless Android and iOS production releases, Play Console and App Store Connect management.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gray-50/50 dark:bg-dark-bg/50">
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Development <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I provide comprehensive mobile development services, turning complex product requirements into scalable, production-ready applications.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-morphism p-8 md:p-10 rounded-[2.5rem] border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-primary/5">
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-secondary dark:text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer group/link">
                  Learn More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
