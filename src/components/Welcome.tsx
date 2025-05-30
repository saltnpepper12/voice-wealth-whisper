
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        {/* Welcome Header - Immediate appearance with emergence effect */}
        <div className="mb-20">
          <h1 className="font-serif text-8xl md:text-9xl lg:text-[12rem] font-light text-white tracking-wider mb-8 animate-[fade-in_3s_ease-out_forwards] drop-shadow-2xl">
            Welcome
          </h1>
          <p className="text-white/95 text-3xl md:text-4xl font-light font-serif tracking-wide animate-[fade-in_2s_ease-out_1s_forwards] opacity-0">
            to your journey of self-discovery
          </p>
        </div>

        {/* Simple Message */}
        <div className="opacity-0 animate-[fade-in_2s_ease-out_2s_forwards]">
          <p className="text-white/90 text-2xl md:text-3xl leading-relaxed font-serif mb-16">
            Are you ready to explore what lies within?
          </p>
          
          <Button
            onClick={handleBeginJourney}
            className="bg-white/15 hover:bg-white/25 text-white px-14 py-6 text-xl font-light backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-700 font-serif rounded-full group shadow-2xl"
          >
            <span className="flex items-center gap-4">
              I'm Ready to Begin
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </Button>
          
          <p className="text-white/50 text-lg mt-8 font-serif font-light">
            Take your time. There's no rush on this journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
