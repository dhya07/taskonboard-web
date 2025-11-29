import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import BecomeTasker from '../pages/BecomeTasker'
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
        {/* Add more routes here */}
      </Routes>
    </Router>
  )
}

export default AppRouter 