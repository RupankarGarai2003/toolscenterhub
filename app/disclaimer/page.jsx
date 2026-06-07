import styles from "./Disclaimer.module.css";

export const metadata = {
  title:
    "Disclaimer | ToolsCenterHub",

  description:
    "Read the Disclaimer for ToolsCenterHub regarding the use of our online tools, services, content, and website.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://toolscenterhub.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Disclaimer
        </h1>

        <p className={styles.subtitle}>
          Important information
          regarding the use of
          ToolsCenterHub and its
          services.
        </p>
      </div>

      <div className={styles.card}>
        <section>
          <h2>
            General Information
          </h2>

          <p>
            The information and tools
            available on
            ToolsCenterHub are
            provided for general
            informational and utility
            purposes only. While we
            strive to ensure accuracy
            and reliability, we make
            no guarantees regarding
            the completeness,
            accuracy, or suitability
            of any information or
            services provided.
          </p>
        </section>

        <section>
          <h2>
            No Professional Advice
          </h2>

          <p>
            The content and tools
            available on this website
            do not constitute legal,
            financial, medical,
            technical, or
            professional advice. You
            should consult qualified
            professionals before
            making decisions based on
            information obtained from
            our website.
          </p>
        </section>

        <section>
          <h2>
            Tool Accuracy
          </h2>

          <p>
            Although our tools are
            designed to provide
            accurate results, we do
            not guarantee that all
            outputs will be free from
            errors. Users should
            independently verify
            results before relying on
            them.
          </p>
        </section>

        <section>
          <h2>
            External Links
          </h2>

          <p>
            ToolsCenterHub may
            contain links to external
            websites. We have no
            control over the content,
            policies, or practices of
            third-party websites and
            are not responsible for
            any information or
            services provided by
            them.
          </p>
        </section>

        <section>
          <h2>
            Limitation of Liability
          </h2>

          <p>
            Under no circumstances
            shall ToolsCenterHub be
            liable for any direct,
            indirect, incidental,
            consequential, or special
            damages resulting from
            the use of, or inability
            to use, this website or
            its tools and services.
          </p>
        </section>

        <section>
          <h2>
            User Responsibility
          </h2>

          <p>
            Users are solely
            responsible for how they
            use the tools and
            information available on
            this website. Any actions
            taken based on outputs or
            information provided by
            our tools are at the
            user's own risk.
          </p>
        </section>

        <section>
          <h2>
            Service Availability
          </h2>

          <p>
            We do not guarantee that
            ToolsCenterHub will always
            be available,
            uninterrupted, secure, or
            error-free. Services may
            be modified, suspended,
            or discontinued at any
            time without notice.
          </p>
        </section>

        <section>
          <h2>
            Copyright & Trademarks
          </h2>

          <p>
            All trademarks, logos,
            service marks, and
            branding displayed on
            this website belong to
            their respective owners.
            Unauthorized use is
            prohibited.
          </p>
        </section>

        <section>
          <h2>
            Changes to This
            Disclaimer
          </h2>

          <p>
            We reserve the right to
            update or modify this
            Disclaimer at any time.
            Changes will become
            effective immediately
            upon posting on this
            page.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>

          <p>
            If you have questions
            regarding this
            Disclaimer, please
            contact us through our
            Contact page.
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