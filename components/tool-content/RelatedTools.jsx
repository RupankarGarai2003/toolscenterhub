"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/RelatedTools.module.css";
import getToolSlug from "@/utils/getToolSlug";

const relatedTools = {
    "image-resizer": [
        {
            name: "Image Compressor",
            slug: "image-compressor",
        },
        {
            name: "PDF Compressor",
            slug: "pdf-compressor",
        },
        {
            name: "CSS Minifier",
            slug: "css-minifier",
        },
        {
            name: "PNG to JPG",
            slug: "png-to-jpg",
        },
        {
            name: "JPG to PNG",
            slug: "jpg-to-png",
        },
    ],
};

export default function RelatedTools() {
    const { slug } = useParams();

    const rawSlug = Array.isArray(slug)
        ? slug[0]
        : slug;

    const currentSlug =
        getToolSlug(rawSlug);

    const tools =
        relatedTools[currentSlug] || [];

    if (!tools.length) return null;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                Related Tools
            </h2>

            <div className={styles.grid}>
                {tools.map((tool) => (
                    <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className={styles.card}
                    >
                        <span>{tool.name}</span>

                        <span className={styles.arrow}>
                            →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}