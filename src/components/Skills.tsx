import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Monitor, Database, Brain, Cpu, Sparkles, Terminal, Activity, Zap } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  orbit: number; // 1 to 5
  description: string;
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen size to scale the orbit system responsively
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set radii based on responsive breakpoints
  const baseRadii = isMobile 
    ? [45, 75, 105, 135, 165] // Mobile radii (max width: 330px)
    : [75, 130, 185, 240, 295]; // Desktop radii (max width: 590px)

  const SKILLS_DATA: Skill[] = [
    // Orbit 1: Backend Core
    {
      name: "Java",
      category: "Backend Core",
      level: "Expert",
      orbit: 1,
      description: "Mani's primary language. Extensively utilized in full-stack enterprise applications at Aroganam Technologies and IMF. Certified Full Stack Java Developer from JSpiders Institute."
    },
    {
      name: "J2EE",
      category: "Backend Core",
      level: "Expert",
      orbit: 1,
      description: "Leveraged enterprise Java capabilities (Servlets, JSP, JDBC, JNDI) to build robust database connections and modular web architectures."
    },
    {
      name: "Spring Boot",
      category: "Backend Core",
      level: "Expert",
      orbit: 1,
      description: "Designed and developed 300+ secure RESTful APIs for the Indian Mountain Foundation (IMF) Web Application. Handled token authorization, exception hierarchies, and integrated JPA/Hibernate."
    },
    {
      name: "REST API Design",
      category: "Backend Core",
      level: "Expert",
      orbit: 1,
      description: "Engineered high-concurrency endpoints with robust exception-handling, standardized JSON payloads, and clean resource routing."
    },
    {
      name: "OOP",
      category: "Backend Core",
      level: "Expert",
      orbit: 1,
      description: "Applied design patterns (Singleton, Factory, Builder), polymorphism, inheritance, and SOLID principles to write clean, reusable, and maintainable backend code."
    },
    {
      name: "Multithreading",
      category: "Backend Core",
      level: "Advanced",
      orbit: 1,
      description: "Configured concurrent executor pools, asynchronous processing, thread synchronization, and task scheduling for high-throughput background services."
    },
    {
      name: "Microservices",
      category: "Backend Core",
      level: "Advanced",
      orbit: 1,
      description: "Designed decoupled, scalable architectures using service discovery, centralized configuration, API gateways, and inter-service communication paradigms."
    },
    {
      name: "Middleware",
      category: "Backend Core",
      level: "Advanced",
      orbit: 1,
      description: "Established request interceptors, filters, security layers, logging pipelines, and unified response formatting for seamless data transformations."
    },

    // Orbit 2: Frontend & UI
    {
      name: "React",
      category: "Frontend & UI",
      level: "Expert",
      orbit: 2,
      description: "Engineered responsive pages for the ACET College Academic Portal (including NCC module) and built FocusFlow Productivity Planner with live synchronization. Expertise in custom components and Framer Motion."
    },
    {
      name: "Angular",
      category: "Frontend & UI",
      level: "Advanced",
      orbit: 2,
      description: "Developed high-fidelity, modular frontend listing structures for the PropertyLink Hub property management marketplace."
    },
    {
      name: "JavaScript",
      category: "Frontend & UI",
      level: "Expert",
      orbit: 2,
      description: "Developed clean, reactive event loops and dynamic page behaviors for modern, high-performance web applications."
    },
    {
      name: "HTML/CSS",
      category: "Frontend & UI",
      level: "Expert",
      orbit: 2,
      description: "Styled responsive, pixel-perfect user interfaces adhering to strict accessibility criteria and responsive design."
    },
    {
      name: "Agile",
      category: "Methodologies",
      level: "Advanced",
      orbit: 2,
      description: "Participated in daily stand-ups, sprint planning, backlog grooming, and retrospective meetings following strict Scrum frameworks."
    },
    {
      name: "SDLC",
      category: "Methodologies",
      level: "Advanced",
      orbit: 2,
      description: "End-to-end involvement in software engineering cycles from requirement gathering and architectural layout to unit testing and deployment."
    },

    // Orbit 3: Database & Networking
    {
      name: "MySQL",
      category: "Database Systems",
      level: "Expert",
      orbit: 3,
      description: "Designed robust database schemas, established relationships, optimized complex JOIN queries, and refactored native SQL queries to measurably reduce database response times."
    },
    {
      name: "ChromaDB",
      category: "Database Systems",
      level: "Advanced",
      orbit: 3,
      description: "Implemented vector database indexing for embedding storage and high-speed retrieval of document embeddings in RAG chatbot systems."
    },
    {
      name: "Schema Design",
      category: "Database Systems",
      level: "Expert",
      orbit: 3,
      description: "Normalized structural layouts for high-throughput databases ensuring referential integrity and strict field structures."
    },
    {
      name: "TCP/IP",
      category: "Networking Systems",
      level: "Advanced",
      orbit: 3,
      description: "Deep understanding of the transport/internet layer protocol suite, socket connections, packet routing, and network diagnostics."
    },
    {
      name: "HTTP/HTTPS",
      category: "Networking Systems",
      level: "Advanced",
      orbit: 3,
      description: "Managed secure communication, headers, cookies, status codes, REST handshakes, and SSL/TLS certificate configurations."
    },
    {
      name: "DNS",
      category: "Networking Systems",
      level: "Advanced",
      orbit: 3,
      description: "Configured custom domain name resolution, record types (A, CNAME, TXT), and mapped domain paths to cloud infrastructures."
    },

    // Orbit 4: AI & ML
    {
      name: "Python",
      category: "AI / ML & Engineering",
      level: "Advanced",
      orbit: 4,
      description: "Used as the core development language for AI/ML prototyping, document parsing scripts, and LangChain orchestration."
    },
    {
      name: "LangChain",
      category: "AI / ML & Engineering",
      level: "Advanced",
      orbit: 4,
      description: "Orchestrated advanced retrieval pipelines, document loaders, and conversational memory states to power intelligent RAG systems."
    },
    {
      name: "RAG",
      category: "AI / ML & Engineering",
      level: "Advanced",
      orbit: 4,
      description: "Implemented semantic search frameworks to enrich LLM context with precise document facts, preventing hallucinations."
    },
    {
      name: "Sentence Transformers",
      category: "AI / ML & Engineering",
      level: "Advanced",
      orbit: 4,
      description: "Generated precise semantic vector embeddings for document chunks using pre-trained sentence transformer models to match query contexts."
    },
    {
      name: "Gemini API",
      category: "AI / ML & Engineering",
      level: "Expert",
      orbit: 4,
      description: "Integrated Google Gemini LLMs to build secure PDF Q&A Chatbots. Enabled smart retrieval-augmented generation (RAG) capabilities with streaming responses."
    },
    {
      name: "Kafka",
      category: "AI / ML & Engineering",
      level: "Proficient",
      orbit: 4,
      description: "Familiar with distributed event streaming, topic subscriptions, producers, and consumer groups to enable loose architectural coupling."
    },

    // Orbit 5: DevOps & Tooling
    {
      name: "Docker",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Containerized application architectures to ensure seamless development-to-production parity across multi-tier environments."
    },
    {
      name: "Kubernetes",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Familiar with orchestrating container pods, defining service nodes, configuring ingress paths, and maintaining resilient deployments."
    },
    {
      name: "AWS EC2",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Led deployment workflows, provisioned server instances, configured security groups, and integrated automated deployments."
    },
    {
      name: "Nginx",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Configured high-performance reverse proxies, load balancing, and secure SSL handshakes for enterprise applications."
    },
    {
      name: "Jenkins",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Set up automated build pipelines, integrated lint checks, and managed continuous deployments on cloud environments."
    },
    {
      name: "CI/CD",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Designed continuous integration and delivery schedules to automate testing, build artifacts, and cloud staging workflows."
    },
    {
      name: "Git",
      category: "DevOps & Tooling",
      level: "Expert",
      orbit: 5,
      description: "Proficient in distributed version control, complex merging strategies, resolving conflicts, rebase procedures, and commit history cleanup."
    },
    {
      name: "GitHub",
      category: "DevOps & Tooling",
      level: "Expert",
      orbit: 5,
      description: "Managed secure version control systems, pull requests, collaborative merging, and branch protection policies."
    },
    {
      name: "Linux",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Extensive hands-on experience in server management, shell scripts, cron jobs, and background daemon execution."
    },
    {
      name: "JUnit 5",
      category: "DevOps & Tooling",
      level: "Expert",
      orbit: 5,
      description: "Authored comprehensive automated unit test suites validating backend logical pathways, boundary parameters, and assertion validations."
    },
    {
      name: "Mockito",
      category: "DevOps & Tooling",
      level: "Advanced",
      orbit: 5,
      description: "Isolated logical execution pathways by mocking persistent entities, simulating external dependencies, and verifying interaction counts."
    }
  ];

  // Define properties for each orbit layer
  const orbitConfigs = [
    { num: 1, name: "Backend Core", icon: <Server className="w-4 h-4 text-[#00a8ff]" />, duration: 40, direction: 'cw' },
    { num: 2, name: "Frontend & UI", icon: <Monitor className="w-4 h-4 text-[#00a8ff]" />, duration: 55, direction: 'ccw' },
    { num: 3, name: "Database Systems", icon: <Database className="w-4 h-4 text-[#00a8ff]" />, duration: 70, direction: 'cw' },
    { num: 4, name: "AI / ML & Engineering", icon: <Brain className="w-4 h-4 text-[#00a8ff]" />, duration: 85, direction: 'ccw' },
    { num: 5, name: "DevOps & Tooling", icon: <Cpu className="w-4 h-4 text-[#00a8ff]" />, duration: 100, direction: 'cw' }
  ];

  // Helper to retrieve skills belonging to a specific orbit
  const getSkillsForOrbit = (orbitNum: number) => {
    return SKILLS_DATA.filter(s => s.orbit === orbitNum);
  };

  // Helper to space nodes equally around the orbit ring (offsetting them slightly per orbit for aesthetic variety)
  const calculateAngle = (index: number, total: number, orbitNum: number) => {
    const offset = orbitNum * 25; // Phase offset per orbit
    return offset + (index * 360) / total;
  };

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative z-10">
      
      {/* Inline styles for high-fidelity coordinate rotations and play states */}
      <style>{`
        @keyframes orbit-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes node-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes node-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit-cw {
          animation: orbit-cw var(--duration, 40s) linear infinite;
        }
        .animate-orbit-ccw {
          animation: orbit-ccw var(--duration, 40s) linear infinite;
        }
        .animate-node-cw {
          animation: node-cw var(--duration, 40s) linear infinite;
        }
        .animate-node-ccw {
          animation: node-ccw var(--duration, 40s) linear infinite;
        }
        .paused-system {
          animation-play-state: paused !important;
        }
      `}</style>
      
      {/* Title Header */}
      <div className="mb-16">
        <span className="text-[#00a8ff] font-mono text-xs tracking-[0.2em] uppercase">// 02. TOOLKIT</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tighter uppercase">Skills Matrix</h2>
        <div className="w-12 h-1 bg-[#00a8ff] mt-4 rounded-none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Solar System / Constellation Map */}
        <div className="lg:col-span-7 flex items-center justify-center bg-[#0a0f1e]/20 border border-white/5 rounded-2xl p-4 sm:p-8 overflow-hidden h-[450px] sm:h-[550px] md:h-[650px] relative bg-[radial-gradient(circle_at_center,_rgba(0,168,255,0.025)_1px,_transparent_1px)] bg-[size:24px_24px]">
          
          {/* Subtle Outer Radar Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="border border-white/5 rounded-full w-[95%] h-[95%] aspect-square absolute" />
            <div className="border border-white/5 rounded-full w-[80%] h-[80%] aspect-square absolute" />
          </div>

          {/* Core Central Sun */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Pulsing Sun Core */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#050810] to-[#0a0f1e] border-2 border-[#00a8ff]/40 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,168,255,0.3)] select-none relative"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a8ff] animate-pulse" />
              <span className="font-mono text-[7px] sm:text-[8px] text-slate-400 tracking-wider uppercase mt-1">STACK</span>
            </motion.div>

            {/* Glowing outer rings pulsing away */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-[#00a8ff]/10 animate-ping [animation-duration:3s] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-[#00a8ff]/5 animate-ping [animation-duration:6s] pointer-events-none" />
          </div>

          {/* Render Orbit Rings & Moving Planet Nodes */}
          {orbitConfigs.map((orbit) => {
            const radius = baseRadii[orbit.num - 1];
            const skills = getSkillsForOrbit(orbit.num);
            const isOrbitHovered = hoveredSkill?.orbit === orbit.num;

            return (
              <React.Fragment key={orbit.num}>
                {/* Visual Orbit Path Ring - glows bright cyan if its node or the orbit is active */}
                <div 
                  className={`absolute rounded-full border border-dashed transition-colors duration-500 pointer-events-none ${
                    isOrbitHovered 
                      ? 'border-[#00a8ff]/40 bg-[#00a8ff]/[0.015] shadow-[0_0_20px_rgba(0,168,255,0.05)]' 
                      : 'border-[#white]/10'
                  }`}
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Rotating Orbit Container Layer */}
                <div 
                  className={`absolute top-1/2 left-1/2 pointer-events-none ${
                    orbit.direction === 'cw' ? 'animate-orbit-cw' : 'animate-orbit-ccw'
                  } ${hoveredSkill !== null ? 'paused-system' : ''}`}
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    '--duration': `${orbit.duration}s`,
                    zIndex: 10 + orbit.num,
                  } as React.CSSProperties}
                >
                  {/* Space out the planets along the orbit ring */}
                  {skills.map((skill, index) => {
                    const angle = calculateAngle(index, skills.length, orbit.num);
                    const isNodeHovered = hoveredSkill?.name === skill.name;

                    return (
                      <div 
                        key={skill.name}
                        className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12 flex items-center justify-center pointer-events-none"
                        style={{
                          transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                        }}
                      >
                        {/* Opposite rotation layer to keep text perfectly upright */}
                        <div 
                          className={`w-full h-full flex items-center justify-center pointer-events-none ${
                            orbit.direction === 'cw' ? 'animate-node-ccw' : 'animate-node-cw'
                          } ${hoveredSkill !== null ? 'paused-system' : ''}`}
                          style={{
                            '--duration': `${orbit.duration}s`,
                          } as React.CSSProperties}
                        >
                          {/* Skill Capsule Node */}
                          <div
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`group flex items-center gap-1.5 px-2 py-1 bg-[#050810]/95 border border-white/5 rounded-md backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer pointer-events-auto ${
                              isNodeHovered 
                                ? 'border-[#00a8ff] scale-110 shadow-[0_0_15px_rgba(0,168,255,0.3)] bg-[#00a8ff]/5 z-30' 
                                : 'hover:border-[#00a8ff]/40'
                            }`}
                          >
                            {skill.name === "Python" ? (
                              <svg 
                                className={`w-3.5 h-3.5 transition-transform duration-300 flex-shrink-0 ${
                                  isNodeHovered ? 'scale-110' : ''
                                }`} 
                                viewBox="0 0 448 512" 
                                fill="currentColor"
                                style={{ color: '#3776AB' }}
                              >
                                <path d="M439.4 153.8c-5.3-22-22.5-38.5-44.1-43.6C359.7 102 291 100.9 256 100.9c-2.3 0-4.6 0-6.9.1l-.3-35.4c0-23.7-18.8-43.2-42.3-43.6C163.6 21.2 119.2 21.1 76.2 22.4 51.5 23.2 31.4 41 27.5 65.5 21.2 104.9 21.3 147 21.3 186.2c0 35.8 0 71.6 1.8 107.4 1 20 14.7 36.8 33.7 41.6 42.4 10.7 114.3 11.5 148.9 11.5 2.1 0 4.2 0 6.3-.1l.3 35.4c0 23.7 18.8 43.2 42.3 43.6 42.9.8 87.3.9 130.3-.4 24.7-.8 44.8-18.6 48.7-43.1 6.3-39.4 6.2-81.5 6.2-120.7 0-35.8 0-71.6-1.8-107.4zm-332.6-47c-12.2 0-22-9.8-22-22s9.8-22 22-22 22 9.8 22 22-9.8 22-22 22zm234.2 296c-12.2 0-22-9.8-22-22s9.8-22 22-22 22 9.8 22 22-9.8 22-22 22z" />
                              </svg>
                            ) : (
                              <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isNodeHovered 
                                  ? 'bg-[#00a8ff] scale-125 shadow-[0_0_8px_#00a8ff]' 
                                  : 'bg-[#00a8ff]/60 group-hover:bg-[#00a8ff]'
                              }`} />
                            )}
                            <span className={`font-mono text-[9px] sm:text-[10px] tracking-wide whitespace-nowrap transition-colors duration-200 ${
                              isNodeHovered ? 'text-white font-bold' : 'text-slate-300 group-hover:text-white'
                            }`}>
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Column: Dynamic Tech Details / Profile Viewer Panel */}
        <div className="lg:col-span-5">
          <motion.div 
            layout
            className="bg-[#0a0f1e] border border-[#00a8ff]/15 rounded-[12px] p-6 sm:p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden shadow-2xl"
          >
            {/* Tech details accent corners */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00a8ff]/40" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00a8ff]/40" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#00a8ff]/40" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00a8ff]/40" />

            {/* Subtle top horizontal scanning rule */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00a8ff]/20 to-transparent" />

            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Category & Orbit level */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-[#00a8ff]/5 border border-[#00a8ff]/20 rounded-md">
                          {orbitConfigs[hoveredSkill.orbit - 1].icon}
                        </span>
                        <div>
                          <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">CATEGORY</span>
                          <span className="text-xs font-mono font-bold text-[#00a8ff] tracking-wide uppercase">
                            {hoveredSkill.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase block">ORBIT TIER</span>
                        <span className="text-xs font-mono font-bold text-slate-300 tracking-wider">
                          LAYER_0{hoveredSkill.orbit}
                        </span>
                      </div>
                    </div>

                    {/* Skill Title & Proficiency parameter */}
                    <div className="mt-5 space-y-4">
                      <h3 className="text-2xl font-black text-white tracking-tight uppercase flex items-center gap-2">
                        <span>{hoveredSkill.name}</span>
                        <motion.span 
                          animate={{ opacity: [0.4, 1, 0.4] }} 
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <Sparkles className="w-4 h-4 text-[#00a8ff]" />
                        </motion.span>
                      </h3>

                      {/* Customized Level Bar representation */}
                      <div className="space-y-1.5 bg-[#050810]/40 border border-white/5 p-3.5 rounded-lg">
                        <div className="flex justify-between font-mono text-[10px] text-slate-400 tracking-wider">
                          <span>SYSTEM_PROFICIENCY:</span>
                          <span className="text-[#00a8ff] font-bold">{hoveredSkill.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-none overflow-hidden flex gap-0.5">
                          <div className={`h-full flex-grow bg-[#00a8ff] shadow-[0_0_5px_#00a8ff] transition-all`} />
                          <div className={`h-full flex-grow transition-all ${
                            hoveredSkill.level === 'Expert' || hoveredSkill.level === 'Advanced' 
                              ? 'bg-[#00a8ff] shadow-[0_0_5px_#00a8ff]' 
                              : 'bg-slate-800'
                          }`} />
                          <div className={`h-full flex-grow transition-all ${
                            hoveredSkill.level === 'Expert' 
                              ? 'bg-[#00a8ff] shadow-[0_0_5px_#00a8ff]' 
                              : 'bg-slate-800'
                          }`} />
                        </div>
                      </div>

                      {/* Practical integration description */}
                      <p className="text-slate-300 text-sm font-light leading-relaxed pt-2">
                        {hoveredSkill.description}
                      </p>
                    </div>
                  </div>

                  {/* High-tech diagnostic terminal row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500 tracking-wider">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#00a8ff]/70" />
                      <span>DIAGNOSTIC: SECURE</span>
                    </span>
                    <span>100% ONLINE</span>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00a8ff] font-mono text-[10px] tracking-[0.2em] uppercase">
                      <Activity className="w-3.5 h-3.5 animate-pulse" />
                      <span>ORBITAL STATION STATUS: ACTIVE</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">System Map Guide</h3>
                    
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      Mani's professional stack is mapped as a slowly orbiting planetary structure:
                    </p>

                    <div className="space-y-3 pt-2 text-xs">
                      <div className="flex items-start gap-3 text-slate-300">
                        <span className="font-mono text-[#00a8ff] font-bold min-w-[50px]">INNER:</span>
                        <span>Backend Core microservices (Java, Spring Boot, REST APIs).</span>
                      </div>
                      <div className="flex items-start gap-3 text-slate-300">
                        <span className="font-mono text-[#00a8ff] font-bold min-w-[50px]">MID:</span>
                        <span>Responsive Frontend systems (React, Angular) & Database hubs (MySQL, ChromaDB).</span>
                      </div>
                      <div className="flex items-start gap-3 text-slate-300">
                        <span className="font-mono text-[#00a8ff] font-bold min-w-[50px]">OUTER:</span>
                        <span>Intelligent AI integrations (Gemini, RAG, LangChain) & secure cloud operations.</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs italic pt-4">
                      * Hover over or tap any planetary stack node to diagnose technical metrics, proficiency rates, and project integrations.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500 tracking-wider">
                    <span>AWAITING_INPUT</span>
                    <span>// STANDBY</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
