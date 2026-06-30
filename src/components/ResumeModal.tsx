import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, Linkedin, Github, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto flex justify-center items-start resume-modal-overlay"
        >
          {/* Print Stylesheet injection */}
          <style>{`
            @media print {
              /* Hide all other root elements from being printed */
              body > *:not(.resume-modal-overlay),
              #root > *:not(.resume-modal-overlay) {
                display: none !important;
              }

              /* Position the modal overlay to print naturally */
              .resume-modal-overlay {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                height: auto !important;
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                overflow: visible !important;
                display: block !important;
                z-index: auto !important;
              }

              /* Hide designated non-printable elements */
              .no-print {
                display: none !important;
              }

              /* Reformat the modal card itself for clean white print background */
              .resume-modal-card {
                background: white !important;
                border: none !important;
                box-shadow: none !important;
                width: 100% !important;
                max-width: none !important;
                margin: 0 !important;
                padding: 0 !important;
                display: block !important;
                overflow: visible !important;
              }

              /* Clean up the scroll/background area */
              .resume-modal-body {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                overflow: visible !important;
                display: block !important;
              }

              /* Ensure print container occupies the entire printable area without clipping */
              #print-resume-content {
                position: relative !important;
                width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                box-shadow: none !important;
                background: white !important;
                color: #000000 !important;
                display: block !important;
                overflow: visible !important;
              }
              
              /* Reset margins and shadows for print */
              .print-container {
                box-shadow: none !important;
                border: none !important;
                background: white !important;
                color: black !important;
                font-size: 11pt !important;
                line-height: 1.4 !important;
              }
              .print-dark-text {
                color: #1a1a1a !important;
              }
              .print-muted-text {
                color: #555555 !important;
              }
              .print-blue-text {
                color: #0066cc !important;
              }
              .print-border {
                border-color: #cccccc !important;
              }
            }
          `}</style>

          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="bg-[#0f1629] border border-[#00a8ff]/20 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col overflow-hidden resume-modal-card my-4"
          >
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0a0f1e] flex-shrink-0 no-print">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00a8ff] rounded-none animate-pulse" />
                <h3 className="font-mono text-sm font-bold text-white tracking-wider uppercase">Interactive Resume</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00a8ff]/10 hover:bg-[#00a8ff] border border-[#00a8ff]/30 text-[#00a8ff] hover:text-[#050810] font-mono text-xs transition-all duration-200 cursor-pointer"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT / SAVE PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 border border-white/10 hover:border-rose-500/40 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                  aria-label="Close Resume"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Area with PDF preview rendering */}
            <div className="p-4 sm:p-8 bg-[#050810] flex justify-center items-start overflow-hidden resume-modal-body">
              
              {/* Document Container: Recreates the resume exactly in polished print format */}
              <div 
                id="print-resume-content"
                className="w-full max-w-[210mm] bg-white text-slate-800 p-6 sm:p-10 my-4 shadow-2xl border border-slate-200 font-sans print-container text-left"
              >
                {/* Header */}
                <div className="text-center space-y-3 pb-6 border-b border-slate-300 print-border">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-sans">
                    Mani Marappan
                  </h1>
                  
                  {/* Contact Info Row */}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-slate-700 font-medium font-sans print-muted-text">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-500" />
                      +91 98941 07281
                    </span>
                    <span className="text-slate-300 print-border">|</span>
                    <a href="mailto:manieee323@gmail.com" className="flex items-center gap-1 hover:text-[#0066cc]">
                      <Mail className="w-3 h-3 text-slate-500" />
                      manieee323@gmail.com
                    </a>
                    <span className="text-slate-300 print-border">|</span>
                    <a href="https://linkedin.com/in/manimarappan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#0066cc]">
                      <Linkedin className="w-3 h-3 text-slate-500" />
                      linkedin.com/in/manimarappan
                    </a>
                    <span className="text-slate-300 print-border">|</span>
                    <a href="https://github.com/Manimarappan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#0066cc]">
                      <Github className="w-3 h-3 text-slate-500" />
                      github.com/Manimarappan
                    </a>
                  </div>
                </div>

                {/* WORK EXPERIENCE */}
                <div className="mt-6 space-y-5">
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase border-b-2 border-slate-800 pb-1 font-sans">
                    WORK EXPERIENCE
                  </h2>

                  <div className="space-y-4">
                    {/* Aroganam Technologies */}
                    <div>
                      <div className="flex justify-between items-baseline font-semibold text-slate-900">
                        <span className="text-sm font-bold">Aroganam Technologies Pvt Ltd</span>
                        <span className="text-xs text-slate-700 print-muted-text">Coimbatore, Tamil Nadu</span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs text-slate-700 font-medium mt-0.5">
                        <span className="font-bold text-slate-800">Full Stack Developer</span>
                        <span className="text-slate-700 print-muted-text">Mar 2025 — Apr 2026</span>
                      </div>

                      {/* Sub-module: ACET College */}
                      <div className="mt-3">
                        <div className="flex justify-between items-baseline text-xs font-bold text-slate-800">
                          <span>ACET College Academic Portal</span>
                          <span className="font-mono text-[10px] text-slate-500">React</span>
                        </div>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-slate-700 print-muted-text">
                          <li>Built and owned the National Cadet Corps (NCC) module end-to-end — developed responsive React pages featuring dynamic image and name updates pulled from live APIs, and implemented client-side form validation.</li>
                          <li>Engineered reusable React UI components across the portal to ensure consistent layout and mobile-first responsiveness, improving student engagement with real-time academic information.</li>
                          <li>Integrated frontend pages with backend REST APIs to synchronise dynamic content, significantly reducing manual data-entry errors.</li>
                        </ul>
                      </div>

                      {/* Sub-module: Indian Mountain Foundation */}
                      <div className="mt-3">
                        <div className="flex justify-between items-baseline text-xs font-bold text-slate-800">
                          <span>Indian Mountain Foundation (IMF) Web Application</span>
                          <span className="font-mono text-[10px] text-slate-500">Spring Boot, React, MySQL</span>
                        </div>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-slate-700 print-muted-text">
                          <li>Served as the primary Middleware / Spring Boot engineer, designing and building 300+ RESTful APIs covering authentication, input validation, exception handling, and file upload/download.</li>
                          <li>Optimised MySQL performance by refactoring JOIN queries and writing native queries, measurably reducing API response times and overall page load time.</li>
                          <li>Designed the database schema, establishing JPA/Hibernate entity relationships and ensuring referential integrity across all modules.</li>
                          <li>Contributed to frontend React components and API integration, and led the AWS EC2 deployment, configuring Nginx reverse-proxy and maintaining version control workflows on GitHub.</li>
                          <li>Integrated third-party APIs and implemented cron-based scheduling for automated background tasks (reminders, report generation).</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

                {/* PROJECTS */}
                <div className="mt-6 space-y-4">
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase border-b-2 border-slate-800 pb-1 font-sans">
                    PROJECTS
                  </h2>

                  <div className="space-y-3 text-xs">
                    {/* PDF Q&A Chatbot */}
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>PDF Q&A Chatbot – RAG Application</span>
                        <span className="font-mono text-[10px] text-slate-500">Github</span>
                      </div>
                      <p className="text-slate-700 print-muted-text mt-1">
                        Built a Retrieval-Augmented Generation (RAG) chatbot that answers questions from any PDF using <strong className="font-semibold text-slate-800">LangChain, ChromaDB, Sentence Transformers</strong>, and <strong className="font-semibold text-slate-800">Gemini API</strong>; deployed with a Gradio chat UI.
                      </p>
                    </div>

                    {/* FocusFlow */}
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>FocusFlow – Personal Productivity Planner</span>
                        <span className="font-mono text-[10px] text-slate-500">Live</span>
                      </div>
                      <p className="text-slate-700 print-muted-text mt-1">
                        Built a full-featured productivity planner for tasks, schedules, and learning goals using <strong className="font-semibold text-slate-800">React</strong> and <strong className="font-semibold text-slate-800">Firebase</strong> — provides real-time data sync and an interactive dashboard.
                      </p>
                    </div>

                    {/* PropertyLink Hub */}
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>PropertyLink Hub – Property Management Platform</span>
                        <span className="font-mono text-[10px] text-slate-500">Github</span>
                      </div>
                      <p className="text-slate-700 print-muted-text mt-1">
                        Developed a property listing platform connecting owners with buyers/renters; built responsive <strong className="font-semibold text-slate-800">Angular</strong> frontend and <strong className="font-semibold text-slate-800">Spring Boot REST APIs</strong> backed by a normalised MySQL database.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TECHNICAL SKILLS */}
                <div className="mt-6 space-y-3">
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase border-b-2 border-slate-800 pb-1 font-sans">
                    TECHNICAL SKILLS
                  </h2>

                  <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Languages</strong>
                      <span className="text-slate-700 print-muted-text">Java, J2EE, Python</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Backend</strong>
                      <span className="text-slate-700 print-muted-text">Spring Boot, REST API Design, Middleware, Microservices, Multithreading, OOP</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Frontend</strong>
                      <span className="text-slate-700 print-muted-text">React, Angular</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Databases</strong>
                      <span className="text-slate-700 print-muted-text">MySQL (schema design, native queries, optimisation), ChromaDB</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Cloud & DevOps</strong>
                      <span className="text-slate-700 print-muted-text">Docker, Kubernetes, AWS EC2, Nginx, Jenkins, CI/CD, Git, GitHub, Linux</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Messaging / AI</strong>
                      <span className="text-slate-700 print-muted-text">Kafka (familiar), LangChain, RAG, Sentence Transformers, Gemini API</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Testing</strong>
                      <span className="text-slate-700 print-muted-text">JUnit 5, Mockito</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Networking</strong>
                      <span className="text-slate-700 print-muted-text">TCP/IP, HTTP/HTTPS, REST, DNS</span>
                    </div>
                    <div>
                      <strong className="font-bold text-slate-950 w-36 inline-block">Methodologies</strong>
                      <span className="text-slate-700 print-muted-text">Agile, SDLC</span>
                    </div>
                  </div>
                </div>

                {/* ACHIEVEMENTS */}
                <div className="mt-6 space-y-3">
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase border-b-2 border-slate-800 pb-1 font-sans">
                    ACHIEVEMENTS
                  </h2>
                  <ul className="list-disc pl-4 text-xs text-slate-700 print-muted-text space-y-1">
                    <li>Secured <strong className="font-bold text-slate-800">2<sup>nd</sup> Place</strong> in departmental technical competition during 1<sup>st</sup> year.</li>
                    <li>Secured <strong className="font-bold text-slate-800">1<sup>st</sup> Place</strong> in a technical event at Sona Institute of Technology, outperforming participants from multiple colleges.</li>
                  </ul>
                </div>

                {/* EDUCATION */}
                <div className="mt-6 space-y-3">
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase border-b-2 border-slate-800 pb-1 font-sans">
                    EDUCATION
                  </h2>
                  <div className="text-xs">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>RP Sarathy Institute of Technology</span>
                      <span>2020 — 2024</span>
                    </div>
                    <div className="flex justify-between text-slate-700 print-muted-text mt-0.5">
                      <span>B.E. Electronics and Electrical Engineering</span>
                      <span className="font-medium text-slate-800">Percentage: 81%</span>
                    </div>
                  </div>
                </div>

                {/* CERTIFICATIONS */}
                <div className="mt-6 space-y-3">
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase border-b-2 border-slate-800 pb-1 font-sans">
                    CERTIFICATIONS
                  </h2>
                  <ul className="list-disc pl-4 text-xs text-slate-700 print-muted-text space-y-1">
                    <li>
                      <strong className="font-bold text-slate-800">Full Stack Java Developer</strong> — JSpiders Institute, Bangalore 
                      <span className="text-slate-500 italic block mt-0.5 sm:inline sm:mt-0"> (Core Java, Spring Boot, React, MySQL, AWS)</span>
                    </li>
                    <li className="mt-1">
                      <strong className="font-bold text-slate-800">CS50 Introduction to Cybersecurity</strong> — HarvardX / edX 
                      <span className="text-slate-500 italic block mt-0.5 sm:inline sm:mt-0"> (Network Security, Web Vulnerabilities, Cryptography)</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
