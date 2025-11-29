// Feature flags and configuration
export const config = {
  // Toggle between coming soon page and full website
  // Set to true for coming soon, false for full website
  showComingSoon: true,
  
  // Other feature flags can be added here
  enablePayments: true,
  enableAuth: true,
  
  // Launch date for countdown (only used when showComingSoon is true)
  launchDate: (() => {
    const date = new Date()
    date.setDate(date.getDate() + 30) // 30 days from now
    return date
  })(),
  
  // App information
  appName: 'TaskOnBoard',
  version: '1.0.0',
  environment: import.meta.env.MODE || 'development'
}

// Function to easily toggle coming soon mode
export const toggleComingSoon = (show) => {
  config.showComingSoon = show
  // In a real app, you might want to persist this to localStorage
  // localStorage.setItem('showComingSoon', show)
}

// Check environment variable override
if (import.meta.env.VITE_SHOW_COMING_SOON === 'true') {
  config.showComingSoon = true
} else if (import.meta.env.VITE_SHOW_COMING_SOON === 'false') {
  config.showComingSoon = false
}

export default config 