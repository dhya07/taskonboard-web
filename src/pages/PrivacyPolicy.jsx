import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TOBLogo from "../assets/images/TOBlogo-dev.png";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - TaskOnBoard</title>
        <meta
          name="description"
          content="TaskOnBoard Privacy Policy - Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition"
            >
              <img
                src={TOBLogo}
                alt="TaskOnBoard"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-[#1a2332]">
                TaskOnBoard
              </span>
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-[#4ade80] transition"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: November 30, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            {/* 1. Introduction */}
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-[#1a2332] mb-2">
                TaskOnBoard Privacy Policy
              </h1>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">Last updated:</span>{" "}
                {/* add a date if you want, e.g. October 2025 */}
              </p>

              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                1. Introduction
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard Inc. (“TaskOnBoard”, “we”, “us”, or “our”) is
                committed to protecting your privacy and handling your personal
                information responsibly. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>The TaskOnBoard mobile application</li>
                <li>The TaskOnBoard website</li>
                <li>
                  Any features, services, or products linked to this Privacy
                  Policy
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Throughout this Privacy Policy, “Personal Information” means any
                information about an identifiable individual, collected directly
                or indirectly (including via cookies, identifiers, or other
                technologies).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using the TaskOnBoard Platform, you agree to
                both this Privacy Policy and our Terms &amp; Conditions. If you
                do not agree, please stop using the Platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about privacy or your data, contact us at:
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                📧{" "}
                <a
                  href="mailto:privacy@taskonboard.com"
                  className="text-[#1a2332] underline"
                >
                  support@taskonboard.com
                </a>
              </p>

              <p className="text-gray-700 leading-relaxed">
                For information on our cookies, analytics tools, and tracking
                technologies, please refer to our Cookie Policy.
              </p>
            </section>

            {/* 2. Why We Have a Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                2. Why We Have a Privacy Policy
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard is committed to protecting your personal information
                and handling it with care. As a Canadian-based platform, we are
                required to comply with national and provincial privacy laws,
                including the Personal Information Protection and Electronic
                Documents Act (PIPEDA) and any other applicable regional
                legislation. These laws exist to ensure that companies collect,
                use, and disclose personal information in a responsible,
                transparent, and secure manner and TaskOnBoard fully adheres to
                these principles.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy explains why we collect personal
                information, how we use it, how we protect it, and what rights
                you have as a user. Because TaskOnBoard connects people for
                real-world services, we must gather certain information to
                operate safely and legally. For example, we need enough data to:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Create and manage user accounts</li>
                <li>Verify identities and prevent fraud</li>
                <li>Facilitate communication between Posters and Taskers</li>
                <li>Process payments and payouts through Stripe Connect</li>
                <li>Maintain trust, safety, and platform integrity</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                We only collect information that is reasonably necessary for
                these purposes. Typical types of personal information we may
                collect include:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Basic contact details, such as your name, email, and phone
                  number
                </li>
                <li>
                  Identity and verification information, when required for
                  payments or compliance
                </li>
                <li>
                  Task-related information, such as descriptions, photos,
                  timelines, and messages
                </li>
                <li>
                  Payment and payout information, securely processed by Stripe
                </li>
                <li>
                  Device, app, and usage data, used to improve performance and
                  detect fraud
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our goal is to protect your privacy while ensuring that the
                TaskOnBoard platform functions smoothly and securely. To meet
                that goal, we follow strict data protection standards, apply
                security safeguards, and maintain clear, transparent practices
                about how your information is handled.
              </p>

              <p className="text-gray-700 leading-relaxed">
                If you ever have questions about how or why your data is used,
                we encourage you to contact us — your trust in our platform
                matters.
              </p>
            </section>

            {/* 3. How We Collect Your Personal Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                3. How We Collect Your Personal Data
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard collects personal information in order to operate
                the platform, match Posters with Taskers, process secure
                payments, maintain safety, and continuously improve our
                services. We collect information in the following ways:
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                a) Information You Provide Directly
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal data when you interact with the platform or
                communicate with us. This includes situations such as:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Creating a user account</li>
                <li>Applying to become a Tasker</li>
                <li>Posting, receiving, or completing a task</li>
                <li>
                  Adding payment details or payout information (processed
                  through Stripe)
                </li>
                <li>Contacting customer support</li>
                <li>Joining referral, rewards, or promotional programs</li>
                <li>Uploading task photos, identity documents, or messages</li>
                <li>Leaving reviews, feedback, or ratings</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on what you do on the app, we may request or receive
                information such as:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Your name and contact information</li>
                <li>Email address and phone number</li>
                <li>Task location or home address</li>
                <li>Date of birth</li>
                <li>Profile photo or identity verification documents</li>
                <li>Skills, languages, work experience, or qualifications</li>
                <li>
                  Payment methods for purchases (processed securely by Stripe)
                </li>
                <li>
                  Bank account information for payouts (stored securely by
                  Stripe)
                </li>
                <li>
                  Task details, including descriptions, photos, and budget
                </li>
                <li>Messages you exchange through the in-app chat</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                This information helps us verify your identity, facilitate
                transactions, and connect you safely with other users.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                b) Information We Collect Automatically
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                When you use the TaskOnBoard app or website, we automatically
                gather certain technical and usage information to help maintain
                security, improve performance, and understand how people
                interact with the platform.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Device details (model, operating system, browser type)</li>
                <li>IP address and unique device identifiers</li>
                <li>
                  Approximate or precise location (if you grant permission)
                </li>
                <li>Log data, crash reports, and app diagnostics</li>
                <li>
                  Usage behavior such as taps, scrolls, screens visited, and
                  interaction timing
                </li>
                <li>
                  Analytics insights collected through tools such as Google
                  Cloud, Google Analytics, UXCam, and similar technologies
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                This information is used to detect fraud, enhance safety,
                optimize loading speeds, fix crashes, and improve how features
                are designed.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                c) Information We Receive from Third Parties
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We may also receive information about you from trusted external
                partners when necessary to operate the platform or comply with
                legal requirements, including:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Stripe</strong> for identity verification, payout
                  eligibility, and compliance checks
                </li>
                <li>
                  <strong>Intercom</strong> for support conversations and ticket
                  management
                </li>
                <li>
                  <strong>Background-check partners</strong> where applicable
                </li>
                <li>
                  <strong>Marketing or analytics partners</strong> who help us
                  improve user experience
                </li>
                <li>
                  <strong>Referral program participants</strong>, when someone
                  invites you to the platform
                </li>
                <li>
                  <strong>Social login providers</strong> such as Google or
                  Apple, when you choose to sign in using those services
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                We may combine this information with the data you provide
                directly to create a secure, trustworthy, and seamless platform
                experience for all users.
              </p>
            </section>

            {/* 4. How We Use Your Personal Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                4. How We Use Your Personal Data
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard uses your personal information only for purposes
                that are necessary, reasonable, and permitted under Canadian
                privacy law. The data we collect helps us operate the platform,
                deliver services, protect users, and meet our legal obligations.
                Below is a detailed overview of how your information is used.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Operating and Delivering the TaskOnBoard Service
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Enabling Posters to create and publish tasks</li>
                <li>
                  Enabling Taskers to review, respond to, and complete tasks
                </li>
                <li>
                  Supporting real-time in-app messaging between Posters and
                  Taskers
                </li>
                <li>
                  Verifying your identity and eligibility for payments (via
                  Stripe)
                </li>
                <li>
                  Managing your account settings, preferences, and profile
                </li>
                <li>Providing customer support and handling user inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Processing Secure Payments
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because TaskOnBoard uses Stripe, we process certain information
                to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Charge Posters for their accepted tasks</li>
                <li>Hold funds securely while tasks are in progress</li>
                <li>Release payouts to Taskers after completion</li>
                <li>Apply and calculate platform service fees</li>
                <li>
                  Detect and prevent fraud, unauthorized transactions, and
                  payment abuse
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                All payment data is encrypted and handled according to Stripe’s
                security standards.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Improving and Developing the Platform
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We analyze usage data to understand how users interact with the
                app. This allows us to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Measure which features people use most</li>
                <li>Detect crashes, errors, and performance issues</li>
                <li>Improve stability and speed</li>
                <li>
                  Personalize content, task suggestions, and user experience
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Maintaining a Safe and Trusted Environment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To protect our community, we may process data to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Monitor chat interactions using automated tools that flag
                  unsafe behavior
                </li>
                <li>Detect fraud, scams, or violations of our Terms</li>
                <li>Investigate suspicious activity or misuse</li>
                <li>Enforce safety rules and platform policies</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any automated alerts are reviewed by authorized TaskOnBoard team
                members.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Legal and Regulatory Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard may process or disclose data when required by law,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Tax reporting or provincial requirements</li>
                <li>Fraud, money-laundering, or financial-crime prevention</li>
                <li>Court orders, subpoenas, or legal investigations</li>
                <li>
                  Compliance obligations under Stripe Connect or financial
                  regulations
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                We only disclose the minimum amount of data required.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Marketing and Communications (With Your Consent)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you choose to opt in, we may use your information to send:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>App updates</li>
                <li>Announcements about new features</li>
                <li>Promotions, discounts, or referral incentives</li>
                <li>Relevant service recommendations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You may opt out at any time through your notification settings
                or by unsubscribing from emails.
              </p>
            </section>

            {/* 5. How We Safeguard Your Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                5. How We Safeguard Your Data
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard is committed to protecting your personal
                information. We use industry standard technical and
                organizational safeguards designed to prevent unauthorized
                access, misuse, loss, or disclosure of your data. While no
                system can ever guarantee absolute security, we take reasonable
                and responsible steps to keep your information safe.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Our Security Measures
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Encrypted communication:</strong> All data transmitted
                  between your device and our servers uses secure, encrypted
                  connections (HTTPS, SSL, TLS).
                </li>
                <li>
                  <strong>Secure payment processing:</strong> All payment and
                  banking information is processed and stored exclusively by
                  Stripe, which is certified to PCI-DSS Level 1.
                </li>
                <li>
                  <strong>Account and authentication protection:</strong> We use
                  secure login systems and may require identity verification for
                  certain actions.
                </li>
                <li>
                  <strong>Restricted internal access:</strong> Only authorized
                  employees with a legitimate need may access personal
                  information.
                </li>
                <li>
                  <strong>Verified and compliant service providers:</strong> We
                  work only with trusted vendors who meet strict security
                  requirements.
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                These vendors include Stripe, Google Cloud, UXCam, Intercom, and
                other providers that comply with Canadian privacy laws.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Your Responsibilities
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Use a strong, unique password for your account</li>
                <li>Keep your login credentials confidential</li>
                <li>Avoid sharing your account or letting others access it</li>
                <li>Log out when using shared or public devices</li>
                <li>
                  Update your device’s operating system and apps regularly
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                If you suspect unauthorized access or unusual activity, you
                should contact TaskOnBoard support immediately.
              </p>
            </section>

            {/* 6. How Long We Retain Your Personal Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                6. How Long We Retain Your Personal Data
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard retains personal information only for as long as it
                is needed to fulfill the purposes described in this Privacy
                Policy, unless a longer retention period is required by law,
                regulation, or for legitimate business needs such as fraud
                prevention or dispute resolution.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                We apply specific retention periods depending on the type of
                data:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Task and transaction history:</strong> retained to
                  comply with accounting, tax, audit, and dispute-resolution
                  requirements.
                </li>
                <li>
                  <strong>Payment and payout records:</strong> stored for the
                  duration required by financial regulations; TaskOnBoard does
                  not store full card numbers.
                </li>
                <li>
                  <strong>Support interactions:</strong> retained to improve
                  customer service and maintain service logs.
                </li>
                <li>
                  <strong>Identity verification information:</strong> retained
                  only as required by Stripe Connect and applicable legal
                  obligations.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                Account Inactivity and Deletion
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                If your account becomes inactive, TaskOnBoard may delete or
                anonymize your personal information after a reasonable retention
                period, unless the data is required to:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Meet legal or regulatory obligations</li>
                <li>Resolve disputes or enforce agreements</li>
                <li>Prevent fraud or misuse of the Platform</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Once data is anonymized, it can no longer be linked back to you
                and may be used for analytics, product improvement, and
                statistical reporting.
              </p>
            </section>

            {/* 7. Who We Disclose Your Personal Data To */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                7. Who We Disclose Your Personal Data To
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard shares personal information only when necessary to
                operate the Platform, comply with Canadian law, or support
                essential services. We do not sell your personal data.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                a) Service Providers
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We work with trusted third-party providers who help us operate,
                monitor, and improve the Platform. These providers process your
                data solely to deliver their services to TaskOnBoard. They
                include:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Stripe</strong> – payment processing, identity
                  verification, banking compliance, fraud prevention
                </li>
                <li>
                  <strong>Intercom</strong> – customer support and secure
                  communication
                </li>
                <li>
                  <strong>Google Cloud</strong> – hosting, infrastructure,
                  authentication, analytics, crash reporting
                </li>
                <li>
                  <strong>UXCam</strong> – usability analytics to improve app
                  experience
                </li>
                <li>
                  <strong>Google Analytics</strong> – website traffic and
                  performance analytics
                </li>
                <li>
                  <strong>Approved AI tools</strong> – used strictly for in-app
                  features (e.g., image analysis), never for advertising or
                  external profiling
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                All third-party providers must follow strong privacy and
                security standards consistent with Canadian data protection
                laws.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                b) Other Users on the Platform
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Some information is shared with other Posters or Taskers when
                necessary for task performance, including:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Your public profile (name, photo, general location, skills)
                </li>
                <li>Task details you publish</li>
                <li>Your ratings and reviews</li>
                <li>Messages exchanged within the in-app chat</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                We never disclose your full address, phone number, or payment
                details in public areas of the Platform.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                c) Regulators, Law Enforcement, or Legal Authorities
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your personal data if required to do so by:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Applicable Canadian or provincial privacy, tax,
                  fraud-prevention, or consumer-protection laws
                </li>
                <li>Court orders, subpoenas, or legal investigations</li>
                <li>
                  Authorities requiring information to protect public safety or
                  prevent illegal activity
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                We will only share what is strictly necessary under the law.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                d) Business Transfers
              </h3>

              <p className="text-gray-700 leading-relaxed">
                If TaskOnBoard is ever involved in a merger, acquisition,
                corporate restructuring, or sale of assets, your personal
                information may be securely transferred as part of the
                transaction. Any organization receiving your data will be
                required to continue protecting it in accordance with this
                Privacy Policy.
              </p>
            </section>

            {/* 8. How You Withdraw Consent */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                8. How You Withdraw Consent
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                You may withdraw your consent to the collection, use, or sharing
                of your personal information at any time, unless doing so would
                prevent TaskOnBoard from meeting legal or contractual
                requirements (for example, processing payments or maintaining
                transaction records).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                You can withdraw consent by:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Updating your preferences in the app’s notification settings
                </li>
                <li>
                  Unsubscribing from marketing emails by clicking “Unsubscribe”
                </li>
                <li>
                  Contacting us directly at{" "}
                  <a
                    href="mailto:privacy@taskonboard.com"
                    className="text-[#1a2332] underline"
                  >
                    privacy@taskonboard.com
                  </a>
                </li>
                <li>
                  Requesting account deletion through the app or by contacting
                  support
                </li>
                <li>
                  Adjusting permissions on your device (location, camera,
                  photos, notifications)
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Withdrawing consent will not affect:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>The lawfulness of any processing already carried out</li>
                <li>
                  Information we must retain for fraud prevention, tax,
                  regulatory, or legal purposes
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                If you withdraw certain permissions such as identity
                verification, payment info, or location access, you may not be
                able to use some or all TaskOnBoard features.
              </p>
            </section>

            {/* 9. Do We Use Profiling or Automated Decision-Making? */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                9. Do We Use Profiling or Automated Decision-Making?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard uses automated tools only to support core platform
                functions such as safety, task matching, fraud detection, and
                app performance — never to make decisions with legal or
                significant effects on you without human review.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                We may use automated systems to:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Suggest relevant categories or Taskers for a posted task
                </li>
                <li>
                  Detect suspicious activity, fraud patterns, or Terms
                  violations
                </li>
                <li>Analyze app usage for performance improvements</li>
                <li>
                  Support safety monitoring in chats (with human verification)
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                We do <span className="font-semibold">not</span> use automated
                decision-making to:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Approve or deny access to the platform</li>
                <li>Determine payouts</li>
                <li>
                  Make legal or financial determinations without human
                  involvement
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Any automated alerts, especially related to safety or fraud, are
                always reviewed by a TaskOnBoard employee before any action is
                taken.
              </p>

              <p className="text-gray-700 leading-relaxed">
                You may request that any automated assessment be reviewed by a
                human at any time by contacting{" "}
                <a
                  href="mailto:privacy@taskonboard.com"
                  className="text-[#1a2332] underline"
                >
                  privacy@taskonboard.com
                </a>
                .
              </p>
            </section>

            {/* 10. Monitoring */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                10. Monitoring
              </h2>

              <p className="text-gray-700 leading-relaxed">
                To the extent permitted by law, we may record and monitor your
                communications with us to ensure compliance with our legal and
                regulatory obligations and our internal policies. This may
                include the recording of telephone conversations.
              </p>
            </section>

            {/* 11. Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                11. Your Rights
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Under Canadian privacy laws including PIPEDA and applicable
                provincial legislation you have several important rights
                regarding your personal information. TaskOnBoard respects and
                supports these rights, and we make it easy for you to exercise
                them.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                a) Right to access your information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may request a copy of the personal data we hold about you,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Profile details</li>
                <li>Task history</li>
                <li>Payment and payout records</li>
                <li>Communications with support</li>
                <li>
                  Verification information (as permitted by Stripe’s policies)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                b) Right to correct inaccurate information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any personal information is incorrect, outdated, or
                incomplete, you may request correction at any time. You can
                update most information directly in your account settings.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                c) Right to request deletion
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may request the deletion of your personal data, including
                full account removal. However, certain information cannot be
                deleted immediately, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Financial transaction records (required by law)</li>
                <li>Tax-related documentation</li>
                <li>Fraud-prevention logs</li>
                <li>Stripe compliance information</li>
                <li>Information needed for dispute resolution</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Where deletion is not legally possible, we will anonymize the
                data wherever allowed.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                d) Right to withdraw consent
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we rely on your consent for specific processing (e.g.,
                marketing, promotions, optional features), you may withdraw your
                consent at any time. Withdrawing consent does not affect the
                lawfulness of processing that occurred before withdrawal.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                e) Right to restrict processing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may ask us to temporarily pause processing of your
                information such as during a dispute or while verifying
                accuracy.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                f) Right to object to processing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may object to processing based on our legitimate interests,
                including analytics, fraud monitoring, certain feature-based
                profiling, and marketing communications. If you object, we will
                stop processing unless we have a compelling legal reason to
                continue.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                g) Right to data portability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may request that we provide your personal data in a
                structured, machine-readable format or transfer it to a third
                party, where technically feasible.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                h) Right to lodge a complaint
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are concerned about how we handle your personal data, you
                may contact us directly through our support team. If you are not
                satisfied with our response, you may file a complaint with your
                provincial or federal privacy authority, such as the Office of
                the Privacy Commissioner of Canada (OPC) or your provincial
                Privacy Commissioner.
              </p>
            </section>

            {/* 12. Third-Party Websites */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                12. Third-Party Websites
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                The TaskOnBoard website and app may contain links to other
                websites or services. We are not responsible for the privacy
                policies or practices of third-party websites. We encourage you
                to review their privacy policies before providing any personal
                information.
              </p>
            </section>

            {/* 13. Personal and Sensitive User Data (Mobile App Permissions) */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                13. Personal and Sensitive User Data (Mobile App Permissions)
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                When you use the TaskOnBoard mobile application, certain
                features require access to data stored on your device. We
                request only the permissions necessary to operate the Platform
                securely and to comply with identity-verification and payment
                regulations. All collected data is transmitted over secure,
                encrypted channels (HTTPS/SSL/TLS) and is processed only for the
                purposes described below.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                a) Photos, Media &amp; Camera Access
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>What we collect:</strong> profile photos, task photos,
                identity verification images (e.g., government ID, selfie).
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Why we collect it:</strong> to verify your identity
                through Stripe, allow Posters to upload task images, allow
                Taskers to upload proof of work or portfolio samples, and
                support dispute resolution when needed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not access any photos or videos unless you intentionally
                select them or take them within the app.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                b) Microphone Access
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>What we collect:</strong> voice recordings (only if you
                choose to send voice notes in chat).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Why we collect it:</strong> to support in-app
                communication and improve accessibility for users who prefer
                voice messages. TaskOnBoard does not access your microphone
                outside of app-initiated recordings.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                c) Location Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your settings, we may collect approximate or
                precise location to show relevant tasks and Taskers in your
                area, and to support accurate address detection and logistics.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                d) Device Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may collect device model, operating system, IP address,
                device identifiers, crash logs, and performance metrics to
                troubleshoot, secure, and optimize the app experience.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                e) Payment &amp; Payout Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment and payout information is processed exclusively by
                Stripe Connect. TaskOnBoard does not store credit card numbers
                or banking credentials. Stripe may process identity information,
                banking details, payout history, and tax-related information
                required to support secure payments and comply with financial
                regulations.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                f) Chat Data (Monitored for Safety)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may analyze chat messages using automated systems to prevent
                fraud, detect harmful or prohibited content, and enforce our
                Terms. Human review only occurs when the system flags potential
                risks.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                g) Push Notifications
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If enabled, we send notifications for task updates, offers,
                messages, account alerts, and (with consent) promotions. You may
                disable notifications at any time in your device settings.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mb-3 mt-6">
                h) Social Login Providers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you use Google or Apple to sign in, these providers send us
                limited account information such as your name, email, and
                profile photo. We do not receive your passwords.
              </p>
            </section>

            {/* 14. International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                14. International Data Transfers
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard operates primarily in Canada, but some of our
                trusted service providers are located in other countries. As a
                result, your personal data may be transferred outside of Canada
                when necessary to deliver Platform services such as payments,
                analytics, customer support, or infrastructure hosting.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                By using the TaskOnBoard Platform, you acknowledge that your
                data may be transferred, processed, or stored in jurisdictions
                outside your province or country. Laws in those jurisdictions
                may differ from those in Canada, but we will always take
                reasonable steps to protect your information.
              </p>
            </section>

            {/* 15. Changes to this Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                15. Changes to this Privacy Policy
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time at our
                discretion. When changes are made, we will update the “Last
                Updated” date at the top of the policy. We recommend reviewing
                this Privacy Policy periodically to stay informed about how we
                protect and handle your personal information.
              </p>
            </section>

            {/* 16. Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                16. Contact
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or complaints about how we
                process your personal information, please contact us at:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-semibold">TaskOnBoard Inc.</p>
                <p className="text-gray-700">Montréal, QC, Canada</p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:privacy@taskonboard.com"
                    className="text-[#1a2332] underline"
                  >
                    support@taskonboard.com
                  </a>
                </p>
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
                <Link to="/terms" className="hover:text-[#4ade80] transition">
                  Terms of Use
                </Link>
                <span>|</span>
                <Link to="/privacy" className="hover:text-[#4ade80] transition">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link to="/cookies" className="hover:text-[#4ade80] transition">
                  Cookie Notice
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
