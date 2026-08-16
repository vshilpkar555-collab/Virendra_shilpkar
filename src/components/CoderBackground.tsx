"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CoderBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const codeElements = [
    "{ }", "</>", "=>", "()", "async", "await", "Flutter", "Dart", "Firebase",
    "const", "class", "void", "Widget", "Stateful", "State", "BLoC", "GetX"
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] select-none">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]">
        {Array.from({ length: 20 }).map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomDuration = Math.random() * 25 + 25;
          const randomDelay = Math.random() * -50; // Start at different positions
          const randomSize = Math.random() * 14 + 14;
          const randomText = codeElements[i % codeElements.length];

          return (
            <motion.div
              key={i}
              initial={{ y: "110vh" }}
              animate={{
                y: "-10vh",
                x: [0, 30, -30, 0]
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear",
              }}
              className="absolute font-mono font-bold text-primary whitespace-nowrap"
              style={{
                left: `${randomLeft}%`,
                fontSize: `${randomSize}px`,
              }}
            >
              {randomText}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
