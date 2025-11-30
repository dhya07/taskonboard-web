import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import TOBLogo from '../assets/images/TOBlogo-dev.png'

const CookieNotice = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Notice - TaskOnBoard</title>
        <meta name="description" content="TaskOnBoard Cookie Notice - Learn how we use cookies and similar technologies." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
              <img src={TOBLogo} alt="TaskOnBoard" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-[#1a2332]">TaskOnBoard</span>
            </Link>
            <Link to="/" className="text-sm text-gray-600 hover:text-[#4ade80] transition">
              ← Back to Home
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">Cookie Notice</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: November 30, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies allow us to recognize your device and remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and the site more useful to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">2. How TaskOnBoard Uses Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our platform</li>
                <li>Improve our services and user experience</li>
                <li>Provide personalized content and recommendations</li>
                <li>Deliver targeted advertisements</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
                <li>Detect and prevent fraud and security threats</li>
                <li>Analyze site traffic and usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">3.1 Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Account authentication and login</li>
                <li>Security and fraud prevention</li>
                <li>Session management</li>
                <li>Load balancing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Duration:</strong> These cookies are typically session cookies that expire when you close your browser, or persistent cookies that last up to 1 year.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">3.2 Performance and Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our platform:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Google Analytics - to analyze website traffic and usage</li>
                <li>Heatmap tools - to see how users navigate our pages</li>
                <li>Error tracking - to identify and fix technical issues</li>
                <li>Performance monitoring - to optimize loading times</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Duration:</strong> Up to 2 years.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">3.3 Functional Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remember your language preference</li>
                <li>Save your location for task searches</li>
                <li>Recall your notification settings</li>
                <li>Store items in your cart or favorites</li>
                <li>Remember form inputs</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Duration:</strong> Up to 1 year.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">3.4 Advertising and Marketing Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are used to deliver relevant advertisements and measure campaign effectiveness:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Facebook Pixel - for retargeting and conversion tracking</li>
                <li>Google Ads - for advertising and remarketing</li>
                <li>LinkedIn Insight Tag - for B2B marketing</li>
                <li>TikTok Pixel - for social media advertising</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Duration:</strong> Up to 2 years.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">3.5 Social Media Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies allow you to share content and interact with social media platforms:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Facebook social plugins</li>
                <li>Instagram embeds</li>
                <li>Twitter sharing buttons</li>
                <li>LinkedIn integration</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Duration:</strong> Varies by platform, up to 2 years.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some cookies on our site are set by third-party services. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Web analytics service</li>
                <li><strong>Stripe:</strong> Payment processing and fraud detection</li>
                <li><strong>Facebook:</strong> Social media integration and advertising</li>
                <li><strong>Hotjar:</strong> User behavior analytics</li>
                <li><strong>Intercom:</strong> Customer support and messaging</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not control these third-party cookies. Please review the privacy policies of these services for information about their cookie practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">5. Other Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to cookies, we may use other tracking technologies:
              </p>
              
              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">5.1 Web Beacons (Pixels)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Small graphic images embedded in emails and web pages to track user activity, such as whether an email was opened or a page was viewed.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">5.2 Local Storage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                HTML5 local storage allows us to store larger amounts of data on your device for features like offline functionality and faster loading times.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">5.3 Mobile Device Identifiers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mobile apps may collect device identifiers (such as IDFA on iOS or Android ID) for analytics, advertising, and app functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options to control and manage cookies:
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">6.1 Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Set exceptions for specific websites</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                <p className="text-gray-700 font-semibold mb-3">Browser Cookie Settings:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">6.2 Opt-Out Tools</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can opt out of certain types of cookies using these tools:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Network Advertising Initiative (NAI) opt-out page</li>
                <li>Digital Advertising Alliance (DAA) opt-out page</li>
                <li>Your Online Choices (for EU users)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">6.3 Mobile App Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For mobile apps, you can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>iOS:</strong> Settings → Privacy → Tracking → Allow Apps to Request to Track (disable)</li>
                <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While you can block or delete cookies, please note that this may affect your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You may need to re-enter your login credentials frequently</li>
                <li>Some features and functionality may not work properly</li>
                <li>Your preferences and settings will not be saved</li>
                <li>You may see less relevant advertisements</li>
                <li>We may not be able to recognize your device</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                Essential cookies cannot be disabled as they are necessary for the platform to function.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">8. Do Not Track Signals</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no universal standard for how DNT signals should be interpreted. TaskOnBoard does not currently respond to DNT signals, but we respect your privacy choices made through cookie settings and opt-out tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">9. Updates to This Cookie Notice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Notice from time to time to reflect changes in technology, legislation, or our cookie practices. We will notify you of material changes by posting a notice on our platform or sending you an email.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please check this page periodically for updates. The "Last updated" date at the top indicates when this notice was last revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">10. Additional Privacy Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For more information about how we collect, use, and protect your personal information, please review our <Link to="/privacy" className="text-[#4ade80] hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For information about our terms and conditions, please see our <Link to="/terms" className="text-[#4ade80] hover:underline">Terms of Use</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about our use of cookies or this Cookie Notice, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700"><strong>TaskOnBoard</strong></p>
                <p className="text-gray-700">Montréal, QC, Canada</p>
                <p className="text-gray-700">Email: privacy@taskonboard.com</p>
                <p className="text-gray-700">Cookie Questions: cookies@taskonboard.com</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
              <p>© 2025 TaskOnBoard. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/terms" className="hover:text-[#4ade80] transition">Terms of Use</Link>
                <span>|</span>
                <Link to="/privacy" className="hover:text-[#4ade80] transition">Privacy Policy</Link>
                <span>|</span>
                <Link to="/cookies" className="hover:text-[#4ade80] transition">Cookie Notice</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default CookieNotice

