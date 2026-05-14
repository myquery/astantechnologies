import LegalPage from "../components/LegalPage";
import type { LegalSection } from "../components/LegalPage";

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "This page explains how to request deletion of personal information associated with Astan Technologies, our website, and services we operate directly.",
      "If your data is held by a separate client, app store, social platform, payment provider, blockchain network, or third-party service, you may also need to contact that provider or account owner directly.",
    ],
  },
  {
    id: "how-to-request-deletion",
    title: "How to Request Deletion",
    body: [
      "Send an email to dev@astantechnologies.com with the subject line Data Deletion Request. Please include enough information for us to identify your records and verify that you are authorized to make the request.",
    ],
    list: [
      "Your full name and the email address or phone number connected to the request.",
      "The Astan Technologies website, service, project, app, or communication channel where you believe the data was collected.",
      "Any relevant account identifier, username, support ticket, project name, or message date.",
      "A short description of the information you want deleted.",
    ],
  },
  {
    id: "verification",
    title: "Verification",
    body: [
      "We may ask for additional information to verify your identity, confirm your authority, protect other users, and prevent unauthorized deletion requests.",
      "We will only use verification information to process the request and maintain a record of how it was handled.",
    ],
  },
  {
    id: "what-we-delete",
    title: "What We Delete",
    body: [
      "After verification, we will delete or anonymize personal information that Astan Technologies controls and no longer needs to keep.",
    ],
    list: [
      "Website inquiries, contact records, and marketing or communication preferences.",
      "Account or profile information for services we operate directly, where applicable.",
      "Support records and project-related personal information that is no longer required for service delivery, security, legal, billing, or recordkeeping purposes.",
    ],
  },
  {
    id: "retention-exceptions",
    title: "Retention Exceptions",
    body: [
      "Some information may be retained when necessary for legal compliance, security, fraud prevention, accounting, dispute resolution, contractual obligations, backups, or legitimate business records.",
      "Where we cannot fully delete information, we will restrict or minimize it where appropriate and explain the reason when we respond to your request.",
    ],
  },
  {
    id: "third-party-and-social-logins",
    title: "Third-Party and Social Login Data",
    body: [
      "If you used a third-party login, social platform, payment service, hosting provider, app marketplace, or other integration, that provider may hold separate information under its own account settings and policies.",
      "You can remove app access through the relevant provider's privacy, security, or connected apps settings. If Astan Technologies controls related records, you can still email us to request deletion from our systems.",
    ],
  },
  {
    id: "response-time",
    title: "Response Time",
    body: [
      "We aim to acknowledge deletion requests within a reasonable period and complete verified requests as soon as practical, subject to legal, security, technical, and contractual limits.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "For user data deletion requests, email Astan Technologies at dev@astantechnologies.com with the subject line Data Deletion Request.",
    ],
  },
];

export default function UserDataDeletion() {
  return (
    <LegalPage
      title="User Data Deletion"
      description="Instructions for requesting deletion of personal information associated with Astan Technologies."
      lastUpdated="May 13, 2026"
      sections={sections}
    />
  );
}
