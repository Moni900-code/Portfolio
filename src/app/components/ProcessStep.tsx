import { useState } from 'react';

interface ProcessStepProps {
  title: string;
  number: string;
  isLast?: boolean;
  color?: string;
}

export function ProcessStep({ title, number, isLast = false, color = '#00FFB2' }: ProcessStepProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number Badge */}
      <div className="relative mb-6">
        <div 
          className="text-6xl font-bold transition-all duration-500"
          style={{
            color: `${color}20`, // 20 = 12.5% opacity in hex
          }}
        >
          {number}
        </div>
        
        {/* Animated Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${color}40 0%, ${color}20 50%, transparent 100%)`,
            transform: 'scale(1.5)',
          }}
        />
      </div>
      
      {/* Title with Sliding Underline */}
      <div className="relative">
        <h3 
          className="text-lg font-bold text-[#E8FFF4] transition-colors duration-300 mb-2"
          style={{
            '--hover-color': color,
          } as React.CSSProperties}
        >
          {title}
        </h3>
        
        {/* Animated Underline */}
        <div 
          className="h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" 
          style={{
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          }}
        />
      </div>
      
      {/* Connecting Arrow Line */}
      {!isLast && (
        <div className="absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-3rem)] hidden md:block">
          {/* Dashed Line */}
          <div className="relative h-[2px]">
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, #0A3D2A, ${color}50, #0A3D2A)`,
              }}
            />
            
            {/* Animated Dot */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-lg"
              style={{
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}80`,
                animation: isHovered ? 'none' : 'moveDot 3s ease-in-out infinite',
              }}
            />
          </div>
          
          {/* Arrow Head */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px]"
            style={{
              borderLeftColor: `${color}66`, // 66 = 40% opacity in hex
            }}
          />
        </div>
      )}
      
      {/* Keyframe Animation */}
      <style>{`
        @keyframes moveDot {
          0%, 100% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .group:hover h3 {
          color: var(--hover-color);
        }
      `}</style>
    </div>
  );
}