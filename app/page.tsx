"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download, Code2, Database, Server } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Props type for Navbar
type NavbarProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

// Navbar Component
const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ['home', 'about', 'projects', 'resume', 'contact'];
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-[#0B3954]"
          >
            YP
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`capitalize transition-colors ${
                  currentPage === item 
                    ? 'text-[#0B3954] font-semibold' 
                    : 'text-gray-600 hover:text-[#0B3954]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setIsOpen(false);
                }}
                className={`block w-full text-left capitalize ${
                  currentPage === item 
                    ? 'text-[#0B3954] font-semibold' 
                    : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-8 mt-20">
    <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
      <p>© 2025 Yash Pandit.</p>
      <p className="mt-2 text-sm"> Privacy. No tracking. No cookies.</p>
    </div>
  </footer>
);

// Section Title Component
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    {...fadeInUp}
    className="text-4xl font-bold text-[#0B3954] mb-8 text-center"
  >
    {children}
  </motion.h2>
);

// Project Card Component
const ProjectCard = ({ title, description, tech }: { title: string; description: string; tech: string[] }) => (
  <motion.div
    {...fadeInUp}
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-bold text-[#0B3954]">{title}</h3>
      <Code2 className="text-[#0B3954]" size={24} />
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

// Home Page
const HomePage = () => (
  <motion.div 
    initial="initial"
    animate="animate"
    variants={staggerContainer}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="text-center max-w-4xl px-6">
      <motion.div {...fadeInUp} className="mb-6">
        <img 
          src="/icon.png" 
          alt="Yash Pandit" 
          className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-[#0B3954]"
        />
      </motion.div>
      
      <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold text-[#0B3954] mb-4">
        Yash Pandit
      </motion.h1>
      
      <motion.p {...fadeInUp} className="text-xl text-gray-600 mb-6">
        Full Stack Developer & QA Tester | Node.js, React, API Testing
      </motion.p>
      
      <motion.p {...fadeInUp} className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
       I keep things simple and maintainable. I'm early in my career and learning with every project.
      </motion.p>
      
      <motion.div {...fadeInUp} className="flex gap-4 justify-center">
        <a 
          href="mailto:yash.pandit.dev01@gmail.com"
          className="px-6 py-3 bg-[#0B3954] text-white rounded-lg hover:bg-[#0B3954]/90 transition-colors flex items-center gap-2"
        >
          <Mail size={20} />
          Get in Touch
        </a>
        <a 
          href="https://github.com/k1ndessforever"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-[#0B3954] text-[#0B3954] rounded-lg hover:bg-[#0B3954] hover:text-white transition-colors flex items-center gap-2"
        >
          <Github size={20} />
          View GitHub
        </a>
      </motion.div>
    </div>
  </motion.div>
);

// About Page
const AboutPage = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <SectionTitle>About Me</SectionTitle>
    
    <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-md mb-8">
      <p className="text-lg text-gray-700 mb-6">
       Full-stack developer and QA tester from Maharashtra, India.

I build backends with Node.js and Express, frontends with React and Next.js, and test web applications manually. I also do API testing using Postman.

      </p>
      
      <p className="text-lg text-gray-700 mb-6">
      I focus on reliable code and clear bug documentation. Still learning and growing with each project.
      </p>
    </motion.div>
    
    <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <Server className="mx-auto mb-4 text-[#0B3954]" size={48} />
        <h3 className="font-bold text-lg mb-2">Backend</h3>
        <p className="text-gray-600">Node.js, Express, REST APIs</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <Code2 className="mx-auto mb-4 text-[#0B3954]" size={48} />
        <h3 className="font-bold text-lg mb-2">Frontend</h3>
        <p className="text-gray-600">React, Next.js, Tailwind CSS</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <Database className="mx-auto mb-4 text-[#0B3954]" size={48} />
        <h3 className="font-bold text-lg mb-2">Database</h3>
        <p className="text-gray-600">PostgreSQL, NeonPostgres</p>
      </div>
    </motion.div>
  </div>
);

// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: "VetFinder",
      description: "Locate nearby veterinarians for animals with no login required. Simple, fast, and privacy-focused animal care locator.",
      tech: ["React", "Node.js", "NeonPostgres", "Express"]
    },
    {
      title: "OneMeal",
      description: "Organizes stray animal feeding schedules and connects volunteers. Helping communities care for animals in need.",
      tech: ["Node.js", "Express", "NeonPostgres", "REST API"]
    },
    {
      title: "TaskVerse",
      description: "Minimal task tracker for developers who value simplicity. Clean interface, fast performance, no bloat.",
      tech: ["Next.js", "Express", "NeonPostgres", "Tailwind CSS"]
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle>Projects</SectionTitle>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

// Resume Page
const ResumePage = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <SectionTitle>Resume</SectionTitle>
    
    <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">View or download my resume below</p>
        <a
          href="/resume.html"
          download
          className="px-4 py-2 bg-[#0B3954] text-white rounded-lg hover:bg-[#0B3954]/90 transition-colors flex items-center gap-2"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume PDF"
        />
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        Note: You can see my resume here or download it for offline viewing
      </p>
    </motion.div>
  </div>
);

// Contact Page
const ContactPage = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <SectionTitle>Get in Touch</SectionTitle>
    
    <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-md text-center">
      <p className="text-lg text-gray-700 mb-8">
        I'm always open to discussing new projects, opportunities, or just having a chat about technology.
      </p>
      
      <div className="space-y-6">
        <a
          href="mailto:yash.pandit.dev01@gmail.com"
          className="flex items-center justify-center gap-3 text-lg text-[#0B3954] hover:underline"
        >
          <Mail size={24} />
          yash.pandit.dev01@gmail.com
        </a>
        
        <a
          href="https://github.com/k1ndnessforever"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-lg text-[#0B3954] hover:underline"
        >
          <Github size={24} />
          github.com/k1ndnessforever
        </a>
        
        <a
          href="https://www.linkedin.com/in/yash-pandit-73b232270/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-lg text-[#0B3954] hover:underline"
        >
          <Linkedin size={24} />
          linkedin.com/in/yashpandit
        </a>
      </div>
    </motion.div>
  </div>
);

// Main App Component
export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'projects': return <ProjectsPage />;
      case 'resume': return <ResumePage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };
  
  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
