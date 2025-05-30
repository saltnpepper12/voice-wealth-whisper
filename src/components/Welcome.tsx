
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
      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center">
          {/* Welcome Header */}
          <div className="mb-12 opacity-0 animate-[fade-in_2s_ease-out_0.5s_forwards]">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="text-incluya-yellow mr-3 h-8 w-8 opacity-80" />
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
                Welcome
              </h1>
              <Sparkles className="text-incluya-yellow ml-3 h-8 w-8 opacity-80" />
            </div>
            <p className="text-white/90 text-xl md:text-2xl font-light font-serif tracking-wide">
              to your journey of self-discovery
            </p>
          </div>

          {/* Main Message */}
          <div className="mb-16 opacity-0 animate-[fade-in_2s_ease-out_1.2s_forwards]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                You've taken the first beautiful step
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-serif mb-8">
                Welcome to Incluya, a sacred space where your inner wisdom meets gentle guidance. 
                Here, you'll discover tools for self-compassion, mindful reflection, and authentic growth.
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-serif mb-8">
                Your journey is unique, and we honor every step you take. We'll begin with a few 
                thoughtful questions to understand how we can best support you on this path of 
                discovery and transformation.
              </p>
              <div className="w-24 h-0.5 bg-incluya-yellow/60 mx-auto"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="opacity-0 animate-[fade-in_2s_ease-out_2s_forwards]">
            <div className="mb-8">
              <p className="text-white/90 text-lg md:text-xl font-serif mb-6">
                Are you ready to explore what lies within?
              </p>
            </div>
            
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

          {/* Gentle Encouragement */}
          <div className="mt-16 opacity-0 animate-[fade-in_2s_ease-out_2.8s_forwards]">
            <p className="text-white/70 text-sm md:text-base font-serif leading-relaxed max-w-2xl mx-auto">
              "The journey of a thousand miles begins with a single step. 
              You've already taken that step by being here."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
