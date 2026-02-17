"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Server, Layout, Database, Truck } from "lucide-react";

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
        <Server size={12} className="text-pink-500"/> 
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

export default function RoyEleganceCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-950 py-20 px-6 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-12 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">./BACK_TO_PROJECTS</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 rounded border border-pink-500/30 bg-pink-500/10 text-pink-400 text-[10px] font-mono uppercase tracking-widest">
               Full Stack Engineering
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               2025
             </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Roy-Elegance <span className="text-slate-600">Commerce Engine</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            My first end-to-end web deployment. A scalable e-commerce platform featuring <span className="text-pink-400">JWT Authentication</span>, <span className="text-pink-400">State Management</span>, and a fully automated <span className="text-pink-400">CI/CD Pipeline</span>.
          </p>
        </header>

        {/* --- VISUAL ARCHITECTURE --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Layout className="text-pink-500" /> System Architecture
          </h2>
          
          <div className="relative">
            {/* The Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-pink-500 via-pink-500/50 to-pink-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Frontend Client */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-pink-400 font-bold text-xl mb-2 font-mono">01. Reactive Client</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    React.js SPA with Context API for global state management (Cart, User Session).
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>USER SESSION</span>
                      <span className="text-pink-500 animate-pulse">● ACTIVE</span>
                   </div>
                   Token: JWT <br/>
                   Cart: [Item_01, Item_04]
                </div>
              </div>

              {/* Step 2: API Layer */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>API GATEWAY</span>
                      <span className="text-pink-500">PROCESSING</span>
                   </div>
                   POST /api/checkout <br/>
                   Status: 200 OK
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-pink-500/50">▼</div>
                   <div className="w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="order-2 md:order-3">
                  <h3 className="text-pink-400 font-bold text-xl mb-2 font-mono">02. RESTful API</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Node.js/Express backend handling secure payments, inventory logic, and user authentication.
                  </p>
                </div>
              </div>

              {/* Step 3: Database & Cloud */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-pink-400 font-bold text-xl mb-2 font-mono">03. Persistence Layer</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    MongoDB Atlas for scalable product data storage, deployed via automated CI/CD pipelines.
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-pink-500/50">▼</div>
                   <div className="w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>DATABASE</span>
                      <span className="text-pink-500">CONNECTED</span>
                   </div>
                   Collections: Users, Products, Orders
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CODE IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Database className="text-pink-500" /> Secure Order Logic
            </h2>
            <p className="text-slate-400 mb-4">
              Implementing secure transaction handling on the backend to prevent price tampering during the checkout process.
            </p>
            
            <CodeWindow 
              title="controllers/orderController.js" 
              lang="JavaScript" 
              code={`exports.createOrder = async (req, res) => {
    try {
        const { items } = req.body;
        
        // SECURITY: Recalculate price on server-side
        // Never trust client-side prices
        let total = 0;
        for (let item of items) {
            const product = await Product.findById(item.id);
            total += product.price * item.qty;
        }

        const order = await Order.create({
            user: req.user._id,
            orderItems: items,
            totalPrice: total,
            isPaid: false
        });

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Order failed" });
    }
}`} 
            />
        </section>

        {/* --- ORGANIZED TECH STACK --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Server className="text-pink-500" /> Development Stack
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-pink-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded text-xs font-mono">React.js</span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded text-xs font-mono">Tailwind CSS</span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded text-xs font-mono">Framer Motion</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-pink-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Node.js</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Express</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">MongoDB</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-pink-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Deployment</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Vercel</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">GitHub Actions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Project Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">Auth</div>
                <div className="text-xs text-slate-500 font-mono uppercase">JWT Secured</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">100%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Responsive</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">CI/CD</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Automated</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">REST</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Architecture</div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-900">
          <Link href="https://github.com/ayush-roy-21" className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded transition-all hover:scale-105">
            <ShoppingBag size={18} />
            View Live Demo
          </Link>
        </section>
        
      </div>
    </motion.div>
  );
}