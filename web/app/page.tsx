
"use client";

import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <Navbar />
      <Hero />
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© 2026 Fahad Furquan. All systems operational.</p>
      </footer>
    </main>
  );
}
