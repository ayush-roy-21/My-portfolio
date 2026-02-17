"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, Globe, Radio, Eye, Lock } from "lucide-react";

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
        <Radio size={12} className="text-red-500"/> 
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

export default function PhishingThreatDetectionCaseStudy() {
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
               Threat Intelligence
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               2025
             </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Phishing <span className="text-slate-600">Threat Detection</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Real-time browser extension analyzing URLs in <span className="text-red-400 font-bold">&lt;50ms</span>, intercepting attacks and redirecting threat actors to honeypots.
          </p>
        </header>

        {/* --- VISUAL INTERCEPTOR PIPELINE --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <ShieldAlert className="text-red-500" /> Interceptor Pipeline
          </h2>
          
          <div className="relative">
            {/* The Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-500/50 to-red-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Request Interception */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-red-400 font-bold text-xl mb-2 font-mono">01. Navigation Intercept</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Extension hook captures `onBeforeRequest` event. Suspends page load for analysis window.
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>USER ACTION</span>
                      <span className="text-red-500 animate-pulse">● PENDING</span>
                   </div>
                   GET https://g00gle-login.com/...
                </div>
              </div>

              {/* Step 2: Heuristic Analysis */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>ENGINE</span>
                      <span className="text-red-500">SCANNING</span>
                   </div>
                   Typosquatting: High (0.92) <br/>
                   Age: &lt; 24 Hours <br/>
                   SSL issuer: Free Tier
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-red-500/50">▼</div>
                   <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="order-2 md:order-3">
                  <h3 className="text-red-400 font-bold text-xl mb-2 font-mono">02. Heuristic Analysis</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Local ML model checks for homograph attacks, domain age, and SSL discrepancies in &lt;10ms.
                  </p>
                </div>
              </div>

              {/* Step 3: Honeypot Redirection */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-red-400 font-bold text-xl mb-2 font-mono">03. Honeypot Redirection</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Malicious requests are silently redirected to a sandboxed environment to capture attacker TTPs.
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-red-500/50">▼</div>
                   <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>VERDICT</span>
                      <span className="text-red-500">BLOCKED</span>
                   </div>
                   Redirect &rarr; /sandbox/login.html
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CODE IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Eye className="text-red-500" /> Active Deception Logic
            </h2>
            <p className="text-slate-400 mb-4">
              When a high-confidence threat is detected, the system doesn&apos;t just block it—it engages the attacker. The request is redirected to a <span className="text-white">Shadow DOM</span> honeypot that logs keystrokes and interaction patterns.
            </p>
            
            <CodeWindow 
              title="background/interceptor.js" 
              lang="JavaScript" 
              code={`chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const url = new URL(details.url);
        
        // 1. Calculate Threat Score (0-100)
        const score = threatEngine.analyze(url.hostname);
        
        if (score > 85) {
            // 2. Log incident to SIEM
            logger.push({ type: 'PHISHING_ATTEMPT', target: url.hostname, timestamp: Date.now() });
            
            // 3. Redirect to local Honeypot (Sandboxed)
            return { redirectUrl: chrome.runtime.getURL("honeypot/login.html") };
        }
        
        return { cancel: false };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);`} 
            />
        </section>

        {/* --- ORGANIZED TECH STACK --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Globe className="text-red-500" /> Defense Stack
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-red-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Client Engine</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs font-mono">JavaScript</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs font-mono">Manifest V3</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs font-mono">TensorFlow.js</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-red-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Backend Ops</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Python / Flask</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Redis Cache</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-red-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Intelligence</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">VirusTotal API</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">WhoIs Lookup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">System Efficacy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">50ms</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Avg Latency</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">99.2%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Detection Rate</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">30%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Redirected</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">Auto</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Takedown</div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-900">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition-all hover:scale-105">
            <Lock size={18} />
            Request Threat Demo
          </Link>
        </section>
        
      </div>
    </motion.div>
  );
}