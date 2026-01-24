
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'dashboard') => void;
  activeView: 'home' | 'dashboard';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-12 py-10 flex justify-between items-center mix-blend-difference text-white">
      <div 
        className="cursor-pointer font-bold text-3xl tracking-tighter flex items-center gap-1 group"
        onClick={() => onNavigate('home')}
      >
        <span className="text-lowercase group-hover:italic transition-all">impact</span>
        <span className="text-white/40 font-light text-lowercase">ex</span>
      </div>
      
      <div className="flex items-center gap-16">
        <button 
          onClick={() => onNavigate('home')}
          className={`text-sm font-black tracking-[0.4em] uppercase transition-all text-lowercase ${activeView === 'home' ? 'opacity-100 border-b-2 border-white' : 'opacity-40 hover:opacity-100'}`}
        >
          home
        </button>
        <button 
          onClick={() => onNavigate('dashboard')}
          className={`text-sm font-black tracking-[0.4em] uppercase transition-all text-lowercase ${activeView === 'dashboard' ? 'opacity-100 border-b-2 border-white' : 'opacity-40 hover:opacity-100'}`}
        >
          dashboard
        </button>
        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 p-1 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-transform">
          <img src="https://picsum.photos/seed/user-genz-flow/100/100" alt="avatar" className="w-full h-full rounded-full object-cover grayscale brightness-125" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
