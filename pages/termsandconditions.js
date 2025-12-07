// pages/terms.js
import Head from "next/head";
import Link from "next/link";

export default function Termsandconditions() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions — Glaucocare</title>
        <meta
          name="description"
          content="Terms and Conditions for Glaucocare - read the legal terms for using our application."
        />
      </Head>

      <main className="min-h-screen bg-white text-slate-900 px-6 py-10 md:px-16 lg:px-32">
        <header className="max-w-4xl mx-auto mb-8">
          <nav className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold">Glaucocare</h1>
            <Link href="/">
              <a className="text-sm underline">Home</a>
            </Link>
          </nav>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Terms and Conditions of Glaucocare
          </h2>
          <p className="mt-3 text-lg">
            This document governs the use of our application in a legally
            binding way. You must read this document carefully.
          </p>
        </header>

        <article className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <section>
            <p>
              Our application is provided by: <br />
              <strong>[name/company and full address]</strong>
            </p>
            <p>
              Contact email: <strong>[email address]</strong>
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">
              What you should know at a glance
            </h3>
            <p>
              Please note that some provisions may only apply to certain
              categories of users. In particular, certain provisions may only
              apply to consumers or to those users that do not qualify as
              consumers. Such limitations are always explicitly mentioned within
              each affected clause. In the absence of any such mention, clauses
              apply to all users.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">TERMS OF USE</h3>
            <p>
              Unless stated otherwise, the terms in this section apply generally
              when using our application.
            </p>
            <p>
              Specific or additional conditions may apply in certain situations
              and are noted in this document.
            </p>

            <p>By using our application, you confirm the following:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>you are older than [number of years of age];</li>
              <li>
                you are not in a country under a U.S. government embargo or
                designated as a &quot;terrorist-supporting&quot; country;
              </li>
              <li>
                you are not on any U.S. government list of prohibited or
                restricted parties.
              </li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Account registration</h4>
            <p>
              To use our application, you can register or create an account by
              providing complete and truthful information. You can also use our
              application without an account, but this might limit some
              features.
            </p>
            <p>
              You are responsible for keeping your login details confidential
              and must choose passwords that meet the highest standards of
              strength as allowed by our application.
            </p>
            <p>
              By registering, you agree to take full responsibility for all
              activities under your username and password. You must immediately
              inform us using the contact details in this document if you
              believe your personal information, account, or login details have
              been violated, disclosed, or stolen.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">
              Conditions for account registration
            </h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                It is not permitted to register accounts by bots or any other
                automated methods;
              </li>
              <li>
                You must register only one account, unless otherwise specified;
              </li>
              <li>
                Your account must not be shared with other persons unless
                otherwise specified.
              </li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Account termination</h4>
            <p>
              You can close your account and stop using our service anytime by
              contacting us at the contact details provided in this document.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">
              Account suspension and deletion
            </h4>
            <p>
              We reserve the right to suspend or delete your account at any time
              and without notice if we find it inappropriate, offensive, or in
              violation of these terms.
            </p>
            <p>
              Suspending or deleting accounts does not entitle you to claim any
              compensation, damages, or reimbursement. The suspension or
              deletion of accounts due to causes attributable to you does not
              exempt you from paying any applicable fees or prices.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">
              Content on this application
            </h4>
            <p>
              Unless otherwise noted, all content on our application is owned or
              provided by us or our licensors. We do our best to ensure the
              content complies with applicable laws and respects third-party
              rights. If you believe your rights are being infringed, please
              report using the contact details in this document.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">
              Removal of content from parts of this application available
              through the App Store
            </h4>
            <p>
              If reported content is deemed objectionable, it will be removed
              and those who provided the content will be prevented from using
              our application.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">
              Access to external resources
            </h4>
            <p>
              Through our application, you may access external resources
              provided by third parties. You acknowledge and accept that we have
              no control over these resources and are not responsible for their
              content or availability.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Acceptable use</h4>
            <p>
              Our application may only be used within the scope of what is
              provided for, under this document and applicable law. You are
              solely responsible for ensuring your use does not violate laws,
              regulations, or third-party rights.
            </p>
            <p>
              We may deny access, terminate contracts, or report misconduct if
              you:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>violate laws, regulations, or these terms;</li>
              <li>infringe on third-party rights;</li>
              <li>significantly impair our legitimate interests;</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Software license</h4>
            <p>
              Any intellectual property rights on software or technical features
              related to our application are owned by us and/or our licensors.
              Provided you comply with these terms, we grant a revocable,
              non-exclusive, non-sublicensable, non-transferable license to use
              the software for its intended purposes.
            </p>
            <p>
              This license does not give you rights to the original source code.
              You may download, install, use, and run the software on [number of
              devices] devices while the license is valid.
            </p>
            <p>
              We reserve the right to release updates and improvements. You may
              need to download and install them to keep using the application.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Purchase via app store</h4>
            <p>
              Purchases made via third-party app stores (Apple App Store, Google
              Play) are also subject to those third parties&apos; terms and
              conditions.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Contract duration</h4>
            <h5 className="font-semibold mt-3">Subscriptions</h5>
            <p>
              Subscriptions allow you to receive the product regularly over
              time.
            </p>
            <p>[add more details about subscriptions]</p>

            <h5 className="font-semibold mt-3">
              Subscriptions handled via Apple ID
            </h5>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>any payment due will be charged to your Apple ID account;</li>
              <li>
                subscriptions auto-renew unless cancelled at least 24 hours
                before period end;
              </li>
              <li>
                fees for renewal may be charged within 24 hours before the
                current period ends;
              </li>
              <li>
                subscriptions can be managed/cancelled in your Apple App Store
                account settings.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">
              LIABILITY AND INDEMNIFICATION
            </h3>
            <p>
              We limit our liability as much as legally allowed. This means
              responsibility for damages is reduced to the maximum extent
              permitted by law, unless explicitly stated otherwise.
            </p>

            <h4 className="text-xl font-semibold mt-4">Indemnification</h4>
            <p>
              You agree to indemnify us and our affiliates, officers, directors,
              and employees from any claims or demands by third parties related
              to your use of the service, to the extent allowed by law.
            </p>

            <h4 className="text-xl font-semibold mt-4">
              Limitation of liability
            </h4>
            <p>
              Unless explicitly stated otherwise and subject to applicable law,
              you cannot claim damages against us for indirect, incidental or
              consequential damages. Exceptions exist for life/health damages,
              gross negligence, or willful misconduct.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">COMMON PROVISIONS</h3>
            <h4 className="text-xl font-semibold mt-2">No waiver</h4>
            <p>
              Our failure to assert any right under these terms does not waive
              that right.
            </p>

            <h4 className="text-xl font-semibold mt-2">Service interruption</h4>
            <p>
              We may interrupt service for maintenance and improvements. Where
              required by law, we will notify affected users in advance.
            </p>

            <h4 className="text-xl font-semibold mt-2">Service reselling</h4>
            <p>
              You may not reproduce, duplicate, sell, or exploit any part of our
              application without written permission.
            </p>

            <h4 className="text-xl font-semibold mt-2">Privacy policy</h4>
            <p>
              For information on the use of personal data, please refer to our
              privacy policy.
            </p>

            <h4 className="text-xl font-semibold mt-2">
              Intellectual property rights
            </h4>
            <p>
              All intellectual property rights are owned by us or our licensors
              and are protected by applicable laws.
            </p>

            <h4 className="text-xl font-semibold mt-2">Changes to the terms</h4>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective from the date communicated. Continued use of the
              service after the change indicates acceptance.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Contact</h4>
            <p>
              All communications regarding the use of our application must be
              sent using the contact information provided in this document.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">
              Governing law &amp; jurisdiction
            </h4>
            <p>
              These terms are governed by the law of the place where we are
              based. If your local consumer law provides greater protections,
              those will prevail.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold">Surviving provisions</h4>
            <p>
              Provisions that by their nature should survive termination
              (licenses, indemnities, disclaimers) will remain in effect as
              described in this document.
            </p>
          </section>

          <footer className="pt-8 pb-20">
            <p className="text-sm text-slate-600">
              Last updated: <strong>[date]</strong>
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
