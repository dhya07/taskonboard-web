import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

const BecomeTasker = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const benefits = [
    {
      icon: '💰',
      title: 'Earn Up to $5,000+ CAD/Month',
      description: 'Set your own rates and work as much or as little as you want. Top Canadian taskers earn significant income.',
      stats: 'Average: $45 CAD/hour'
    },
    {
      icon: '🕐',
      title: 'Work On Your Terms',
      description: 'Choose when, where, and what tasks you want to complete. Complete flexibility to fit your lifestyle.',
      stats: 'You decide your schedule'
    },
    {
      icon: '🔒',
      title: 'Secure Payments',
      description: 'Payment is secured upfront before you start work. No chasing payments or dealing with late payers.',
      stats: '100% payment protection'
    },
    {
      icon: '🛡️',
      title: 'Insurance Coverage',
      description: 'Comprehensive liability insurance coverage while completing tasks. Work with confidence and peace of mind.',
      stats: 'Full liability protection'
    }
  ]

  const taskCategories = [
    { name: 'Cleaning', demand: 'High', rate: '$25-40/hr' },
    { name: 'Handyman', demand: 'Very High', rate: '$35-65/hr' },
    { name: 'Moving', demand: 'High', rate: '$30-50/hr' },
    { name: 'Tech Support', demand: 'Medium', rate: '$40-80/hr' },
    { name: 'Yard Work', demand: 'High', rate: '$25-45/hr' },
    { name: 'Assembly', demand: 'Medium', rate: '$30-50/hr' },
    { name: 'Delivery', demand: 'Very High', rate: '$20-35/hr' },
    { name: 'Pet Care', demand: 'Medium', rate: '$25-40/hr' }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Create Your Profile',
      description: 'Sign up, verify your identity, and showcase your skills with photos and descriptions.',
      icon: '👤'
    },
    {
      step: '2',
      title: 'Browse & Bid',
      description: 'Find tasks that match your skills and schedule. Submit competitive offers to clients.',
      icon: '🔍'
    },
    {
      step: '3',
      title: 'Get Hired',
      description: 'Communicate with clients, confirm details, and get hired for tasks you want to complete.',
      icon: '🤝'
    },
    {
      step: '4',
      title: 'Complete & Get Paid',
      description: 'Complete the task, get it approved, and receive payment directly to your bank account.',
      icon: '💳'
    }
  ]

  const features = [
    'Set Your Own Rates',
    'Choose Your Tasks',
    'Flexible Schedule',
    'Instant Payments',
    'Insurance Coverage',
    'Canadian Market Focus',
    'Rating System',
    'Support Team'
  ]

  return (
    <>
      <Helmet>
        <title>Become a Tasker - Earn Money Your Way | TaskOnBoard</title>
        <meta name="description" content="Join thousands of Canadians earning extra income with TaskOnBoard. Set your own rates, choose your schedule, and get paid for tasks you love doing." />
      </Helmet>

      <div className="min-h-screen bg-bg-main">
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-blue via-brand-main-green to-brand-dark-green-3">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-20 left-10 w-20 h-20 bg-brand-light-green/20 rounded-full blur-xl animate-pulse"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            ></div>
            <div 
              className="absolute top-40 right-20 w-32 h-32 bg-brand-medium-green/30 rounded-full blur-2xl animate-pulse delay-1000"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            ></div>
            <div 
              className="absolute bottom-20 left-1/4 w-24 h-24 bg-brand-dark-green-2/20 rounded-full blur-xl animate-pulse delay-2000"
              style={{ transform: `translateY(${scrollY * 0.4}px)` }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Earn Money
                <span className="block bg-gradient-to-r from-brand-light-green to-brand-dark-green-2 bg-clip-text text-transparent">
                  Your Way
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Join thousands of Canadians earning extra income by completing tasks in their community. 
                Set your own rates, choose your schedule, and get paid for what you love doing.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-bold text-brand-light-green">$5,000+</div>
                  <div className="text-sm text-gray-300">Monthly potential</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-bold text-brand-light-green">50K+</div>
                  <div className="text-sm text-gray-300">Tasks completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-bold text-brand-light-green">4.9/5</div>
                  <div className="text-sm text-gray-300">Average rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-brand-main-green hover:bg-brand-dark-green-3 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Earning Today
                </button>
                <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm">
                  Watch How It Works
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light-green/5 to-brand-medium-green/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-blue mb-6">
                Why Choose TaskOnBoard?
              </h2>
              <p className="text-xl text-text-primary max-w-3xl mx-auto">
                Join Canada's most trusted task marketplace and start earning on your own terms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`group bg-white border border-ui-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-4 group-hover:text-brand-main-green transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-text-primary mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-brand-main-green font-bold text-lg animate-pulse-glow">
                    {benefit.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-bg-main relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-blue mb-6">
                How It Works
              </h2>
              <p className="text-xl text-text-primary max-w-3xl mx-auto">
                Getting started is simple. Follow these four easy steps to begin earning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div 
                  key={index}
                  className={`relative text-center group animate-slide-in-bottom stagger-${index + 1}`}
                >
                  {/* Connecting Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand-main-green to-brand-medium-green transform translate-x-4 z-0 animate-fade-in-right"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-brand-main-green to-brand-dark-green-3 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg animate-rotate-in hover-lift">
                      <div className="text-4xl">{step.icon}</div>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-dark-blue text-white rounded-full flex items-center justify-center font-bold text-lg animate-scale-in">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-dark-blue mb-4 group-hover:text-brand-main-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-primary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Task Categories Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-brand-light-green/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-medium-green/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-blue mb-6">
                Popular Task Categories
              </h2>
              <p className="text-xl text-text-primary max-w-3xl mx-auto">
                Discover the most in-demand tasks in Canada and their earning potential
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {taskCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`bg-white border border-ui-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group animate-fade-in-up stagger-${(index % 4) + 1}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-brand-dark-blue group-hover:text-brand-main-green transition-colors duration-300">
                      {category.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 transform group-hover:scale-110 ${
                      category.demand === 'Very High' ? 'bg-brand-light-green text-brand-dark-green-3 animate-pulse' :
                      category.demand === 'High' ? 'bg-brand-medium-green text-brand-dark-blue' :
                      'bg-bg-input text-text-secondary'
                    }`}>
                      {category.demand}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-brand-main-green mb-2 gradient-text">
                    {category.rate}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Demand: {category.demand}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-brand-dark-blue text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-main-green/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-dark-green-2/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide all the tools and support you need to build a successful tasking business
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`glass rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-scale-in stagger-${(index % 8) + 1} hover-lift`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-main-green rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <h3 className="font-semibold text-white hover:text-brand-light-green transition-colors duration-300">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-main-green to-brand-dark-green-3 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Join thousands of Canadians who are already earning extra income with TaskOnBoard. 
              Sign up today and start making money tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-white text-brand-main-green hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Now
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Free to join
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                No hidden fees
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Canadian focused
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-brand-light-green to-brand-medium-green rounded-3xl p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-blue mb-6">
                    Download the TaskOnBoard App
                  </h2>
                  <p className="text-xl text-brand-dark-blue mb-8 leading-relaxed">
                    Manage your tasks, communicate with clients, and track your earnings on the go. 
                    Available for iPhone and Android across Canada.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="inline-flex items-center bg-brand-dark-blue text-white px-6 py-3 rounded-xl hover:bg-text-primary transition duration-300">
                      <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-lg font-semibold">App Store</div>
                      </div>
                    </a>
                    
                    <a href="#" className="inline-flex items-center bg-brand-dark-blue text-white px-6 py-3 rounded-xl hover:bg-text-primary transition duration-300">
                      <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-lg font-semibold">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative animate-fade-in-right">
                    <div className="w-64 h-64 bg-white/30 rounded-3xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-500 animate-float hover-lift">
                      <div className="text-6xl animate-scale-in">📱</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-main-green rounded-full flex items-center justify-center text-white text-2xl animate-bounce animate-pulse-glow">
                      ⬇️
                    </div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-dark-green-2/50 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-6 w-8 h-8 bg-brand-light-green/50 rounded-full blur-sm animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </>
  )
}

export default BecomeTasker 