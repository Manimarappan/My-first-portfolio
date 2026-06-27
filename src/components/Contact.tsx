import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Terminal } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-[#00a8ff]" />,
      label: "Direct Email",
      value: "manieee323@gmail.com",
      href: "mailto:manieee323@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5 text-[#00a8ff]" />,
      label: "LinkedIn Professional",
      value: "linkedin.com/in/manimarappan",
      href: "https://linkedin.com/in/manimarappan"
    },
    {
      icon: <Github className="w-5 h-5 text-[#00a8ff]" />,
      label: "GitHub Account",
      value: "github.com/Manimarappan",
      href: "https://github.com/Manimarappan"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#00a8ff]" />,
      label: "Work Location",
      value: "Tamil Nadu, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative z-10">
      
      {/* Title Header */}
      <div className="mb-16 text-center">
        <span className="text-[#00a8ff] font-mono text-xs tracking-[0.2em] uppercase">// 05. REACH OUT</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tighter uppercase">Get In Touch</h2>
        <div className="w-12 h-1 bg-[#00a8ff] mt-4 mx-auto rounded-none" />
      </div>

      <div className="max-w-3xl mx-auto space-y-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Let's build something epic</h3>
          <p className="text-slate-400 text-base font-light leading-relaxed max-w-2xl mx-auto">
            Whether you want to discuss a Spring Boot application, integrate intelligent Gemini AI agents via LangChain, or talk about system deployments, feel free to reach out directly.
          </p>
        </motion.div>

        {/* Details list as a balanced grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {contactDetails.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ x: 4, borderColor: 'rgba(0,168,255,0.4)' }}
              className="flex items-center gap-4 p-4 bg-[#0a0f1e] border border-[#00a8ff]/15 rounded-[12px] transition-all duration-200 hover:bg-[#00a8ff]/[0.02] cursor-pointer"
            >
              <div className="p-2.5 bg-[#00a8ff]/5 border border-[#00a8ff]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-slate-200 hover:text-[#00a8ff] transition-colors break-all block">
                  {item.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Console logger block (centered, maximum width fit) */}
        <div className="max-w-md mx-auto p-4 bg-[#0a0f1e]/40 border border-white/5 font-mono text-[11px] text-slate-500 leading-relaxed text-left rounded-none">
          <div className="flex items-center gap-2 mb-1.5 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-[#00a8ff]" />
            <span>status_monitor.sh</span>
          </div>
          <span>[info] Ready to establish WebSocket/REST session.</span><br />
          <span>[info] Remote requests filtered for spam. TLS 1.3 active.</span>
        </div>

      </div>

    </section>
  );
}
