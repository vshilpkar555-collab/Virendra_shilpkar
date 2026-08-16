"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the product, requirements and user flow to ensure the technical solution matches business goals.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Plan scalable architecture and technical implementation, choosing the right state management and storage solutions.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop responsive Flutter interfaces and core functionality with clean, maintainable code.",
  },
  {
    number: "04",
    title: "Integrate",
    description: "Connect APIs, Firebase, and third-party services to bring the application to life with real data.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Test, debug, and improve performance to ensure a smooth, crash-free user experience.",
  },
  {
    number: "06",
    title: "Deploy",
    description: "Prepare and release the application to the Google Play Store and Apple App Store.",
  },
];

export default function Process() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            From Idea to Production
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary dark:text-gray-400 max-w-2xl mx-auto"
          >
            A systematic approach to building reliable mobile applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-black text-gray-100 dark:text-gray-800 absolute -top-8 -left-4 -z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-secondary dark:text-gray-400">
                {step.description}
              </p>
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gray-200 dark:bg-dark-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
