"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, FileCode, Terminal, Lock, Flame, Github, ExternalLink } from "lucide-react";

// --- REUSABLE CODE COMPONENT ---
const CodeWindow = ({ title, code, lang }: { title: string, code: string, lang: string }) => (
  <div className="my-8 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative group">
    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
       <div className="text-[10px] text-slate-500 font-mono uppercase border border-slate-800 px-2 py-1 rounded">
         {lang}
       </div>
    </div>
    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
      <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
        <Terminal size={12} className="text-red-500"/> 
        {title}
      </span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
      </div>
    </div>
    <div className="p-4 overflow-x-auto bg-[#0a0a0a]">
      <pre className="font-mono text-sm text-slate-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default function SmartContractScannerCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-950 py-20 px-6 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-12 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">./BACK_TO_PROJECTS</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-mono uppercase tracking-widest">
               Offensive Security
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               2025
             </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Smart Contract <span className="text-slate-600">Vulnerability Scanner</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Automated detection pipeline identifying <span className="text-red-400 font-bold">15+ critical vulnerability patterns</span> (Reentrancy, Overflow) with zero false negatives.
          </p>
          
          {/* ACTION BUTTONS (Added Links Here) */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://sc-vulnerability-scanner-12sr.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition-all hover:scale-105"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a 
              href="https://github.com/ayush-roy-21/SC-Vulnerability-Scanner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-bold rounded transition-all hover:scale-105"
            >
              <Github size={18} />
              View Source Code
            </a>
          </div>
        </header>

        {/* --- VISUAL SYSTEM ARCHITECTURE --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <ShieldAlert className="text-red-500" /> Detection Pipeline
          </h2>
          
          <div className="relative">
            {/* The Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-500/50 to-red-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Static Analysis */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-red-400 font-bold text-xl mb-2 font-mono">01. Multi-Engine Scan</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Source code is ingested by Slither for dataflow analysis, while Mythril performs symbolic execution on bytecode.
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>INPUT: SOLIDITY</span>
                      <span className="text-red-500 animate-pulse">● PARSING</span>
                   </div>
                   Contract.sol &rarr; AST & Bytecode
                </div>
              </div>

              {/* Step 2: Custom Detectors */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>PATTERN MATCHING</span>
                      <span className="text-red-500">ACTIVE</span>
                   </div>
                   Detectors: [Reentrancy, Tx.Origin, Overflow]
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-red-500/50">▼</div>
                   <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="order-2 md:order-3">
                  <h3 className="text-red-400 font-bold text-xl mb-2 font-mono">02. Vulnerability Matching</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Custom detector rules filter false positives by cross-referencing findings from both static engines.
                  </p>
                </div>
              </div>

              {/* Step 3: Report Generation */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-red-400 font-bold text-xl mb-2 font-mono">03. Automated Reporting</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Generates a PDF audit report with severity classification, line numbers, and specific remediation steps.
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-red-500/50">▼</div>
                   <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>OUTPUT</span>
                      <span className="text-red-500">CRITICAL FOUND</span>
                   </div>
                   Report_v1.pdf (High Severity)
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CODE IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <FileCode className="text-red-500" /> Custom Detection Logic
            </h2>
            <p className="text-slate-400 mb-4">
              A custom Slither detector written in Python to identify <span className="text-white">Reentrancy vulnerabilities</span> by checking for state writes after external calls.
            </p>
            
            <CodeWindow 
              title="detectors/reentrancy_check.py" 
              lang="Python" 
              code={`class ReentrancyDetector(AbstractDetector):
    ARGUMENT = 'reentrancy-custom'
    HELP = 'Detects reentrancy patterns in external calls'
    
    def _detect(self):
        results = []
        for contract in self.contracts:
            for function in contract.functions:
                # Check for low-level call
                if function.contains_call():
                    # Check if state variable is written AFTER call
                    if self._check_state_write_after_call(function):
                        info = [function, " contains potential reentrancy."]
                        results.append(self.generate_result(info))
        return results`} 
            />
        </section>

        {/* --- ORGANIZED TECH STACK --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Lock className="text-red-500" /> Security Stack
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-red-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Analysis Engines</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs font-mono">Slither</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs font-mono">Mythril</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs font-mono">Manticore</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-red-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Core Framework</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Python 3.10</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Solidity 0.8+</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-red-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Targets</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Smart Contracts</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">DeFi Protocols</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Impact Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">15+</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Vuln Patterns</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">40%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Time Saved</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">0</div>
                <div className="text-xs text-slate-500 font-mono uppercase">False Negatives</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">100%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Bytecode Coverage</div>
             </div>
          </div>
        </section>

        {/* CTA (Updated Links Here) */}
        <section className="text-center py-12 border-t border-slate-900 flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl font-bold text-white">Ready to test your smart contracts?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://sc-vulnerability-scanner-12sr.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition-all hover:scale-105"
            >
              <ExternalLink size={18} />
              Launch Scanner
            </a>
            <a 
              href="https://github.com/ayush-roy-21/SC-Vulnerability-Scanner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded border border-slate-700 transition-all hover:scale-105"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </section>
        
      </div>
    </motion.div>
  );
}
