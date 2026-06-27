import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { useInView } from 'motion/react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

// Reusable scroll reveal hook using Framer Motion's useInView
export function useScrollReveal(options = { once: true, amount: 0.15 }) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, options);
  return { ref, isVisible };
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize and destroy Lenis smooth scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050810] text-slate-200 font-sans selection:bg-[#00a8ff]/30 selection:text-white flex flex-col pt-20 relative overflow-hidden">
      
      {/* Interactive Particle Background Canvas */}
      <ParticleBackground />

      {/* Fixed Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Decorative Editorial Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00a8ff]/2 pointer-events-none border-l border-[#00a8ff]/5" />
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#00a8ff]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Landing Area with Hero */}
      <main className="flex-grow z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        
        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer / Info bar */}
      <footer className="py-6 px-12 border-t border-white/5 flex justify-between items-center z-10 text-[10px] font-mono tracking-tight uppercase opacity-40">
        <div className="flex gap-8">
          <span>Loc: 52.5200° N, 13.4050° E</span>
          <span>Theme: Editorial Dark</span>
        </div>
        <div>
          <span>Scroll: Lenis_Init</span>
        </div>
      </footer>

      {/* Interactive Resume Modal Layer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

