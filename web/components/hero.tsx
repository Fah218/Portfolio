
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiJavascript, SiCplusplus } from "react-icons/si";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                {/* <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-neon-secondary/20 bg-neon-secondary/5 text-neon-secondary mb-6 text-sm tracking-widest uppercase backdrop-blur-md font-mono"
                >
                    Neural Network Online • v2035.0
                </motion.div> */}

                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                    <span className="text-white">FAHAD</span>{" "}
                    <span className="text-gradient">FURQUAN</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                   Exploring intelligent web applications through hands-on projects in frontend development, AI integration, and UI/UX design.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
  <a
    href="https://github.com/Fah218"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative px-8 py-3 bg-neon-secondary text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
  >
    <span className="relative z-10 flex items-center gap-2">
      View Projects <ArrowRight className="w-4 h-4" />
    </span>
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
  </a>

  <a 
    href="/Fahad_Resume.pdf"
    download="Fahad_Resume.pdf"
    className="px-8 py-3 border border-gray-700 rounded-lg hover:border-neon-primary hover:text-neon-primary transition-all duration-300"
  >
    Download Resume
  </a>
</div>

            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 text-neon-secondary opacity-20 hidden md:block"
            >
                <SiJavascript size={64} />
            </motion.div>
            <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-20 text-neon-primary opacity-20 hidden md:block"
            >
                <SiCplusplus size={64} />
            </motion.div>
        </section>
    );
}
