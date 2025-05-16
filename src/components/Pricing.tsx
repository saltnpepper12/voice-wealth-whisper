
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const PricingCard = ({ plan }: { plan: PlanProps }) => {
  return (
    <div 
      className={`p-6 rounded-2xl border backdrop-blur-sm ${
        plan.popular 
          ? "border-incluya-yellow-dark bg-incluya-yellow-dark/10" 
          : "border-white/20 bg-white/20"
      }`}
    >
      {plan.popular && (
        <div className="bg-incluya-yellow-dark text-incluya-text-dark py-1 px-3 rounded-full text-xs font-semibold inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="font-serif text-xl font-semibold mb-2 text-white">{plan.name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">{plan.price}</span>
        {plan.price !== "Free" && <span className="text-white/80">/month</span>}
      </div>
      <p className="text-white/90 mb-6">{plan.description}</p>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-incluya-yellow mr-2 shrink-0" />
            <span className="text-white/90">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${
          plan.popular 
            ? "bg-incluya-yellow-dark hover:bg-incluya-yellow text-incluya-text-dark" 
            : "bg-white hover:bg-gray-100 text-incluya-text-dark"
        }`}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const plans: PlanProps[] = [
    {
      name: "Free",
      price: "Free",
      description: "Basic voice journaling and financial tracking",
      features: [
        "Basic voice journaling",
        "Limited financial tracking",
        "Simple emotional insights",
        "1 financial account"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Premium",
      price: "$9.99",
      description: "Full features for individuals",
      features: [
        "Unlimited voice journaling",
        "Complete financial tracking",
        "Advanced emotional analysis",
        "Cultural context adaptation",
        "Unlimited financial accounts"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$19.99",
      description: "Advanced insights and personalized coaching",
      features: [
        "All Premium features",
        "Personalized coaching",
        "AI-powered recommendations",
        "Financial wellness score",
        "Account sharing options",
        "Priority support"
      ],
      buttonText: "Start Free Trial"
    }
  ];
  
  return (
    <section id="pricing" className="py-20 bg-yellow-artistic bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-incluya-text-dark/60 backdrop-blur-[1px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/80">
            Choose the plan that fits your needs and start your journey to financial wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/80">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
