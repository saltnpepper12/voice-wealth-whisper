
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
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 md:px-8 text-center">
        {/* Welcome Text */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white tracking-[0.05em] mb-4 sm:mb-6 md:mb-8 leading-none uppercase">
            Welcome
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.05em] font-sans mb-8 sm:mb-12 md:mb-16 uppercase">
            to your journey within
          </p>
        </div>

        {/* Call to Action */}
        <div className="opacity-0 animate-[fade-in_1.5s_ease-out_2s_forwards]">
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-sans font-light mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto tracking-normal px-2">
            When you're ready, we'll begin exploring the depths of your inner world together.
          </p>
          
          <p className="text-white text-lg sm:text-xl font-light font-sans mb-6 sm:mb-8 tracking-normal uppercase">
            Begin the Journey
          </p>
          
          <p className="text-white/50 text-xs sm:text-sm font-sans font-light tracking-normal mb-4 sm:mb-6">
            There is no hurry. Take all the time you need.
          </p>
          
          <p className="text-white/40 text-xs font-sans font-light tracking-normal">
            Click anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
