"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactSection() {
  // Contact information - would be replaced with actual data
  const contactInfo = {
    linkedin: {
      display: "ywiraphat",
      href: "https://linkedin.com/in/ywiraphat",
    },
    github: {
      display: "wiraphatys",
      href: "https://github.com/wiraphatys",
    },
    email: {
      display: "y.wiraphat@gmail.com",
      href: "mailto:y.wiraphat@gmail.com",
    },
    phone: {
      display: "+66 614615868",
      href: "+66 614615868",
    },
  };

  return (
    <section id="contact" className="py-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-slate-200 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto"
      >
        <Card className="bg-navy-900/40 border-navy-800">
          <CardHeader>
            <CardTitle className="text-blue-400">Contact Information</CardTitle>
            <CardDescription className="text-slate-300">
              Feel free to reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactItem
              icon={<Linkedin className="h-5 w-5 text-blue-400" />}
              label="LinkedIn"
              value={contactInfo.linkedin.display}
              href={contactInfo.linkedin.href}
            />

            <ContactItem
              icon={<Github className="h-5 w-5 text-slate-100" />}
              label="GitHub"
              value={contactInfo.github.display}
              href={contactInfo.github.href}
            />

            <ContactItem
              icon={<Mail className="h-5 w-5 text-blue-300" />}
              label="Email"
              value={contactInfo.email.display}
              href={`mailto:${contactInfo.email.href}`}
            />

            <ContactItem
              icon={<Phone className="h-5 w-5 text-blue-200" />}
              label="Phone"
              value={contactInfo.phone.display}
              href={`tel:${contactInfo.phone.href.replace(/\s/g, "")}`}
            />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-navy-800/50 group"
      whileHover={{
        scale: 1.03,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
    >
      <div className="p-2 bg-navy-800 rounded-lg transition-all duration-300 border border-navy-700 group-hover:border-blue-600 group-hover:bg-navy-700">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-300">{label}</p>
        <p className="font-medium text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
          {value}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        whileHover={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.2 },
        }}
      >
        <ExternalLink className="h-4 w-4 text-blue-500" />
      </motion.div>
    </motion.a>
  );
}
