"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash is active
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  // Generate lines for the background animation
  const lines = Array.from({ length: 8 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Moving Background Lines */}
          <div className="absolute inset-0 z-0">
            {lines.map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "200%",
                  opacity: [0, 0.1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                style={{ top: `${(i + 1) * 12}%` }}
              />
            ))}
            {lines.map((_, i) => (
              <motion.div
                key={`v-${i}`}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{
                  y: "200%",
                  opacity: [0, 0.1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                style={{ left: `${(i + 1) * 12}%` }}
              />
            ))}
          </div>

          {/* Background Decorative Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px]"
            />
          </div>

          <div className="relative z-20 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Logo className="w-24 h-24 mb-8" />
            </motion.div>

            {/* Name Animation */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
              >
                Virendra<span className="text-primary">.</span>
              </motion.h1>
            </div>

            {/* Tagline Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">
                Senior Mobile Developer
              </span>
              <div className="h-[1px] w-8 bg-white/20" />
            </motion.div>

            {/* Loading Bar */}
            <div className="absolute -bottom-24 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
