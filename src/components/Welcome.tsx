
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleBeginJourney = () => {
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
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-8 text-center">
        {/* Welcome Text */}
        <div className="mb-20">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-normal text-white tracking-wider mb-8 leading-none">
            Welcome
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide font-serif italic mb-16">
            to your journey within
          </p>
        </div>

        {/* Call to Action */}
        <div className="opacity-0 animate-[fade-in_1.5s_ease-out_2s_forwards]">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-serif mb-12 max-w-2xl mx-auto">
            When you're ready, we'll begin exploring the depths of your inner world together.
          </p>
          
          <Button
            onClick={handleBeginJourney}
            className="bg-white/10 hover:bg-white/20 text-white px-16 py-6 text-lg font-light backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-700 font-serif rounded-full group shadow-2xl"
          >
            <span className="flex items-center gap-4">
              Begin the Journey
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </Button>
          
          <p className="text-white/50 text-sm mt-8 font-serif italic">
            There is no hurry. Take all the time you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
