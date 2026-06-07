import styles from "./Terms.module.css";

export const metadata = {
  title:
    "Terms & Conditions | ToolsCenterHub",

  description:
    "Read the Terms and Conditions governing the use of ToolsCenterHub and its online tools and services.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://toolscenterhub.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Terms & Conditions
        </h1>

        <p className={styles.subtitle}>
          Please read these terms
          carefully before using
          ToolsCenterHub.
        </p>
      </div>

      <div className={styles.card}>
        <section>
          <h2>
            1. Acceptance of Terms
          </h2>

          <p>
            By accessing and using
            ToolsCenterHub, you agree
            to comply with and be
            bound by these Terms and
            Conditions. If you do not
            agree with any part of
            these terms, please do not
            use our website.
          </p>
        </section>

        <section>
          <h2>
            2. Use of Services
          </h2>

          <p>
            ToolsCenterHub provides
            free online tools for
            image editing, PDF
            processing, file
            conversion, developer
            utilities, and productivity
            tasks. You may use these
            services only for lawful
            purposes.
          </p>
        </section>

        <section>
          <h2>
            3. User Responsibility
          </h2>

          <p>
            You are responsible for
            ensuring that any files,
            content, or information
            uploaded to our tools do
            not violate applicable
            laws, copyrights, or the
            rights of third parties.
          </p>
        </section>

        <section>
          <h2>
            4. Intellectual Property
          </h2>

          <p>
            All website content,
            branding, design elements,
            logos, and software
            associated with
            ToolsCenterHub are
            protected by applicable
            intellectual property laws
            and remain the property of
            ToolsCenterHub unless
            otherwise stated.
          </p>
        </section>

        <section>
          <h2>
            5. Service Availability
          </h2>

          <p>
            We strive to maintain
            uninterrupted access to
            our services but do not
            guarantee that the website
            will always be available,
            error-free, or free from
            interruptions.
          </p>
        </section>

        <section>
          <h2>
            6. Disclaimer of Warranties
          </h2>

          <p>
            All tools and services are
            provided "as is" and "as
            available" without
            warranties of any kind,
            whether express or
            implied.
          </p>
        </section>

        <section>
          <h2>
            7. Limitation of Liability
          </h2>

          <p>
            ToolsCenterHub shall not
            be liable for any direct,
            indirect, incidental,
            special, or consequential
            damages resulting from the
            use or inability to use
            our services.
          </p>
        </section>

        <section>
          <h2>
            8. Third-Party Links
          </h2>

          <p>
            Our website may contain
            links to third-party
            websites or services. We
            are not responsible for
            the content, privacy
            practices, or operations
            of third-party sites.
          </p>
        </section>

        <section>
          <h2>
            9. Changes to Terms
          </h2>

          <p>
            We reserve the right to
            modify these Terms and
            Conditions at any time.
            Updates will be posted on
            this page with immediate
            effect.
          </p>
        </section>

        <section>
          <h2>
            10. Contact Information
          </h2>

          <p>
            If you have questions
            regarding these Terms and
            Conditions, please contact
            us through our Contact
            page.
          </p>
        </section>
      </div>

      <div className={styles.footer}>
        Last Updated:{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
}