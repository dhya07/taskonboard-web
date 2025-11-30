import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import TOBLogo from '../assets/images/TOBlogo-dev.png'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - TaskOnBoard</title>
        <meta name="description" content="TaskOnBoard Privacy Policy - Learn how we collect, use, and protect your personal information." />
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
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: November 30, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our platform, website, and mobile applications (collectively, the "Service").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using TaskOnBoard, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">2.1 Information You Provide</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you provide directly to us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, phone number, password, date of birth</li>
                <li><strong>Profile Information:</strong> Profile photo, bio, skills, experience, certifications</li>
                <li><strong>Verification Documents:</strong> Government-issued ID, proof of insurance, background check results</li>
                <li><strong>Payment Information:</strong> Credit card details, bank account information (processed securely by Stripe)</li>
                <li><strong>Communication Data:</strong> Messages, reviews, ratings, support tickets</li>
                <li><strong>Task Information:</strong> Task descriptions, locations, photos, completion details</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our Service, we automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> Pages viewed, features used, time spent, click patterns</li>
                <li><strong>Location Data:</strong> GPS coordinates, IP address-based location</li>
                <li><strong>Cookies and Similar Technologies:</strong> Session cookies, preference cookies, analytics cookies</li>
                <li><strong>Log Data:</strong> IP address, browser type, access times, referring URLs</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">2.3 Information from Third Parties</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may receive information from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Background check providers</li>
                <li>Identity verification services</li>
                <li>Social media platforms (if you connect your accounts)</li>
                <li>Payment processors</li>
                <li>Public databases and records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send transaction notifications</li>
                <li>Verify your identity and conduct background checks</li>
                <li>Facilitate communication between Customers and Taskers</li>
                <li>Send you technical notices, updates, and security alerts</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address fraud and security issues</li>
                <li>Comply with legal obligations and enforce our Terms of Use</li>
                <li>Personalize your experience and provide tailored content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              
              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">4.1 Other Users</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your profile information is visible to other users</li>
                <li>Task details are shared with potential and hired Taskers</li>
                <li>Reviews and ratings are publicly visible</li>
                <li>Location information is shared with matched users for task completion</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">4.2 Service Providers</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Payment processors (Stripe)</li>
                <li>Cloud hosting providers</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
                <li>Marketing and communication platforms</li>
                <li>Background check and verification services</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">4.3 Legal and Safety Reasons</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To comply with legal obligations, court orders, or government requests</li>
                <li>To protect the rights, property, or safety of TaskOnBoard, our users, or others</li>
                <li>To detect, prevent, or address fraud, security, or technical issues</li>
                <li>To enforce our Terms of Use and other policies</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">4.4 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">5. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide our Service</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                When you close your account, we may retain certain information for legitimate business purposes and legal compliance. Some information, such as public reviews, may remain visible even after account closure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@taskonboard.com. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our Service</li>
                <li>Improve our Service and user experience</li>
                <li>Deliver personalized content and advertisements</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your use of certain features. See our Cookie Notice for more details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will promptly delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by email or through a notice on our platform. Your continued use of the Service after such modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700"><strong>TaskOnBoard</strong></p>
                <p className="text-gray-700">Montréal, QC, Canada</p>
                <p className="text-gray-700">Email: privacy@taskonboard.com</p>
                <p className="text-gray-700">Data Protection Officer: dpo@taskonboard.com</p>
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

export default PrivacyPolicy

