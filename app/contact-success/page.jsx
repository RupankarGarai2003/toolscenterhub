import Link from "next/link";
import {
  CheckCircle2,
  ArrowLeft,
  Home,
} from "lucide-react";

import styles from "./ContactSuccess.module.css";

export const metadata = {
  title:
    "Message Sent Successfully | ToolsCenterHub",

  description:
    "Your message has been successfully sent to ToolsCenterHub.",
};

export default function ContactSuccess() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <CheckCircle2
            size={70}
            className={styles.icon}
          />
        </div>

        <h1 className={styles.title}>
          Message Sent Successfully 🎉
        </h1>

        <p className={styles.text}>
          Thank you for contacting
          ToolsCenterHub.
        </p>

        <p className={styles.subtext}>
          Your message has been received
          and our team will review it
          shortly.
        </p>

        <div className={styles.infoBox}>
          Typical response time:
          <strong> 24–48 hours</strong>
        </div>

        <div className={styles.actions}>
          <Link
            href="/"
            className={styles.primaryBtn}
          >
            <Home size={18} />
            Back To Home
          </Link>

          <Link
            href="/contact-us"
            className={styles.secondaryBtn}
          >
            <ArrowLeft size={18} />
            Contact Again
          </Link>
        </div>
      </div>
    </div>
  );
}