import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, MapPin, ShieldAlert, Trophy, Bot, Sparkles } from 'lucide-react';

export default function About() {
  const cardData = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#00a8ff]" />,
      title: "Education",
      subtitle: "B.E. EEE",
      description: "RP Sarathy Institute (81%)",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#00a8ff]" />,
      title: "Role",
      subtitle: "Full Stack Developer",
      description: "@ Aroganam Technologies",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#00a8ff]" />,
      title: "Location",
      subtitle: "Tamil Nadu, India",
      description: "Open to Remote",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#00a8ff]" />,
      title: "Certifications",
      subtitle: "CS50 Cybersecurity",
      description: "HarvardX Professional Cert",
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#00a8ff]" />,
      title: "Achievement",
      subtitle: "1st Place Awardee",
      description: "Sona Institute Tech Event",
    },
    {
      icon: <Bot className="w-5 h-5 text-[#00a8ff]" />,
      title: "Latest Project",
      subtitle: "RAG PDF Chatbot",
      description: "Configured via Gemini API",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative z-10">
      
      {/* Title Header */}
      <div className="mb-16">
        <span className="text-[#00a8ff] font-mono text-xs tracking-[0.2em] uppercase">// 01. WHO I AM</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tighter uppercase">About Me</h2>
        <div className="w-12 h-1 bg-[#00a8ff] mt-4 rounded-none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Text Slide In */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00a8ff]/5 border border-[#00a8ff]/20 text-[#00a8ff] font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>BIO OVERVIEW</span>
          </div>

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            I'm a <span className="text-white font-medium">Full Stack Java Developer</span> with 1+ year building enterprise applications at <span className="text-white font-medium">Aroganam Technologies</span>.
          </p>

          <p className="text-base text-slate-400 font-light leading-relaxed space-y-4">
            During my tenure, I designed and optimized <span className="text-[#00a8ff] font-medium">300+ RESTful APIs</span> for the Indian Mountain Foundation platform, ensuring secure database communication and fast payload delivery. 
          </p>

          <p className="text-base text-slate-400 font-light leading-relaxed">
            Recently, I built my first <span className="text-white font-medium">RAG (Retrieval-Augmented Generation) chatbot</span> using LangChain and Gemini API — which serves as my entry into production AI engineering.
          </p>

          {/* Console block decoration */}
          <div className="p-4 bg-[#0a0f1e]/40 border border-white/5 font-mono text-xs text-slate-500 leading-relaxed rounded-none">
            <span className="text-[#00a8ff] font-bold">mani@aroganam:~$</span> cat achievement_logs.md<br />
            <span className="text-slate-400">&gt; Indian Mountain Foundation REST integrations complete.</span><br />
            <span className="text-slate-400">&gt; Vector store indexing optimized successfully.</span>
          </div>
        </motion.div>

        {/* Right column: Info Cards Grid with delay */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {cardData.map((card, idx) => (
            <motion.div
              key={card.title}
              whileHover={{ 
                scale: 1.02, 
                borderColor: 'rgba(0, 168, 255, 0.4)',
                boxShadow: '0 0 20px rgba(0, 168, 255, 0.08)' 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-5 bg-[#0a0f1e] border border-[#00a8ff]/15 rounded-[12px] flex items-start gap-4"
            >
              <div className="p-2.5 bg-[#00a8ff]/5 border border-[#00a8ff]/15 rounded-lg flex items-center justify-center">
                {card.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                  {card.title}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                  {card.subtitle}
                </h4>
                <p className="text-xs text-slate-400 font-light">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
