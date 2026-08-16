"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="mailto:vshilpkar55@gmail.com"
              className="glass-morphism p-8 rounded-[2rem] border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-secondary dark:text-gray-400 mb-4">vshilpkar55@gmail.com</p>
              <span className="text-primary text-sm font-bold flex items-center gap-2">
                Send a Message <ExternalLink size={14} />
              </span>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              href="https://www.linkedin.com/in/virendra-shilpkar-b389a620b/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism p-8 rounded-[2rem] border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Linkedin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-secondary dark:text-gray-400 mb-4">virendra-shilpkar-b389a620b</p>
              <span className="text-primary text-sm font-bold flex items-center gap-2">
                Let's Connect <ExternalLink size={14} />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
