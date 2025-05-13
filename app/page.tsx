"use client"

import { PersonalProfile } from "@/components/sections/personal-profile"
import { ExperienceShowcase } from "@/components/sections/experience-showcase"
import { TechStackShowcase } from "@/components/sections/tech-stack-showcase"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { motion } from "framer-motion"

// Define staggered animation variants for sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-navy-900 to-slate-950 text-slate-50">
      <motion.div
        className="container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={sectionVariants}>
          <PersonalProfile />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ExperienceShowcase />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <TechStackShowcase />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </motion.div>
      <Footer />
    </main>
  )
}
