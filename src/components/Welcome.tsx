
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleBeginJourney = () => {
    console.log('Beginning journey - navigating to intake questions');
    // navigate('/intake');
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={handleBeginJourney}
    >
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
      <div className="relative z-10 w-full max-w-4xl px-6 sm:px-8 md:px-10 text-center">
        {/* Animated Welcome Text */}
        <div className="mb-20">
          <h1 className="font-sans text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-light text-white tracking-[0.02em] mb-12 leading-[0.85] uppercase opacity-0 animate-[fade-in_2s_ease-out_0.5s_forwards]">
            Welcome
          </h1>
          
          {/* Main Message */}
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-serif leading-relaxed mb-16 opacity-0 animate-[fade-in_1.5s_ease-out_1.5s_forwards] px-4 sm:px-8 drop-shadow-md">
            When you're ready, we'll begin exploring the depths of your inner world together.
          </p>
        </div>

        {/* Simple Call to Action */}
        <div className="opacity-0 animate-[fade-in_1.5s_ease-out_2.5s_forwards]">
          <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-sans font-light tracking-wide">
            Click anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
