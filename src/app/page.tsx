"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Code2, Lock, Shield, Terminal, GitBranch, Zap, Database, Server } from "lucide-react";

const projects = [
  {
    slug: "eigentrade",
    title: "EigenTrade - Automated Trading System",
    summary: "ML-powered trading system with custom regression models for historical stock data analysis",
    impact: "50-55% prediction accuracy",
    category: "Smart Contracts" as const,
    year: "2024",
    tags: ["Python", "Machine Learning", "PL/SQL"],
  },
  {
    slug: "smart-contract-scanner",
    title: "Smart Contract Vulnerability Scanner",
    summary: "Automated detection of critical vulnerability patterns using Slither and Mythril",
    impact: "40% audit time reduction",
    category: "Smart Contracts" as const,
    year: "2024",
    tags: ["Python", "Solidity", "Mythril"],
  },
  {
    slug: "phishing-threat-detection",
    title: "Phishing Threat Detection & Analysis System",
    summary: "Browser extension analyzing URLs with honeypot deception mechanism and automated takedown",
    impact: "50ms URL analysis",
    category: "Cybersecurity" as const,
    year: "2024",
    tags: ["Python", "Laravel", "Security"],
  },
  {
    slug: "decentralized-remittance",
    title: "Decentralized Remittance Platform",
    summary: "Blockchain-based payment gateway with Multi-Signature Wallets and AML dashboard",
    impact: "90% fee reduction",
    category: "Smart Contracts" as const,
    year: "2024",
    tags: ["Solidity", "React.js", "Web3.js"],
  },
];

const arsenal = [
  { name: "Burp Suite", icon: Lock, category: "Web Security" },
  { name: "Metasploit", icon: Terminal, category: "Penetration Testing" },
  { name: "Solidity", icon: Code2, category: "Blockchain" },
  { name: "Python", icon: Zap, category: "Scripting" },
  { name: "OWASP Top 10", icon: Shield, category: "Web Security" },
  { name: "Docker", icon: Database, category: "DevOps" },
  { name: "Kubernetes", icon: Server, category: "Infrastructure" },
  { name: "Git", icon: GitBranch, category: "Version Control" },
];

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const arsenalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    if (projectsRef.current) {
      projectsRef.current.querySelectorAll(".project-card").forEach((card) => {
        observer.observe(card);
      });
    }

    if (arsenalRef.current) {
      arsenalRef.current.querySelectorAll(".arsenal-card").forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Mission Files (Projects) Section */}
      <section className="py-20 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Mission Files
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              A curated selection of security audits, offensive engagements, and blockchain research
            </p>
          </motion.div>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.slug} className="project-card opacity-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal (Skills) Section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Arsenal
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Tools and technologies for securing digital infrastructure
            </p>
          </motion.div>

          <div ref={arsenalRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {arsenal.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  className="arsenal-card opacity-0 group p-4 rounded-lg border border-emerald-500/20 bg-emerald-900/10 hover:bg-emerald-900/20 transition-all hover:border-emerald-500/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <Icon className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-white">{tool.name}</p>
                      <p className="text-xs text-slate-400">{tool.category}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-950 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Leadership & Community
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Active contributor to security community events and initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              className="p-6 rounded-lg border border-emerald-500/30 bg-emerald-900/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎤</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Surat Literature Festival (LitFest)</h3>
                  <p className="text-sm text-slate-400 font-mono mb-2">Event Volunteer • 2026</p>
                  <p className="text-slate-300">
                    Managed on-ground logistics, guest relations, and crowd control for major sessions, ensuring seamless event execution.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg border border-emerald-500/30 bg-emerald-900/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Security Community Contributor</h3>
                  <p className="text-sm text-slate-400 font-mono mb-2">Open Source & Research</p>
                  <p className="text-slate-300">
                    Contributing to cybersecurity research and tooling development for the broader security community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* External Interests Section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Research Interests
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Deep dive into critical areas shaping the future of cybersecurity and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🔍",
                title: "Digital Forensics & Investigation",
                desc: "Cyber Crime Investigation, Malware Analysis, Reverse Engineering"
              },
              {
                icon: "⛓️",
                title: "Blockchain Security",
                desc: "Smart Contract Auditing, DeFi Fraud Prevention, Crypto Asset Tracing"
              },
              {
                icon: "🕵️",
                title: "Threat Intelligence",
                desc: "OSINT (Open Source Intelligence), Dark Web Monitoring, Threat Landscape"
              },
              {
                icon: "💰",
                title: "Financial Security",
                desc: "Online Fraud Detection, Secure Payment Architectures, AML Systems"
              },
              {
                icon: "🌍",
                title: "Geopolitics & Cyber Warfare",
                desc: "International Relations, State-sponsored Attacks, Cyber Policy"
              },
              {
                icon: "🛡️",
                title: "Enterprise Security",
                desc: "Infrastructure Defense, Incident Response, Security Architecture"
              },
            ].map((interest, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{interest.icon}</div>
                <h3 className="font-bold text-white mb-2">{interest.title}</h3>
                <p className="text-sm text-slate-400">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-slate-950 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s Secure Your Infrastructure
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to discuss your security posture or explore collaboration opportunities?
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Initiate Contact
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
