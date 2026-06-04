"use client";

import styles from "./Contact.module.css";
import {
  Mail,
  Send,
  Clock,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

import { useForm } from "@formspree/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContactPage() {
  const [state, handleSubmit] =
    useForm("mlgkdekw");

  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      router.push(
        "/contact-success"
      );
    }
  }, [
    state.succeeded,
    router,
  ]);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Mail
          size={48}
          className={styles.heroIcon}
        />

        <h1 className={styles.heroTitle}>
          Contact Us
        </h1>

        <p className={styles.heroSubtitle}>
          Questions, feedback, bug
          reports, or business
          inquiries? We'd love to hear
          from you.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className={styles.card}>
        <div className={styles.heading}>
          <MessageSquare size={24} />
          <h2>Get In Touch</h2>
        </div>

        <p>
          If you need assistance using
          our tools, want to report a
          bug, suggest a feature, or
          discuss a partnership,
          please contact us using the
          form below.
        </p>

        <div className={styles.emailBox}>
          support@toolscenterhub.com
        </div>

        <div className={styles.response}>
          <Clock size={18} />
          Typical response time:
          24–48 hours
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.card}>
        <div className={styles.heading}>
          <Send size={24} />
          <h2>Send Us A Message</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
          />

          <button
            type="submit"
            disabled={
              state.submitting
            }
          >
            <Send size={18} />

            {state.submitting
              ? "Sending..."
              : "Send Message"}
          </button>
        </form>
      </section>

      {/* FAQ */}
      <section className={styles.card}>
        <div className={styles.heading}>
          <HelpCircle size={24} />
          <h2>
            Before Contacting Us
          </h2>
        </div>

        <ul className={styles.list}>
          <li>
            Check the FAQ section on
            the tool page.
          </li>

          <li>
            Make sure your browser is
            updated to the latest
            version.
          </li>

          <li>
            Refresh the page if a tool
            isn't responding properly.
          </li>

          <li>
            Include detailed
            information when reporting
            issues.
          </li>
        </ul>
      </section>

      {/* SUPPORT */}
      <section className={styles.card}>
        <h2>
          Support & Feedback
        </h2>

        <p>
          ToolsCenterHub is committed
          to providing free online
          tools for image editing,
          PDF management, developer
          workflows, and productivity
          tasks.
        </p>

        <p>
          We welcome suggestions,
          bug reports, partnership
          inquiries, and general
          feedback. Every message
          helps us improve the
          platform and deliver a
          better user experience.
        </p>
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