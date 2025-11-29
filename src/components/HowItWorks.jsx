import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Post Your Task",
      description: "Describe what you need help with. Set your budget and timeline.",
      icon: "📝",
      color: "bg-brand-main-green"
    },
    {
      number: "02", 
      title: "Get Offers",
      description: "Receive offers from verified Canadian taskers in your area within minutes.",
      icon: "💼",
      color: "bg-brand-dark-green-2"
    },
    {
      number: "03",
      title: "Book & Chat",
      description: "Choose your favorite tasker and coordinate the details via chat.",
      icon: "💬",
      color: "bg-brand-dark-green-3"
    },
    {
      number: "04",
      title: "Pay Securely",
      description: "Task completed? Pay securely through the app. Rate your experience.",
      icon: "💳",
      color: "bg-brand-yellow"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-6">
            How TaskOnBoard Works
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Getting help is simple. Post your task, choose your tasker, and get it done—all in one seamless experience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-brand-dark-blue text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {step.number}
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-ui-border -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-ui-tab-grey rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-brand-dark-blue mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-light-green to-brand-medium-green rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-4">
              Ready to get started?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust TaskOnBoard to get their tasks completed quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-brand-main-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-dark-green-3 transition duration-300 flex items-center">
                <span className="mr-2">📱</span>
                Download TaskOnBoard
              </button>
              <button className="bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-text-primary transition duration-300 flex items-center">
                <span className="mr-2">🔧</span>
                Become a Tasker
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 