
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsightsPanel from './components/InsightsPanel';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'dashboard'>('home');
  const [scrollY, setScrollY] = useState(0);
  const hubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHub = () => {
    hubRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onNavigate={setView} activeView={view} />
      
      {view === 'home' ? (
        <div className="relative">
          {/* Section 1: Sticky Hero */}
          <div className="sticky-hero overflow-hidden">
             <Hero scrollY={scrollY} onExplore={scrollToHub} />
          </div>

          {/* Section 2: Flowing Content Overlay */}
          <main className="content-overlay" ref={hubRef}>
            <section className="max-w-7xl mx-auto px-8 md:px-24 py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                {/* Left Side: Operative Insights */}
                <div className="space-y-32">
                  <div className="text-left">
                     <h2 className="text-7xl font-serif italic text-[#1e2a5e] mb-8 text-lowercase">how we operate.</h2>
                     <p className="text-[#1e2a5e]/70 text-2xl max-w-lg text-lowercase leading-tight">all based on calculated insights. we bridge the gap between intent and measurable results.</p>
                  </div>

                  <div className="space-y-24">
                    <div className="flex gap-10 items-start group">
                      <div className="text-5xl font-serif italic text-[#1e2a5e] opacity-20 group-hover:opacity-60 transition-all">01</div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-[#1e2a5e] text-lowercase">choose your charity</h3>
                        <p className="text-[#1e2a5e]/60 text-xl text-lowercase leading-relaxed">browse verified projects vetted for transparency and direct effectiveness.</p>
                      </div>
                    </div>

                    <div className="flex gap-10 items-start group">
                      <div className="text-5xl font-serif italic text-[#1e2a5e] opacity-20 group-hover:opacity-60 transition-all">02</div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-[#1e2a5e] text-lowercase">donate for a cause</h3>
                        <p className="text-[#1e2a5e]/60 text-xl text-lowercase leading-relaxed">allocate funds to specific outcomes. your contribution is converted into tangible impact units.</p>
                      </div>
                    </div>

                    <div className="flex gap-10 items-start group">
                      <div className="text-5xl font-serif italic text-[#1e2a5e] opacity-20 group-hover:opacity-60 transition-all">03</div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-[#1e2a5e] text-lowercase">earn impacts</h3>
                        <p className="text-[#1e2a5e]/60 text-xl text-lowercase leading-relaxed">track your personal contribution feed. see exactly where every dollar goes in real-time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Sticky Hub */}
                <div className="lg:sticky lg:top-32">
                  <InsightsPanel />
                </div>
              </div>
            </section>
          </main>
        </div>
      ) : (
        <Dashboard onBack={() => setView('home')} />
      )}

      <footer className="border-t border-white/10 py-32 bg-[#1e2a5e] text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="font-bold text-4xl tracking-tighter">
            <span className="text-lowercase">impact</span><span className="text-[#f97099] font-light text-lowercase">ex</span>
          </div>
          <p className="text-white/40 text-center max-w-md text-2xl text-lowercase">earn impacts. donate today. all based on calculated insights.</p>
          <div className="flex gap-16">
            <a href="#" className="text-sm font-bold hover:text-[#f97099] transition-colors uppercase tracking-[0.5em] text-lowercase">about</a>
            <a href="#" className="text-sm font-bold hover:text-[#f97099] transition-colors uppercase tracking-[0.5em] text-lowercase">trust</a>
            <a href="#" className="text-sm font-bold hover:text-[#f97099] transition-colors uppercase tracking-[0.5em] text-lowercase">legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
