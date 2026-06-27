import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the container to draw the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experienceData = {
    company: "Aroganam Technologies Pvt Ltd",
    period: "Apr 2025 — May 2026",
    role: "Full Stack Developer",
    location: "Coimbatore, Tamil Nadu",
    points: [
      "Designed and built 300+ RESTful APIs covering token-based authentication, multi-part file uploads, and spring cron-based background scheduling processes.",
      "Optimised MySQL JOIN queries and Native queries — drastically reducing payload parsing overhead and API response times.",
      "Led AWS EC2 node provisioning, Nginx reverse-proxy setup, domain mapping, and robust Git branching strategies.",
      "Engineered the specialized NCC management module end-to-end for the ACET College Academic Portal using React with real-time live-updating integrations.",
      "Designed clean relational schemas mapping entity relations (One-to-Many, Many-to-One) using JPA and Hibernate criteria objects."
    ]
  };

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative z-10" ref={containerRef}>
      
      {/* Title Header */}
      <div className="mb-16">
        <span className="text-[#00a8ff] font-mono text-xs tracking-[0.2em] uppercase">// 03. MILESTONES</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tighter uppercase">Professional Experience</h2>
        <div className="w-12 h-1 bg-[#00a8ff] mt-4 rounded-none" />
      </div>

      <div className="relative max-w-4xl mx-auto pl-8 sm:pl-12">
        
        {/* Animated Timeline vertical line */}
        <div className="absolute left-0 sm:left-2 top-2 bottom-0 w-[2px] bg-slate-800">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="w-full h-full bg-gradient-to-b from-[#00a8ff] via-[#00a8ff]/50 to-transparent"
          />
        </div>

        {/* Experience Node */}
        <div className="relative">
          
          {/* Glowing continuous pulse node indicator */}
          <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 z-20 flex items-center justify-center">
            <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#00a8ff]/30 animate-ping" />
            <span className="relative inline-flex rounded-none h-3 w-3 bg-[#00a8ff] shadow-[0_0_10px_rgba(0,168,255,0.8)]" />
          </div>

          {/* Fade-up Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0f1e] border border-[#00a8ff]/15 p-6 sm:p-8 rounded-[12px] hover:border-[#00a8ff]/30 hover:shadow-[0_10px_30px_rgba(0,168,255,0.03)] transition-all duration-300 relative group overflow-hidden"
          >
            {/* Hover decorative top line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00a8ff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              
              <div>
                {/* Period/Calendar */}
                <div className="flex items-center gap-2 text-[#00a8ff] font-mono text-xs tracking-wider uppercase mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{experienceData.period}</span>
                </div>

                {/* Company Name */}
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {experienceData.company}
                </h3>

                {/* Role / Subtitle */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-slate-400 font-mono text-xs tracking-wider uppercase">
                  <span>{experienceData.role}</span>
                  <span className="text-slate-600">//</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {experienceData.location}
                  </span>
                </div>
              </div>

              {/* Tag Marker */}
              <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 bg-[#00a8ff]/5 border border-[#00a8ff]/10 text-[#00a8ff] font-mono text-[10px] h-fit">
                <Sparkles className="w-3 h-3" />
                <span>TENURE_VERIFIED</span>
              </div>

            </div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {experienceData.points.map((point, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-slate-300 font-light text-sm sm:text-base leading-relaxed"
                >
                  <span className="mt-1.5 text-[#00a8ff] flex-shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current" />
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

          </motion.div>
        </div>

      </div>

    </section>
  );
}
