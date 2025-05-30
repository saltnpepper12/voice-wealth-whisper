
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleBeginJourney = () => {
    // Navigate to intake questions page (to be created later)
    console.log('Beginning journey - navigating to intake questions');
    // navigate('/intake');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video 
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source 
            src="https://raw.githubusercontent.com/saltnpepper12/videos/main/Welcome.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* Welcome Header - Immediate appearance */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="text-incluya-yellow mr-4 h-10 w-10 opacity-80" />
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide">
              Welcome
            </h1>
            <Sparkles className="text-incluya-yellow ml-4 h-10 w-10 opacity-80" />
          </div>
          <p className="text-white/90 text-2xl md:text-3xl font-light font-serif tracking-wide">
            to your journey of self-discovery
          </p>
        </div>

        {/* Simple Message */}
        <div className="mb-16 opacity-0 animate-[fade-in_2s_ease-out_1s_forwards]">
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-serif mb-12">
            Are you ready to explore what lies within?
          </p>
          
          <Button
            onClick={handleBeginJourney}
            className="bg-white/20 hover:bg-white/30 text-white px-12 py-4 text-lg font-medium backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-500 font-serif rounded-full group"
          >
            <span className="flex items-center gap-3">
              I'm Ready to Begin
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          
          <p className="text-white/60 text-sm mt-6 font-serif">
            Take your time. There's no rush on this journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
