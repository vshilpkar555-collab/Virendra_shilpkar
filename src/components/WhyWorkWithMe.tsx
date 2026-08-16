"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Users } from "lucide-react";

const reasons = [
  {
    title: "Production Experience",
    description: "5.5+ years of practical mobile development experience, focusing on building apps that actually work in the real world.",
    icon: Shield,
  },
  {
    title: "Cross-Platform Expertise",
    description: "High-performance applications for both Android and iOS using Flutter, ensuring consistent quality across platforms.",
    icon: Zap,
  },
  {
    title: "End-to-End Ownership",
    description: "From initial UI/UX implementation and scalable architecture to API integration and final production deployment.",
    icon: CheckCircle2,
  },
  {
    title: "Problem Solving",
    description: "Strong focus on debugging complex mobile issues and optimizing performance for millions (or thousands) of users.",
    icon: Users,
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Work With Me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary dark:text-gray-400 max-w-2xl mx-auto"
          >
            Combining technical depth with a product-focused mindset to deliver high-quality mobile solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl border border-gray-200 dark:border-dark-border flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
