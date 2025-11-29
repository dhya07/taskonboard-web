import React, { useState } from 'react'
import { config, toggleComingSoon } from '../utils/config'

const AdminToggle = () => {
  const [isComingSoon, setIsComingSoon] = useState(config.showComingSoon)
  const [showAdmin, setShowAdmin] = useState(false)

  const handleToggle = () => {
    const newValue = !isComingSoon
    setIsComingSoon(newValue)
    toggleComingSoon(newValue)
    
    // Force page reload to apply changes
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  // Show admin panel only in development or when accessed via keyboard shortcut
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      // Press Ctrl/Cmd + Shift + A to toggle admin panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        setShowAdmin(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!showAdmin && config.environment !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle button to show/hide admin panel */}
      {!showAdmin && (
        <button
          onClick={() => setShowAdmin(true)}
          className="bg-brand-dark-blue text-white p-2 rounded-full shadow-lg hover:bg-text-primary transition duration-300"
          title="Admin Panel (Ctrl+Shift+A)"
        >
          ⚙️
        </button>
      )}

      {/* Admin panel */}
      {showAdmin && (
        <div className="bg-white rounded-lg shadow-2xl p-4 border border-ui-border min-w-[280px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-brand-dark-blue">Admin Controls</h3>
            <button
              onClick={() => setShowAdmin(false)}
              className="text-text-secondary hover:text-text-primary"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isComingSoon}
                  onChange={handleToggle}
                  className="w-4 h-4 text-brand-main-green border-ui-border rounded focus:ring-brand-main-green"
                />
                <span className="text-sm text-text-primary">
                  Show Coming Soon Page
                </span>
              </label>
              <p className="text-xs text-text-secondary mt-1">
                Toggle between coming soon and full website
              </p>
            </div>

            <div className="pt-3 border-t border-ui-border">
              <div className="text-xs text-text-secondary space-y-1">
                <div>Mode: <span className="font-medium">{isComingSoon ? 'Coming Soon' : 'Full Website'}</span></div>
                <div>Environment: <span className="font-medium">{config.environment}</span></div>
                <div>Version: <span className="font-medium">{config.version}</span></div>
              </div>
            </div>

            <div className="pt-3 border-t border-ui-border">
              <p className="text-xs text-text-secondary">
                💡 Press <kbd className="px-1 py-0.5 bg-ui-border rounded text-xs">Ctrl+Shift+A</kbd> to toggle this panel
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminToggle 