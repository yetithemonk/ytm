import { useState, useEffect, useRef } from "react";
import momoBowl from "@/assets/momotop.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const rafRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const duration = 2800;

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Simple linear progress for performance
      setProgress(rawProgress);
      
      if (rawProgress < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 100);
          }, 600);
        }, 200);
      }
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden ${isExiting ? 'animate-dissolve-out' : 'animate-fade-in'}`}
      style={{ backgroundColor: "hsl(20, 15%, 6%)" }}
    >
      {/* Background image - static for performance */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/load.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
      </div>

      {/* Single ambient glow - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
            background: "radial-gradient(circle, hsl(36, 72%, 52%, 0.08) 0%, transparent 70%)",
            animation: "pulse-glow 4s ease-in-out infinite"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Momo bowl with advanced smoke - behind title */}
        <div className="relative mb-2">
          <div className="w-40 h-40 md:w-52 md:h-52 relative">
            {/* Realistic Momo Bowl Image */}
            <img 
              src={momoBowl} 
              alt="Momo Bowl" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            
            {/* Photorealistic smoke particles with air physics */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none">
              {/* Smoke particle 1 */}
              <div 
                className="absolute left-[20%] bottom-0 w-8 h-8 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                  filter: 'blur(8px)',
                  animation: 'smoke-particle-1 2.5s ease-out infinite',
                  animationDelay: '0s'
                }}
              />
              
              {/* Smoke particle 2 */}
              <div 
                className="absolute left-[35%] bottom-0 w-10 h-10 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                  filter: 'blur(10px)',
                  animation: 'smoke-particle-2 2.8s ease-out infinite',
                  animationDelay: '0.4s'
                }}
              />
              
              {/* Smoke particle 3 */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
                  filter: 'blur(12px)',
                  animation: 'smoke-particle-3 3s ease-out infinite',
                  animationDelay: '0.8s'
                }}
              />
              
              {/* Smoke particle 4 */}
              <div 
                className="absolute left-[65%] bottom-0 w-10 h-10 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
                  filter: 'blur(10px)',
                  animation: 'smoke-particle-4 2.6s ease-out infinite',
                  animationDelay: '1.2s'
                }}
              />
              
              {/* Smoke particle 5 */}
              <div 
                className="absolute left-[80%] bottom-0 w-8 h-8 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                  filter: 'blur(8px)',
                  animation: 'smoke-particle-5 2.4s ease-out infinite',
                  animationDelay: '1.6s'
                }}
              />
              
              {/* Additional wispy trails */}
              <div 
                className="absolute left-[25%] bottom-2 w-6 h-16 rounded-full"
                style={{
                  background: 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  filter: 'blur(6px)',
                  animation: 'smoke-trail-1 2.2s ease-out infinite',
                  animationDelay: '0.2s'
                }}
              />
              <div 
                className="absolute left-[50%] -translate-x-1/2 bottom-2 w-8 h-20 rounded-full"
                style={{
                  background: 'linear-gradient(to top, rgba(255,255,255,0.25) 0%, transparent 100%)',
                  filter: 'blur(8px)',
                  animation: 'smoke-trail-2 2.5s ease-out infinite',
                  animationDelay: '0.6s'
                }}
              />
              <div 
                className="absolute left-[75%] bottom-2 w-6 h-14 rounded-full"
                style={{
                  background: 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  filter: 'blur(6px)',
                  animation: 'smoke-trail-3 2.3s ease-out infinite',
                  animationDelay: '1s'
                }}
              />
              
              {/* Main steam cloud at top */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 bottom-8 w-24 h-16 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at center bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)',
                  filter: 'blur(15px)',
                  animation: 'steam-cloud 3s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 
          className="text-4xl md:text-5xl font-bold mb-3 tracking-wide"
          style={{ 
            fontFamily: "'Cinzel', serif",
            color: "hsl(38, 35%, 88%)",
            textShadow: "0 0 40px hsl(36, 72%, 52%, 0.3)",
            animation: "title-reveal 0.8s ease-out forwards"
          }}
        >
          Yeti the monk
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-sm mb-12 tracking-[0.3em] uppercase"
          style={{ 
            color: "hsl(28, 18%, 50%)",
            animation: "fade-up 0.6s ease-out 0.3s forwards",
            opacity: 0
          }}
        >
          Steaming Soon in PAN India
        </p>

        {/* Progress bar container */}
        <div 
          className="w-72 md:w-80"
          style={{
            animation: "fade-up 0.6s ease-out 0.5s forwards",
            opacity: 0
          }}
        >
          {/* Progress text */}
          <div className="flex justify-between text-xs mb-2" style={{ color: "hsl(28, 18%, 40%)" }}>
            <span>Loading</span>
            <span className="font-mono" style={{ color: "hsl(36, 72%, 52%)" }}>{Math.round(progress)}%</span>
          </div>
          
          {/* Progress bar track */}
          <div 
            className="relative h-1.5 rounded-full overflow-hidden"
            style={{ 
              backgroundColor: "hsl(15, 18%, 14%)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)"
            }}
          >
            {/* Progress fill - GPU accelerated */}
            <div 
              className="absolute inset-y-0 left-0 rounded-full will-change-transform"
              style={{ 
                width: `${progress}%`,
                background: "linear-gradient(90deg, hsl(36, 72%, 45%), hsl(36, 72%, 52%))",
                boxShadow: "0 0 12px hsl(36, 72%, 52%, 0.5)",
                transform: "translateZ(0)"
              }}
            />
          </div>
          
          {/* Simple milestone dots */}
          <div className="flex justify-between mt-3 px-1">
            {[0, 25, 50, 75, 100].map((mark) => (
              <div 
                key={mark}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: progress >= mark ? "hsl(36, 72%, 52%)" : "hsl(15, 18%, 25%)",
                  boxShadow: progress >= mark ? "0 0 6px hsl(36, 72%, 52%)" : "none",
                  transform: progress >= mark ? "scale(1.1)" : "scale(1)"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        @keyframes title-reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes smoke-particle-1 {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.5) translateX(0);
          }
          15% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.4;
            transform: translateY(-50px) scale(1.5) translateX(-5px);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(2.5) translateX(5px);
          }
        }
        
        @keyframes smoke-particle-2 {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.4) translateX(0);
          }
          12% {
            opacity: 0.55;
          }
          45% {
            opacity: 0.35;
            transform: translateY(-55px) scale(1.6) translateX(8px);
          }
          100% {
            opacity: 0;
            transform: translateY(-110px) scale(2.8) translateX(-8px);
          }
        }
        
        @keyframes smoke-particle-3 {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.6) translateX(0);
          }
          10% {
            opacity: 0.65;
          }
          40% {
            opacity: 0.45;
            transform: translateY(-60px) scale(1.8) translateX(-3px);
          }
          100% {
            opacity: 0;
            transform: translateY(-120px) scale(3) translateX(3px);
          }
        }
        
        @keyframes smoke-particle-4 {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.45) translateX(0);
          }
          14% {
            opacity: 0.5;
          }
          48% {
            opacity: 0.3;
            transform: translateY(-52px) scale(1.55) translateX(6px);
          }
          100% {
            opacity: 0;
            transform: translateY(-105px) scale(2.6) translateX(-6px);
          }
        }
        
        @keyframes smoke-particle-5 {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.5) translateX(0);
          }
          16% {
            opacity: 0.55;
          }
          52% {
            opacity: 0.35;
            transform: translateY(-48px) scale(1.45) translateX(-4px);
          }
          100% {
            opacity: 0;
            transform: translateY(-95px) scale(2.4) translateX(4px);
          }
        }
        
        @keyframes smoke-trail-1 {
          0% {
            opacity: 0;
            transform: translateY(0) scaleY(0.5) translateX(0);
          }
          12% {
            opacity: 0.4;
          }
          45% {
            opacity: 0.25;
            transform: translateY(-45px) scaleY(1.8) translateX(-3px);
          }
          100% {
            opacity: 0;
            transform: translateY(-90px) scaleY(2.5) translateX(3px);
          }
        }
        
        @keyframes smoke-trail-2 {
          0% {
            opacity: 0;
            transform: translateY(0) scaleY(0.4) translateX(0);
          }
          10% {
            opacity: 0.45;
          }
          40% {
            opacity: 0.3;
            transform: translateY(-50px) scaleY(2) translateX(4px);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scaleY(2.8) translateX(-4px);
          }
        }
        
        @keyframes smoke-trail-3 {
          0% {
            opacity: 0;
            transform: translateY(0) scaleY(0.45) translateX(0);
          }
          14% {
            opacity: 0.35;
          }
          48% {
            opacity: 0.2;
            transform: translateY(-42px) scaleY(1.7) translateX(2px);
          }
          100% {
            opacity: 0;
            transform: translateY(-85px) scaleY(2.3) translateX(-2px);
          }
        }
        
        @keyframes steam-cloud {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-50%) scale(1) translateY(0);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1.15) translateY(-5px);
          }
        }
        
        @keyframes dissolve-out {
          0% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
            filter: blur(8px);
          }
        }
        .animate-dissolve-out {
          animation: dissolve-out 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
