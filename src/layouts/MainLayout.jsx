import React, { useState } from 'react'

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Become a Tasker', href: '/become-tasker' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <div className="min-h-screen bg-bg-main">
      <header className="bg-bg-card shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-main-green to-brand-dark-green-3 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-brand-dark-blue">TaskOnBoard</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-brand-dark-blue font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-text-secondary hover:text-brand-dark-blue font-medium transition-colors duration-300">
                Sign In
              </button>
              <button className="bg-brand-dark-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-text-primary transition duration-300">
                Download App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-secondary hover:text-brand-dark-blue focus:outline-none focus:text-brand-dark-blue transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-ui-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-brand-dark-blue hover:bg-bg-input rounded-md font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t border-ui-border pt-2 mt-2">
                  <a
                    href="#"
                    className="block px-3 py-2 text-text-secondary hover:text-brand-dark-blue hover:bg-bg-input rounded-md font-medium transition-colors duration-300"
                  >
                    Sign In
                  </a>
                  <div className="px-3 py-2">
                    <button className="w-full bg-brand-dark-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-text-primary transition duration-300">
                      Download App
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout 