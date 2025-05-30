
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

const IntakeQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = [
    {
      id: 'earliest_memory',
      type: 'textarea',
      question: "Let's take it all the way back! What is your earliest money memory from childhood?",
      placeholder: "Take your time and share what comes to mind...",
      icon: Heart,
      gradient: "from-incluya-peach/20 to-incluya-coral/20"
    },
    {
      id: 'parents_attitudes',
      type: 'textarea',
      question: "Take your time with this one- What were your parents' attitudes and discussions about money?",
      placeholder: "Reflect on the conversations and behaviors you observed...",
      icon: Sparkles,
      gradient: "from-incluya-turquoise/20 to-incluya-yellow/20"
    },
    {
      id: 'aspirations',
      type: 'textarea',
      question: "Have fun with this, and answer from the heart! What are your aspirations regarding finances?",
      placeholder: "Dream big and share your financial hopes...",
      icon: Heart,
      gradient: "from-incluya-yellow/20 to-incluya-peach/20"
    },
    {
      id: 'healing_vision',
      type: 'textarea',
      question: "Take a deep breath before answering this one….What does healing your relationship with money feel like and look like to you?",
      placeholder: "Envision your healed relationship with money...",
      icon: Sparkles,
      gradient: "from-incluya-coral/20 to-incluya-turquoise/20"
    },
    {
      id: 'frequency_situations',
      type: 'radio_group',
      question: "How frequently do you find yourself in these situations?",
      subtext: "1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always",
      gradient: "from-incluya-turquoise/20 to-incluya-coral/20",
      subQuestions: [
        "When bills arrive in the mail or inbox, how often do you set them aside to deal with 'later'?",
        "When you're lying awake at night, how often are money concerns the reason you can't sleep?",
        "When you receive unexpected money (bonus, gift, tax refund), how often is it spent within a week?",
        "When you reach your savings goal, how often do you immediately move the goalpost higher, feeling it's still not enough?",
        "When planning a purchase, how often do you research cost comparisons and review your budget before deciding?",
        "When comparing yourself to others, how often do you use income or possessions as the primary measure of success?",
        "When bills are due, how often do you find yourself paying them at the last minute or after the due date?"
      ]
    },
    {
      id: 'relate_scenarios',
      type: 'radio_group',
      question: "How much do you relate to these scenarios?",
      subtext: "1 = Not at all, 2 = Slightly, 3 = Moderately, 4 = Considerably, 5 = Completely",
      gradient: "from-incluya-yellow/20 to-incluya-turquoise/20",
      subQuestions: [
        "When friends suggest an expensive outing, how often do you make up an excuse rather than admit it doesn't fit your budget?",
        "When scrolling through social media and seeing friends' vacations or purchases, how often do you feel a pang of financial inadequacy?"
      ]
    },
    {
      id: 'life_situations',
      type: 'radio_group',
      question: "How frequently do these situations occur in your life?",
      subtext: "1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always",
      gradient: "from-incluya-peach/20 to-incluya-yellow/20",
      subQuestions: [
        "When you think about potential unexpected expenses like car repairs or medical bills, how often do you worry about how you would cover them?",
        "When you see peers buying homes or taking expensive vacations, how often do you wonder if you're falling behind financially?",
        "When someone asks about your student loans or credit card debt, how often do you downplay the actual amount?",
        "When in conversations about investing or financial planning, how often do you stay quiet for fear of revealing what you don't know?",
        "When facing a financial decision you're unsure about, how often do you avoid seeking advice from friends or professionals?",
        "When you receive account notifications, how often do you delay opening them because you're anxious about what you might see?",
        "When shopping for necessities like clothing or self-care items, how often do you feel guilty about the expenditure, even when it's within your budget?"
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string, subQuestionIndex?: number) => {
    const key = subQuestionIndex !== undefined ? `${questionId}_${subQuestionIndex}` : questionId;
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleSubmit = () => {
    console.log('Intake answers:', answers);
    // Handle form submission here
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
            src="https://raw.githubusercontent.com/saltnpepper12/videos/main/5561389-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-16">
        {/* Progress Bar with Enhanced Design */}
        <div className="mb-16">
          <div className="relative">
            <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm shadow-inner">
              <div 
                className="bg-gradient-to-r from-incluya-yellow to-incluya-turquoise h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-white/60 text-sm font-sans">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentQuestion 
                        ? 'bg-incluya-yellow shadow-lg' 
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <div className="space-y-16">
            {/* Question Card */}
            <div className={`glass-panel p-8 md:p-12 bg-gradient-to-br ${currentQ.gradient || 'from-white/10 to-white/5'} border border-white/20 shadow-2xl`}>
              <div className="text-center space-y-8">
                {/* Icon for textarea questions */}
                {currentQ.icon && (
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-incluya-yellow/20 backdrop-blur-sm">
                      <currentQ.icon className="w-8 h-8 text-incluya-yellow" />
                    </div>
                  </div>
                )}
                
                {/* Question Title */}
                <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
                  {currentQ.question}
                </h2>
                
                {currentQ.subtext && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-white/90 text-lg font-sans">
                      {currentQ.subtext}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Answer Section */}
            <div className="space-y-8">
              {currentQ.type === 'textarea' ? (
                <div className="max-w-3xl mx-auto">
                  <div className="glass-panel p-6 bg-white/5 border border-white/20">
                    <Textarea
                      placeholder={currentQ.placeholder}
                      value={answers[currentQ.id] || ''}
                      onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                      className="min-h-[160px] bg-transparent border-none text-white placeholder:text-white/50 text-lg font-sans resize-none focus:ring-2 focus:ring-incluya-yellow/50 focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  {currentQ.subQuestions?.map((subQuestion, index) => (
                    <div key={index} className="glass-panel p-6 bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-incluya-yellow/20 flex items-center justify-center">
                            <span className="text-incluya-yellow font-semibold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-white/95 text-lg md:text-xl font-sans leading-relaxed flex-1">
                            {subQuestion}
                          </p>
                        </div>
                        
                        <RadioGroup
                          value={answers[`${currentQ.id}_${index}`] || ''}
                          onValueChange={(value) => handleAnswerChange(currentQ.id, value, index)}
                          className="flex space-x-4 justify-center"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="flex flex-col items-center space-y-2 group">
                              <RadioGroupItem 
                                value={num.toString()} 
                                id={`${currentQ.id}_${index}_${num}`}
                                className="border-white/40 text-white data-[state=checked]:bg-incluya-yellow data-[state=checked]:border-incluya-yellow transition-all duration-200 hover:border-incluya-yellow/60 hover:scale-110 w-6 h-6"
                              />
                              <Label 
                                htmlFor={`${currentQ.id}_${index}_${num}`}
                                className="text-white/70 font-sans cursor-pointer hover:text-incluya-yellow transition-colors text-lg group-hover:scale-110 transition-transform duration-200"
                              >
                                {num}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 font-sans disabled:opacity-30 transition-all duration-200 px-6 py-3 text-lg border border-white/20 hover:border-white/40"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-incluya-yellow to-incluya-turquoise hover:from-incluya-yellow-dark hover:to-incluya-turquoise-dark text-incluya-text-dark font-semibold px-12 py-4 text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20"
                >
                  Complete Journey
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-incluya-yellow to-incluya-turquoise hover:from-incluya-yellow-dark hover:to-incluya-turquoise-dark text-incluya-text-dark font-semibold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeQuestions;
