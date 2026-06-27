import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ChevronDown, Server, ArrowRight, Download, Terminal } from 'lucide-react';

interface TypingEffectProps {
  phrases: string[];
}

function TypingEffect({ phrases }: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  // Typing state machine
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000); // Wait before backspacing
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100); // Backspace is faster

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, phrases]);

  return (
    <span className="font-mono text-lg md:text-xl text-[#00a8ff] flex items-center gap-1 min-h-[1.75rem]">
      <span>{phrases[index].substring(0, subIndex)}</span>
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} font-bold transition-opacity duration-100 text-white`}>|</span>
    </span>
  );
}

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ value, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animation = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => animation.stop();
  }, [value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const roles = [
    "Full Stack Java Developer",
    "Spring Boot Engineer",
    "React Developer",
    "AI / RAG Developer",
    "DevOps Engineer"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center py-12 md:py-24 relative z-10 text-center select-none"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center gap-6 px-4"
      >
        {/* Monospace tag-line */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#00a8ff]/5 border border-[#00a8ff]/20 font-mono text-xs tracking-[0.2em] text-[#00a8ff]"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>// FULL STACK JAVA DEVELOPER</span>
        </motion.div>

        {/* Name Header with Animated Underline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter"
        >
          Mani{' '}
          <span className="relative inline-block text-[#00a8ff] whitespace-nowrap">
            Marappan
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 bottom-2 h-1 bg-gradient-to-r from-[#00a8ff] via-[#00a8ff]/50 to-transparent block rounded-none"
            />
          </span>
        </motion.h1>

        {/* Dynamic Typing Subheading */}
        <motion.div variants={itemVariants} className="my-2">
          <TypingEffect phrases={roles} />
        </motion.div>

        {/* Description phrase */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed tracking-wide"
        >
          Building production-ready APIs, scalable systems, and intelligent AI applications.
        </motion.p>

        {/* CTA Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center max-w-md"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 168, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#00a8ff] text-[#050810] font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-none"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.button
            onClick={onOpenResume}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 168, 255, 0.05)', borderColor: '#00a8ff', boxShadow: '0 0 15px rgba(0, 168, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-[#00a8ff]/40 text-[#00a8ff] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-none bg-transparent cursor-pointer"
          >
            <span>View & Print Resume</span>
            <Download className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Professional Metrics counters */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-12 mt-12 py-6 px-8 border-t border-b border-white/5 font-mono text-center w-full max-w-3xl"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              <Counter value={300} suffix="+" />
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold">APIs Built</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-r border-white/10">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              <Counter value={1} suffix="+" />
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold">Yrs Experience</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              <Counter value={81} suffix="%" />
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold">B.E. Score</span>
          </div>
        </motion.div>

      </motion.div>

      {/* Floating scroll indicator at the bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[9px] text-slate-500 tracking-widest select-none">
        <span>SCROLL DOWN</span>
        <motion.button
          onClick={handleScrollDown}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 border border-white/10 hover:border-[#00a8ff]/40 text-slate-500 hover:text-[#00a8ff] transition-colors rounded-none bg-transparent"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>

    </section>
  );
}
