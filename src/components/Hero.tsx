"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const resumeUrl = "https://drive.google.com/file/d/1vEA2LJPKAH8814izm2ceCVEX8kNscwy7/view?usp=sharing";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-cyan-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Building high-quality mobile experiences with <span className="gradient-text">Flutter.</span>
          </h1>

          <p className="text-xl text-secondary dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
            I’m <span className="text-foreground font-bold">Virendra Shilpkar</span>, a Senior Flutter Developer with 5.5+ years of experience building scalable, production-ready apps and web backends, now integrating advanced <span className="text-primary font-semibold">AI solutions</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
            >
              View My Work
              <ChevronRight size={20} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-dark-card text-foreground border border-gray-200 dark:border-dark-border rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
            >
              <Download size={20} />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/virendra-shilpkar-b389a620b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/virendra_shilpkar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-red-500/20"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 pt-10 border-t border-gray-100 dark:border-dark-border">
            {[
              { val: "5.5+", label: "Experience" },
              { val: "Flutter", label: "Primary Stack" },
              { val: "Android + iOS", label: "Platforms" },
              { val: "Production", label: "Apps" },
            ].map((stat, i) => (
              <div key={i} className="min-w-[120px]">
                <p className="text-xl md:text-2xl font-black text-foreground whitespace-nowrap">{stat.val}</p>
                <p className="text-[10px] text-secondary uppercase font-bold tracking-[0.15em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block lg:-mt-52"
        >
          <div className="relative z-10 w-full aspect-square max-w-[520px] ml-auto group">
            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border-[12px] border-white/10 shadow-2xl glass-morphism">
              <Image
                src="/virendra.png"
                alt="Virendra Shilpkar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 glass-morphism px-6 py-4 rounded-3xl border border-white/20 shadow-2xl z-20"
            >
              <div className="flex flex-col items-center">
                <span className="text-blue-500 font-black text-lg">Senior</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Developer</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 glass-morphism px-6 py-4 rounded-3xl border border-white/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <span className="font-bold">5.5</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">Years</span>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">Experience</span>
                </div>
              </div>
            </motion.div>

            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 rounded-[4rem] -z-10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
