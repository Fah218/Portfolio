
"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "Jul 2025 - Aug 2025",
        title: "FullStack Development Intern",
        org: "IBM MOOC",
        desc: "Developed a Bookstore Web Application during a virtual internship, implementing features to add, update, delete books and manage user cart functionality.",
        type: "work"
    },
    {
        year: "Oct 2023 - Jul 2027",
        title: "B.Tech (CSE-AIML)",
        org: "ABES Engineering College",
        desc: "Currently pursuing with CGPA: 8.182",
        type: "education"
    },
    {
        year: "Apr 2020 - Mar 2022",
        title: "12th Standard",
        org: "Kanpur Public School",
        desc: "Completed with 82.4%",
        type: "education"
    },
    {
        year: "Apr 2019 - Mar 2020",
        title: "10th Standard",
        org: "Kanpur Public School",
        desc: "Completed with 83%",
        type: "education"
    }
];

const certifications = [
    { name: "Enterprise Design Thinking Practitioner", issuer: "IBM" },
    { name: "Introduction to Cloud Semester 1", issuer: "AWS Academy" },
    { name: "Career Edge - Young Professional", issuer: "TCS iON" },
    { name: "Introduction to Web Development with ChatGPT", issuer: "SimpliLearn" },
];

export function Experience() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
                <span className="text-neon-primary">///</span> Experience & Education
            </h2>

            <div className="relative border-l-2 border-white/10 ml-6 space-y-12 mb-20">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8"
                    >
                        <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 ${item.type === 'work' ? 'border-neon-secondary bg-neon-secondary shadow-[0_0_10px_#00f3ff]' : 'border-neon-primary bg-black'}`} />

                        <div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-sm text-neon-secondary mb-2 block">{item.year}</span>
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <div className="text-gray-400 mb-2">{item.org}</div>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-neon-secondary">///</span> Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors"
                    >
                        <div className="p-3 rounded-lg bg-neon-secondary/20 text-neon-secondary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                            <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
