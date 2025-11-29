import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-light-green to-bg-main pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-blue mb-6">
              Get tasks done.{' '}
              <span className="text-brand-main-green">Anywhere.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              Book trusted service providers across Canada for anything you need—cleaning, repairs, moving & more. 
              Your tasks, completed by verified Canadian professionals.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a href="#" className="inline-flex items-center bg-brand-dark-blue text-bg-white px-6 py-3 rounded-lg hover:bg-text-primary transition duration-300">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="inline-flex items-center bg-brand-dark-blue text-bg-white px-6 py-3 rounded-lg hover:bg-text-primary transition duration-300">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-text-secondary">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-main-green rounded-full mr-2"></div>
                <span>500+ verified providers</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-dark-green-2 rounded-full mr-2"></div>
                <span>95% satisfaction rate</span>
              </div>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-brand-dark-blue rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-bg-card rounded-[2rem] overflow-hidden w-64 h-[520px] md:w-72 md:h-[580px]">
                  {/* Status Bar */}
                  <div className="bg-bg-input h-8 flex items-center justify-between px-6 text-xs font-medium text-text-primary">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-brand-main-green rounded-sm"></div>
                      <div className="w-1 h-2 bg-ui-tab-grey rounded-sm"></div>
                      <div className="w-6 h-3 border border-ui-tab-grey rounded-sm">
                        <div className="w-4 h-2 bg-brand-main-green rounded-sm ml-0.5 mt-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 h-full bg-gradient-to-br from-brand-light-green to-bg-card">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-brand-dark-blue mb-2">Find Your Tasker</h3>
                      <p className="text-sm text-text-secondary">What do you need help with?</p>
                    </div>
                    
                    {/* Service Cards */}
                    <div className="space-y-3">
                      <div className="bg-bg-card rounded-lg p-3 shadow-sm border border-ui-border">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-brand-light-green rounded-lg flex items-center justify-center mr-3">
                            <span className="text-brand-main-green">🏠</span>
                          </div>
                          <div>
                            <div className="font-medium text-brand-dark-blue text-sm">House Cleaning</div>
                            <div className="text-xs text-text-secondary">$25-50 CAD/hour</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-bg-card rounded-lg p-3 shadow-sm border border-ui-border">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-brand-medium-green rounded-lg flex items-center justify-center mr-3">
                            <span className="text-brand-dark-green-3">🔧</span>
                          </div>
                          <div>
                            <div className="font-medium text-brand-dark-blue text-sm">Handyman</div>
                            <div className="text-xs text-text-secondary">$30-60 CAD/hour</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-bg-card rounded-lg p-3 shadow-sm border border-ui-border">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-brand-light-green rounded-lg flex items-center justify-center mr-3">
                            <span className="text-brand-main-green">📦</span>
                          </div>
                          <div>
                            <div className="font-medium text-brand-dark-blue text-sm">Moving Help</div>
                            <div className="text-xs text-text-secondary">$40-80 CAD/hour</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -right-4 top-20 bg-bg-card rounded-lg shadow-lg p-3 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-brand-main-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Task Complete!</div>
                    <div className="text-xs text-text-secondary">$45 CAD paid</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-32 bg-bg-card rounded-lg shadow-lg p-3 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-brand-dark-green-2 rounded-full"></div>
                  <div>
                    <div className="text-xs font-medium">New offer received</div>
                    <div className="text-xs text-text-secondary">2 min ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 