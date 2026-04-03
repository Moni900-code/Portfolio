import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  image: string;
  title: string;
  category: string;
  tools: string[];
  behanceUrl?: string;
  onClose: () => void;
  onViewCaseStudy?: () => void;
}

export function ProjectModal({ image, title, category, tools, behanceUrl, onClose, onViewCaseStudy }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061512]/95 backdrop-blur-lg"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-[900px] bg-gradient-to-br from-[#052217] to-[#041A13] border border-[#0A3D2A] rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#061512]/90 backdrop-blur-sm border border-[#00FFB2]/40 text-[#00FFB2] hover:bg-[#0A3D2A] hover:border-[#00FFB2] transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="relative h-[400px] overflow-hidden bg-[#041A13]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#052217] via-[#052217]/40 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Title & Category */}
          <div>
            <h2 className="text-3xl font-bold text-[#E8FFF4] mb-2">
              {title}
            </h2>
            <p className="text-lg text-[#7CFFCB]/70 font-medium">{category}</p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wide">
              Project Overview
            </h3>
            <p className="text-[#B9FFD9] leading-relaxed">
              A comprehensive mobile application designed in Figma, focusing on user experience, 
              intuitive navigation, and modern design principles. This project showcases advanced 
              prototyping techniques and component-based design systems.
            </p>
          </div>

          {/* Tools Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wide">
              Figma Tools & Features
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#0A3D2A]/50 border border-[#00FFB2]/30 rounded-full text-sm font-medium text-[#B9FFD9]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex gap-4">
            {onViewCaseStudy && (
              <button
                onClick={onViewCaseStudy}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FFB2] to-[#00FF9D] text-[#061512] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00FFB2]/30 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                View Full Case Study
              </button>
            )}
            {behanceUrl && (
              <a
                href={behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00FFB2] text-[#00FFB2] font-semibold rounded-xl hover:bg-[#00FFB2]/10 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                View on Behance
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
