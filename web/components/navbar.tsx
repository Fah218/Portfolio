
"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial entrance animation
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            delay: 0.5
        });

        // Staggered links animation
        gsap.from(".nav-link", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.1,
            delay: 1,
            ease: "back.out(1.7)"
        });
    }, { scope: navRef });

    const handleHover = (e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            color: "#06b6d4",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleHoverExit = (e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            color: "#e0e0e0",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
            <div
                ref={navRef}
                className="glass-nav rounded-full px-8 py-4 pointer-events-auto border-t border-white/10"
            >
                <div ref={linksRef} className="flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="nav-link text-sm font-medium text-gray-300 transition-colors uppercase tracking-wider"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHoverExit}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
