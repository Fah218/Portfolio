
"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "StoryStudio",
        description: "StoryStudio generates multi-scene stories from user ideas with customizable genre, tone, visuals, and context-aware narrative generation.",
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
        link: "https://text-to-story-generator-sepia.vercel.app/",
        github: "https://github.com/Fah218/Story-Studio.git",
        date: "Feb 2026",
        image: "/images/story-studio.png"
    },
    {
        title: "Campus Connect",
        description: "Campus Connect platform updates students on events, clubs, hackathons, while enabling admin management and teammate discovery. Real-time campus engagement platform.",
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
        link: "https://college-connect-campus.vercel.app",
        github: "https://github.com/Fah218/College-Connect-Campus-",
        date: "Dec 2025",
        image: "/images/campus-connect.png"
    },
    {
        title: "Wildlife Analytica",
        description: "Wildlife Analytica uses AI and RAG to classify extinction risk and suggest conservation actions. AI-based wildlife extinction risk analysis.",
        tags: ["React.js", "Tailwind CSS", "FastAPI", "Python", "Groq AI"],
        link: "https://github.com/Fah218/Wildlife-Analytica.git",
        github: "https://github.com/Fah218/Wildlife-Analytica.git",
        date: "Jan 2026",
        image: "/images/wildlife.png"
    }
];

export function Projects() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-neon-secondary">///</span> Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="group overflow-hidden flex flex-col">
                        <div className="relative h-48 mb-6 rounded-lg bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20 flex items-center justify-center overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                            />
                            <div className="z-10 text-3xl font-bold text-white tracking-widest uppercase">{project.title}</div>
                        </div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <span className="text-sm text-neon-secondary">{project.date}</span>
                            </div>
                            <div className="flex gap-3">
                                {project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 hover:bg-neon-primary/20 transition-colors"
                                        aria-label="View on GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 hover:bg-neon-primary/20 transition-colors"
                                        aria-label="View Project"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full text-xs bg-neon-primary/10 border border-neon-primary/20 text-neon-primary">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center mt-12">
                <a
                    href="https://github.com/Fah218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-gradient-to-r from-neon-primary to-neon-secondary rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Github size={24} />
                        View All Projects on GitHub
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-secondary to-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
            </div>
        </section>
    );
}
