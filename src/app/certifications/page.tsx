"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FileCheck, Award, Calendar, ExternalLink, Shield, Terminal, Hash, Filter } from "lucide-react";

// --- INTERFACES ---
interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  category: "cybersecurity" | "academic" | "projects";
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: "personal" | "competitions";
}

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // --- DATA: CERTIFICATES ---
  const certificates: Certificate[] = [
    {
      id: "1",
      title: "Cybersecurity Beginner Level",
      issuer: "ALCHERINGA IIT Guwahati",
      date: "2025",
      pdfUrl: "/certificates/cybersecurity-beginner-alcheringa.pdf",
      category: "cybersecurity"
    },
    {
      id: "2",
      title: "Threat Prism Internship",
      issuer: "Verified by Wipro DICE",
      date: "2025",
      pdfUrl: "/certificates/threat-prism-internship.pdf",
      category: "cybersecurity"
    },
    {
      id: "3",
      title: "Intelligent Math & Computing",
      issuer: "Industrial Conclave",
      date: "2025",
      pdfUrl: "/certificates/mathematics-computing-conclave.pdf",
      category: "academic"
    },
    {
      id: "4",
      title: "Master Future of Cybersecurity",
      issuer: "Webinar Series",
      date: "2025",
      pdfUrl: "/certificates/cybersecurity-future-webinar.pdf",
      category: "cybersecurity"
    },
    {
      id: "5",
      title: "Project Completion",
      issuer: "Course Mentors",
      date: "2024",
      pdfUrl: "/certificates/project-completion-mentors.pdf",
      category: "projects"
    }
  ];

  // --- DATA: FIELD ENGAGEMENTS (Renamed from Personal Insights) ---
  const personalInsights: Achievement[] = [
    {
      id: "pi1",
      title: "Anchoring Cultural Fest",
      description: "Led the annual college festival, managing stage logistics and audience engagement for 1000+ attendees.",
      date: "2025",
      imageUrl: "/achievements/anchoring-image.jpg",
      category: "personal"
    },
    {
      id: "pi5",
      title: "Briefing with Ex-ISRO Chair",
      description: "Discussed satellite security and telemetry data integrity with industry leadership.",
      date: "2024",
      imageUrl: "/achievements/meeting-expert-1.jpg",
      category: "personal"
    },
    {
      id: "pi9",
      title: "Lt. Gen Nishikant Singh",
      description: "Strategic discussion regarding border geopolitics and the Arunachal Pradesh context.",
      date: "2025",
      imageUrl: "/achievements/lt-gen.jpg",
      category: "personal"
    },
    {
      id: "pi6",
      title: "Journalist Interview",
      description: "Exchange of ideas on media ethics and information warfare.",
      date: "2024",
      imageUrl: "/achievements/interview-journalist.jpg",
      category: "personal"
    },
    {
      id: "pi7",
      title: "World Record Holder Meeting",
      description: "Meeting the strongest man alive (17 World Records).",
      date: "2025",
      imageUrl: "/achievements/strongest-man.jpg",
      category: "personal"
    },
    {
      id: "pi3",
      title: "Academic Excellence Trophy",
      description: "Awarded for consistent top-tier performance in Mathematics & Computing.",
      date: "2023",
      imageUrl: "/achievements/academics-trophy.jpg",
      category: "personal"
    },
  ];

  const categories = [
    { id: "all", name: "All_Data" },
    { id: "cybersecurity", name: "Sec_Certificates" },
    { id: "academic", name: "Academic_Logs" },
    { id: "personal", name: "Field_Ops" }
  ];

  const filteredCertificates = selectedCategory === "all" || selectedCategory === "cybersecurity" || selectedCategory === "academic" || selectedCategory === "projects"
    ? selectedCategory === "all" ? certificates : certificates.filter(c => c.category === selectedCategory)
    : [];

  const showInsights = selectedCategory === "all" || selectedCategory === "personal";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- HEADER --- */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 text-emerald-500 mb-2">
            <Award size={24} />
            <span className="font-mono text-sm tracking-widest uppercase">Credential Database</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications & <span className="text-emerald-500">Achievements</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Documented proof of work, verified credentials, and strategic field engagements.
          </p>
        </div>

        {/* --- CONTROLS --- */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded text-slate-500 font-mono text-xs">
            <Filter size={14} />
            FILTER_PROTOCOL:
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded text-sm font-mono transition-all border ${
                selectedCategory === category.id
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600"
              }`}
            >
              {category.id === selectedCategory ? `> ${category.name}` : category.name}
            </button>
          ))}
        </div>

        {/* --- CERTIFICATES GRID --- */}
        {filteredCertificates.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Shield className="text-emerald-500" size={20} /> Verified Credentials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all shadow-xl relative overflow-hidden"
                >
                  {/* Glowing Corner Effect */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-emerald-500/30 transition-colors">
                      <FileCheck className="text-emerald-500" size={24} />
                    </div>
                    <span className="font-mono text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-mono mb-6 flex items-center gap-2">
                    <Terminal size={12} /> {cert.issuer}
                  </p>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-300 transition-colors"
                  >
                    View Document <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* --- PERSONAL INSIGHTS (FIELD OPS) --- */}
        {showInsights && (
          <section className="space-y-6 pt-8 border-t border-slate-900">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Hash className="text-blue-500" size={20} /> Field Engagements & Networking
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalInsights.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 pointer-events-none"></div>
                    
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    
                    <div className="absolute top-3 right-3 z-20">
                      <span className="text-[10px] font-mono bg-black/80 text-blue-400 px-2 py-1 rounded border border-blue-500/30 backdrop-blur-md">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-slate-100 mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-3 group-hover:border-blue-500/50 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* --- UPLOAD SECTION (Visual Only) --- */}
        <div className="border border-dashed border-slate-800 rounded-xl p-12 text-center hover:bg-slate-900/30 transition-colors group cursor-not-allowed">
          <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-slate-800">
             <Calendar className="text-slate-600" size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-400 mb-1">Archive Locked</h3>
          <p className="text-sm text-slate-600 font-mono">
            New certifications pending verification...
          </p>
        </div>

      </div>
    </div>
  );
}