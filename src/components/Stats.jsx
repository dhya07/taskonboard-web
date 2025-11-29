import React from 'react'

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Verified Providers",
      description: "Background-checked taskers ready to help",
      color: "bg-gradient-to-br from-brand-main-green to-brand-dark-green-3",
      size: "large"
    },
    {
      number: "95%",
      label: "Customer Satisfaction",
      description: "Happy customers rate us 5 stars",
      color: "bg-gradient-to-br from-brand-dark-green-2 to-brand-main-green", 
      size: "medium"
    },
    {
      number: "50K+",
      label: "Tasks Completed",
      description: "Successfully finished projects",
      color: "bg-gradient-to-br from-brand-dark-blue to-text-primary",
      size: "small"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Help when you need it most",
      color: "bg-gradient-to-br from-brand-yellow to-brand-dark-green-2",
      size: "medium"
    },
    {
      number: "$45 CAD",
      label: "Average Task Value", 
      description: "Fair pricing for quality work in Canada",
      color: "bg-gradient-to-br from-brand-medium-green to-brand-main-green",
      size: "large"
    }
  ]

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'w-48 h-48 md:w-64 md:h-64'
      case 'medium':
        return 'w-32 h-32 md:w-40 md:h-40'
      case 'small':
        return 'w-24 h-24 md:w-32 md:h-32'
      default:
        return 'w-32 h-32 md:w-40 md:h-40'
    }
  }

  const getTextSizes = (size) => {
    switch(size) {
      case 'large':
        return { number: 'text-2xl md:text-4xl', label: 'text-sm md:text-base' }
      case 'medium':
        return { number: 'text-xl md:text-2xl', label: 'text-xs md:text-sm' }
      case 'small':
        return { number: 'text-lg md:text-xl', label: 'text-xs' }
      default:
        return { number: 'text-xl md:text-2xl', label: 'text-xs md:text-sm' }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-main-green rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-brand-dark-green-2 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-dark-blue rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-6">
            TaskOnBoard by the Numbers
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Join a thriving Canadian community of users and providers who trust TaskOnBoard to get things done.
          </p>
        </div>

        {/* Stats Bubbles */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative h-[600px]">
              {/* Large bubble - top left */}
              <div className="absolute top-0 left-0">
                <div className={`${getSizeClasses(stats[0].size)} ${stats[0].color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className={`font-bold ${getTextSizes(stats[0].size).number} mb-2`}>
                    {stats[0].number}
                  </div>
                  <div className={`font-semibold ${getTextSizes(stats[0].size).label} text-center px-4`}>
                    {stats[0].label}
                  </div>
                </div>
                <div className="mt-4 text-center max-w-48">
                  <p className="text-sm text-text-secondary">{stats[0].description}</p>
                </div>
              </div>

              {/* Medium bubble - top right */}
              <div className="absolute top-8 right-20">
                <div className={`${getSizeClasses(stats[1].size)} ${stats[1].color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className={`font-bold ${getTextSizes(stats[1].size).number} mb-2`}>
                    {stats[1].number}
                  </div>
                  <div className={`font-semibold ${getTextSizes(stats[1].size).label} text-center px-4`}>
                    {stats[1].label}
                  </div>
                </div>
                <div className="mt-4 text-center max-w-40">
                  <p className="text-sm text-text-secondary">{stats[1].description}</p>
                </div>
              </div>

              {/* Small bubble - center left */}
              <div className="absolute top-40 left-32">
                <div className={`${getSizeClasses(stats[2].size)} ${stats[2].color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className={`font-bold ${getTextSizes(stats[2].size).number} mb-1`}>
                    {stats[2].number}
                  </div>
                  <div className={`font-semibold ${getTextSizes(stats[2].size).label} text-center px-2`}>
                    {stats[2].label}
                  </div>
                </div>
                <div className="mt-4 text-center max-w-32">
                  <p className="text-xs text-text-secondary">{stats[2].description}</p>
                </div>
              </div>

              {/* Medium bubble - bottom center */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                <div className={`${getSizeClasses(stats[3].size)} ${stats[3].color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className={`font-bold ${getTextSizes(stats[3].size).number} mb-2`}>
                    {stats[3].number}
                  </div>
                  <div className={`font-semibold ${getTextSizes(stats[3].size).label} text-center px-4`}>
                    {stats[3].label}
                  </div>
                </div>
                <div className="mt-4 text-center max-w-40">
                  <p className="text-sm text-text-secondary">{stats[3].description}</p>
                </div>
              </div>

              {/* Large bubble - bottom right */}
              <div className="absolute bottom-0 right-0">
                <div className={`${getSizeClasses(stats[4].size)} ${stats[4].color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className={`font-bold ${getTextSizes(stats[4].size).number} mb-2`}>
                    {stats[4].number}
                  </div>
                  <div className={`font-semibold ${getTextSizes(stats[4].size).label} text-center px-4`}>
                    {stats[4].label}
                  </div>
                </div>
                <div className="mt-4 text-center max-w-48">
                  <p className="text-sm text-text-secondary">{stats[4].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${getSizeClasses(stat.size)} ${stat.color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300 mx-auto`}>
                    <div className={`font-bold ${getTextSizes(stat.size).number} mb-2`}>
                      {stat.number}
                    </div>
                    <div className={`font-semibold ${getTextSizes(stat.size).label} text-center px-4`}>
                      {stat.label}
                    </div>
                  </div>
                  <div className="mt-4 text-center max-w-48">
                    <p className="text-sm text-text-secondary">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-4">
              Ready to join thousands of satisfied users?
            </h3>
            <p className="text-text-secondary mb-8">
              Experience the TaskOnBoard difference. Download the app and get your first task completed today.
            </p>
            <button className="bg-brand-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-text-primary transition duration-300 inline-flex items-center">
              <span className="mr-2">🚀</span>
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats 