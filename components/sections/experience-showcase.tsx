"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// This would be replaced with actual data in a real implementation
const companies = [
  {
    id: 1,
    name: "Agoda",
    logo: "/agoda-logo.svg",
    description: "Software Engineer",
  },
  {
    id: 2,
    name: "Spacely AI (SCB 10X)",
    logo: "/scb10x-logo.svg",
    description: "Software Engineer",
  },
  {
    id: 3,
    name: "Apppi",
    logo: "/apppi-logo.png",
    description: "Software Engineer",
  },
  {
    id: 4,
    name: "Looloo Technology",
    logo: "/looloo-logo.png",
    description: "Software Engineer",
  },
  {
    id: 5,
    name: "BeWell",
    logo: "/bewell-logo.png",
    description: "Software Engineer",
  },
];

export function ExperienceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Math.ceil(companies.length / 3);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slidesCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  // Get current companies to display
  const getCurrentCompanies = () => {
    const startIndex = currentSlide * 3;
    return companies.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
          Experience
        </h2>
        <p className="text-slate-200 max-w-2xl mx-auto">
          Companies I've had the privilege to work with
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-10">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-navy-800/80 text-slate-200 hover:bg-blue-600 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Slideshow container */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center gap-6"
            >
              {getCurrentCompanies().map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                  className="w-full max-w-xs"
                >
                  <Card className="bg-navy-800/40 border-navy-800 hover:border-blue-600 transition-all duration-300 group overflow-hidden hover-glow h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <div className="h-20 flex items-center justify-center mb-4 relative">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 -skew-y-12"
                          initial={{ x: "-100%" }}
                          whileHover={{
                            x: "100%",
                            transition: {
                              duration: 1.5,
                              ease: "easeInOut",
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                            },
                          }}
                        />
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          className="h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-slate-100 font-medium text-center group-hover:text-blue-400 transition-colors duration-300">
                        {company.name}
                      </p>
                      {/* <p className="text-slate-300 text-sm text-center">
                        {company.description}
                      </p> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-navy-800/80 text-slate-200 hover:bg-blue-600 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-500" : "bg-navy-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
