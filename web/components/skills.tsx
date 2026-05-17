
"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Database, Layout, Server, Cpu, Globe, Code } from "lucide-react";

const skills = [
    { name: "Frontend", icon: Layout, items: ["React", "Tailwind CSS", "Next.js", "Figma", "UI/UX"] },
    { name: "Backend", icon: Server, items: ["Node.js", "MySQL", "PostgreSQL", "MongoDB"] },
    { name: "Languages", icon: Code, items: ["C", "C++", "Python", "Java", "JavaScript"] },
    { name: "AI & Cloud", icon: Cpu, items: ["DialogFlow", "AWS Introduction", "AI Integration"] },
];

export function Skills() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-neon-primary">///</span> Technical Arsenal
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <GlassCard key={index} className="h-full">
                        <div className="p-2 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-neon-secondary">
                            <skill.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                        <ul className="space-y-2">
                            {skill.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-primary/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
