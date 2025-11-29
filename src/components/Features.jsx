import React from 'react'

const Features = () => {
  const taskTypes = [
    {
      icon: "🏠",
      title: "Home Cleaning",
      description: "Regular cleaning, deep cleaning, move-in/out cleaning",
      price: "From $25 CAD/hr",
      popular: true
    },
    {
      icon: "🔧",
      title: "Handyman Services", 
      description: "Furniture assembly, mounting, minor repairs",
      price: "From $30 CAD/hr",
      popular: false
    },
    {
      icon: "📦",
      title: "Moving & Delivery",
      description: "Help with moving, pickup & delivery, heavy lifting",
      price: "From $40 CAD/hr",
      popular: false
    },
    {
      icon: "💻",
      title: "Tech Support",
      description: "Computer setup, smart home installation, troubleshooting",
      price: "From $35 CAD/hr",
      popular: false
    },
    {
      icon: "🌿",
      title: "Yard Work",
      description: "Lawn mowing, gardening, landscaping, snow removal",
      price: "From $28 CAD/hr",
      popular: false
    },
    {
      icon: "🎨",
      title: "Home Improvement",
      description: "Painting, organizing, decorating, small renovations",
      price: "From $32 CAD/hr",
      popular: false
    }
  ]

  const providerBenefits = [
    {
      icon: "⏰",
      title: "Flexible Schedule", 
      description: "Work when you want, where you want. Set your own hours and availability."
    },
    {
      icon: "💰",
      title: "Instant Payments",
      description: "Get paid immediately after completing tasks. No waiting for weekly payouts."
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Background checks, secure payments, and comprehensive insurance coverage."
    },
    {
      icon: "📈",
      title: "Grow Your Business",
      description: "Build your reputation, gain repeat customers, and increase your earnings."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Task Types Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-6">
              Popular Task Categories
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              From everyday chores to specialized services, find help for any task you need completed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskTypes.map((task, index) => (
              <div key={index} className="bg-bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group relative">
                {task.popular && (
                  <div className="absolute -top-3 -right-3 bg-brand-main-green text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-brand-light-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{task.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-brand-main-green">{task.price}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                  {task.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {task.description}
                </p>
                
                <button className="text-brand-main-green font-semibold text-sm hover:text-brand-dark-green-3 transition-colors duration-300">
                  Find Taskers →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Provider Benefits Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-6">
              Why Become a Tasker?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Join our network of trusted service providers and start earning money on your own terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {providerBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-main-green to-brand-dark-green-3 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">{benefit.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA for Providers */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-main-green to-brand-dark-green-3 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Start Earning Today
              </h3>
              <p className="text-brand-light-green mb-8 max-w-2xl mx-auto">
                Join thousands of Canadian taskers who are making money helping their neighbors. Sign up in minutes and start receiving task requests across Canada.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-text-primary transition duration-300 flex items-center">
                  <span className="mr-2">🚀</span>
                  Apply to Be a Tasker
                </button>
                <button className="border-2 border-brand-dark-blue text-brand-dark-blue bg-bg-card px-8 py-4 rounded-lg font-semibold hover:bg-brand-dark-blue hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 