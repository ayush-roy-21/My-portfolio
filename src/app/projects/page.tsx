"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "eigentrade",
    title: "EigenTrade - Automated Trading System",
    summary: "Engineered an automated trading system integrating custom Regression Models, achieving 50-55% prediction accuracy on historical stock data. Reduced trade interpretation latency to 2 seconds with an LLM-based Explainer Module and optimized high-frequency data retrieval by 40% through advanced PL/SQL query tuning.",
    category: "Machine Learning",
    year: "2026",
    tech: ["Python", "Machine Learning", "PL/SQL", "Regression Models", "LLM"],
  },
  {
    slug: "smart-contract-scanner",
    title: "Smart Contract Vulnerability Scanner",
    summary: "Automated detection of 15+ critical vulnerability patterns (Reentrancy, Integer Overflow) using Slither and Mythril, slashing manual audit time by 40%. Orchestrated a multi-engine analysis pipeline delivering comprehensive risk reports with zero false negatives in controlled tests.",
    category: "Cybersecurity",
    year: "2025",
    tech: ["Python", "Solidity", "Mythril", "Slither", "Smart Contracts"],
  },
  {
    slug: "phishing-threat-detection",
    title: "Phishing Threat Detection & Analysis System",
    summary: "Architected a browser extension analyzing URLs in 50ms, proactively blocking malicious domains before page load. Implemented a honeypot deception mechanism redirecting simulated attacks to isolated environments, neutralizing 20-30% of active threats. Streamlined takedown process via custom scraping bots and automated threat reporting.",
    category: "Cybersecurity",
    year: "2025",
    tech: ["Python", "Laravel", "Browser Extension", "Security"],
  },
  {
    slug: "decentralized-remittance",
    title: "Decentralized Remittance Platform",
    summary: "Built a blockchain-based payment gateway reducing cross-border transaction fees by 90% and settlement time to 1 minute. Secured 100% of funds during transfer via Multi-Signature Wallets and trustless Escrow smart contracts. Engineered a real-time AML dashboard to track transaction flows and flag suspicious wallet clusters.",
    category: "Smart Contracts",
    year: "2025",
    tech: ["Solidity", "React.js", "Web3.js", "Blockchain", "AML"],
  },
  {
    slug: "recon-automation",
    title: "Recon-Automation Pentesting Tool",
    summary: "An advanced, multi-threaded Python script developed to automate the initial reconnaissance phase of web penetration testing. This tool streamlines the process of network scanning and information gathering, allowing for more efficient security assessments.",
    category: "Cybersecurity",
    year: "2025",
    tech: ["Python", "Threading", "Socket", "QR Code", "CSV"],
  },
  {
    slug: "roy-elegance",
    title: "Roy's Elegance - E-commerce Platform",
    summary: "A conceptual e-commerce project named 'Roy's Elegance,' designed to showcase a premium collection of ethnic wear. This project demonstrates skills in front-end design, user experience, and the fundamentals of building an online retail platform.",
    category: "Web Development",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    slug: "information-gathering",
    title: "Automated Information Gathering Tool",
    summary: "A lightweight but powerful Python script that gathers essential information about a target website from the command line. The tool efficiently retrieves IP address and geolocation data.",
    category: "Cybersecurity",
    year: "2025",
    tech: ["Python", "Requests", "Socket", "JSON", "ipinfo.io API"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>All Projects</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A comprehensive collection of security audits, Web3 development, and cybersecurity tools showcasing expertise in offensive and defensive security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative overflow-hidden rounded-lg border border-emerald-500/20 bg-emerald-900/10 hover:bg-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/projects/${project.slug}`} className="block p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{project.year}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-slate-800 text-slate-300 rounded border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">
                  <span>View case study</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}


