import { useState, useEffect, useRef } from 'react';

export function Hero3DAnimation() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel previous animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      animationFrameRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Check proximity to each element
        let closestElement: string | null = null;
        let closestDistance = 200; // Increased proximity threshold
        let newMousePosition = { x: 0, y: 0 };

        Object.entries(elementsRef.current).forEach(([id, element]) => {
          if (!element) return;

          const elRect = element.getBoundingClientRect();
          const elCenterX = elRect.left + elRect.width / 2;
          const elCenterY = elRect.top + elRect.height / 2;

          // Calculate distance from mouse to element center
          const distance = Math.sqrt(
            Math.pow(mouseX - elCenterX, 2) + Math.pow(mouseY - elCenterY, 2)
          );

          // Find the closest element within threshold
          if (distance < closestDistance) {
            closestDistance = distance;
            closestElement = id;

            // Calculate relative position with easing based on distance
            const distanceFactor = Math.max(0, 1 - distance / 200); // Smooth falloff
            const relX = ((mouseX - elRect.left) / elRect.width - 0.5) * 2;
            const relY = ((mouseY - elRect.top) / elRect.height - 0.5) * 2;
            
            // Apply distance-based easing for smoother interaction
            newMousePosition = { 
              x: relX * distanceFactor, 
              y: relY * distanceFactor 
            };
          }
        });

        // Only update if there's a change to prevent unnecessary re-renders
        setHoveredElement(prev => {
          if (prev !== closestElement) {
            setMousePosition({ x: 0, y: 0 }); // Reset position on element change
            setTimeout(() => setMousePosition(newMousePosition), 50);
            return closestElement;
          }
          setMousePosition(newMousePosition);
          return prev;
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3D Floating Design Elements */}
      
      {/* Wireframe Card - Top Left */}
      <div 
        className="absolute top-[10%] left-[5%] w-64 h-40 border-2 border-[#00FFB2]/30 rounded-2xl pointer-events-auto cursor-pointer"
        style={{
          animation: hoveredElement === 'card' ? 'none' : 'float3d 8s ease-in-out infinite',
          transform: `perspective(1000px) rotateX(${15 + (hoveredElement === 'card' ? mousePosition.y * 15 : 0)}deg) rotateY(${-20 + (hoveredElement === 'card' ? mousePosition.x * 20 : 0)}deg) translateX(${hoveredElement === 'card' ? mousePosition.x * 20 : 0}px) translateY(${hoveredElement === 'card' ? mousePosition.y * 20 : 0}px)`,
          boxShadow: '0 20px 60px rgba(0, 255, 178, 0.1), inset 0 0 20px rgba(0, 255, 178, 0.05)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease-out'
        }}
        ref={(el) => (elementsRef.current['card'] = el)}
      >
        <div className="absolute inset-4 border border-[#7CFFCB]/20 rounded-xl" />
        <div className="absolute top-6 left-6 w-16 h-2 bg-gradient-to-r from-[#00FFB2]/40 to-transparent rounded" />
        <div className="absolute top-10 left-6 w-24 h-2 bg-gradient-to-r from-[#7CFFCB]/30 to-transparent rounded" />
        <div className="absolute top-14 left-6 w-20 h-2 bg-gradient-to-r from-[#00FF9D]/20 to-transparent rounded" />
      </div>

      {/* Mobile Frame - Top Right */}
      <div 
        className="absolute top-[15%] right-[8%] w-32 h-56 bg-gradient-to-br from-[#052217]/80 to-[#0A3D2A]/60 border-2 border-[#7CFFCB]/30 rounded-3xl backdrop-blur-sm pointer-events-auto cursor-pointer"
        style={{
          animation: hoveredElement === 'mobile' ? 'none' : 'float3d 10s ease-in-out infinite 1s',
          transform: `perspective(1000px) rotateX(${-10 + (hoveredElement === 'mobile' ? mousePosition.y * -8 : 0)}deg) rotateY(${25 + (hoveredElement === 'mobile' ? mousePosition.x * -12 : 0)}deg) translateX(${hoveredElement === 'mobile' ? mousePosition.x * -25 : 0}px) translateY(${hoveredElement === 'mobile' ? mousePosition.y * -25 : 0}px)`,
          boxShadow: '0 30px 80px rgba(124, 255, 203, 0.15)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease-out'
        }}
        ref={(el) => (elementsRef.current['mobile'] = el)}
      >
        <div className="absolute top-6 inset-x-4 h-1 bg-[#00FFB2]/20 rounded-full" />
        <div className="mt-10 mx-4 space-y-2">
          <div className="h-8 bg-gradient-to-r from-[#00FFB2]/20 to-transparent rounded" />
          <div className="h-8 bg-gradient-to-r from-[#7CFFCB]/15 to-transparent rounded" />
          <div className="h-8 bg-gradient-to-r from-[#00FF9D]/10 to-transparent rounded" />
        </div>
      </div>

      {/* Abstract Cube - Bottom Left */}
      <div 
        className="absolute bottom-[20%] left-[10%] pointer-events-auto cursor-pointer"
        style={{
          animation: 'rotate3d 15s linear infinite',
          transformStyle: 'preserve-3d',
          transform: `perspective(800px) translateX(${hoveredElement === 'cube' ? mousePosition.x * 40 : 0}px) translateY(${hoveredElement === 'cube' ? mousePosition.y * 40 : 0}px)`,
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        ref={(el) => (elementsRef.current['cube'] = el)}
      >
        <div 
          className="w-32 h-32 relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${45 + (hoveredElement === 'cube' ? mousePosition.y * 20 : 0)}deg) rotateY(${45 + (hoveredElement === 'cube' ? mousePosition.x * 20 : 0)}deg)`,
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Cube faces */}
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[#00FFB2]/10 to-[#7CFFCB]/5 border border-[#00FFB2]/30" 
               style={{ transform: 'translateZ(64px)' }} />
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[#7CFFCB]/10 to-[#00FF9D]/5 border border-[#7CFFCB]/30" 
               style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
          <div className="absolute w-32 h-32 bg-gradient-to-br from-[#00FF9D]/10 to-[#00FFB2]/5 border border-[#00FF9D]/30" 
               style={{ transform: 'rotateX(90deg) translateZ(64px)' }} />
        </div>
      </div>

      {/* Grid Panel - Bottom Right */}
      <div 
        className="absolute bottom-[25%] right-[12%] w-48 h-48 pointer-events-auto cursor-pointer"
        style={{
          animation: hoveredElement === 'grid' ? 'none' : 'float3d 12s ease-in-out infinite 2s',
          transform: `perspective(1000px) rotateX(${30 + (hoveredElement === 'grid' ? mousePosition.y * -10 : 0)}deg) rotateY(${-30 + (hoveredElement === 'grid' ? mousePosition.x * -10 : 0)}deg) translateX(${hoveredElement === 'grid' ? mousePosition.x * -35 : 0}px) translateY(${hoveredElement === 'grid' ? mousePosition.y * -35 : 0}px)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        ref={(el) => (elementsRef.current['grid'] = el)}
      >
        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div 
              key={i}
              className="bg-gradient-to-br from-[#00FFB2]/10 to-[#052217]/50 border border-[#7CFFCB]/20 rounded"
              style={{
                animation: `pulse3d ${3 + (i % 3)}s ease-in-out infinite ${i * 0.1}s`,
                boxShadow: '0 4px 12px rgba(0, 255, 178, 0.1)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Circles - Design Elements */}
      <div 
        className="absolute top-[40%] left-[15%] w-20 h-20 rounded-full border-2 border-[#00FFB2]/40 pointer-events-auto cursor-pointer"
        style={{
          animation: hoveredElement === 'circle1' ? 'none' : 'orbit 20s linear infinite',
          transform: `translateX(${hoveredElement === 'circle1' ? mousePosition.x * 50 : 0}px) translateY(${hoveredElement === 'circle1' ? mousePosition.y * 50 : 0}px)`,
          boxShadow: '0 0 40px rgba(0, 255, 178, 0.3), inset 0 0 20px rgba(0, 255, 178, 0.1)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease-out'
        }}
        ref={(el) => (elementsRef.current['circle1'] = el)}
      >
        <div className="absolute inset-3 rounded-full border border-[#7CFFCB]/30" />
      </div>

      <div 
        className="absolute top-[60%] right-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-[#7CFFCB]/20 to-[#00FF9D]/10 border border-[#7CFFCB]/40 pointer-events-auto cursor-pointer"
        style={{
          animation: hoveredElement === 'circle2' ? 'none' : 'float3d 9s ease-in-out infinite 3s',
          transform: `translateX(${hoveredElement === 'circle2' ? mousePosition.x * -45 : 0}px) translateY(${hoveredElement === 'circle2' ? mousePosition.y * -45 : 0}px)`,
          boxShadow: '0 20px 60px rgba(124, 255, 203, 0.2)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease-out'
        }}
        ref={(el) => (elementsRef.current['circle2'] = el)}
      />

      {/* Animated Gradient Orbs */}
      <div 
        className="absolute top-[25%] right-[25%] w-40 h-40 rounded-full opacity-30 pointer-events-auto cursor-pointer"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 178, 0.3) 0%, transparent 70%)',
          animation: hoveredElement === 'orb1' ? 'none' : 'pulse3d 6s ease-in-out infinite',
          transform: `translateX(${hoveredElement === 'orb1' ? mousePosition.x * 60 : 0}px) translateY(${hoveredElement === 'orb1' ? mousePosition.y * 60 : 0}px)`,
          filter: 'blur(40px)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        ref={(el) => (elementsRef.current['orb1'] = el)}
      />

      <div 
        className="absolute bottom-[35%] left-[20%] w-32 h-32 rounded-full opacity-25 pointer-events-auto cursor-pointer"
        style={{
          background: 'radial-gradient(circle, rgba(124, 255, 203, 0.3) 0%, transparent 70%)',
          animation: hoveredElement === 'orb2' ? 'none' : 'pulse3d 8s ease-in-out infinite 2s',
          transform: `translateX(${hoveredElement === 'orb2' ? mousePosition.x * -55 : 0}px) translateY(${hoveredElement === 'orb2' ? mousePosition.y * -55 : 0}px)`,
          filter: 'blur(50px)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        ref={(el) => (elementsRef.current['orb2'] = el)}
      />

      <style>{`
        @keyframes float3d {
          0%, 100% {
            transform: perspective(1000px) rotateX(15deg) rotateY(-20deg) translateY(0px) translateX(0px);
          }
          25% {
            transform: perspective(1000px) rotateX(20deg) rotateY(-15deg) translateY(-20px) translateX(10px);
          }
          50% {
            transform: perspective(1000px) rotateX(10deg) rotateY(-25deg) translateY(-10px) translateX(-10px);
          }
          75% {
            transform: perspective(1000px) rotateX(25deg) rotateY(-20deg) translateY(-15px) translateX(5px);
          }
        }

        @keyframes rotate3d {
          0% {
            transform: perspective(800px) rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: perspective(800px) rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes pulse3d {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}