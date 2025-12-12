import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TOBLogo from "../assets/Logo/tob-logo-light.png";

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - TaskOnBoard</title>
        <meta
          name="description"
          content="TaskOnBoard Terms of Use - Read our terms and conditions for using our platform."
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
                className="h-12 w-auto object-contain"
              />
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-[#32A49D] transition"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: November 30, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                Introduction
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                These terms of use set out the conditions under which you may
                access and use the TaskOnBoard website and mobile application
                (“the Platform”). These terms apply to all visitors, registered
                users, Posters, and Taskers who access or use any part of the
                Platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                By using the Platform, you confirm that you accept these terms
                of use and agree to comply with them, along with our Privacy
                Policy, Cookie Policy, and any other policies referenced within
                the Platform. If you do not agree with these terms, you must
                stop using the Platform immediately.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Platform is operated by TaskOnBoard Inc. (“TaskOnBoard”,
                “we”, “us”, or “our”), a Canadian company based in Montréal,
                Québec. TaskOnBoard operates as an online marketplace that
                connects people who need services (“Posters”) with individuals
                or businesses that can complete those services (“Taskers”).
                TaskOnBoard is not a contractor, employer, staffing agency, or
                representative of any user.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                We may amend or update these terms, the Platform, or any content
                on the Platform at any time, including for legal, regulatory,
                operational, or security reasons, or to reflect new features or
                improvements. Any changes take effect immediately once they are
                posted on the Platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for reviewing these terms regularly to stay
                informed of the current version. By continuing to use the
                Platform after changes are posted, you agree to be bound by the
                updated terms.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If you choose to register as a Tasker or Poster, you may be
                required to agree to additional terms specific to your role,
                such as our Tasker Terms, Payment Terms, or Verification Terms.
                These terms apply in addition to this general agreement and will
                be presented to you during the registration or onboarding
                process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                How TaskOnBoard Works
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard is a platform that enables Posters to create and
                publish service requests and allows Taskers to respond with
                Offers. Posters can edit or cancel a task at any time before
                selecting a Tasker. When a Tasker submits an Offer, some basic
                details may be visible to other users or visitors. Once a Poster
                accepts an Offer, a Task Contract is formed between both
                parties, and the agreed payment is securely processed through
                Stripe, where it is held until the task is completed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                After a Task Contract begins, the Poster and Tasker may update
                or adjust task details using the in-app chat, and all
                communication should occur within the platform. When the Tasker
                marks the work as completed, the Poster is notified and asked to
                release the payment. If the Poster takes no action within thirty
                days and no dispute is raised, the task will be automatically
                closed and the funds returned to the Poster, except for the
                platform fee, which is non-refundable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Once both parties confirm completion, or if TaskOnBoard
                determines that the work has been completed based on available
                information, the remaining funds are released to the Tasker.
                After each task, both Posters and Taskers are encouraged to
                leave feedback to support trust and transparency within the
                TaskOnBoard community.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard may also allow Taskers to create Listings that
                describe the services they offer. A Poster may request to book a
                Listing, and once the Tasker responds with an Offer and the
                Poster accepts it, a Task Contract is created. Taskers may edit
                or remove their Listings at any time before an Offer related to
                that Listing is accepted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                Understanding TaskOnBoard’s Role
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard operates the platform and provides the services that
                allow Posters and Taskers to connect, create Task Contracts, and
                process secure payments through Stripe. These services are
                offered in exchange for the applicable Poster Service Fee and
                Tasker Platform Fee described in these terms. Only individuals
                who are at least eighteen years old may open an account and use
                the platform. Users must be natural persons, although they may
                indicate that they are acting on behalf of a business; by doing
                so, they confirm that they have the authority to bind that
                business to these terms.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard may refuse registration, suspend accounts, or
                terminate access at its discretion if a user’s behaviour is
                harmful, inappropriate, fraudulent, or in violation of these
                terms. Creating an account, posting tasks, and browsing platform
                content are free services. TaskOnBoard is not a party to any
                Task Contract and is not responsible for the quality,
                performance, accuracy, legality, or outcome of any services
                provided or requested by users. We do not verify or guarantee
                user information, qualifications, licensing, insurance, or a
                poster’s ability to pay.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Except where required by Canadian law, TaskOnBoard provides the
                platform and all related services “as is,” without any express
                or implied warranties. TaskOnBoard is not obligated to mediate
                disputes between users, although we may choose to assist at our
                discretion. Users understand that TaskOnBoard does not perform
                background checks, criminal record checks, or licensing
                verification before allowing individuals to join the platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Posters are responsible for performing their own due diligence
                before hiring a Tasker, and users are responsible for evaluating
                and communicating with one another. By using the platform, each
                user accepts all associated risks and agrees to release,
                indemnify, and hold TaskOnBoard harmless from any loss, damage,
                injury, or cost arising from interactions or services performed
                through the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                User Obligations
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of TaskOnBoard, whether acting as a Poster or a
                Tasker, you agree to follow these terms, comply with all
                applicable Canadian and provincial laws, and ensure that any
                information you post on the platform is accurate, truthful, and
                lawful. You are responsible for understanding any legal
                requirements that apply to you based on your role, including
                rules related to taxes, licensing, safety, and consumer
                protection.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Content available on the platform, whether created by
                TaskOnBoard, another user, or a third party, may not be copied,
                distributed, or used for any commercial purpose without
                TaskOnBoard’s written consent. You may not use the platform for
                any illegal, unsafe, fraudulent, or inappropriate activity,
                including discrimination, harassment, or requesting or offering
                services that are prohibited by law.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                You must maintain full control over your TaskOnBoard account at
                all times. This means you may not share your login information,
                allow anyone else to use your account, or transfer or sell your
                account to another person. You are responsible for all activity
                that occurs under your account.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                By posting content such as task descriptions, messages, photos,
                or offers, you grant TaskOnBoard a worldwide, royalty-free
                licence to use, display, modify, reproduce, or adapt that
                content for the purposes of operating, promoting, and improving
                the platform, in accordance with Canadian privacy laws. You
                agree not to post any content that could cause financial,
                reputational, or safety-related harm to TaskOnBoard or any
                individual. Harm includes false information, misleading claims,
                or material that undermines trust or safety on the platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Any information you submit must always be lawful, appropriate,
                and accurate. You may not provide content that is false,
                deceptive, fraudulent, stolen, infringing on intellectual
                property rights, violating any law, defamatory, abusive,
                obscene, hateful, harassing, or harmful. You must not include
                malicious code, viruses, bots, or any software designed to
                disrupt or interfere with the platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard may use location-based features to help Posters and
                Taskers find nearby opportunities. To protect your privacy, you
                should not share personal contact details such as your full
                name, address, phone number, or email in public posts. All
                communication should occur within the in-app chat.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a Tasker, you must have the legal right to work in
                Canada and maintain any required licenses, permits, insurance,
                tools, or skills needed to complete tasks. You are also
                responsible for complying with any tax obligations that arise
                from payments you receive through the platform. Taskers may not
                charge Posters additional fees beyond what was agreed in the
                Task Contract, unless both parties update the price within the
                platform. All payments must be processed through TaskOnBoard and
                Stripe, and Taskers may not request or accept payments outside
                the platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If a Tasker incurs expenses necessary to complete a task,
                reimbursement must be discussed and agreed to within the in-app
                chat. TaskOnBoard advises Taskers to avoid paying costs upfront
                unless they are confident the Poster will reimburse them.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                A Tasker may subcontract part of a task only if the Poster
                provides written consent within the app and the subcontractor is
                a registered TaskOnBoard user. Taskers remain fully responsible
                for the quality and completion of the task, even when
                subcontracting.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If TaskOnBoard determines that you have violated these user
                obligations or breached a Task Contract, we may remove your
                posted content, suspend or terminate your account, or cancel
                active Task Contracts. These actions may be taken to protect
                user safety, maintain trust, and ensure the proper functioning
                of the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                Fees, Payments, Refunds, and Cancellations
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard charges service fees to both Posters and Taskers in
                exchange for the use of the platform and its secure payment
                features. When a Poster accepts a Tasker’s Offer, a Task
                Contract is created and the Poster is charged the agreed price
                along with the applicable Poster Service Fee and booking fee.
                These amounts are securely processed through Stripe and held
                until the task is completed or cancelled. Taskers also pay a
                Tasker Platform Fee, which is deducted from their payout at the
                time funds are released. All platform fees, including service
                fees and processing fees, are non-refundable except where
                required by Canadian consumer protection laws.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                All payments related to Task Contracts are handled through
                Stripe Connect. When a Poster accepts an Offer, the agreed price
                and any applicable taxes and fees are charged to their payment
                method and securely held in TaskOnBoard’s payment account.
                TaskOnBoard releases the remaining funds to the Tasker once the
                task is completed and confirmed by both parties, or when
                TaskOnBoard determines that the work has been completed based on
                available information.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If a task is cancelled before work begins, TaskOnBoard will
                review the circumstances and determine whether the Poster is
                entitled to a refund. Refunds are generally returned to the
                Poster’s original payment method, minus any non-refundable
                platform fees, within five to seven business days. If the
                cancellation occurs because one party breached their obligations
                or failed to communicate, a cancellation fee may be applied to
                the responsible party and may be deducted from future payouts or
                amounts held in the payment account.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If a Poster cancels a task after accepting an Offer, the Poster
                Service Fee and booking fee are not refundable, and an
                additional cancellation fee may apply. If the cancellation
                occurs within twenty-four hours of the scheduled start time, the
                Tasker may receive partial compensation. If a Tasker cancels
                after accepting a task, the Poster will receive a full refund of
                the agreed price, and TaskOnBoard may deduct a cancellation fee
                from the Tasker’s next payout. Repeated cancellations by any
                user may result in suspension or removal from the platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If both parties mutually agree to cancel a task, the agreed
                price will be refunded to the Poster minus non-refundable fees,
                provided this agreement is documented within the in-app chat. If
                a Tasker marks a task as completed but the Poster does not
                release payment or raise a dispute within thirty days, the task
                may be automatically closed and the funds returned to the
                Poster, except for the platform fee, which remains
                non-refundable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Payments that cannot be delivered to the Tasker or refunded to
                the Poster will remain in the secure payment account for up to
                three months. If no valid claim or dispute is made during that
                period, the funds will be refunded to the Poster minus
                non-refundable fees. If a task is cancelled after the Tasker has
                begun work, TaskOnBoard may review evidence, including photos
                and chat communication, to determine whether a partial payout
                should be made to the Tasker. This assessment is made under
                TaskOnBoard’s dispute resolution rules.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                All payment activity must occur within the TaskOnBoard platform.
                Taskers may not request or accept payments outside the platform,
                and any reimbursement for materials or additional costs must be
                documented within the in-app communication. Platform fees may
                change over time, and any updates will be reflected within the
                TaskOnBoard app or website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
                Payment Facility
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                TaskOnBoard uses Stripe Connect as its secure third-party
                payment provider to process all payments, holds, and payouts
                between Posters and Taskers. All funds handled through the
                platform are managed in accordance with Canadian financial and
                consumer protection laws. By using TaskOnBoard’s payment system,
                you also agree to the terms set out in Stripe’s Services
                Agreement, available at{" "}
                <a
                  href="https://stripe.com/ssa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a2332] underline"
                >
                  https://stripe.com/ssa
                </a>
                . If there is ever a conflict between Stripe’s terms and the
                terms set out in this agreement, Stripe’s terms will govern all
                matters relating to payment processing and settlement.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Stripe may require users to complete identity verification, link
                a bank account, or provide tax information before payments can
                be released. TaskOnBoard and Stripe may delay or withhold
                transfers until these verification steps are successfully
                completed. If TaskOnBoard changes its payment provider in the
                future, you may be required to accept revised payment terms
                specific to that provider. If you do not agree to the updated
                terms, TaskOnBoard will offer a reasonable alternative method
                for making or receiving payments so you can continue using the
                platform.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                All payment activity on TaskOnBoard is encrypted and processed
                securely. Both TaskOnBoard and Stripe follow the requirements of
                PIPEDA and applicable provincial privacy laws when collecting,
                handling, and storing financial or personal information.
              </p>
            </section>

            <section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Liability
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    Users of TaskOnBoard are expected to use the platform responsibly and in
    accordance with Canadian law. Taskers must perform services for Posters with
    care, honesty, and professionalism, and must respect the legal rights and
    interests of all parties involved in a task. The platform may not be used in
    any way that violates these terms, any applicable legislation, accepted
    standards of conduct, or the rights of third parties.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Users may not distribute unsolicited messages, advertisements, spam, or any
    harmful or disruptive content through the platform. No content or user data
    from TaskOnBoard may be copied, reproduced, published, distributed,
    modified, or used outside the platform without written permission from
    TaskOnBoard. Users must never encourage, promote, or participate in any
    illegal activity, including attempts to commit a criminal offence or actions
    that support or prepare for such acts. Any service that requires specific
    licensing or regulatory compliance, such as professional or specialized
    work, must only be offered or performed by users who meet the required legal
    obligations.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Users must respect Canadian labour laws and may not use the platform to
    engage in or facilitate illegal employment practices. The offering or
    requesting of sexual services or any similar prohibited activities is not
    allowed on TaskOnBoard. Users may not attempt to bypass the TaskOnBoard
    booking or payment system to avoid applicable service fees. Circumvention
    includes using the platform only to make contact with a potential service
    provider or customer while intentionally completing the transaction outside
    the platform to avoid fees.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    All users are responsible for complying with tax, business, and reporting
    obligations required by law. Content posted on TaskOnBoard must not infringe
    on legal rights, ethical standards, or public decency. Before posting any
    material, users should ensure they have the legal right to share it.
    TaskOnBoard does not function as a staffing agency, does not supply
    employees, and does not create employer or employee relationships between
    users and the platform.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Users must treat their login details and account credentials as confidential
    information and must not share or transfer access to third parties. Tasks
    arranged through TaskOnBoard must be completed through the platform and may
    not be diverted to private arrangements unless there is a direct and
    immediate threat to personal safety, property, or well-being that makes the
    platform process unreasonable in that moment.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    When TaskOnBoard uses third-party services, such as payment processors or
    verification providers, users must follow and respect the terms, rules, and
    policies set by those services. If a user violates these terms, any
    applicable law, or the rights of third parties, TaskOnBoard may respond by
    giving a warning, restricting access, blocking certain features or listings,
    suspending the account temporarily or permanently, or reporting the matter
    to law enforcement when appropriate.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Verification and Badges
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard may use identity verification services to help confirm the
    authenticity of users on the platform. These services rely on information
    provided by users and may also involve third-party verification partners,
    which means they may not always be completely accurate or current. Users
    remain solely responsible for verifying the identity, qualifications, and
    reliability of anyone they choose to engage with, and TaskOnBoard does not
    accept responsibility for actions taken in reliance on any verification tools
    offered through the platform. TaskOnBoard may modify or discontinue its
    verification processes at any time.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    The platform may also include a user feedback and rating system to help
    Posters and Taskers evaluate each other after completing a task. TaskOnBoard
    may make certain badges available to Taskers, such as identity verification
    badges or skill-related badges. These badges may require the Tasker to
    provide specific documents or information and may be issued for a fee.
    Verification may be performed either by TaskOnBoard or a third-party partner
    according to their applicable terms.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Badges represent a point-in-time verification only and may not reflect the
    user’s current status. If you rely on a badge when entering into a Task
    Contract, you do so with the understanding that badges may not always be up
    to date, and you should confirm any important details directly with the
    Tasker before work begins. Taskers are responsible for ensuring that the
    information and documentation they provide for a badge is accurate and must
    notify TaskOnBoard if any badge becomes invalid or outdated.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    The display of any badge is controlled by TaskOnBoard and is licensed only
    for use within the platform. Verification obtained for a badge may not be
    used outside TaskOnBoard. TaskOnBoard may choose to issue badges, decline to
    issue them, or remove them at any time without notice if a user violates
    these terms, if the badge was obtained incorrectly or fraudulently, if the
    underlying documentation has expired, or for any other reason the platform
    determines appropriate.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    TaskOnBoard Credits
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard Credits may be issued to users in the form of account credits,
    coupons, vouchers, discounts, promotional rewards, or refunds related to
    cancelled tasks. These credits are stored directly within the user’s
    TaskOnBoard account and may be applied toward the cost of future tasks
    booked through the platform. Credits have no cash value, cannot be exchanged
    for cash, and may not be transferred, sold, or assigned to another person
    unless expressly permitted by TaskOnBoard.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Credits may be issued as part of a refund when a task is cancelled, as a
    goodwill adjustment, as part of a promotional campaign, or for any other
    reason determined by TaskOnBoard. Credits may be subject to specific
    conditions, such as minimum task value, expiration dates, usage limits, or
    eligibility restrictions, which will be communicated at the time the credit
    is granted. Users are responsible for reviewing these terms before applying
    credits to a task.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard Credits cannot be used outside the platform and cannot be
    applied toward fees, taxes, or charges that TaskOnBoard designates as
    non-creditable. TaskOnBoard reserves the right to decline, reverse, or
    cancel credits that were issued in error or obtained through misuse, fraud,
    or violation of these Terms. If a user attempts to use credits in a manner
    inconsistent with the intended purpose or conditions, TaskOnBoard may
    restrict credit usage, reverse the applied credit, or take other measures to
    protect the integrity of the platform.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Any remaining balance on credits that are not used before their expiration
    date may be forfeited. TaskOnBoard retains ownership of all unused or
    expired credits. If a user’s account is suspended or terminated for any
    reason, any remaining credits in that account may be cancelled at
    TaskOnBoard’s discretion unless required otherwise by law.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard is not responsible for lost, deleted, or improperly accessed
    credits resulting from unauthorized access to a user’s account. Users are
    responsible for maintaining the security of their login credentials.
    TaskOnBoard may modify, suspend, or discontinue the credit program at any
    time, including adjusting how credits are earned, used, or applied, provided
    that such changes do not violate Canadian consumer protection laws.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Prohibited Uses
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    You may use TaskOnBoard only for lawful and legitimate purposes. You may not
    use the platform in any way that violates Canadian federal, provincial, or
    municipal laws, or any international regulations that may apply. You may not
    use the platform for any fraudulent, deceptive, harmful, or misleading
    purpose, nor may you use it in a manner that could cause harm to any person,
    including minors.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    You may not upload, send, receive, or share any material that violates these
    terms or does not meet TaskOnBoard’s content standards. You may not use the
    platform to send unsolicited messages, advertisements, promotions, spam, or
    any other form of unwanted communication. You must not knowingly upload or
    transmit any files, data, or software that contain viruses, malware, spyware,
    harmful scripts, or any code designed to disrupt, damage, or interfere with
    the operation of the platform or any connected systems.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    You may not use the platform in a way that damages, disables, or overloads
    TaskOnBoard’s servers, network, or infrastructure, or in a way that
    interferes with or restricts another user’s ability to use and enjoy the
    platform. You may not employ automated tools, including bots, spiders,
    scrapers, crawlers, data mining tools, or any other automated processes, to
    access, copy, monitor, or collect data from the platform without
    TaskOnBoard’s written permission. You may not use any automated system to
    disrupt or attempt to disrupt normal platform operations, transactions, or
    processes.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    You may not post, publish, share, or make available any content that is
    false, misleading, unlawful, defamatory, offensive, hateful, violent,
    discriminatory, pornographic, harassing, threatening, or otherwise
    inappropriate. You may not upload or distribute content that infringes on
    the privacy, intellectual property, or legal rights of others.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    You may not take actions that impose an unreasonable or disproportionate load
    on the platform’s infrastructure or network capacity. You may not attempt to
    gain unauthorized access to TaskOnBoard’s systems, databases, servers, or
    security features. Attempts to undermine platform security, including
    denial-of-service attacks, distributed denial-of-service attacks, or attempts
    to bypass technical protections, are strictly prohibited.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    You may not reverse engineer, decompile, disassemble, or otherwise attempt to
    access the platform’s underlying source code, algorithms, or proprietary
    processes. You may not copy, modify, publicly display, distribute, or create
    derivative works from any part of the platform or its content without written
    permission from TaskOnBoard.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Any use of the platform that violates these terms may result in suspension or
    termination of your account. TaskOnBoard may, at its discretion, report
    unlawful activity to law enforcement authorities and cooperate by sharing
    relevant information, including user identity, when legally required. If you
    violate these terms, your right to use TaskOnBoard may end immediately.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Insurance
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard may, in the future, offer users in Canada the option to obtain 
    third-party insurance coverage for certain types of tasks. Any insurance made 
    available through TaskOnBoard will be provided by an independent, licensed 
    insurance company or broker, and full details, eligibility criteria, and policy 
    terms will be displayed within the TaskOnBoard app or website when such 
    programs become available. All insurance products accessed through TaskOnBoard 
    are considered Third-Party Services and are governed exclusively by the 
    insurer’s own terms and conditions.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard does not represent or guarantee that any insurance offered through 
    or linked to the platform will be suitable or sufficient for any particular 
    user, task, or circumstance. Users are responsible for reviewing insurance 
    documentation carefully and determining whether available coverage meets their 
    personal or business needs.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Each user is responsible for assessing whether they require their own insurance 
    for their activities, equipment, business operations, or property. Taskers 
    remain solely responsible for maintaining appropriate personal, commercial, or 
    professional insurance including liability insurance, workers’ compensation, or 
    any other coverage required to perform services safely and legally.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard may maintain its own insurance policies at its discretion, and such 
    policies may provide limited forms of coverage that could benefit users in 
    specific situations. TaskOnBoard reserves the right to modify, discontinue, or 
    replace any such insurance at any time and without notice. Summaries of any 
    applicable coverage will be made available on the TaskOnBoard platform, and 
    users are responsible for reviewing these summaries before relying on any 
    potential benefits.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    If a claim arises in connection with services performed or goods provided 
    through TaskOnBoard, and TaskOnBoard’s own insurance responds to the claim, 
    TaskOnBoard may, with the Tasker’s consent, submit the claim on the Tasker’s 
    behalf. If the claim is accepted, TaskOnBoard may recover from the Tasker any 
    deductible, excess, or cost associated with the claim. If the insurer 
    determines that the Tasker is at fault, TaskOnBoard may rely on that 
    assessment, and may recover any unpaid deductible or related costs through 
    set-off against future payouts owed to the Tasker.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    If a claim arises and TaskOnBoard’s insurance does not respond, or the loss 
    falls below a policy deductible or exclusion, TaskOnBoard may decide whether 
    to reject the claim or offer a goodwill payment to help resolve the issue. If 
    TaskOnBoard chooses to pay such an amount and the Tasker is responsible for 
    the loss, TaskOnBoard may recover that amount directly from the Tasker or 
    deduct it from future payouts.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Unless specifically stated otherwise, posting or completing a task on 
    TaskOnBoard does not automatically provide any form of insurance coverage. 
    Users are strongly encouraged to review their personal insurance policies or 
    consult a licensed insurance professional before using the platform to 
    request or provide services.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Amendments and Platform Availability
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    TaskOnBoard may update or modify these Terms from time to time, provided that 
    such updates do not fundamentally change the overall structure of the 
    agreement, including the nature of the services offered, the duration of the 
    agreement, or the conditions for termination. TaskOnBoard may also amend these 
    Terms when necessary to address regulatory changes, correct gaps that become 
    apparent after the agreement is formed, or ensure proper functioning of the 
    platform. If changes are made, TaskOnBoard will send the updated Terms to 
    users by email at least six weeks before they take effect. The changes will be 
    considered accepted unless the user objects in writing within six weeks of 
    receiving the notification. Users will be informed of their right to object 
    and the significance of the six-week period. If a user objects, the amendment 
    will not apply to their account, and the agreement will continue under the 
    existing Terms. In such cases, both the user and TaskOnBoard may choose to 
    terminate the agreement, provided that termination does not unreasonably harm 
    the user’s legitimate interests.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Users are responsible for securing and maintaining their own internet 
    connection and any devices required to use TaskOnBoard. Data or network fees 
    charged by mobile carriers are the responsibility of the user. Users must 
    ensure that their devices meet the technical requirements of the platform and 
    remain up to date with necessary software and security updates. TaskOnBoard 
    does not guarantee that the platform or any part of it will function on all 
    devices or hardware configurations.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    The availability of the TaskOnBoard Platform may be affected by factors 
    beyond our control, including internet or communication disruptions. While 
    TaskOnBoard works to ensure the highest possible reliability and to resolve 
    issues quickly, uninterrupted or error-free access cannot be guaranteed. 
    Temporary outages may occur due to maintenance, upgrades, force majeure 
    events, or issues related to electronic communication networks. Users 
    acknowledge that delays, interruptions, or performance issues are inherent to 
    internet-based services and may occur from time to time.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Glossary of Terms
  </h2>

  <div className="space-y-3 text-gray-700 leading-relaxed">

    <p><strong>“Agreement”</strong> refers to the most recent version of the Terms and Conditions between TaskOnBoard and the User.</p>

    <p><strong>“Agreed Price”</strong> refers to the total price for the services requested by the Poster, including any adjustments agreed between the parties, and paid into TaskOnBoard’s secure payment system. It does not include platform fees or additional costs unless approved for reimbursement within the platform.</p>

    <p><strong>“TaskOnBoard,” “we,” “us,” or “our”</strong> refers to the legal entity responsible for operating the TaskOnBoard Platform in Canada.</p>

    <p><strong>“TaskOnBoard Badge”</strong> refers to any badge issued to a User based on meeting requirements, qualifications, or verification checks determined by TaskOnBoard or a third-party provider.</p>

    <p><strong>“TaskOnBoard Credits”</strong> refers to credits, vouchers, discounts, or refunds applied to a User’s account, including refunds of the Agreed Price for cancelled tasks.</p>

    <p><strong>“TaskOnBoard Platform”</strong> refers to the TaskOnBoard mobile application, website, and any associated systems or platforms introduced or updated over time.</p>

    <p><strong>“TaskOnBoard Service”</strong> refers to the service of providing the TaskOnBoard Platform, including features such as matching, messaging, payment handling, and verification tools.</p>

    <p><strong>“Badge”</strong> refers to any TaskOnBoard Badge or verification icon displayed on a User’s profile.</p>

    <p><strong>“Business Day”</strong> refers to any day when banks are open for regular business in the User’s province, excluding weekends and holidays.</p>

    <p><strong>“Cancellation Fee”</strong> refers to the fee that may apply when a confirmed task is cancelled, including the Poster Service Fee or an equivalent Tasker fee.</p>

    <p><strong>“Connection Fee”</strong> refers to the fee payable by the Poster for using the platform to create and accept Task Contracts, separate from the Agreed Price.</p>

    <p><strong>“Consequential Loss”</strong> refers to losses such as loss of opportunity, goodwill, profits, anticipated savings, data, equipment value, or related expenses, typically excluded under Canadian law.</p>

    <p><strong>“Customer”</strong> refers to a User who searches for or requests services on the platform.</p>

    <p><strong>“Fees”</strong> refers to all fees payable to TaskOnBoard, including the Poster Service Fee and Tasker Platform Fee.</p>

    <p><strong>“Identity Verification Services”</strong> refers to tools TaskOnBoard may use to verify identity, qualifications, licences, or payment information, including third-party integrations.</p>

    <p><strong>“Non-excludable Condition”</strong> refers to any legal protection or guarantee that cannot be excluded under applicable Canadian consumer protection laws.</p>

    <p><strong>“Offer”</strong> refers to an offer submitted by a Tasker proposing to perform a Posted Task at a specific price.</p>

    <p><strong>“Payment Account”</strong> refers to the secure account operated by the payment provider where funds are held during a task.</p>

    <p><strong>“Payment Provider”</strong> refers to third-party providers like Stripe Connect that process payments, hold funds, and transfer payouts.</p>

    <p><strong>“Personal Information”</strong> has the meaning given under Canadian privacy laws, including PIPEDA and relevant provincial legislation.</p>

    <p><strong>“Policies”</strong> refers to all TaskOnBoard policies, guidelines, and rules available on the platform.</p>

    <p><strong>“Poster”</strong> refers to a User who creates a Posted Task requesting services.</p>

    <p><strong>“Posted Task”</strong> refers to a service request created by a Poster, including descriptions, photos, budget, timing, and updates.</p>

    <p><strong>“Reference”</strong> refers to a feature allowing Users to request positive references or endorsements from other Users.</p>

    <p><strong>“Service Fee”</strong> refers to all combined fees payable by Posters and Taskers for using the platform.</p>

    <p><strong>“Services”</strong> refers to the work or tasks described in a Posted Task, including amendments agreed while the task is active.</p>

    <p><strong>“Task Contract”</strong> refers to the binding agreement formed when a Poster accepts a Tasker’s Offer. Default model terms apply if no custom terms are provided.</p>

    <p><strong>“Tasker”</strong> refers to a User who performs services for Posters on the platform.</p>

    <p><strong>“Tasker Funds”</strong> refers to the amount payable to the Tasker after deduction of the Tasker Platform Fee.</p>

    <p><strong>“Tasker Listing”</strong> refers to a page or profile created by a Tasker describing the services they offer.</p>

    <p><strong>“Tasker Platform Fee”</strong> refers to the fee charged to Taskers for using the platform, deducted from Tasker Funds.</p>

    <p><strong>“Third-Party Dispute Service”</strong> refers to an external dispute resolution service used to help resolve User disagreements.</p>

    <p><strong>“Third-Party Service”</strong> refers to any service, promotion, or link provided through a partner or external provider on the platform.</p>

    <p><strong>“User” or “you”</strong> refers to any person registered on the platform, whether acting as a Poster, Tasker, or both.</p>

    <p><strong>“Verification Icons”</strong> refers to icons displayed on a profile to indicate completed verifications such as identity checks, licences, or qualifications.</p>

  </div>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-bold text-[#1a2332] mb-4">
    Final Provisions
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    These Terms represent the complete and exclusive agreement between 
    TaskOnBoard and the User. No additional agreements or side arrangements 
    exist outside what is written here. Any changes or additions to these Terms 
    must be made in writing, and this requirement remains valid even if either 
    party wishes to waive it in the future.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    If any part of these Terms is found to be invalid or unenforceable, the 
    remaining sections will continue in full force. If a gap or unforeseen issue 
    arises during the practical application of this agreement, or if a provision 
    becomes invalid, the parties agree to replace the affected provision with one 
    that reflects the original purpose and commercial intent as closely as 
    possible.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    These Terms are governed by the laws of Canada and the applicable provincial 
    laws, without regard to conflict-of-law principles.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    If a legal dispute arises and the User is a business, corporation, or other 
    professional entity, the courts of the province where TaskOnBoard maintains 
    its registered head office will have exclusive jurisdiction over the matter.
  </p>
</section>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
              <p>© 2025 TaskOnBoard. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/terms" className="hover:text-[#32A49D] transition">
                  Terms of Use
                </Link>
                <span>|</span>
                <Link to="/privacy" className="hover:text-[#32A49D] transition">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link to="/cookies" className="hover:text-[#32A49D] transition">
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

export default TermsOfUse;
