import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import TOBLogo from '../assets/images/TOBlogo-dev.png'

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - TaskOnBoard</title>
        <meta name="description" content="TaskOnBoard Terms of Use - Read our terms and conditions for using our platform." />
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
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">Terms of Use</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: November 30, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to TaskOnBoard ("we," "our," or "us"). These Terms of Use ("Terms") govern your access to and use of the TaskOnBoard platform, including our website, mobile applications, and related services (collectively, the "Service").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>"User"</strong> refers to anyone who accesses or uses the Service.</li>
                <li><strong>"Customer"</strong> refers to a User who posts tasks or hires Taskers.</li>
                <li><strong>"Tasker"</strong> refers to a User who offers services and completes tasks.</li>
                <li><strong>"Task"</strong> refers to any service or job posted on the platform.</li>
                <li><strong>"Platform"</strong> refers to the TaskOnBoard website and mobile applications.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">3. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use TaskOnBoard, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of Canada</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be prohibited from using the Service under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">4. Account Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with TaskOnBoard, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">5. Service Usage</h2>
              
              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">5.1 For Customers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a Customer, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Post only legitimate tasks and provide accurate descriptions</li>
                <li>Communicate respectfully with Taskers</li>
                <li>Pay for services as agreed upon</li>
                <li>Provide a safe working environment for Taskers</li>
                <li>Not request services that violate any laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">5.2 For Taskers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a Tasker, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide services with reasonable care and skill</li>
                <li>Complete tasks as described and agreed upon</li>
                <li>Maintain appropriate licenses and insurance as required</li>
                <li>Communicate professionally with Customers</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">6. Payments and Fees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard charges service fees for using the platform. These fees are clearly displayed before you commit to a transaction.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All payments are processed securely through our payment partner, Stripe</li>
                <li>Service fees are non-refundable except as required by law</li>
                <li>Customers authorize payment when booking a task</li>
                <li>Taskers receive payment after successful task completion and approval</li>
                <li>We reserve the right to modify our fee structure with advance notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">7. Cancellations and Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our cancellation and refund policy varies depending on the circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customers may cancel tasks according to the cancellation window specified in the booking</li>
                <li>Late cancellations may result in partial or no refunds</li>
                <li>Refunds for incomplete or unsatisfactory work are handled on a case-by-case basis</li>
                <li>Disputes should be reported within 48 hours of task completion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">8. Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users must not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Circumvent or manipulate our fee structure</li>
                <li>Use automated systems to access the Service</li>
                <li>Interfere with the proper functioning of the platform</li>
                <li>Share account credentials with others</li>
                <li>Request or offer services outside the platform to avoid fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard and its content, features, and functionality are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">10. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">11. Disclaimers and Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We do not guarantee the quality, safety, or legality of services provided by Taskers</li>
                <li>We are not responsible for the actions or omissions of Users</li>
                <li>We do not warrant uninterrupted or error-free service</li>
                <li>Our total liability is limited to the fees paid by you in the 12 months prior to the claim</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">12. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold TaskOnBoard harmless from any claims, damages, losses, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your content or conduct on the platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">13. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms or your use of the Service shall be resolved through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>First, informal negotiation with TaskOnBoard</li>
                <li>If unresolved, binding arbitration in accordance with Canadian law</li>
                <li>Arbitration will be conducted in Montréal, Quebec</li>
                <li>You waive your right to participate in class action lawsuits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">14. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or platform notification. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">15. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may suspend or terminate your access to the Service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>For violation of these Terms</li>
                <li>For fraudulent or illegal activity</li>
                <li>At our discretion for any reason with notice</li>
                <li>Immediately for serious violations without notice</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Upon termination, your right to use the Service ceases immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">16. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">17. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700"><strong>TaskOnBoard</strong></p>
                <p className="text-gray-700">Montréal, QC, Canada</p>
                <p className="text-gray-700">Email: legal@taskonboard.com</p>
                <p className="text-gray-700">Support: support@taskonboard.com</p>
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

export default TermsOfUse

