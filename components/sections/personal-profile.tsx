"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";

export function PersonalProfile() {
  // This would be replaced with actual data in a real implementation
  const name = "Wiraphat Yodsri";
  const title = "Software Engineer";
  const summary =
    "Passionate software engineer with 1+ years of experience building scalable web applications and distributed systems. Specialized in modern backend development and cloud architecture.";

  const words = [
    {
      text: "Build.",
      className: "text-blue-500",
    },
    {
      text: "Design.",
      className: "text-blue-400",
    },
    {
      text: "Deploy.",
      className: "text-blue-300",
    },
    {
      text: "Scale.",
      className: "text-blue-200",
    },
  ];

  // Enhanced animation variants
  const nameVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const summaryVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 text-transparent bg-clip-text"
            variants={nameVariants}
            initial="initial"
            animate="animate"
          >
            {name}
          </motion.h1>

          <motion.h2
            className="text-xl text-slate-200"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            {title}
          </motion.h2>

          <motion.div
            className="py-4 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <TypewriterEffect words={words} />
          </motion.div>

          <motion.p
            className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed"
            variants={summaryVariants}
            initial="initial"
            animate="animate"
          >
            {summary}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
