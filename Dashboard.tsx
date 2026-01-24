
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { IMPACT_PROJECTS } from '../constants';

const performanceData = [
  { month: 'jan', score: 120 },
  { month: 'feb', score: 180 },
  { month: 'mar', score: 160 },
  { month: 'apr', score: 240 },
  { month: 'may', score: 380 },
  { month: 'jun', score: 420 },
  { month: 'jul', score: 550 },
];

const allocationData = [
  { name: 'environment', value: 45 },
  { name: 'education', value: 25 },
  { name: 'health', value: 20 },
  { name: 'infra', value: 10 },
];

const COLORS = ['#1e2a5e', '#e05c9d', '#f4d89f', '#bdc69a'];

interface DashboardProps {
  onBack?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  return (
    <main 
      className="min-h-screen text-white pt-40 pb-32 relative overflow-hidden" 
      style={{
        background: 'linear-gradient(to bottom, #e8a86c 0%, #d49055 15%, #c07840 30%, #8a5230 50%, #3a3a3a 70%, #000000 100%)'
      }}
    >
      {/* Content Overlay */}
      <div className="max-w-7xl mx-auto px-8 space-y-16 relative z-10">
        
        {/* Formal Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <button 
              onClick={onBack}
              className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 hover:text-[#e05c9d] transition-colors flex items-center gap-2"
            >
              <span className="text-lg">←</span> back to home
            </button>
            <h1 className="text-8xl font-serif italic leading-none text-lowercase">impact terminal.</h1>
            <p className="text-xl text-white/40 font-medium text-lowercase tracking-tight max-w-lg">
              pro-tier oversight of capital allocation and verified social outcomes. active since fiscal year 2024.
            </p>
          </div>
          <div className="text-right flex flex-col items-end">
             <span className="px-4 py-1 border border-[#e05c9d] text-[#e05c9d] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">account verified</span>
             <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-1 text-lowercase">global impact rank</p>
             <p className="text-9xl font-black tracking-tighter leading-none text-white">#842</p>
          </div>
        </div>

        {/* High-Precision Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div className="p-10 bg-black/40 backdrop-blur-xl border border-white/10 space-y-4">
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] text-lowercase">net contribution</p>
            <p className="text-5xl font-bold tracking-tight">$4,250.00</p>
          </div>
          <div className="p-10 bg-black/40 backdrop-blur-xl border border-white/10 space-y-4">
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] text-lowercase">impact units (iv)</p>
            <p className="text-5xl font-bold tracking-tight">2,108.4</p>
          </div>
          <div className="p-10 bg-black/40 backdrop-blur-xl border border-white/10 space-y-4">
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] text-lowercase">conversion rate</p>
            <p className="text-5xl font-bold tracking-tight text-[#bdc69a]">94.2%</p>
          </div>
          <div className="p-10 bg-black/40 backdrop-blur-xl border border-white/10 space-y-4">
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] text-lowercase">lives touched</p>
            <p className="text-5xl font-bold tracking-tight">1,420</p>
          </div>
        </div>

        {/* Market Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Chart Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 rounded-[2px] space-y-12">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h2 className="text-2xl font-serif italic text-white text-lowercase">performance trajectory.</h2>
                  <p className="text-[10px] uppercase font-bold text-white/20 tracking-widest">impact value over time</p>
                </div>
                <div className="flex bg-white/5 rounded-sm p-1">
                  {['1d', '1w', '1m', 'max'].map(t => (
                    <button key={t} className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest ${t === 'max' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#e05c9d" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#e05c9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: '900'}}
                      dy={20}
                    />
                    <Tooltip 
                      contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0px'}}
                      itemStyle={{color: '#e05c9d'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#e05c9d" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#impactGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-serif italic text-white text-lowercase">active holdings.</h2>
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {IMPACT_PROJECTS.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-8 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all group cursor-crosshair">
                    <div className="flex items-center gap-8">
                       <span className="text-[10px] font-black text-white/20 font-mono">{project.projectCode}</span>
                       <div>
                          <p className="font-bold text-lg text-lowercase">{project.name}</p>
                          <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{project.unitName}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-16 text-right">
                       <div className="hidden md:block">
                          <p className="text-[10px] text-white/20 uppercase font-black mb-1">efficiency</p>
                          <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-[#bdc69a]" style={{width: `${project.efficiencyRating}%`}}></div>
                          </div>
                       </div>
                       <div>
                          <p className="font-mono text-xl">${(project.costPerOutcome * 10).toFixed(2)}</p>
                          <p className="text-[10px] text-[#bdc69a] font-black uppercase">+{ (Math.random() * 10 + 2).toFixed(1) }% gain</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel: Allocation & Tape */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 space-y-12">
               <div className="space-y-1">
                 <h3 className="text-xl font-serif italic text-lowercase">sector mix.</h3>
                 <p className="text-[10px] uppercase font-bold text-white/20 tracking-widest">capital distribution</p>
               </div>
               <div className="h-64 w-full relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.8} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center space-y-1">
                     <p className="text-3xl font-mono font-bold">82.0</p>
                     <p className="text-[8px] uppercase font-black tracking-[0.4em] text-white/40">purity index</p>
                  </div>
               </div>
               <div className="space-y-4">
                  {allocationData.map((item, idx) => (
                    <div key={item.name} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: COLORS[idx % COLORS.length]}}></div>
                        <span className="text-white/40">{item.name}</span>
                      </div>
                      <span className="font-mono">{item.value}%</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 space-y-8">
               <h3 className="text-xl font-serif italic text-lowercase">live ticker.</h3>
               <div className="space-y-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex gap-4 items-start border-l border-white/10 pl-6 py-2">
                       <div className="w-1 h-1 mt-2 rounded-full bg-[#e05c9d] shadow-[0_0_10px_#e05c9d]"></div>
                       <div className="space-y-1">
                          <p className="text-white/80 font-bold text-[11px] text-lowercase leading-snug">system: verified 40.2kg plastic recovery / sector environment</p>
                          <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">{i * 2}m ago</p>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[#e05c9d] hover:text-white transition-all">
                  open data logs
               </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
