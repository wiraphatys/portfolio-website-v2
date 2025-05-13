"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Server, Wrench, Globe, Cloud } from "lucide-react";

// This would be replaced with actual data in a real implementation
const techCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
      { name: "React.js", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Next.js", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Zustand", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Tailwind CSS", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Shadcn UI", icon: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Go", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Scala", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Rust", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Nest.js", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Express.js", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Java", icon: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "Docker", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Kubernetes", icon: "/placeholder.svg?height=40&width=40" },
      { name: "CI/CD", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Argo CD", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Terraform", icon: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", icon: "/placeholder.svg?height=40&width=40" },
      { name: "MySQL", icon: "/placeholder.svg?height=40&width=40" },
      { name: "MongoDB", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Firestore", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Redis", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Scylla", icon: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Kafka", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Rabbit MQ", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Grafana", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Hadoop", icon: "/placeholder.svg?height=40&width=40" },
      { name: "Spark", icon: "/placeholder.svg?height=40&width=40" },
    ],
  },
];

export function TechStackShowcase() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
          Tech Stack
        </h2>
        <p className="text-slate-200 max-w-2xl mx-auto">
          Technologies and tools I specialize in
        </p>
      </motion.div>

      <Tabs
        defaultValue="frontend"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-4xl mx-auto"
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-navy-900/80 border border-navy-800">
            {techCategories.map((category, index) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-blue-700 data-[state=active]:text-slate-50 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: activeTab === category.id ? [1, 1.2, 1] : 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                    },
                  }}
                >
                  {category.icon}
                </motion.div>
                <span className="hidden md:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </motion.div>

        <motion.div
          className="relative min-h-[300px] bg-navy-900/30 rounded-lg p-6 border border-navy-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {techCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="absolute inset-0 p-6"
            >
              <AnimatePresence mode="wait">
                {activeTab === category.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-400">
                      {category.icon}
                      {category.label}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: index * 0.1,
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          whileHover={{
                            scale: 1.03,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            },
                          }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="flex items-center gap-3 p-3 bg-navy-900/50 rounded-lg border border-navy-800 hover:border-blue-600 transition-all duration-300 hover-glow"
                        >
                          <div className="bg-navy-800 p-2 rounded-lg transition-all duration-300 group-hover:bg-navy-700">
                            <motion.img
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              className="h-8 w-8 object-contain"
                              animate={{
                                rotate: hoveredSkill === skill.name ? 360 : 0,
                              }}
                              transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                type: "spring",
                              }}
                            />
                          </div>
                          <span className="font-medium text-slate-100">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </motion.div>
      </Tabs>
    </section>
  );
}
