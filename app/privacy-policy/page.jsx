import styles from "./PrivacyPolicy.module.css";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Globe,
  FileText,
  Scale,
  RefreshCw,
  Mail,
} from "lucide-react";

export const metadata = {
  title:
    "Privacy Policy | ToolsCenterHub",

  description:
    "Read the Privacy Policy of ToolsCenterHub. Learn how we collect, use, and protect user information while using our online tools.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://toolscenterhub.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <ShieldCheck
          size={48}
          className={styles.heroIcon}
        />

        <h1 className={styles.heroTitle}>
          Privacy Policy
        </h1>

        <p className={styles.heroSubtitle}>
          Effective Date: July 2025
        </p>

        <p className={styles.heroDescription}>
          Your privacy is important to
          us. This Privacy Policy
          explains how ToolsCenterHub
          collects, uses, and protects
          information when you use our
          website and online tools.
        </p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        <PolicySection
          icon={
            <FileText size={24} />
          }
          title="Overview"
        >
          ToolsCenterHub ("we",
          "our", or "us") is committed
          to protecting your privacy.
          Most of our online tools are
          designed to work directly in
          your browser without
          permanently storing files or
          personal information.
        </PolicySection>

        <PolicySection
          icon={
            <Database size={24} />
          }
          title="Information We Collect"
        >
          While using our website, we
          may collect limited
          information such as browser
          type, device information,
          pages visited, referral
          sources, and anonymous usage
          statistics. We do not
          intentionally collect
          sensitive personal data
          through our tools.
        </PolicySection>

        <PolicySection
          icon={
            <Globe size={24} />
          }
          title="How We Use Information"
        >
          Information may be used to
          improve website performance,
          understand user behavior,
          enhance user experience,
          identify technical issues,
          and develop new features and
          tools.
        </PolicySection>

        <PolicySection
          icon={
            <Cookie size={24} />
          }
          title="Cookies"
        >
          ToolsCenterHub may use
          cookies and similar
          technologies to improve
          functionality, remember user
          preferences, and analyze
          website traffic. You can
          disable cookies through your
          browser settings if desired.
        </PolicySection>

        <PolicySection
          icon={<Globe size={24} />}
          title="Google Analytics"
        >
          We may use Google Analytics
          to understand how visitors
          interact with our website.
          Google Analytics may collect
          anonymous information such
          as browser type, device
          type, location region,
          session duration, and pages
          viewed.
        </PolicySection>

        <PolicySection
          icon={
            <FileText size={24} />
          }
          title="Advertising Services"
        >
          In the future,
          ToolsCenterHub may display
          advertisements through
          Google AdSense or other
          advertising providers.
          These services may use
          cookies to personalize ads
          and measure advertising
          performance.
        </PolicySection>

        <PolicySection
          icon={<Lock size={24} />}
          title="Data Security"
        >
          We take reasonable security
          measures to protect user
          information and maintain the
          integrity of our services.
          However, no method of online
          transmission or storage can
          be guaranteed as completely
          secure.
        </PolicySection>

        <PolicySection
          icon={
            <ShieldCheck size={24} />
          }
          title="Third-Party Services"
        >
          We may use trusted
          third-party providers for
          analytics, performance
          monitoring, security,
          content delivery, and other
          operational purposes. These
          providers operate under
          their own privacy policies.
        </PolicySection>

        <PolicySection
          icon={<Scale size={24} />}
          title="GDPR Rights"
        >
          Users located in the
          European Economic Area
          (EEA) may have rights to
          access, correct, delete, or
          restrict processing of
          personal information in
          accordance with applicable
          data protection laws.
        </PolicySection>

        <PolicySection
          icon={<Scale size={24} />}
          title="CCPA Rights"
        >
          California residents may
          have rights under the
          California Consumer Privacy
          Act (CCPA), including the
          right to know what
          information is collected and
          the right to request
          deletion of personal data.
        </PolicySection>

        <PolicySection
          icon={
            <ShieldCheck size={24} />
          }
          title="Children's Privacy"
        >
          ToolsCenterHub is not
          directed toward children
          under 13 years of age. We do
          not knowingly collect
          personal information from
          children.
        </PolicySection>

        <PolicySection
          icon={
            <RefreshCw size={24} />
          }
          title="Changes To This Policy"
        >
          We may update this Privacy
          Policy from time to time.
          Any changes will be posted
          on this page with an updated
          effective date.
        </PolicySection>

        <PolicySection
          icon={<Mail size={24} />}
          title="Contact Us"
        >
          If you have any questions
          regarding this Privacy
          Policy, please contact us
          through our Contact Us page.
        </PolicySection>
      </section>

      {/* FOOTER */}
      <div className={styles.footer}>
        © {new Date().getFullYear()}
        {" "}
        ToolsCenterHub. All Rights
        Reserved.
      </div>
    </div>
  );
}

function PolicySection({
  icon,
  title,
  children,
}) {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        {icon}

        <h2>{title}</h2>
      </div>

      <p>{children}</p>
    </div>
  );
}