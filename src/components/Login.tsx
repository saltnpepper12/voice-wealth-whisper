
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-10 flex justify-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/16e03b5f-f6a0-4635-af4f-01aa2697ad0e.png" 
                alt="Incluya Logo" 
                className="h-16 w-auto" 
              />
            </Link>
          </div>
          
          <h1 className="font-serif text-3xl font-bold text-center mb-8">Welcome Back</h1>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-incluya-turquoise-dark hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            
            <Button className="w-full bg-incluya-yellow-dark hover:bg-incluya-yellow text-incluya-text-dark">
              Log In
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-incluya-turquoise-dark hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden sm:flex flex-1 bg-login-pattern bg-cover bg-center">
        <div className="w-full h-full bg-gradient-to-r from-incluya-turquoise-dark/80 to-incluya-yellow-dark/60 flex flex-col justify-center items-center px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Understand Your Money Emotions</h2>
            <p className="text-lg mb-8">
              Discover the emotional patterns behind your financial decisions and build a healthier relationship with money.
            </p>
            <div className="flex justify-center">
              <div className="glass-panel p-4 max-w-xs">
                <p className="italic">
                  "Incluya helped me understand why I was overspending. Now I feel more in control of my finances than ever before."
                </p>
                <p className="mt-2 font-medium">— Sarah K.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
