import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Github, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

// 3D Tilt Card Component
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid animation
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative position from center (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative bg-[#0f1629] border border-[#00a8ff]/15 rounded-[16px] p-6 flex flex-col justify-between overflow-hidden h-full group select-none transition-colors duration-300 hover:border-[#00a8ff]/45 hover:shadow-[0_0_30px_rgba(0,168,255,0.08)]"
    >
      {/* Subtle blue overlay mask on hover */}
      <div className="absolute inset-0 bg-[#00a8ff]/[0.01] pointer-events-none group-hover:bg-[#00a8ff]/[0.03] transition-colors duration-300" />

      <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
        {/* Top bar with action links */}
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-mono text-[10px] tracking-wider uppercase">// PROJECT_NODE</span>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github.startsWith('http') ? project.github : `https://${project.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-[#00a8ff] hover:bg-white/5 border border-white/5 hover:border-[#00a8ff]/30 transition-all rounded-lg"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live.startsWith('http') ? project.live : `https://${project.live}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-[#00a8ff] hover:bg-white/5 border border-white/5 hover:border-[#00a8ff]/30 transition-all rounded-lg"
                title="View Live Site"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Name & Details */}
        <div className="space-y-2">
          <h3 className="text-[17px] font-bold text-white tracking-tight uppercase group-hover:text-[#00a8ff] transition-colors">
            {project.title}
          </h3>
          <p className="text-[13px] text-slate-400 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tech pills section */}
      <div style={{ transform: "translateZ(20px)" }} className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] font-mono border border-[#00a8ff]/10 bg-[#00a8ff]/5 text-[#00a8ff] tracking-wide uppercase rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500 tracking-wider">
          <span>// STATUS: ACTIVE</span>
          <span>// OK</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projectsData: Project[] = [
    {
      title: "PDF Q&A RAG Chatbot",
      description: "A secure retrieval-augmented generation chatbot that reads scanned or raw PDFs, parses document contents, embeds vectors into a local ChromaDB store, and streams prompt responses securely utilizing Gemini LLMs.",
      tech: ["Python", "LangChain", "ChromaDB", "Gemini API", "Gradio"],
      github: "github.com/Manimarappan/my-rag-app",
    },
    {
      title: "Indian Mountain Foundation",
      description: "An enterprise-grade, high-concurrency mountaineering platform. Built 300+ REST APIs managing token authorization, hierarchical memberships, document storage vaults, cron notifications, and hosted securely on AWS EC2.",
      tech: ["Spring Boot", "React", "MySQL", "AWS EC2", "Nginx"],
    },
    {
      title: "FocusFlow Productivity Planner",
      description: "A highly responsive real-time visual productivity tool designed with instant state synchronization, customized workspace modules, and responsive deadline-tracking structures.",
      tech: ["React", "Firebase", "Vercel"],
      live: "focus-flow-personal-task-manager.vercel.app",
    },
    {
      title: "PropertyLink Hub",
      description: "An optimized modern marketplace mapping properties. Streamlines database criteria searches, handles direct peer interactions, and parses complex dynamic layout listings.",
      tech: ["Angular", "Spring Boot", "MySQL"],
      github: "github.com/Manimarappan/no-bro.git",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative z-10">
      
      {/* Title Header */}
      <div className="mb-16">
        <span className="text-[#00a8ff] font-mono text-xs tracking-[0.2em] uppercase">// 04. CREATIONS</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tighter uppercase">Featured Projects</h2>
        <div className="w-12 h-1 bg-[#00a8ff] mt-4 rounded-none" />
      </div>

      {/* Grid of 3D Tilt Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectsData.map((project, idx) => (
          <motion.div key={project.title} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
