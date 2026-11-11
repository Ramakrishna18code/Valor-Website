import React from "react";

const contact = "services@valorliftservices.com";

function LegalLayout({ label, title, intro, children }: { label: string; title: string; intro: string; children: React.ReactNode }) {
  return <section className="legal-page">
    <div className="legal-hero"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{intro}</p><small>Last updated: 11 November 2026</small></div>
    <article className="legal-content">{children}<div className="legal-contact"><h2>Questions about this policy?</h2><p>Contact Valor at <a href={`mailto:${contact}`}>{contact}</a>. We will review your request and respond using the contact details you provide.</p></div></article>
  </section>;
}

export function PrivacyPage() {
  return <LegalLayout label="VALOR PRIVACY" title="Privacy, explained clearly." intro="This Privacy Policy explains how Valor Lift Service & Maintenance collects, uses, shares and protects information when you use our customer app, technician app or website.">
    <p>Valor Lift Service & Maintenance is referred to as “Valor”, “we”, “us” or “our” in this policy. This policy applies to information collected through the Valor customer application, the Valor technician application and the Valor website, including service requests, account features, support and payment-related features.</p>
    <h2>Information we collect</h2>
    <p>Depending on how you use our services, we may collect:</p>
    <ul><li>Account details such as your name, email address, phone number and login information.</li><li>Property and equipment details such as building, lift, address, service history and maintenance-plan information.</li><li>Service information such as requests, descriptions, photos, visit details, reports, verification codes and messages you choose to submit.</li><li>Payment-related information such as invoice, payment status and transaction reference. Payment credentials are handled by the relevant payment provider and are not intended to be stored by Valor.</li><li>Technician work information such as assignments, attendance, location used for a job, checklists, reports, earnings and company cash records.</li><li>Device and usage information needed to operate the apps, such as device type, operating system, app version, IP address, crash information and security events.</li><li>Information you send to support, including correspondence and attachments.</li></ul>
    <h2>How we collect information</h2>
    <p>We collect information when you create or use an account, submit a service request, add a building or lift, communicate with support, use technician features, make or review a payment, or browse the website. Some information is generated automatically by the app or website to keep the service secure and reliable.</p>
    <h2>Why we use information</h2>
    <ul><li>To create and manage accounts and authenticate users.</li><li>To schedule, deliver, monitor and document lift installation, maintenance, inspection, repair and support services.</li><li>To show service history, invoices, plans, notifications and job information to the people authorised to see them.</li><li>To process or reconcile payments and prevent fraud or misuse.</li><li>To provide customer and technician support and resolve disputes or service issues.</li><li>To maintain security, troubleshoot failures, improve reliability and understand how our services are used.</li><li>To meet legal, accounting, safety and record-keeping obligations that apply to our business.</li></ul>
    <h2>When information is shared</h2>
    <p>We share information only as needed to provide the service, operate our business or meet legal obligations. This may include sharing relevant details with authorised technicians, building or account representatives, payment providers, hosting and technology providers, professional advisers, regulators or law-enforcement authorities where required. We do not share more information than is reasonably needed for the relevant purpose.</p>
    <h2>Location information</h2>
    <p>The technician app may use location information when a technician enables location access for assigned work, visit coordination or job tracking. Location access should be limited to what is needed for the relevant work. Device permissions can be changed in device settings, although some job features may not work without them.</p>
    <h2>Verification codes and account security</h2>
    <p>Verification codes are used to confirm service events or payment handovers. Do not share a code except with the person and for the purpose clearly described in the app. Keep your password and device secure, and tell Valor promptly if you believe your account has been used without permission.</p>
    <h2>Retention</h2>
    <p>We keep information for as long as reasonably necessary for the purpose for which it was collected, to provide ongoing services, resolve issues, maintain business records, protect security and meet applicable legal obligations. Actual retention periods depend on the type of information and the service relationship.</p>
    <h2>Your choices and requests</h2>
    <p>You may ask us to review, correct or explain personal information associated with your account. You may also ask about deletion or restriction where appropriate. Some records may need to be retained for service, safety, fraud-prevention, accounting or legal reasons. We may need to verify your identity before completing a request.</p>
    <h2>Cookies and similar technologies</h2>
    <p>Our website may use essential cookies or similar technologies to keep pages working, remember preferences and understand website performance. See our <a href="/cookies">Cookie Policy</a> for more detail. The mobile apps may use local device storage for session and preference information.</p>
    <h2>Children</h2>
    <p>Our services are intended for adults and business or household service users. We do not knowingly collect information from children for independent account creation.</p>
    <h2>Changes to this policy</h2>
    <p>We may update this policy when our services, information practices or legal obligations change. The revised version will be posted with a new “Last updated” date. If a change is material, we will provide a more prominent notice where reasonably practical. Please review this page periodically.</p>
  </LegalLayout>;
}

