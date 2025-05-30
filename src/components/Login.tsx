
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up attempt:', { email, password, agreeToTerms });
    // Navigate to welcome page after successful signup
    navigate('/welcome');
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
            src="https://raw.githubusercontent.com/saltnpepper12/videos/main/Login.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Back button - Top left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm font-serif text-sm sm:text-base"
        >
          <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
          Back to Home
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md px-6 sm:px-8">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6 opacity-0 animate-[fade-in_1.5s_ease-out_0.3s_forwards] tracking-wide">
              Incluya
            </h1>
            <div className="space-y-2 sm:space-y-3 opacity-0 animate-[fade-in_1.2s_ease-out_0.6s_forwards]">
              <h2 className="text-lg sm:text-xl font-light text-white/95 font-serif">
                Welcome to your journey
              </h2>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-serif px-2 sm:px-0">
                Take a gentle step towards self-discovery and growth. 
                Create your account and begin exploring a space designed 
                for mindful reflection and personal development.
              </p>
            </div>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-3 mb-6 opacity-0 animate-[fade-in_1.2s_ease-out_1.2s_forwards]">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-3 bg-white/90 border-white/30 text-gray-700 hover:bg-white hover:text-gray-800 backdrop-blur-sm font-serif text-sm sm:text-base transition-all duration-200"
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium">Continue with Google</span>
            </Button>
            
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-3 bg-white/90 border-white/30 text-gray-700 hover:bg-white hover:text-gray-800 backdrop-blur-sm font-serif text-sm sm:text-base transition-all duration-200"
              type="button"
            >
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-medium">Continue with Facebook</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6 opacity-0 animate-[fade-in_1.2s_ease-out_1.5s_forwards]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-transparent text-white/70 font-serif">Or continue with email</span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 opacity-0 animate-[fade-in_1.2s_ease-out_1.8s_forwards]">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/95 font-serif">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/15 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 backdrop-blur-sm font-serif text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white/95 font-serif">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create your password"
                  className="w-full pr-10 bg-white/15 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 backdrop-blur-sm font-serif text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white/90"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2 py-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                className="border-white/30 data-[state=checked]:bg-white/20 data-[state=checked]:border-white/50 mt-1"
              />
              <label htmlFor="terms" className="text-sm text-white/85 font-serif leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="underline hover:text-white">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="underline hover:text-white">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              disabled={!agreeToTerms}
              className="w-full bg-white/25 hover:bg-white/35 text-white py-3 font-medium backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-serif text-base"
            >
              Begin Your Journey
            </Button>
          </form>

          {/* Already have account Link */}
          <div className="text-center mt-6 opacity-0 animate-[fade-in_1.2s_ease-out_2.1s_forwards]">
            <p className="text-sm text-white/75 font-serif">
              Already part of our community?{" "}
              <Link
                to="/signin"
                className="font-medium text-white hover:text-white/80 underline-offset-2 hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Welcome Message */}
          <div className="text-center mt-4 opacity-0 animate-[fade-in_1.2s_ease-out_2.4s_forwards]">
            <p className="text-xs text-white/65 leading-relaxed font-serif px-2 sm:px-0">
              Every journey begins with a single step. We're honored to be part of yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
