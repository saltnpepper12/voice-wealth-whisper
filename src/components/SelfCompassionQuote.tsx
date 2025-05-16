
import React from 'react';
import { User, Heart, Flag } from 'lucide-react';

const SelfCompassionQuote = () => {
  return (
    <section className="bg-red-artistic bg-cover bg-center py-20 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-incluya-peach/50 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mx-auto max-w-md glass-panel p-8 bg-white/20 backdrop-blur-md border border-white/30">
          {/* Top left squiggle */}
          <div className="absolute -top-4 -left-4 w-20 h-20">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M10,30 Q30,5 50,30 T90,30" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="6" 
              />
            </svg>
          </div>
          
          {/* Bottom right blob */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/30 rounded-full"></div>
          
          <h3 className="font-serif text-2xl font-semibold mb-6 relative z-10 text-white">Self-Compassion</h3>
          
          <div className="relative z-10">
            <p className="text-white mb-4">
              "Self-compassion is like a muscle. The more we practice flexing it, especially when life doesn't go exactly according to plan (a frequent scenario for most of us), the stronger and more resilient our compassion muscle becomes."
            </p>
            <p className="font-medium text-white">- Sharon Salzberg</p>
          </div>
          
          {/* Bottom action icons */}
          <div className="flex justify-between mt-12 relative z-10">
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <User size={20} className="text-white" />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <Heart size={20} className="text-white" />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <Flag size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfCompassionQuote;
