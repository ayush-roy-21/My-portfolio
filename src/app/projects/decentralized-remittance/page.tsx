"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Zap, Scale, Code2, Network } from "lucide-react";

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
        <Code2 size={12} className="text-emerald-500"/> 
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

export default function DecentralizedRemittanceCaseStudy() {
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
               DeFi Infrastructure
             </span>
             <span className="px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
               Global Finance
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Decentralized <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Settlement Layer</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Challenging the SWIFT monopoly with a trustless payment gateway that settles cross-border transactions in <span className="text-emerald-400 font-bold">~60 seconds</span> at <span className="text-emerald-400 font-bold">1/10th</span> the cost.
          </p>
        </header>

        {/* --- GLOBAL INFRASTRUCTURE MAP --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Globe className="text-emerald-500" /> Infrastructure Architecture
          </h2>
          
          <div className="relative">
             {/* Central Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-900 z-0"></div>

            <div className="space-y-16">
              
              {/* Step 1: Liquidity Pools */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-emerald-400 font-bold text-xl mb-2 font-mono">01. On-Chain Liquidity</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Replacing correspondent banks with Automated Market Makers (AMMs). Liquidity pools (USDC/INR, USDC/EUR) ensure instant currency conversion 24/7.
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full">
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>SWIFT REPLACEMENT</span>
                      <span className="text-emerald-500 animate-pulse">● ACTIVE</span>
                   </div>
                   Bank A &rarr; Uniswap Pool &rarr; Bank B
                </div>
              </div>

              {/* Step 2: Atomic Settlement */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                 <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-1">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>FINALITY</span>
                      <span className="text-emerald-500">~12 SECONDS</span>
                   </div>
                   Status: Immutable Record
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-emerald-500/50">▼</div>
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="order-2 md:order-3">
                  <h3 className="text-emerald-400 font-bold text-xl mb-2 font-mono">02. Atomic Settlement</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Smart contracts execute &quot;Atomic Swaps.&quot; Funds are either fully delivered or fully returned—no &quot;pending&quot; state or lost wires.
                  </p>
                </div>
              </div>

              {/* Step 3: Geopolitical Compliance */}
              <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-emerald-400 font-bold text-xl mb-2 font-mono">03. Sovereignty & Compliance</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Real-time AML checks occur on-chain via Oracle feeds, ensuring compliance without ceding control to centralized payment processors.
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center order-1 md:order-2 h-full relative">
                   <div className="absolute -top-10 text-emerald-500/50">▼</div>
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] ring-4 ring-slate-950 z-10"></div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-500 order-3 md:order-3">
                   <div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
                      <span>SANCTIONS CHECK</span>
                      <span className="text-emerald-500">PASSED</span>
                   </div>
                   Chainalysis API Oracle Feed
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SMART CONTRACT IMPLEMENTATION --- */}
        <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Scale className="text-emerald-500" /> Trustless Escrow Logic
            </h2>
            <p className="text-slate-400 mb-4">
              To eliminate counterparty risk, I engineered a <span className="text-white">Hashed Timelock Contract (HTLC)</span>. This ensures funds are cryptographically locked until the recipient generates the correct proof, preventing fraud.
            </p>
            
            <CodeWindow 
              title="contracts/AtomicEscrow.sol" 
              lang="Solidity" 
              code={`contract AtomicEscrow {
    struct Transaction {
        address payable sender;
        address payable receiver;
        uint256 amount;
        bytes32 hashLock; // Cryptographic Proof
        uint256 timelock; // Expiration Time
    }

    // 1. Sender locks funds with a secret hash
    function lockFunds(bytes32 _hashLock, uint256 _timelock, address payable _receiver) external payable {
        require(msg.value > 0, "No funds sent");
        transactions[txId] = Transaction(msg.sender, _receiver, msg.value, _hashLock, _timelock);
    }

    // 2. Receiver unlocks funds by revealing the secret (Pre-image)
    function withdraw(bytes32 _preimage) external {
        require(sha256(abi.encodePacked(_preimage)) == txn.hashLock, "Invalid proof");
        txn.receiver.transfer(txn.amount);
    }`} 
            />
        </section>

        {/* --- STRATEGIC STACK --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Network className="text-emerald-500" /> Strategic Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Blockchain Core</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">Solidity</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">Ethereum / Polygon</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs font-mono">Chainlink Oracles</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Financial Engine</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">USDC Stablecoin</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-mono">Uniswap V3 SDK</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/30 transition-colors">
              <h3 className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Compliance</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Zero-Knowledge Proofs</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-mono">Graph Protocol</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Disruption Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">90%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Cost Savings</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">~1 min</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Settlement</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">0</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Intermediaries</div>
             </div>
             <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-xs text-slate-500 font-mono uppercase">Auditable</div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-900">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded transition-all hover:scale-105">
            <Zap size={18} />
            Discuss Financial Sovereignty
          </Link>
        </section>
        
      </div>
    </motion.div>
  );
}