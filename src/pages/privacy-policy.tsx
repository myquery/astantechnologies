import LegalPage from "../components/LegalPage";
import type { LegalSection } from "../components/LegalPage";

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "This Privacy Policy explains how Astan Technologies collects, uses, shares, and protects information when you visit our website, contact us, or work with us on software, commerce, blockchain, training, and related technology services.",
      "By using our website or sending information to Astan Technologies, you agree to the practices described in this Privacy Policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: [
      "We collect information you choose to provide, information generated through your use of our website, and information needed to deliver services you request.",
    ],
    list: [
      "Contact information, such as your name, email address, company, role, and other details you include in a message or project inquiry.",
      "Project information, such as requirements, technical materials, business goals, files, links, credentials, or other materials you provide so we can evaluate or deliver work.",
      "Usage and device information, such as browser type, pages visited, referring pages, approximate location, and technical logs that help us operate and secure the website.",
      "Communication records, such as emails, meeting notes, support requests, and responses to proposals or service updates.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    body: [
      "We use collected information to operate our website, respond to requests, prepare proposals, deliver services, improve our work, and protect Astan Technologies, our clients, and our systems.",
    ],
    list: [
      "Respond to inquiries and communicate about services, projects, training, and support.",
      "Plan, build, test, launch, and maintain client projects and related technology workflows.",
      "Analyze website performance, improve user experience, and understand interest in our services.",
      "Maintain security, prevent misuse, troubleshoot issues, and comply with legal or contractual obligations.",
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Analytics",
    body: [
      "Our website may use cookies, analytics tools, advertising pixels, or similar technologies to understand site activity, remember preferences, measure campaigns, and improve our services.",
      "You can adjust cookie settings through your browser. Some website features may not work as intended if cookies are disabled.",
    ],
  },
  {
    id: "sharing-information",
    title: "How We Share Information",
    body: [
      "We do not sell personal information. We may share information only when it is needed to provide services, operate the website, comply with law, or protect rights and security.",
    ],
    list: [
      "Service providers that support hosting, analytics, email, payments, collaboration, development, security, or other business operations.",
      "Client-approved platforms, integrations, vendors, or partners involved in a project or service delivery workflow.",
      "Authorities, advisors, or other parties when required by law, legal process, contract enforcement, security needs, or business restructuring.",
    ],
  },
  {
    id: "security-and-retention",
    title: "Security and Retention",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards to protect information. No internet or storage system can be guaranteed to be fully secure, so you should avoid sending sensitive information unless it is required for the service.",
      "We keep information for as long as necessary to provide services, maintain records, resolve disputes, comply with legal obligations, and support legitimate business needs.",
    ],
  },
  {
    id: "your-choices",
    title: "Your Choices and Rights",
    body: [
      "You may request access, correction, deletion, or restriction of personal information we hold about you, subject to identity verification and legal or contractual retention requirements.",
      "To make a request, email dev@astantechnologies.com with enough detail for us to identify the information and respond appropriately.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: [
      "Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided information to us, contact us so we can review and remove it where appropriate.",
    ],
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised last updated date.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "For privacy questions or requests, contact Astan Technologies at dev@astantechnologies.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Astan Technologies handles information collected through our website, communications, and service delivery."
      lastUpdated="May 13, 2026"
      sections={sections}
    />
  );
}
