import { useEffect, useState, useRef } from 'react';

export function ScrollBased3DElement() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get the projects section position
      const heroSection = document.querySelector('section');
      const projectsSection = heroSection?.nextElementSibling;
      
      if (projectsSection) {
        const projectsStart = projectsSection.getBoundingClientRect().top + scrollPosition;
        const projectsEnd = projectsStart + projectsSection.clientHeight;
        
        const processSection = projectsSection.nextElementSibling;
        const processEnd = processSection ? projectsEnd + processSection.clientHeight : projectsEnd;
        
        const aboutSection = processSection?.nextElementSibling;
        const aboutEnd = aboutSection ? processEnd + aboutSection.clientHeight : processEnd;
        
        const contactSection = aboutSection?.nextElementSibling;
        const contactEnd = contactSection ? aboutEnd + contactSection.clientHeight : aboutEnd;
        
        // Calculate progress based on section visibility
        let progress = 0;
        
        if (scrollPosition < projectsStart - windowHeight * 0.3) {
          // Before projects section (with buffer)
          progress = 0;
        } else if (scrollPosition < projectsEnd) {
          // Projects section: 0 to 0.28
          const sectionProgress = (scrollPosition - (projectsStart - windowHeight * 0.3)) / (projectsEnd - projectsStart + windowHeight * 0.3);
          progress = Math.min(sectionProgress * 0.28, 0.28);
        } else if (scrollPosition < processEnd) {
          // Process section: 0.28 to 0.40 (Design Process section)
          const sectionProgress = (scrollPosition - projectsEnd) / (processEnd - projectsEnd);
          progress = 0.28 + sectionProgress * 0.12;
        } else if (scrollPosition < aboutEnd) {
          // About section: 0.40 to 0.65 (longer duration for slower movement)
          const sectionProgress = (scrollPosition - processEnd) / (aboutEnd - processEnd);
          progress = 0.40 + sectionProgress * 0.25;
        } else {
          // Contact section and beyond: 0.65 to 1.0 (extended for smooth exit)
          const extendedContactEnd = contactEnd + windowHeight * 2; // More extension for smooth disappear
          const sectionProgress = (scrollPosition - aboutEnd) / (extendedContactEnd - aboutEnd);
          progress = 0.65 + Math.min(sectionProgress * 0.35, 0.35);
        }
        
        setScrollProgress(Math.min(progress, 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate position based on scroll
  // 0-0.28: Projects section - right to left
  // 0.28-0.65: About section - left to right (slower movement)
  // 0.65-1.0: Contact section - right to left + exit smoothly
  const getHorizontalPosition = () => {
    if (scrollProgress < 0.28) {
      // Projects section: Right to Left (95% to 8%)
      const sectionProgress = scrollProgress / 0.28;
      const easeProgress = easeInOutQuart(sectionProgress);
      return 95 - easeProgress * 87;
    } else if (scrollProgress < 0.65) {
      // About section: Left to Right (8% to 88%) - slower with smoother easing
      const sectionProgress = (scrollProgress - 0.28) / 0.37;
      const easeProgress = easeInOutQuint(sectionProgress); // Using quintic for extra smoothness
      return 8 + easeProgress * 80;
    } else {
      // Contact section: Right to Left and smoothly disappear (88% to -40%)
      const sectionProgress = (scrollProgress - 0.65) / 0.35;
      const easeProgress = easeInOutQuart(sectionProgress);
      return 88 - easeProgress * 128;
    }
  };
  
  // Easing function for smooth animation - Quartic
  const easeInOutQuart = (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };
  
  // Extra smooth easing for About section - Quintic
  const easeInOutQuint = (t: number): number => {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  };

  const horizontalPosition = getHorizontalPosition();
  
  // Calculate rotation based on scroll - smoother rotation
  const rotationY = scrollProgress * 360 * 1.5; // 1.5 full rotations
  const rotationX = Math.sin(scrollProgress * Math.PI * 3) * 12; // Smoother oscillating tilt
  const rotationZ = Math.cos(scrollProgress * Math.PI * 2) * 5; // Subtle Z rotation
  
  // Calculate opacity - smooth fade in at start, smooth fade out at end (mirrored)
  const getOpacity = () => {
    if (scrollProgress < 0.08) {
      // Slow fade in at the start
      return easeInOutQuart(scrollProgress / 0.08) * 0.65;
    }
    if (scrollProgress >= 0.28 && scrollProgress < 0.40) {
      // Design Process section: reduce opacity significantly
      return 0.15;
    }
    if (scrollProgress > 0.92) {
      // Slow fade out at the end (mirrored effect)
      return easeInOutQuart((1 - scrollProgress) / 0.08) * 0.65;
    }
    // Stay at constant opacity during the journey
    return 0.65;
  };
  
  // Calculate scale for depth effect - mirrored entry and exit
  const getScale = () => {
    if (scrollProgress < 0.08) {
      // Scale up while fading in
      return 0.7 + easeInOutQuart(scrollProgress / 0.08) * 0.3;
    }
    if (scrollProgress > 0.92) {
      // Scale down while fading out (mirrored)
      return 0.7 + easeInOutQuart((1 - scrollProgress) / 0.08) * 0.3;
    }
    // Maintain consistent scale during the journey
    return 1;
  };

  return (
    <div 
      ref={elementRef}
      className="fixed top-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        left: `${horizontalPosition}%`,
        transform: `translateY(-50%)`,
        transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease-out',
        opacity: getOpacity(),
        zIndex: 1,
      }}
    >
      <div
        className="relative w-[600px] h-[600px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(2000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) scale(${getScale()})`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Main 3D Structure */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Center Large Glass Panel */}
          <div 
            className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: 'translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glowing gradient backdrop */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(0, 255, 178, 0.4) 0%, rgba(124, 255, 203, 0.2) 40%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            
            {/* Main glass card */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#052217]/90 to-[#0A3D2A]/70 border-2 border-[#00FFB2]/40 rounded-3xl backdrop-blur-xl"
              style={{
                boxShadow: `
                  0 0 80px rgba(0, 255, 178, 0.3),
                  inset 0 0 60px rgba(0, 255, 178, 0.1),
                  0 40px 100px rgba(0, 0, 0, 0.5)
                `,
              }}
            >
              {/* Inner geometric pattern */}
              <div className="absolute inset-8 border border-[#7CFFCB]/30 rounded-2xl" />
              <div className="absolute inset-16 border border-[#00FF9D]/20 rounded-xl" />
              
              {/* Animated accent lines */}
              <div className="absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#00FFB2]/60 to-transparent animate-pulse" />
              <div className="absolute bottom-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#7CFFCB]/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[#00FFB2]/60 rounded-tl-xl" />
              <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-[#7CFFCB]/60 rounded-tr-xl" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-[#00FF9D]/60 rounded-bl-xl" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[#00FFB2]/60 rounded-br-xl" />
            </div>
          </div>

          {/* Floating Ring 1 - Outer */}
          <div 
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) translateZ(-100px) rotateZ(${scrollProgress * 180}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div 
              className="w-full h-full rounded-full border-2 border-[#00FFB2]/30"
              style={{
                boxShadow: '0 0 60px rgba(0, 255, 178, 0.2), inset 0 0 40px rgba(0, 255, 178, 0.1)',
              }}
            />
          </div>

          {/* Floating Ring 2 - Inner */}
          <div 
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) translateZ(100px) rotateZ(${-scrollProgress * 220}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div 
              className="w-full h-full rounded-full border-2 border-[#7CFFCB]/40"
              style={{
                boxShadow: '0 0 50px rgba(124, 255, 203, 0.3), inset 0 0 30px rgba(124, 255, 203, 0.15)',
              }}
            />
          </div>

          {/* Floating Cubes around the main panel */}
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const angle = (index * 60 + scrollProgress * 360) * (Math.PI / 180);
            const radius = 280;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = Math.sin(angle * 2) * 100;
            
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 w-16 h-16"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateX(${scrollProgress * 720}deg) rotateY(${scrollProgress * 540}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="w-full h-full bg-gradient-to-br from-[#00FFB2]/20 to-[#052217]/60 border border-[#7CFFCB]/40 rounded-lg backdrop-blur-sm"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 255, 178, 0.2)',
                  }}
                />
              </div>
            );
          })}

          {/* Particle dots */}
          {[...Array(20)].map((_, index) => {
            const angle = (index * 18 + scrollProgress * 180) * (Math.PI / 180);
            const radius = 350 + Math.sin(scrollProgress * Math.PI * 2 + index) * 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = Math.cos(angle * 3) * 80;
            
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#00FFB2]/60"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                  boxShadow: '0 0 10px rgba(0, 255, 178, 0.6)',
                }}
              />
            );
          })}

          {/* Center glowing orb */}
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 255, 178, 0.6) 0%, rgba(124, 255, 203, 0.3) 40%, transparent 70%)',
              filter: 'blur(30px)',
              transform: `translate(-50%, -50%) translateZ(50px) scale(${1 + Math.sin(scrollProgress * Math.PI * 4) * 0.3})`,
              animation: 'pulse 3s ease-in-out infinite',
            }}
          />

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}