import React from 'react'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>TaskonBoard - Mobile Task Management Platform</title>
        <meta name="description" content="TaskonBoard connects users with service providers for task management and completion." />
      </Helmet>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to TaskonBoard
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              The ultimate platform connecting users with trusted service providers for all your task management needs.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Download App
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Browse Directory
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TaskonBoard?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it easy to connect, collaborate, and complete tasks efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Network</h3>
              <p className="text-gray-600">Connect with verified service providers in your area.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Get your tasks completed quickly and efficiently.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure payment processing with Stripe.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage 