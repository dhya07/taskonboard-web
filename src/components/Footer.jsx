import React from 'react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'How it Works', href: '#' },
      { name: 'Services', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Safety', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Trust & Safety', href: '#' }
    ],
    taskers: [
      { name: 'Become a Tasker', href: '#' },
      { name: 'Tasker Resources', href: '#' },
      { name: 'Tasker App', href: '#' },
      { name: 'Community', href: '#' }
    ]
  }

  const partnerLogos = [
    { name: 'Stripe', logo: 'stripe' },
    { name: 'Google', logo: 'google' },
    { name: 'Apple', logo: 'apple' },
    { name: 'Better Business Bureau', logo: 'bbb' },
    { name: 'TechCrunch', logo: 'techcrunch' },
    { name: 'Forbes', logo: 'forbes' }
  ]

  const LogoPlaceholder = ({ name, logo }) => (
    <div className="bg-gray-800 hover:bg-brand-main-green transition-colors duration-300 rounded-lg p-4 flex items-center justify-center h-16 w-24">
      <span className="text-xs text-gray-300 hover:text-white font-medium text-center">{name}</span>
    </div>
  )

  return (
    <footer className="bg-brand-dark-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-main-green to-brand-dark-green-3 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TaskOnBoard</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Connecting Canadian communities by helping people get things done. From everyday tasks to skilled work, we're here to help across Canada.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-main-green transition-colors duration-300">
                <span className="text-brand-medium-green hover:text-white transition-colors duration-300">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-main-green transition-colors duration-300">
                <span className="text-brand-medium-green hover:text-white transition-colors duration-300">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-main-green transition-colors duration-300">
                <span className="text-brand-medium-green hover:text-white transition-colors duration-300">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-main-green transition-colors duration-300">
                <span className="text-brand-medium-green hover:text-white transition-colors duration-300">in</span>
              </a>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <a href="#" className="inline-flex items-center bg-brand-dark-blue border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-text-primary transition duration-300 text-sm">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="inline-flex items-center bg-brand-dark-blue border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-text-primary transition duration-300 text-sm">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Taskers</h3>
            <ul className="space-y-3">
              {footerLinks.taskers.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-6 text-center">Trusted by leading companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerLogos.map((partner, index) => (
              <LogoPlaceholder key={index} name={partner.name} logo={partner.logo} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest updates on new features and services.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main-green focus:border-transparent"
              />
              <button className="bg-brand-main-green text-white px-6 py-3 rounded-lg hover:bg-brand-dark-green-3 transition duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 TaskOnBoard. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-brand-medium-green transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-medium-green transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-medium-green transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🇨🇦 English (Canada)</span>
              <span>•</span>
              <span>💵 CAD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 