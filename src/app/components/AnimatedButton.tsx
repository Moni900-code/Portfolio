interface AnimatedButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

export function AnimatedButton({ children, type = 'button', fullWidth = false }: AnimatedButtonProps) {
  return (
    <button
      type={type}
      className={`group relative px-8 py-4 bg-gradient-to-br from-[#0D2720]/90 via-[#0A3D2A]/80 to-[#0D2720]/90 backdrop-blur-sm rounded-xl font-semibold text-[#00FFB2] border border-[#00FFB2]/20 ${fullWidth ? 'w-full' : ''} overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,178,0.4)] hover:border-[#00FFB2]/50`}
    >
      {/* Glitter stroke animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {/* Base border */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="11"
          fill="none"
          stroke="#00FFB2"
          strokeWidth="2"
          opacity="0.3"
        />
        
        {/* Animated flowing gradient */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="11"
          fill="none"
          stroke="url(#flowingGradient)"
          strokeWidth="2"
          strokeDasharray="100 300"
          strokeLinecap="round"
          style={{
            animation: 'dashFlow 3s linear infinite',
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 178, 0.8))'
          }}
        />
        
        {/* Second layer for extra glow */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="11"
          fill="none"
          stroke="url(#flowingGradient2)"
          strokeWidth="3"
          strokeDasharray="80 320"
          strokeLinecap="round"
          style={{
            animation: 'dashFlow 2.5s linear infinite',
            filter: 'drop-shadow(0 0 12px rgba(124, 255, 203, 0.6))'
          }}
        />
        
        <defs>
          <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFB2" stopOpacity="0" />
            <stop offset="50%" stopColor="#7CFFCB" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FF9D" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="flowingGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7CFFCB" stopOpacity="0" />
            <stop offset="50%" stopColor="#00FFB2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00FF9D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFB2]/0 via-[#7CFFCB]/20 to-[#00FF9D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <span className="relative z-10 group-hover:text-[#E8FFF4] transition-colors duration-300">{children}</span>
      
      <style>{`
        @keyframes dashFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 400;
          }
        }
        
        button.group:hover svg rect {
          animation-duration: 2s !important;
          filter: drop-shadow(0 0 12px rgba(0, 255, 178, 0.9)) !important;
        }
      `}</style>
    </button>
  );
}