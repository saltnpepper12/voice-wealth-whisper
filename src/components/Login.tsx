
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 bg-login-pattern bg-cover bg-center flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold mb-2">INCLUYA</h1>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full border-gray-300 focus:border-incluya-yellow-dark focus:ring focus:ring-incluya-yellow/30"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-incluya-turquoise-dark hover:text-incluya-turquoise">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border-gray-300 focus:border-incluya-yellow-dark focus:ring focus:ring-incluya-yellow/30"
              />
            </div>
            
            <Button className="w-full bg-incluya-yellow-dark hover:bg-incluya-yellow text-incluya-text-dark py-6">
              Log In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-incluya-turquoise-dark hover:text-incluya-turquoise">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
