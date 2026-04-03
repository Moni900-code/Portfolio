import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  tools: string[];
  behanceUrl?: string;
  onCardClick?: () => void;
}

export function ProjectCard({ image, title, category, tools, behanceUrl, onCardClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCardClick) {
      onCardClick();
    }
  };
  
  return (
    <div
      onClick={handleClick}
      className="group relative block flex-shrink-0 w-[320px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Card Container with default 3D tilt */}
      <div
        className="relative transition-all duration-700 ease-out h-[440px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(20px) scale(1.05)' 
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
        }}
        onMouseMove={(e) => {
          if (!isHovered) return;
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (x - centerX) / 25;
          const rotateX = (centerY - y) / 25;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px) scale(1.05)`;
        }}
      >
        {/* Glow Effect */}
        <div 
          className="absolute -inset-2 bg-gradient-to-br from-[#00FFB2]/20 via-[#7CFFCB]/10 to-[#00FF9D]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        />
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-[#052217] to-[#041A13] border border-[#0A3D2A]/60 rounded-2xl overflow-hidden group-hover:border-[#00FFB2]/40 transition-all duration-500 shadow-2xl h-full flex flex-col">
          {/* Image Section - Fixed Height */}
          <div className="relative h-[250px] flex-shrink-0 overflow-hidden bg-[#041A13]">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFB2]/0 via-transparent to-[#7CFFCB]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052217] via-[#052217]/60 to-transparent" />
            
            {/* Decorative Elements */}
            <div className="absolute top-3 right-3 w-8 h-8 border-2 border-[#00FFB2]/0 rounded-lg rotate-0 opacity-0 group-hover:opacity-100 group-hover:border-[#00FFB2]/60 group-hover:rotate-45 transition-all duration-700"
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 178, 0.4)',
              }}
            />
            
            {/* External Link Icon */}
            <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#061512]/80 backdrop-blur-sm border border-[#00FFB2]/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ExternalLink className="w-3.5 h-3.5 text-[#00FFB2]" />
            </div>
            
            {/* Corner Accent */}
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#00FFB2]/10 to-transparent" />
          </div>
          
          {/* Content Section - Fixed Height */}
          <div className="p-5 space-y-2.5 bg-gradient-to-b from-[#052217] to-[#041A13] flex-1 flex flex-col">
            {/* Title & Category */}
            <div className="flex-shrink-0">
              <h3 className="text-lg font-bold text-[#E8FFF4] group-hover:text-[#00FFB2] transition-colors duration-300 mb-1 line-clamp-2">
                {title}
              </h3>
              <p className="text-xs text-[#7CFFCB]/70 font-medium line-clamp-1">{category}</p>
            </div>
            
            {/* Tools */}
            <div className="flex flex-wrap gap-1.5 pt-1 flex-shrink-0">
              {tools.slice(0, 3).map((tool, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-[#0A3D2A]/50 border border-[#00FFB2]/20 rounded-full text-xs font-medium text-[#B9FFD9] group-hover:border-[#00FFB2]/50 group-hover:bg-[#0A3D2A]/70 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
              {tools.length > 3 && (
                <span className="px-2.5 py-1 bg-[#0A3D2A]/50 border border-[#00FFB2]/20 rounded-full text-xs font-medium text-[#7CFFCB]/60">
                  +{tools.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}