import React from 'react'

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark-blue via-brand-main-green to-brand-dark-green-3 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-medium-green rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-brand-light-green rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Download TaskOnBoard Today
            </h2>
            <p className="text-lg md:text-xl text-brand-light-green mb-8 max-w-2xl mx-auto lg:mx-0">
              Join thousands of Canadians who trust TaskOnBoard to get their tasks completed quickly, safely, and affordably across Canada.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-brand-dark-green-2 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-sm md:text-base">Verified providers</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-brand-dark-green-2 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-sm md:text-base">Secure payments</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-brand-dark-green-2 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-sm md:text-base">24/7 support</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-brand-dark-green-2 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-sm md:text-base">Fair pricing</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a href="#" className="inline-flex items-center bg-brand-dark-blue text-white px-6 py-3 rounded-lg hover:bg-text-primary transition duration-300 shadow-lg">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="inline-flex items-center bg-brand-dark-blue text-white px-6 py-3 rounded-lg hover:bg-text-primary transition duration-300 shadow-lg">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Quick Note */}
            <p className="text-sm text-brand-light-green">
              Free to download • Available on iOS and Android in Canada
            </p>
          </div>

          {/* Phone Mockups */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone */}
              <div className="relative bg-brand-dark-blue rounded-[2.5rem] p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-bg-card rounded-[2rem] overflow-hidden w-64 h-[520px] md:w-72 md:h-[580px]">
                  {/* Status Bar */}
                  <div className="bg-brand-main-green h-8 flex items-center justify-between px-6 text-xs font-medium text-white">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                      <div className="w-1 h-2 bg-white rounded-sm opacity-60"></div>
                      <div className="w-6 h-3 border border-white rounded-sm opacity-80">
                        <div className="w-4 h-2 bg-white rounded-sm ml-0.5 mt-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 h-full bg-gradient-to-br from-brand-light-green to-bg-card">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-main-green to-brand-dark-green-3 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">T</span>
                      </div>
                      <h3 className="text-lg font-bold text-brand-dark-blue mb-2">TaskOnBoard</h3>
                      <p className="text-sm text-text-secondary">Get tasks done anywhere</p>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex justify-around mb-6 bg-bg-card rounded-xl p-3 shadow-sm">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-brand-light-green rounded-lg flex items-center justify-center mb-1">
                          <span className="text-brand-main-green text-sm">🏠</span>
                        </div>
                        <span className="text-xs text-text-secondary">Home</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-brand-medium-green rounded-lg flex items-center justify-center mb-1">
                          <span className="text-brand-dark-green-3 text-sm">🔍</span>
                        </div>
                        <span className="text-xs text-text-secondary">Browse</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-brand-light-green rounded-lg flex items-center justify-center mb-1">
                          <span className="text-brand-main-green text-sm">💬</span>
                        </div>
                        <span className="text-xs text-text-secondary">Messages</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-brand-medium-green rounded-lg flex items-center justify-center mb-1">
                          <span className="text-brand-dark-green-3 text-sm">👤</span>
                        </div>
                        <span className="text-xs text-text-secondary">Profile</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-brand-main-green to-brand-dark-green-3 rounded-lg p-4 text-white">
                        <div className="text-sm font-semibold mb-1">Need help now?</div>
                        <div className="text-xs opacity-90">Post a task and get offers in minutes</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-brand-dark-green-2 to-brand-dark-green-3 rounded-lg p-4 text-white">
                        <div className="text-sm font-semibold mb-1">Become a Tasker</div>
                        <div className="text-xs opacity-90">Start earning money helping others</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone */}
              <div className="absolute -left-20 top-12 bg-brand-dark-blue rounded-[2rem] p-2 shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 opacity-75 scale-75">
                <div className="bg-bg-card rounded-[1.5rem] overflow-hidden w-48 h-96">
                  <div className="bg-brand-main-green h-6 flex items-center justify-center text-xs font-medium text-white">
                    <span>TaskOnBoard</span>
                  </div>
                  <div className="p-3 h-full bg-gradient-to-br from-brand-light-green to-bg-card">
                    <div className="text-center mb-4">
                      <div className="text-sm font-bold text-brand-dark-blue mb-2">Task Complete!</div>
                      <div className="w-12 h-12 bg-brand-medium-green rounded-full flex items-center justify-center mx-auto">
                        <span className="text-brand-dark-green-3 text-lg">✓</span>
                      </div>
                    </div>
                    <div className="bg-bg-card rounded-lg p-3 shadow-sm">
                      <div className="text-xs font-medium text-brand-dark-blue">House Cleaning</div>
                                             <div className="text-xs text-text-secondary">$45.00 CAD • 2 hours</div>
                      <div className="flex items-center mt-2">
                        <div className="flex text-brand-yellow text-xs">⭐⭐⭐⭐⭐</div>
                        <span className="text-xs text-text-secondary ml-1">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Message */}
              <div className="absolute -right-8 top-32 bg-bg-card rounded-lg shadow-xl p-4 hidden md:block animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-main-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-dark-blue">Payment Received!</div>
                    <div className="text-xs text-text-secondary">$45.00 CAD • House Cleaning</div>
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

export default CTA 