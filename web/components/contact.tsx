
"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Mail, Github, Linkedin, Smartphone } from "lucide-react";

export function Contact() {
    return (
        <section className="py-20 px-4 max-w-5xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-neon-secondary">///</span> Initialize Communication
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <p className="text-xl text-gray-300 mb-8">
                        Frontend UI beginner | Learning by building real projects | Open to project-based learning
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:fahadsaniya666@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-secondary/20 group-hover:text-neon-secondary transition-all">
                                <Mail />
                            </div>
                            <span className="text-lg">fahadsaniya666@gmail.com</span>
                        </a>

                        <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-primary/20 group-hover:text-neon-primary transition-all">
                                <Smartphone />
                            </div>
                            <span className="text-lg">+91 9696494851</span>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="https://github.com/Fah218" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110">
                                <Github />
                            </a>
                            <a href="https://linkedin.com/in/fahad-furquan-754aa0329/" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <GlassCard className="p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Identify Yourself</label>
                            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-secondary focus:ring-1 focus:ring-neon-secondary transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Transmission Frequency (Email)</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-secondary focus:ring-1 focus:ring-neon-secondary transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message Content</label>
                            <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-secondary focus:ring-1 focus:ring-neon-secondary transition-all" placeholder="Project details..." />
                        </div>
                        <button className="w-full py-4 bg-gradient-to-r from-neon-secondary to-neon-primary rounded-lg font-bold text-black hover:opacity-90 transition-opacity">
                            Send Transmission
                        </button>
                    </form>
                </GlassCard>
            </div>
        </section>
    );
}