export function TermsPage() {
  return <LegalLayout label="VALOR TERMS" title="Clear terms for dependable service." intro="These Terms of Use describe the rules for using Valor’s website, customer app and technician app.">
    <p>By using a Valor service, you agree to these Terms. If you use Valor on behalf of a building, company or other organisation, you confirm that you are authorised to do so. If you do not agree, do not use the relevant service.</p>
    <h2>Our services</h2>
    <p>Valor provides lift installation, maintenance, inspection, repair, modernisation, spare-parts and related support services. Service availability, response times, scope, pricing and scheduling depend on the applicable quotation, maintenance plan, work order or other written confirmation.</p>
    <h2>Accounts and accurate information</h2>
    <p>Provide information that is accurate and keep it current. You are responsible for activity carried out through your account and for protecting your sign-in details. Tell us promptly if you suspect unauthorised access.</p>
    <h2>Customer responsibilities</h2>
    <ul><li>Provide safe and lawful access to the relevant property and equipment.</li><li>Give accurate information about the lift, symptoms, access restrictions and known hazards.</li><li>Follow safety instructions and do not attempt repairs, bypass safety equipment or allow unauthorised work.</li><li>Do not misuse service reports, verification codes, payment features or another person’s account.</li></ul>
    <h2>Technician responsibilities</h2>
    <ul><li>Use the technician app only for authorised Valor work.</li><li>Keep customer information, access details, reports and verification codes confidential.</li><li>Record work accurately and follow Valor’s safety, quality and escalation procedures.</li><li>Do not copy, export or use customer information for an unrelated purpose.</li></ul>
    <h2>Quotes, payments and refunds</h2>
    <p>Prices, taxes, parts, labour, visit charges and payment timing are those shown in the applicable quotation, invoice, maintenance plan or other confirmation. A payment shown as pending is not the same as a completed payment. Refunds, cancellations and adjustments are handled according to the applicable transaction or service terms. Third-party payment providers may apply their own terms.</p>
    <h2>Safety and emergencies</h2>
    <p>The app and website provide service coordination and information; they do not replace emergency services, building safety procedures or professional judgment. If a passenger is trapped or there is an immediate danger, follow the building’s emergency procedure and contact emergency services where appropriate. Do not force lift doors or enter a lift shaft or machine room without proper authorisation.</p>
    <h2>Acceptable use</h2>
    <p>Do not interfere with the service, probe or bypass security, introduce malicious code, impersonate another person, upload unlawful or harmful material, or use the service to access information you are not authorised to see.</p>
    <h2>Content and reports</h2>
    <p>You keep rights in information you submit, but you give Valor permission to use it as needed to provide, document, secure and improve the requested service. You must have the right to submit photos, documents and other material.</p>
    <h2>Availability and changes</h2>
    <p>We may update, suspend or discontinue features for maintenance, security, operational or legal reasons. We aim to keep information accurate, but app and website content may not always reflect the latest service status. We are not responsible for delays caused by events outside our reasonable control.</p>
    <h2>Suspension or termination</h2>
    <p>We may suspend or close access when necessary to protect users, equipment, information or the service, including for suspected misuse, security risk, non-payment or a request from an authorised account owner. Provisions that need to continue, including confidentiality, payment obligations and record-keeping, will continue as appropriate.</p>
    <h2>Contact</h2>
    <p>For questions about these Terms, contact <a href={`mailto:${contact}`}>{contact}</a>. These Terms do not replace any signed agreement, quotation, maintenance plan or employment/contractor agreement that applies to a particular service or relationship.</p>
  </LegalLayout>;
}

export function CookiesPage() {
  return <LegalLayout label="VALOR COOKIE POLICY" title="How cookies help our website." intro="This Cookie Policy explains the limited use of cookies and similar technologies on the Valor website.">
    <h2>What cookies are</h2>
    <p>Cookies are small text files saved by a website in a browser. Similar technologies can remember a preference or help us understand whether pages are working correctly.</p>
    <h2>How we use them</h2>
    <ul><li><strong>Essential technologies:</strong> help pages, navigation and security features work.</li><li><strong>Preference technologies:</strong> remember choices such as language or display settings when those features are available.</li><li><strong>Performance technologies:</strong> may help us understand page performance and improve the website. These will be used only where the relevant technology is enabled.</li></ul>
    <h2>Managing cookies</h2>
    <p>You can block or delete cookies through your browser settings. Blocking essential cookies may affect how the website works. The mobile apps may store login sessions and preferences on the device; these are not browser cookies.</p>
    <h2>Third-party services</h2>
    <p>Some pages may include services such as maps, messaging links or payment pages operated by third parties. Those services may use their own technologies and policies. Review their notices before using them. We will update this policy if we add a service that materially changes how cookies are used.</p>
    <h2>Updates</h2>
    <p>We may update this Cookie Policy when the website or its technologies change. The current version will always show the latest update date.</p>
  </LegalLayout>;
}
