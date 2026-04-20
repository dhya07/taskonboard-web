import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TOBLogo from "../assets/Logo/Favicon.svg";

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-12 scroll-mt-24" aria-labelledby={`${id}-heading`}>
    <h2
      id={`${id}-heading`}
      className="text-xl sm:text-2xl font-bold text-[#1a2332] mb-4"
    >
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed space-y-3 text-[15px] sm:text-base">
      {children}
    </div>
  </section>
);

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support — TaskOnBoard</title>
        <meta
          name="description"
          content="TaskOnBoard support: contact us, getting started, bookings, payments, provider help, account security, and safety."
        />
        <link rel="canonical" href="https://taskonboard.com/support" />
        <meta property="og:title" content="TaskOnBoard Support" />
        <meta
          property="og:description"
          content="We’re here to help you with anything you need on TaskOnBoard."
        />
        <meta property="og:url" content="https://taskonboard.com/support" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#f8fafb]">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center shrink-0 hover:opacity-80 transition"
            >
              <img
                src={TOBLogo}
                alt="TaskOnBoard"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-[#32A49D] transition whitespace-nowrap"
            >
              ← Home
            </Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8 text-sm text-amber-950">
            <span className="font-semibold">Coming soon:</span>{" "}
            We’re building a full help centre with step-by-step guides and videos.
            The information below is official support guidance you can use today.
          </div>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a2332] tracking-tight mb-3">
              TaskOnBoard Support
            </h1>
            <p className="text-lg text-gray-600">
              We’re here to help you with anything you need.
            </p>
          </header>

          <Section id="contact" title="Contact us">
            <p>
              Email us anytime at{" "}
              <a
                href="mailto:support@taskonboard.com"
                className="text-[#32A49D] font-medium underline underline-offset-2 hover:text-[#1D9475]"
              >
                support@taskonboard.com
              </a>
              . We aim to reply within <strong>24 hours</strong> (often sooner).
            </p>
            <p>
              Please include your account email, a short description of the issue,
              and any relevant task or booking details so we can help faster.
            </p>
          </Section>

          <Section id="getting-started" title="Getting started">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>How to create an account</strong> — Download the TaskOnBoard
                app, tap sign up, and follow the prompts. You’ll verify your email or
                phone so we can keep your account secure.
              </li>
              <li>
                <strong>How to post a task</strong> — Open the app, choose “Post a
                task,” describe what you need, set your location and budget if
                applicable, then publish. Local providers can send you offers.
              </li>
              <li>
                <strong>How to become a provider</strong> — In the app, switch to the
                provider experience and complete onboarding (profile, services, and
                verification where required). You’ll be able to send offers once your
                profile is ready.
              </li>
            </ul>
          </Section>

          <Section id="bookings-payments" title="Bookings & payments">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Secure payments (Stripe)</strong> — Payments are processed by
                Stripe, an industry-standard payments platform. Card details are
                handled securely by Stripe; TaskOnBoard does not store your full card
                number on our servers.
              </li>
              <li>
                <strong>When you’re charged</strong> — When you book a task, the agreed
                amount is authorized or captured according to the flow shown in the
                app at checkout. Funds are held in line with our marketplace model
                until the task is completed or otherwise resolved.
              </li>
              <li>
                <strong>Refunds & cancellations</strong> — If you need to cancel or
                request a refund, use the in-app options where available and contact
                support with your booking details. What’s possible depends on task
                status and our{" "}
                <a
                  href="https://taskonboard.com/terms"
                  className="text-[#32A49D] font-medium underline underline-offset-2 hover:text-[#1D9475]"
                >
                  Terms of Use
                </a>
                . We’ll review each case fairly.
              </li>
            </ul>
          </Section>

          <Section id="provider-help" title="Provider help">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>How to send offers</strong> — Browse open tasks, tap to view
                details, then submit your offer with price and message. The client
                chooses the offer that fits best.
              </li>
              <li>
                <strong>How payouts work</strong> — After a task is completed and
                payment is released per the app flow, earnings are paid out according
                to your payout settings (for example, to your connected bank account
                via Stripe Connect). Timing can depend on your bank and Stripe.
              </li>
              <li>
                <strong>Verification</strong> — We may ask for identity or business
                verification to keep the marketplace safe. Complete any requested steps
                in the app; our team may follow up by email if we need more information.
              </li>
            </ul>
          </Section>

          <Section id="account-security" title="Account & security">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Reset password</strong> — On the sign-in screen, use “Forgot
                password” and follow the link sent to your email.
              </li>
              <li>
                <strong>Update profile</strong> — Open your profile or account settings
                in the app to update your name, photo, contact information, and
                notification preferences.
              </li>
              <li>
                <strong>Delete your account</strong> — In the app, go to{" "}
                <strong>Settings → Delete Account</strong> and follow the steps. Some
                data may be retained where required by law or as described in our{" "}
                <a
                  href="https://taskonboard.com/privacy"
                  className="text-[#32A49D] font-medium underline underline-offset-2 hover:text-[#1D9475]"
                >
                  Privacy Policy
                </a>
                . If you have trouble, email{" "}
                <a
                  href="mailto:support@taskonboard.com"
                  className="text-[#32A49D] font-medium underline underline-offset-2 hover:text-[#1D9475]"
                >
                  support@taskonboard.com
                </a>
                .
              </li>
            </ul>
          </Section>

          <Section id="safety-trust" title="Safety & trust">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Reporting users</strong> — If someone behaves inappropriately
                or violates our guidelines, report them through the in-app reporting
                tools or email support with screenshots and a clear summary.
              </li>
              <li>
                <strong>Disputes</strong> — For disagreements about a booking or
                payment, contact us as soon as you can with task ID and what happened.
                We may ask both parties for information before deciding next steps.
              </li>
              <li>
                <strong>Need help?</strong> — If anything feels unsafe, confusing, or
                unfair, reach out to{" "}
                <a
                  href="mailto:support@taskonboard.com"
                  className="text-[#32A49D] font-medium underline underline-offset-2 hover:text-[#1D9475]"
                >
                  support@taskonboard.com
                </a>
                . We’re here to help.
              </li>
            </ul>
          </Section>

          <Section id="faq" title="Frequently asked questions">
            <div className="space-y-3">
              <details className="group border border-gray-200 rounded-xl bg-white px-4 py-3">
                <summary className="font-semibold text-[#1a2332] cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center gap-2">
                  Is TaskOnBoard available across Canada?
                  <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 border-t border-gray-100 pt-3">
                  We’re rolling out across Canada. If the app is live in your area, you
                  can post tasks and book providers locally. Check the app for
                  availability in your region.
                </p>
              </details>

              <details className="group border border-gray-200 rounded-xl bg-white px-4 py-3">
                <summary className="font-semibold text-[#1a2332] cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center gap-2">
                  How do I know a provider is trustworthy?
                  <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 border-t border-gray-100 pt-3">
                  Review profiles, ratings, and verification badges. Keep communication
                  and payment inside the app so we can help if something goes wrong.
                </p>
              </details>

              <details className="group border border-gray-200 rounded-xl bg-white px-4 py-3">
                <summary className="font-semibold text-[#1a2332] cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center gap-2">
                  Can I change my task after posting?
                  <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 border-t border-gray-100 pt-3">
                  Often yes, before a booking is confirmed. After booking, changes may
                  need agreement from the other party. Use chat in the app to align on
                  updates.
                </p>
              </details>

              <details className="group border border-gray-200 rounded-xl bg-white px-4 py-3">
                <summary className="font-semibold text-[#1a2332] cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center gap-2">
                  What fees should I expect?
                  <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 border-t border-gray-100 pt-3">
                  Fees depend on your role (client vs provider) and are shown clearly at
                  checkout or in your provider earnings summary. See our Terms for the
                  full fee structure.
                </p>
              </details>

              <details className="group border border-gray-200 rounded-xl bg-white px-4 py-3">
                <summary className="font-semibold text-[#1a2332] cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center gap-2">
                  Who do I contact for billing or receipt questions?
                  <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 border-t border-gray-100 pt-3">
                  Email{" "}
                  <a
                    href="mailto:support@taskonboard.com"
                    className="text-[#32A49D] font-medium underline underline-offset-2"
                  >
                    support@taskonboard.com
                  </a>{" "}
                  with the date, amount, and last four digits of the card if applicable.
                </p>
              </details>
            </div>
          </Section>

          <nav
            className="mt-12 pt-8 border-t border-gray-200"
            aria-label="Legal links"
          >
            <p className="text-sm text-gray-500 mb-3">Legal</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <a
                  href="https://taskonboard.com/privacy"
                  className="text-[#32A49D] font-medium hover:text-[#1D9475] underline underline-offset-2"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://taskonboard.com/terms"
                  className="text-[#32A49D] font-medium hover:text-[#1D9475] underline underline-offset-2"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </nav>
        </main>

        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} TaskOnBoard. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link to="/terms" className="hover:text-[#32A49D] transition">
                  Terms
                </Link>
                <Link to="/privacy" className="hover:text-[#32A49D] transition">
                  Privacy
                </Link>
                <Link to="/cookies" className="hover:text-[#32A49D] transition">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Support;
