import React from 'react'
import { Link } from 'react-router-dom'
import TOBLogo from '../assets/images/TOBlogo-dev.png'

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={TOBLogo} alt="TaskOnBoard" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold">TaskOnBoard</span>
        </div>
        <div className="text-sm text-gray-300">
          Available to anyone<br />
          <span className="text-xs">around Canada 🇨🇦</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - QR Code & Text */}
          <div className="space-y-8">
            {/* QR Code Section */}
            <div className="bg-white p-8 rounded-3xl inline-block">
              <div className="w-64 h-64 bg-black flex items-center justify-center">
                {/* QR Code Placeholder - Replace with actual QR code */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="white"/>
                  <g fill="black">
                    {/* QR Pattern Simulation */}
                    <rect x="5" y="5" width="15" height="15"/>
                    <rect x="80" y="5" width="15" height="15"/>
                    <rect x="5" y="80" width="15" height="15"/>
                    <rect x="25" y="10" width="5" height="5"/>
                    <rect x="35" y="10" width="5" height="5"/>
                    <rect x="45" y="10" width="5" height="5"/>
                    <rect x="30" y="25" width="10" height="10"/>
                    <rect x="50" y="25" width="10" height="10"/>
                    <rect x="70" y="25" width="10" height="10"/>
                    <rect x="25" y="40" width="5" height="5"/>
                    <rect x="40" y="40" width="5" height="5"/>
                    <rect x="55" y="40" width="5" height="5"/>
                    <rect x="30" y="55" width="10" height="10"/>
                    <rect x="50" y="55" width="10" height="10"/>
                    <rect x="70" y="55" width="10" height="10"/>
                    <rect x="25" y="70" width="5" height="5"/>
                    <rect x="45" y="70" width="5" height="5"/>
                    <rect x="65" y="70" width="5" height="5"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Download our app<br />
                and <span className="text-[#4ade80]">start getting<br />things done</span>
              </h1>
              <p className="text-gray-400 text-lg mb-2">Scan to download the app</p>
              <p className="text-sm text-gray-500">Available on iOS & Android</p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-white text-black px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-100 transition">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-white text-black px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-100 transition">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Phone Mockup with Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Floating Task Cards */}
            <div className="absolute top-0 left-0 w-72 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img src="/api/placeholder/280/160" alt="House Cleaning" className="w-full h-40 object-cover rounded-xl mb-3" />
              <h3 className="font-semibold text-white">House Cleaning</h3>
              <p className="text-sm text-gray-300">From $60</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xs bg-[#4ade80] text-black px-2 py-1 rounded">⭐ 4.9</span>
                <span className="text-xs text-gray-400">200+ reviews</span>
              </div>
            </div>

            <div className="absolute top-32 right-0 w-72 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <img src="/api/placeholder/280/160" alt="Moving Help" className="w-full h-40 object-cover rounded-xl mb-3" />
              <h3 className="font-semibold text-white">Moving Help</h3>
              <p className="text-sm text-gray-300">From $80</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xs bg-[#4ade80] text-black px-2 py-1 rounded">⭐ 4.8</span>
                <span className="text-xs text-gray-400">150+ reviews</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-12 w-72 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img src="/api/placeholder/280/160" alt="Plumbing" className="w-full h-40 object-cover rounded-xl mb-3" />
              <h3 className="font-semibold text-white">Plumbing</h3>
              <p className="text-sm text-gray-300">Licensed Providers</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xs bg-[#4ade80] text-black px-2 py-1 rounded">✓ Verified</span>
                <span className="text-xs text-gray-400">24/7 Available</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-[550px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
              <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
                {/* Phone Screen Content */}
                <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3748] h-full p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold">Available Taskers</h3>
                    <p className="text-xs text-gray-400">Near you • Montréal</p>
                  </div>
                  
                  {/* Sample Tasker Cards */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-[#4ade80] rounded-full"></div>
                            <div>
                              <h4 className="font-semibold text-sm">Tasker Name</h4>
                              <p className="text-xs text-gray-400">⭐ 4.9 • 50+ tasks</p>
                            </div>
                          </div>
                          <button className="bg-[#4ade80] text-black text-xs px-4 py-2 rounded-lg font-semibold">
                            Book
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] border-2 border-[#1a2332]"></div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">1M+</h3>
            <p className="text-gray-400">Canadians get tasks done</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Verified & Insured</h3>
            <p className="text-gray-400">All providers are background-checked</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-400">Powered by Stripe</p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-[#4ade80]">✓</span>
            <span className="text-sm">Built with safety, trust & transparency</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="flex items-center space-x-2 mb-2 justify-center md:justify-start">
                <img src={TOBLogo} alt="TaskOnBoard" className="w-6 h-6 object-contain" />
                <span className="font-bold">TaskOnBoard</span>
              </div>
              <p className="text-sm text-gray-400">Montréal, QC, Canada</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>© 2025 TaskOnBoard</p>
            <div className="flex space-x-6">
              <Link to="/terms" className="hover:text-white transition">Terms of Use</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <span>|</span>
              <Link to="/cookies" className="hover:text-white transition">Cookie Notice</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ComingSoon 