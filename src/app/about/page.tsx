"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Code2, Award, Zap, Lock, Brain } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-300 py-24 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            ./PERSONNEL_FILE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Operator <span className="text-slate-500">Profile</span>
          </h2>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* BLOCK 1: MAIN BIO (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors"
          >
            <Shield className="text-emerald-500 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">
              I architect immune systems for decentralized infrastructure.
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              My work spans end-to-end security assessments, from initial reconnaissance through comprehensive penetration testing and smart contract auditing. I specialize in identifying critical vulnerabilities before they reach production and designing self-healing architectures that prevent exploitation.
            </p>
            <div className="flex gap-4 text-sm font-mono text-emerald-400 flex-wrap">
              <span>[ LOC: Surat, Gujarat, India ]</span>
              <span>[ STATUS: Active ]</span>
              <span>[ CLEARANCE: Senior Level ]</span>
            </div>
          </motion.div>

          {/* BLOCK 2: STATS / EXPERIENCE (UPDATED) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Award size={64} />
            </div>
            
            {/* CHANGED: "Current Role" -> "Primary Discipline" */}
            <h4 className="text-slate-500 text-xs font-bold tracking-widest mb-2 uppercase">Primary Discipline</h4>
            <div className="text-xl font-bold text-white mb-1">Security Tool Developer</div>
            <div className="text-emerald-500 text-sm font-mono mb-8">OPEN SOURCE / FREELANCE</div>

            <h4 className="text-slate-500 text-xs font-bold tracking-widest mb-2 uppercase">Active Operations</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Building VAPT Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Smart Contract Auditing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span> CTF & Bug Bounty
              </li>
            </ul>
          </motion.div>

          {/* BLOCK 3: TECH ARSENAL (Tall) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:row-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors"
          >
            <Terminal className="text-emerald-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-6">Technical Arsenal</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>SOLIDITY / WEB3</span>
                  <span>95%</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>PYTHON / AUTOMATION</span>
                  <span>90%</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>OFFENSIVE SECURITY</span>
                  <span>88%</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[88%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>MACHINE LEARNING</span>
                  <span>85%</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[85%]"></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <h4 className="text-slate-500 text-xs font-bold tracking-widest mb-4 uppercase">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 rounded">Security+</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs border border-slate-700 rounded">OSCP (In Progress)</span>
              </div>
            </div>
          </motion.div>

          {/* BLOCK 4: PHILOSOPHY (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 grid md:grid-cols-2 gap-4"
          >
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/50 transition-colors group">
              <Shield className="text-slate-600 group-hover:text-emerald-400 mb-4 transition-colors" size={24} />
              <h4 className="text-white font-bold mb-2">Proactive Defense</h4>
              <p className="text-sm text-slate-400">
                Identify and neutralize vulnerabilities before mainnet deployment. Prevention beats remediation.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/50 transition-colors group">
              <Zap className="text-slate-600 group-hover:text-emerald-400 mb-4 transition-colors" size={24} />
              <h4 className="text-white font-bold mb-2">Automation First</h4>
              <p className="text-sm text-slate-400">
                If a threat pattern exists, I write code to detect it automatically at scale across systems.
              </p>
            </div>
          </motion.div>

        </div>

        {/* SECTION 2: EDUCATION & INTERESTS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-12 border-t border-slate-800"
        >
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            ./CREDENTIALS
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Education */}
            <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-emerald-400" size={24} />
                <h4 className="text-white font-bold">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-white">B.Tech in Mathematics & Computing</div>
                  <div className="text-sm text-slate-400">Sardar Vallabhbhai National Institute of Technology (SVNIT)</div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">CGPA: 7.98/10.0 • 2024-2028</div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="text-emerald-400" size={24} />
                <h4 className="text-white font-bold">Research Interests</h4>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Digital Forensics & Threat Intelligence
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Blockchain Security & DeFi Protocols
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Geopolitics & Cyber Warfare
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Methodologies */}
          <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-red-400" size={24} />
              <h4 className="text-white font-bold">Security Tools & Methodologies</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="text-slate-300 font-semibold mb-2 text-sm">Web Security</h5>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Burp Suite Professional</li>
                  <li>• OWASP Top 10 & Testing Guide</li>
                  <li>• Web Penetration Testing</li>
                </ul>
              </div>
              <div>
                <h5 className="text-slate-300 font-semibold mb-2 text-sm">Blockchain & Smart Contracts</h5>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Solidity Auditing</li>
                  <li>• Mythril & Slither Analysis</li>
                  <li>• Gas Optimization</li>
                </ul>
              </div>
              <div>
                <h5 className="text-slate-300 font-semibold mb-2 text-sm">Infrastructure</h5>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Metasploit Framework</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• Network Analysis (Wireshark)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



