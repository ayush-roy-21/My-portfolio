"use client";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 relative overflow-hidden py-20">
      
      {/* Background Grid Pattern */}
      <div className="grid-pattern"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-custom"></span>
            SYSTEM ONLINE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Securing the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Decentralized Web
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            I architect immune systems for Web3 & FinTech. Specializing in 
            <span className="text-white font-mono"> Smart Contract Auditing</span> and 
            <span className="text-white font-mono"> Offensive Security Operations</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded flex items-center gap-2 transition-all hover:scale-105">
              <Shield size={20} />
              View Case Studies
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-slate-700 hover:border-emerald-500/50 text-slate-300 rounded font-mono flex items-center gap-2 transition-all hover:bg-slate-900/50">
              ./contact_me.sh
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Right: The Terminal Aesthetic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900 border border-slate-800 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-slate-400 font-mono">root@ayush:~</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-3">
            <div className="flex gap-2">
              <span className="text-emerald-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-300">whoami</span>
            </div>
            <div className="text-slate-300 pl-4">
              Ayush Roy <br/>
              Security Researcher <br/>
              Blockchain Developer
            </div>
            
            <div className="flex gap-2 mt-4">
              <span className="text-emerald-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-300">cat skills.json</span>
            </div>
            <div className="text-yellow-400 pl-4">
              [ &quot;Solidity&quot;, &quot;Python&quot;, &quot;VAPT&quot;, &quot;Cryptography&quot; ]
            </div>

            <div className="flex gap-2 mt-4">
              <span className="text-emerald-500">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-300 cursor-blink">_</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
