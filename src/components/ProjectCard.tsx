"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  category: "Cybersecurity" | "Smart Contracts" | "Web Development";
  year: string;
  tags: string[];
}

export default function ProjectCard({
  slug,
  title,
  summary,
  impact,
  category,
  year,
  tags,
}: ProjectCardProps) {
  const isOffensive = category === "Cybersecurity";
  const accentColor = isOffensive ? "text-red-400" : "text-emerald-400";
  const borderColor = isOffensive ? "border-red-500/30" : "border-emerald-500/30";
  const bgColor = isOffensive ? "bg-red-900/10" : "bg-emerald-900/10";

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-lg border ${borderColor} ${bgColor} p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10`}
      whileHover={{ y: -8 }}
    >
      <Link href={`/projects/${slug}`} className="block">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`inline-block text-xs font-mono font-semibold uppercase tracking-widest ${accentColor}`}>
              {isOffensive ? "🔴" : "🟢"} {category}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">{year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          {title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{summary}</p>

        {/* Impact/Metric */}
        <div className="mb-4 p-3 bg-slate-900/50 rounded border border-slate-800/50">
          <p className="text-xs text-slate-500 font-mono">IMPACT:</p>
          <p className={`text-sm font-mono font-semibold ${accentColor}`}>{impact}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <span className="text-xs text-slate-500">View Case Study</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.article>
  );
}
