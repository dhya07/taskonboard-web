import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import BecomeTasker from '../pages/BecomeTasker'
import TermsOfUse from '../pages/TermsOfUse'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import CookieNotice from '../pages/CookieNotice'
import { config } from '../utils/config'

const AppRouter = () => {
  const isComingSoon = config.showComingSoon

  return (
    <Router>
      <Routes>
        {/* Home page - conditionally wrapped with layout */}
        <Route path="/" element={
          isComingSoon ? (
            <Home />
          ) : (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        } />
        
        {/* Other pages with layout */}
        <Route path="/become-tasker" element={
          <MainLayout>
            <BecomeTasker />
          </MainLayout>
        } />
        
        {/* Legal pages - standalone without layout */}
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookieNotice />} />
      </Routes>
    </Router>
  )
}

export default AppRouter 