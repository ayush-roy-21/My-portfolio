"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Radar, Cpu, Network, Search, Hash, Globe } from "lucide-react";

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
        <Cpu size={12} className="text-blue-500"/> 
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

export default function ReconAutomationCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-950 py-20 px-6 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">./BACK_TO_PROJECTS</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest">
               Offensive Security
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               Internship Project
             </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Automated <span className="text-slate-600">Reconnaissance Framework</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A multi-threaded Pentesting Suite that consolidates network scanning, OSINT gathering, and payload generation into a single automated pipeline.
          </p>
        </header>

        {/* --- VISUAL ARCHITECTURE --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Radar className="text-blue-500" /> Scanning Architecture
          </h2>
          
          <div className="relative">
            {/* The Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-blue-500/50 to-blue-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Target Acquisition */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-blue-400 font-bold text-xl mb-2 font-mono">01. Network Discovery</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sweeps IP ranges using socket connections to identify live hosts and open ports (80, 443, 22, 21).
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>MODULE: IP_SCANNER</span>
                      <span className="text-blue-500 animate-pulse">● RUNNING</span>
                   </div>
                   Target: 192.168.1.0/24 &rarr; 5 Hosts Found
                </div>
              </div>

              {/* Step 2: OSINT Enrichment */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>MODULE: SUBDOMAIN</span>
                      <span className="text-blue-500">ACTIVE</span>
                   </div>
                   Found: admin.example.com, test.example.com
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-blue-500/50">▼</div>
                   <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="order-2 md:order-3">
                  <h3 className="text-blue-400 font-bold text-xl mb-2 font-mono">02. OSINT Enrichment</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Enumerates subdomains and extracts carrier/location data from phone numbers to build a target profile.
                  </p>
                </div>
              </div>

              {/* Step 3: Payload Generation */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-blue-400 font-bold text-xl mb-2 font-mono">03. Asset Generation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Automatically generates wordlists, passwords, and QR/Barcodes for social engineering or brute-force testing.
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-blue-500/50">▼</div>
                   <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>OUTPUT</span>
                      <span className="text-blue-500">SAVED</span>
                   </div>
                   scan_results.csv, wordlist.txt
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CODE IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Cpu className="text-blue-500" /> Multi-Threaded Engine
            </h2>
            <p className="text-slate-400 mb-4">
              To drastically reduce scan times, I implemented a <span className="text-white">threading model</span> that allows network scans, OSINT checks, and file generation to execute concurrently.
            </p>
            
            <CodeWindow 
              title="ReconAutomation.py (Worker Thread)" 
              lang="Python" 
              code={`def worker(task, args):
    if task == "ip_scanner":
        ip_range, ports = args
        live_hosts = []
        # Concurrent IP Scanning
        for ip in ipaddress.IPv4Network(ip_range, strict=False):
            if is_host_live(str(ip)):
                print(f"Host {ip} is live.")
                live_hosts.append(str(ip))
        
        # Trigger Port Scan on Live Hosts
        for host in live_hosts:
            scan_ports(host, ports)

    elif task == "subdomain_checker":
        check_subdomain(args[0], args[1])
        
    elif task == "phone_info":
        info = phone_info(args[0])
        print(f"Country: {info['Country']}, Carrier: {info['Carrier']}")`} 
            />
        </section>

        {/* --- ORGANIZED TECH STACK --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Network className="text-blue-500" /> Tool Arsenal
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-blue-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Network Recon</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Socket</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">IPAddress</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Threading</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-blue-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">OSINT Modules</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Requests</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Phonenumbers</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Subdomain Enum</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-blue-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Utilities</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">CSV</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">Barcode/QR</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">Random</span>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">8+</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Modules</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">Multi</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Threaded</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">CSV</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Reporting</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Python</div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-900">
          <Link href="https://github.com/ayush-roy-21" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition-all hover:scale-105">
            <Globe size={18} />
            View Source on GitHub
          </Link>
        </section>
        
      </div>
    </motion.div>
  );
}