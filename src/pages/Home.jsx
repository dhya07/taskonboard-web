import React from 'react'
import { Helmet } from 'react-helmet-async'
import { config } from '../utils/config'
import ComingSoon from '../components/ComingSoon'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  const isComingSoon = config.showComingSoon

  return (
    <>
      <Helmet>
        <title>{isComingSoon ? 'TaskOnBoard - Coming Soon' : 'TaskOnBoard - Get tasks done. Anywhere.'}</title>
        <meta 
          name="description" 
          content={isComingSoon 
            ? "Something amazing is coming soon! We're building the ultimate platform to connect you with trusted service providers across Canada." 
            : "Book trusted service providers for anything you need—cleaning, repairs, moving & more. Join 500+ verified providers and thousands of satisfied customers."
          } 
        />
        <meta 
          name="keywords" 
          content={isComingSoon 
            ? "task marketplace, home services, cleaning, handyman, moving, delivery, gig economy, coming soon"
            : "task marketplace, home services, cleaning, handyman, moving, delivery, gig economy"
          } 
        />
        <meta 
          property="og:title" 
          content={isComingSoon ? 'TaskOnBoard - Coming Soon' : 'TaskOnBoard - Get tasks done. Anywhere.'} 
        />
        <meta 
          property="og:description" 
          content={isComingSoon 
            ? "Something amazing is coming soon! Get ready for seamless task management and reliable home services." 
            : "Book trusted service providers for anything you need—cleaning, repairs, moving & more."
          } 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taskonboard.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content={isComingSoon ? 'TaskOnBoard - Coming Soon' : 'TaskOnBoard - Get tasks done. Anywhere.'} 
        />
        <meta 
          name="twitter:description" 
          content={isComingSoon 
            ? "Something amazing is coming soon! Get ready for seamless task management and reliable home services." 
            : "Book trusted service providers for anything you need—cleaning, repairs, moving & more."
          } 
        />
      </Helmet>

      {isComingSoon ? (
        <ComingSoon />
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          {/* How It Works Section */}
          <HowItWorks />

          {/* Features Section */}
          <Features />

          {/* Stats Section */}
          <Stats />

          {/* Download CTA Section */}
          <CTA />

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  )
}

export default Home 