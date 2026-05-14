import LegalPage from "../components/LegalPage";
import type { LegalSection } from "../components/LegalPage";

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    body: [
      "These Terms of Service govern your access to and use of the Astan Technologies website and any services, proposals, communications, or materials that refer to these terms.",
      "By using our website or engaging with Astan Technologies, you agree to these terms. If you do not agree, do not use the website or services.",
    ],
  },
  {
    id: "services",
    title: "Services",
    body: [
      "Astan Technologies provides software design, development, web and mobile application delivery, blockchain and Bitcoin product support, commerce implementation, enterprise systems, AI-integrated workflows, and custom training.",
      "Specific project scope, timelines, fees, deliverables, support terms, and ownership details should be documented in a written proposal, statement of work, contract, or invoice. If a separate written agreement conflicts with these terms, the written agreement controls for that project.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "Your Responsibilities",
    body: [
      "You agree to provide accurate information, obtain required rights and permissions for materials you share with us, and use the website and services only for lawful purposes.",
    ],
    list: [
      "Do not attempt to disrupt, reverse engineer, overload, or interfere with the website or related systems.",
      "Do not submit unlawful, infringing, harmful, misleading, or malicious content.",
      "Do not use our services to build or operate systems that violate applicable laws or third-party rights.",
    ],
  },
  {
    id: "client-materials",
    title: "Client Materials",
    body: [
      "You retain ownership of materials, data, brand assets, credentials, content, and instructions you provide to Astan Technologies. You grant us permission to use those materials as needed to evaluate, perform, support, and document the requested services.",
      "You are responsible for ensuring that client materials do not infringe third-party rights and that you have authority to provide them to us.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "The Astan Technologies website, brand assets, service descriptions, designs, text, graphics, and other materials are owned by Astan Technologies or its licensors and may not be copied, modified, or reused without permission.",
      "Ownership and license rights for project deliverables should be addressed in the applicable proposal, statement of work, or contract. Astan Technologies may retain rights in pre-existing tools, know-how, templates, workflows, libraries, and reusable components unless a written agreement says otherwise.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: [
      "Projects may involve third-party platforms, APIs, hosting providers, payment processors, analytics tools, blockchain networks, app stores, plugins, or open-source software. Those services are governed by their own terms and policies.",
      "Astan Technologies is not responsible for outages, policy changes, fees, security incidents, or limitations caused by third-party services outside our control.",
    ],
  },
  {
    id: "payments",
    title: "Payments and Project Terms",
    body: [
      "Fees, payment schedules, deposits, taxes, expenses, refunds, cancellation terms, and delivery milestones will be described in the applicable proposal, invoice, or written agreement.",
      "Unless otherwise agreed in writing, unpaid amounts may delay work, launch, handoff, support, or release of project materials.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: [
      "The website and general website content are provided for informational purposes and on an as-is and as-available basis. We do not promise that the website will be uninterrupted, error-free, or suitable for every purpose.",
      "Technology, blockchain, AI, commerce, and software outcomes can depend on third-party systems, user behavior, regulatory changes, client decisions, and operational factors outside our control.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Astan Technologies will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost revenue, lost data, or business interruption arising from use of the website or services.",
      "Nothing in these terms limits rights or liabilities that cannot be limited under applicable law.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. The updated version will be posted on this page with a revised last updated date.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "For questions about these terms, contact Astan Technologies at dev@astantechnologies.com.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that apply when you use the Astan Technologies website or engage with our services."
      lastUpdated="May 13, 2026"
      sections={sections}
    />
  );
}
