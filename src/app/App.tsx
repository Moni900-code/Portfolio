import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ProcessStep } from './components/ProcessStep';
import { AnimatedButton } from './components/AnimatedButton';
import { Hero3DAnimation } from './components/Hero3DAnimation';
import { ScrollBased3DElement } from './components/ScrollBased3DElement';
import { HorizontalScroll } from './components/HorizontalScroll';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudy } from './components/CaseStudy';
import { CaseStudiesLanding } from './components/CaseStudiesLanding';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [viewingCaseStudy, setViewingCaseStudy] = useState<number | null>(null);
  const [showCaseStudiesLanding, setShowCaseStudiesLanding] = useState(false);

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Download resume
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Lailatul_Husna_Monika_Resume.pdf';
    link.download = 'Lailatul_Husna_Monika_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzMwMjYyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'HealthTrack',
      category: 'Fitness Mobile App',
      tools: ['Figma', 'FigJam', 'Auto Layout', 'Prototyping', 'Components'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwbW9iaWxlJTIwZGVzaWdufGVufDF8fHx8MTc3MzAyODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'PayFlow',
      category: 'Banking Mobile App',
      tools: ['Figma', 'Variables', 'Design System', 'Smart Animate', 'Plugins'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlJTIwc2NyZWVufGVufDF8fHx8MTc3MzAyODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'MindfulMe',
      category: 'Meditation Mobile App',
      tools: ['Figma', 'Interactive Components', 'Dev Mode', 'FigJam AI'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTc4NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'FoodExpress',
      category: 'Food Delivery App',
      tools: ['Figma', 'Prototyping', 'Components', 'Variables', 'Auto Layout'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NzI5NTM1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'ShopEase',
      category: 'E-Commerce App',
      tools: ['Figma', 'Design System', 'Smart Animate', 'FigJam', 'Plugins'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1759460336001-0a8cce4e5c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MjkwODIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'TravelHub',
      category: 'Travel Booking App',
      tools: ['Figma', 'Auto Layout', 'Prototyping', 'Dev Mode', 'Components'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMHVpfGVufDF8fHx8MTc3MzAyODkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'ConnectPlus',
      category: 'Social Media App',
      tools: ['Figma', 'Interactive Components', 'Variables', 'FigJam AI'],
      behanceUrl: 'https://behance.net'
    },
    {
      image: 'https://images.unsplash.com/photo-1762222687051-4c9926eba36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMwMjg5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'SoundWave',
      category: 'Music Streaming App',
      tools: ['Figma', 'Smart Animate', 'Design System', 'Prototyping'],
      behanceUrl: 'https://behance.net'
    }
  ];

  const skills = {
    'UX Research': ['User Interviews', 'Usability Testing', 'A/B Testing', 'Data Analysis'],
    'Design Systems': ['Component Libraries', 'Design Tokens', 'Documentation', 'Accessibility'],
    'Prototyping': ['High-Fidelity Mockups', 'Interactive Prototypes', 'Micro-interactions'],
    'Interaction Design': ['User Flows', 'Information Architecture', 'Responsive Design'],
  };

  // If viewing case studies landing, render landing page
  if (showCaseStudiesLanding && viewingCaseStudy === null) {
    return (
      <CaseStudiesLanding
        projects={projects}
        onBack={() => setShowCaseStudiesLanding(false)}
        onSelectCaseStudy={(index) => {
          setViewingCaseStudy(index);
          setShowCaseStudiesLanding(false);
        }}
      />
    );
  }

  // If viewing case study, render case study component
  if (viewingCaseStudy !== null) {
    return (
      <CaseStudy
        project={projects[viewingCaseStudy]}
        onBack={() => {
          if (showCaseStudiesLanding) {
            setViewingCaseStudy(null);
          } else {
            setViewingCaseStudy(null);
          }
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#061512] text-[#F8FAF9] font-['Inter',sans-serif]">
      {/* Scroll-based 3D Element */}
      <ScrollBased3DElement />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden min-h-screen flex items-center">
        {/* Gradient Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#A8D5BA]/20 via-[#00FFB2]/10 to-[#7CFFCB]/10 rounded-full blur-3xl" />
        
        {/* 3D Animation Layer */}
        <Hero3DAnimation />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="max-w-[800px] mx-auto text-center">
            {/* 3D Profile Image */}
            <div className="mb-8 flex justify-center">    
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFB2] via-[#7CFFCB] to-[#00FF9D] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* 3D Image Container */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#00FFB2]/30 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2" style={{ 
                  boxShadow: '0 25px 50px -12px rgba(0, 255, 178, 0.25), inset 0 2px 4px 0 rgba(0, 255, 178, 0.1)',
                  transform: 'perspective(1000px) rotateY(0deg)'
                }}>
                  <ImageWithFallback
                    src="https://i.pinimg.com/736x/d1/1f/67/d11f676a758327ffe6432c79ed83d388.jpg"
                    alt="Lailatul Husna Monika"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Floating rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#7CFFCB]/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-4 rounded-full border border-[#00FFB2]/10" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-4 text-[#F8FAF9] leading-tight">
              Lailatul Husna Monika
            </h1>
            <p className="text-2xl text-[#00FFB2] mb-6 font-medium">
              UI | UX Designer
            </p>
            <p className="text-xl text-[#B9FFD9] mb-10 leading-relaxed">
              Designing data-driven experiences that solve complex business problems and drive measurable impact for enterprise products.
            </p>
            
            <div className="flex gap-4 justify-center">
              <AnimatedButton onClick={() => setShowCaseStudiesLanding(true)}>View Case Studies</AnimatedButton>
              <button className="px-8 py-4 border-2 border-[#0A3D2A] rounded-xl font-medium text-[#E8FFF4] hover:border-[#00FFB2]/50 hover:text-[#00FFB2] transition-all duration-300 flex items-center gap-2" onClick={handleResumeDownload}>
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div> 
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 relative overflow-hidden" id="projects-section">
        <div className="relative z-10">
          <div className="mb-8 text-center px-6">
            <h2 className="text-4xl font-bold text-[#F8FAF9] mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-[#A9C3BB] max-w-[600px] mx-auto">
              Real-world projects solving business challenges through research-driven design.
            </p>
          </div>
          
          {/* Horizontal Auto-scrolling Cards with Curve */}
          <HorizontalScroll>
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}-${project.title}`}
                {...project} 
                onCardClick={() => setSelectedProject(index)}
              />
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#E8FFF4] mb-4">
              Design Process
            </h2>
            <p className="text-lg text-[#7CFFCB]/70 max-w-[600px] mx-auto">
              A structured approach to solving problems and delivering results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
            <ProcessStep number="01" title="Research" color="#00FFB2" />
            <ProcessStep number="02" title="Define" color="#3DFFBD" />
            <ProcessStep number="03" title="Wireframe" color="#52FFB8" />
            <ProcessStep number="04" title="Prototype" color="#7CFFCB" />
            <ProcessStep number="05" title="Test" color="#A8FFDB" />
            <ProcessStep number="06" title="Iterate" color="#00FF9D" isLast />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        {/* Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00FFB2]/5 via-[#7CFFCB]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-[#052217] border border-[#0A3D2A] rounded-full text-sm text-[#00FFB2] mb-6 font-medium tracking-wide">
              ABOUT ME
            </span>
            <h2 className="text-5xl font-bold text-[#E8FFF4] mb-6">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg text-[#7CFFCB]/70 max-w-[700px] mx-auto">
              Transforming complex challenges into elegant solutions through design thinking and user-centered methodology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl backdrop-blur-sm hover:border-[#00FFB2]/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FFB2] to-[#7CFFCB] flex items-center justify-center text-[#061512] font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                    8+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E8FFF4] mb-2">Years of Experience</h3>
                    <p className="text-[#B9FFD9] leading-relaxed">
                      Creating enterprise solutions for Fortune 500 companies, specializing in transforming complex workflows into intuitive experiences.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl backdrop-blur-sm hover:border-[#00FFB2]/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7CFFCB] to-[#00FF9D] flex items-center justify-center text-[#061512] font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                    ∞
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E8FFF4] mb-2">Data-Driven Approach</h3>
                    <p className="text-[#B9FFD9] leading-relaxed">
                      Combining quantitative data analysis with qualitative user research to ensure evidence-backed design decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl backdrop-blur-sm hover:border-[#00FFB2]/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FF9D] to-[#00FFB2] flex items-center justify-center text-[#061512] font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                    M+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E8FFF4] mb-2">Global Impact</h3>
                    <p className="text-[#B9FFD9] leading-relaxed">
                      Led design initiatives at Salesforce, IBM, and Microsoft, impacting millions of users worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Skills */}
            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#00FFB2] to-[#7CFFCB] rounded-full" />
                  Core Competencies
                </h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items], index) => (
                    <div key={index} className="group">
                      <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00FFB2] group-hover:scale-150 transition-transform" />
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 bg-[#061512] border border-[#0A3D2A] rounded-lg text-sm text-[#B9FFD9] hover:border-[#00FFB2]/50 hover:bg-[#052217] transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        {/* Background Gradient */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#7CFFCB]/10 via-[#00FFB2]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#052217] border border-[#0A3D2A] rounded-full text-sm text-[#00FFB2] mb-6 font-medium tracking-wide">
                GET IN TOUCH
              </span>
              <h2 className="text-5xl font-bold text-[#E8FFF4] mb-6">
                Let's Create Something Amazing
              </h2>
              <p className="text-lg text-[#7CFFCB]/70 max-w-[600px] mx-auto">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>
            
            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl hover:border-[#00FFB2]/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FFB2]/20 to-[#7CFFCB]/10 border border-[#00FFB2]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-[#00FFB2]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#7CFFCB]/70 mb-1">Email</h3>
                      <a href="mailto:monika2675adb@gmail.com" className="text-[#E8FFF4] hover:text-[#00FFB2] transition-colors">
                        monika2675adb@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl hover:border-[#00FFB2]/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7CFFCB]/20 to-[#00FF9D]/10 border border-[#7CFFCB]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-[#7CFFCB]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#7CFFCB]/70 mb-1">LinkedIn</h3>
                      <a href="http://www.linkedin.com/in/lailatul-husna-monika-6a2bb02a6" target="_blank" rel="noopener noreferrer" className="text-[#E8FFF4] hover:text-[#00FFB2] transition-colors">
                        lailatul-husna-monika
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl hover:border-[#00FFB2]/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FF9D]/20 to-[#00FFB2]/10 border border-[#00FF9D]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5 text-[#00FF9D]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#7CFFCB]/70 mb-1">GitHub</h3>
                      <a href="https://github.com/Moni900-code" target="_blank" rel="noopener noreferrer" className="text-[#E8FFF4] hover:text-[#00FFB2] transition-colors">
                        Moni900-code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#E8FFF4] mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#00FFB2] to-[#7CFFCB] rounded-full" />
                  Send a Message
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#061512] border border-[#0A3D2A] rounded-xl text-[#E8FFF4] placeholder-[#7CFFCB]/40 focus:outline-none focus:border-[#00FFB2]/50 focus:bg-[#052217] transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#061512] border border-[#0A3D2A] rounded-xl text-[#E8FFF4] placeholder-[#7CFFCB]/40 focus:outline-none focus:border-[#00FFB2]/50 focus:bg-[#052217] transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#061512] border border-[#0A3D2A] rounded-xl text-[#E8FFF4] placeholder-[#7CFFCB]/40 focus:outline-none focus:border-[#00FFB2]/50 focus:bg-[#052217] transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <AnimatedButton type="submit" fullWidth>
                    Send Message
                  </AnimatedButton>
                </form>
              </div>
            </div>
            
            {/* Social Links - Premium Style */}
            <div className="flex justify-center items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0A3D2A] to-[#0A3D2A]" />
              <span className="text-sm text-[#7CFFCB]/50 font-medium">Connect With Me</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#0A3D2A] to-[#0A3D2A]" />
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="mailto:monika2675adb@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] flex items-center justify-center text-[#00FFB2] hover:border-[#00FFB2] hover:bg-[#00FFB2]/10 hover:scale-110 transition-all group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="http://www.linkedin.com/in/lailatul-husna-monika-6a2bb02a6" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] flex items-center justify-center text-[#7CFFCB] hover:border-[#7CFFCB] hover:bg-[#7CFFCB]/10 hover:scale-110 transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/Moni900-code" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] flex items-center justify-center text-[#00FF9D] hover:border-[#00FF9D] hover:bg-[#00FF9D]/10 hover:scale-110 transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#0A3D2A]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-sm text-[#7CFFCB]/60">
            © 2026 Lailatul Husna Monika. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          {...projects[selectedProject]}
          onClose={() => setSelectedProject(null)}
          onViewCaseStudy={() => {
            setViewingCaseStudy(selectedProject);
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
}