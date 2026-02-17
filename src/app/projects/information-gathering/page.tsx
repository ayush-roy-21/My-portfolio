"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Globe, MapPin, Terminal, Code } from "lucide-react";

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
        <Terminal size={12} className="text-indigo-500"/> 
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

export default function InfoGatheringCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-950 py-20 px-6 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">./BACK_TO_PROJECTS</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-mono uppercase tracking-widest">
               Genesis Project
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               2025
             </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Python <span className="text-slate-600">Info-Gathering Tool</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            The foundation of my offensive security journey. A CLI utility demonstrating core networking concepts: <span className="text-indigo-400">DNS Resolution</span>, <span className="text-indigo-400">IP Geolocation</span>, and <span className="text-indigo-400">API Integration</span>.
          </p>
        </header>

        {/* --- SIMPLE LINEAR ARCHITECTURE --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Search className="text-indigo-500" /> Execution Flow
          </h2>
          
          <div className="relative">
            {/* The Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-indigo-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Input */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-indigo-400 font-bold text-xl mb-2 font-mono">01. Target Input</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    CLI arguments accept the target domain URL.
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>USER INPUT</span>
                      <span className="text-indigo-500 animate-pulse">● RECEIVED</span>
                   </div>
                   &gt; python infotool.py google.com
                </div>
              </div>

              {/* Step 2: DNS Resolution */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>SOCKET</span>
                      <span className="text-indigo-500">RESOLVING</span>
                   </div>
                   Host: google.com <br/>
                   IP: 142.251.42.46
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-indigo-500/50">▼</div>
                   <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="order-2 md:order-3">
                  <h3 className="text-indigo-400 font-bold text-xl mb-2 font-mono">02. DNS Resolution</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Uses Python&apos;s native `socket` library to resolve the hostname to its underlying IPv4 address.
                  </p>
                </div>
              </div>

              {/* Step 3: API Enrichment */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-indigo-400 font-bold text-xl mb-2 font-mono">03. Geolocation Lookup</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Queries the `ipinfo.io` REST API to enrich the IP data with physical location, ISP, and timezone.
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-indigo-500/50">▼</div>
                   <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>JSON RESPONSE</span>
                      <span className="text-indigo-500">200 OK</span>
                   </div>
                   &quot;city&quot;: &quot;Mumbai&quot;, &quot;loc&quot;: &quot;19.07,72.88&quot;
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CODE IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Code className="text-indigo-500" /> Core Logic
            </h2>
            <p className="text-slate-400 mb-4">
              A minimalist implementation of networking basics. This script was my first exploration into automating data retrieval using Python.
            </p>
            
            <CodeWindow 
              title="infotool.py" 
              lang="Python" 
              code={`import sys, requests, socket

# 1. Input Validation
if len(sys.argv) != 2:
    print("Usage: python infotool.py <websiteurl>")
    sys.exit(1)

website_url = sys.argv[1]

try:
    # 2. DNS Resolution
    ip_address = socket.gethostbyname(website_url)
    print(f"IP Address: {ip_address}")

    # 3. API Request for Geolocation
    response = requests.get(f"https://ipinfo.io/{ip_address}/json")
    
    if response.status_code == 200:
        data = response.json()
        print(f"City: {data.get('city')}")
        print(f"Region: {data.get('region')}")
        print(f"Coordinates: {data.get('loc')}")
        
except socket.gaierror:
    print("Error: Could not resolve hostname.")`} 
            />
        </section>

        {/* --- LEARNINGS GRID --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <MapPin className="text-indigo-500" /> Key Learnings
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-indigo-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Networking</h3>
              <p className="text-slate-400 text-sm">
                Understood the translation of Hostnames to IP addresses via DNS and the structure of IPv4.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-indigo-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">REST APIs</h3>
              <p className="text-slate-400 text-sm">
                Learned how to programmatically fetch data from external services (ipinfo.io) using HTTP GET requests.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-indigo-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Error Handling</h3>
              <p className="text-slate-400 text-sm">
                Implemented basic exception handling (Try/Except) to manage connection timeouts and invalid domains.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-900">
          <Link href="https://github.com/ayush-roy-21" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded transition-all hover:scale-105">
            <Globe size={18} />
            See How I Started
          </Link>
        </section>
        
      </div>
    </motion.div>
  );
}