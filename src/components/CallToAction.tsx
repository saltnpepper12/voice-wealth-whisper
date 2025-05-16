
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-red-artistic bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-incluya-turquoise-dark/50 backdrop-blur-[1px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-white/10 backdrop-blur-md border border-white/30">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <img 
              src="/lovable-uploads/1f93b3c6-76d7-42d2-9ead-e07ea3892eb8.png" 
              alt="Incluya Logo" 
              className="h-12 mx-auto mb-6"
            />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Relationship with Money?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
              Join thousands who are using Incluya to reduce financial anxiety and build healthier money relationships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-incluya-yellow-dark hover:bg-incluya-yellow text-incluya-text-dark text-lg py-6 px-8">
                Get Started Free
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
