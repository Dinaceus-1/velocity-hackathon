
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';

const pieData = [
  { name: 'nature', value: 450 },
  { name: 'learning', value: 350 },
  { name: 'welfare', value: 250 },
  { name: 'systems', value: 150 },
];
// Colors from the branding palette
const COLORS = ['#1e2a5e', '#e05c9d', '#f4d89f', '#bdc69a'];

const areaData = [
  { x: 0, y: 50 }, { x: 1, y: 30 }, { x: 2, y: 70 }, { x: 3, y: 40 }, { x: 4, y: 90 }, { x: 5, y: 60 }
];

const InsightsPanel: React.FC = () => {
  return (
    <div className="space-y-16 text-left">
      <div className="bg-white/40 backdrop-blur-3xl p-16 rounded-[80px] relative overflow-hidden group border border-white/60 shadow-2xl animate-float">
        <div className="relative z-10">
          <h3 className="text-8xl font-serif italic text-[#1e2a5e] leading-[0.75] mb-12 text-lowercase">
            choose <br /> what you <br /> <span className="text-[#e05c9d] not-italic font-sans font-black">impact.</span>
          </h3>
          <p className="text-2xl text-[#1e2a5e]/70 font-medium mb-16 leading-tight text-lowercase max-w-xs">
            every donation is backed by rigorous data. we ensure your capital goes exactly where it's needed most.
          </p>
          
          <div className="h-48 w-full mb-16 opacity-20">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={areaData}>
                  <Area type="stepBefore" dataKey="y" stroke="#1e2a5e" fill="#1e2a5e" fillOpacity={0.3} strokeWidth={5} />
               </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex -space-x-8">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 200}/100/100`} className="w-20 h-20 rounded-full border-4 border-white shadow-2xl transition-transform hover:scale-110" alt="contributor" />
                ))}
            </div>
            <div>
                <p className="text-3xl font-black text-[#1e2a5e] tracking-tighter">24.8k+</p>
                <p className="text-[12px] font-black uppercase tracking-[0.4em] text-[#1e2a5e]/40 text-lowercase">impact earners</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e2a5e] p-20 rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] text-white">
        <div className="mb-14">
          <p className="text-[12px] font-black uppercase tracking-[0.6em] text-white/40 mb-4 text-lowercase">real-time tracking</p>
          <h4 className="text-6xl font-serif italic text-white text-lowercase">calculated <br /> insights.</h4>
        </div>
        
        <div className="h-80 w-full mb-16 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={140}
                paddingAngle={15}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-center bg-[#1e2a5e] w-32 h-32 flex flex-col justify-center rounded-full border-4 border-white/10">
             <p className="text-5xl font-serif italic">100</p>
             <p className="text-[10px] uppercase font-black tracking-widest text-white/40">% val</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {pieData.map((entry, index) => (
            <div key={entry.name} className="space-y-2 border-l-4 pl-6" style={{ borderColor: COLORS[index % COLORS.length] }}>
              <span className="font-bold text-white text-sm text-lowercase block opacity-60">{entry.name}</span>
              <p className="font-serif italic text-4xl text-white">{Math.round((entry.value / 1200) * 100)}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
