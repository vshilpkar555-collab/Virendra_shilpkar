"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Calendar, MapPin, Mail, GraduationCap, Phone } from "lucide-react";

export default function About() {
  const info = [
    { icon: User, label: "Name", value: "Virendra Shilpkar" },
    { icon: Briefcase, label: "Role", value: "Senior Flutter Developer" },
    { icon: Calendar, label: "Experience", value: "5.5+ Years" },
    { icon: Mail, label: "Email", value: "vshilpkar55@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8349156371" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Expert Mobile Application Developer</h3>
            <div className="space-y-4 text-secondary dark:text-gray-400 leading-relaxed text-lg">
              <p>
                I am a Senior Flutter Developer with over 5.5 years of experience in mobile application development.
                My expertise lies in building high-performance, scalable cross-platform applications for both Android and iOS.
              </p>
              <p>
                I specialize in the entire product lifecycle—from initial UI/UX implementation and complex state management
                (GetX, BLoC, Provider) to seamless API integration and cloud services with Firebase.
              </p>
              <p>
                My goal is to deliver reliable, production-ready apps that provide a premium user experience while
                maintaining clean, maintainable code architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-morphism p-8 md:p-10 rounded-[2.5rem] border border-gray-200 dark:border-dark-border shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {info.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium break-all">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-dark-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-1">
                    Education
                  </p>
                  <p className="text-foreground font-bold">BE in Computer Science (2016 - 2020)</p>
                  <p className="text-sm text-secondary dark:text-gray-400">Rajiv Gandhi Proudyogiki Vishwavidyalaya, BHOPAL</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-dark-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-1">
                    Location
                  </p>
                  <p className="text-foreground font-medium">Raghogarh Guna, M.P., India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/virendra-shilpkar-b389a620b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
