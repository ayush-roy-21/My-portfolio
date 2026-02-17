"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Database, Cpu, GitBranch, Terminal, Layers } from "lucide-react";

// --- UPGRADE 1: REUSABLE CODE COMPONENT ---
const CodeWindow = ({ title, code, lang }: { title: string, code: string, lang: string }) => (
  <div className="my-8 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative group">
    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
       <div className="text-[10px] text-slate-500 font-mono uppercase border border-slate-800 px-2 py-1 rounded">
         {lang}
       </div>
    </div>
    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
      <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
        <Terminal size={12} className="text-emerald-500"/> 
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

export default function EigenTradeCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-950 py-20 px-6 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-12 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">./BACK_TO_PROJECTS</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
               FinTech
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               2026
             </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            EigenTrade <span className="text-slate-600">Automated System</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            An algorithmic trading engine achieving <span className="text-emerald-400 font-bold">55% prediction accuracy</span> and sub-2s latency via custom regression models and PL/SQL optimization.
          </p>
        </header>

        {/* --- UPGRADE 2: VISUAL SYSTEM ARCHITECTURE (FIXED) --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Layers className="text-emerald-500" /> System Architecture
          </h2>
          
          <div className="relative">
            {/* THE CONNECTING LINE (Now perfectly centered) */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Data Ingestion */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                {/* Left Side: Description */}
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-emerald-400 font-bold text-xl mb-2 font-mono">01. Data Ingestion</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    PL/SQL Engine processes 10M+ rows. Data is normalized, partitioned, and cached.
                  </p>
                </div>
                
                {/* Center: Vertex Node */}
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                {/* Right Side: Technical Box */}
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>INPUT STREAM</span>
                      <span className="text-emerald-500 animate-pulse">● LIVE</span>
                   </div>
                   Raw CSV / API Stream &rarr; Optimized Tables
                </div>
              </div>

              {/* Step 2: Predictive Modeling (Reversed Flow) */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 {/* Left Side: Technical Box (Swapped for visual balance) */}
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>MODEL CONFIG</span>
                      <span className="text-emerald-500">TRAINED</span>
                   </div>
                   Target: Ridge Regression <br/>
                   Features: Volatility, RSI, MACD
                </div>

                {/* Center: Vertex Node with Arrow */}
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   {/* Down Arrow Indicator on the line */}
                   <div className="absolute -top-10 text-emerald-500/50">▼</div>
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                {/* Right Side: Description */}
                <div className="order-2 md:order-3">
                  <h3 className="text-emerald-400 font-bold text-xl mb-2 font-mono">02. Predictive Modeling</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Python ML engine calculates probability. Ensemble methods combine regression models to generate confidence scores.
                  </p>
                </div>
              </div>

              {/* Step 3: LLM Interpretation */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                {/* Left Side: Description */}
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-emerald-400 font-bold text-xl mb-2 font-mono">03. LLM Interpretation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Signal is fed into an Explainer Module. The LLM parses the score into a human-readable trade rationale.
                  </p>
                </div>

                {/* Center: Vertex Node */}
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-emerald-500/50">▼</div>
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                {/* Right Side: Technical Box */}
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>OUTPUT</span>
                      <span className="text-emerald-500">GENERATED</span>
                   </div>
                   &quot;Confidence: 0.85&quot; &rarr; &quot;Strong Buy...&quot;
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- UPGRADE 1: CODE IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Database className="text-emerald-500" /> Database Optimization
            </h2>
            <p className="text-slate-400 mb-4">
              To handle 20M+ records with sub-second latency, standard SQL queries were insufficient. 
              I implemented <span className="text-white">Materialized Views</span> and <span className="text-white">Window Functions</span> to pre-calculate moving averages.
            </p>
            
            <CodeWindow 
              title="optimization_strategy.sql" 
              lang="PL/SQL" 
              code={`-- Optimized for High-Frequency Data Retrieval
CREATE MATERIALIZED VIEW market_signals 
BUILD IMMEDIATE 
REFRESH FAST ON COMMIT 
AS
SELECT 
    symbol, 
    time,
    close_price,
    -- Window function for instant Moving Avg calculation
    AVG(close_price) OVER (
        PARTITION BY symbol 
        ORDER BY time 
        ROWS BETWEEN 50 PRECEDING AND CURRENT ROW
    ) as moving_avg_50
FROM historical_trade_data
WHERE time > SYSDATE - 365;

-- Result: Query time reduced from 4.2s to 0.08s`} 
            />
        </section>

        {/* --- UPGRADE 3: ORGANIZED TECH STACK --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Cpu className="text-emerald-500" /> Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Core Engine</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Python 3.9</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">NumPy</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Pandas</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Data Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded text-xs font-mono">Oracle PL/SQL</span>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded text-xs font-mono">Materialized Views</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Intelligence</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">Scikit-Learn</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">LLM / NLP</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Performance Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">55%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Accuracy</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">&lt;2s</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Latency</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">40%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Optimization</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">20M+</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Rows Processed</div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-900">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded transition-all hover:scale-105">
            <GitBranch size={18} />
            Discuss this Architecture
          </Link>
        </section>
        
      </div>
    </motion.div>
  );
}