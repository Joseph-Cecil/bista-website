import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "News & Insights | BISTA Solutions Blog",
  description:
    "Stay up to date with the latest technology insights, company news, and industry analysis from the BISTA Solutions team.",
};

const posts = [
  {
    slug: "digital-transformation-west-africa-2025",
    title: "Digital Transformation in West Africa: What 2025 Holds",
    excerpt:
      "An analysis of the key technology trends shaping enterprise IT across Ghana and the broader West African region in the coming year.",
    date: "15 January 2025",
    category: "Industry Insights",
    readTime: "6 min read",
  },
  {
    slug: "why-cmm-matters-african-enterprises",
    title: "Why CMM Certification Matters for African Enterprises",
    excerpt:
      "Understanding how Capability Maturity Model standards translate to measurable quality improvements in software delivery.",
    date: "8 January 2025",
    category: "Quality Assurance",
    readTime: "5 min read",
  },
  {
    slug: "bista-hrms-launch-cloud",
    title: "BISTA HRMS Now Available as Cloud-Hosted SaaS",
    excerpt:
      "Our full Human Resource Management Suite is now available on the cloud, bringing enterprise HR tooling to organizations of all sizes.",
    date: "20 December 2024",
    category: "Product News",
    readTime: "3 min read",
  },
  {
    slug: "energizer-mobile-expansion-2024",
    title: "Energizer Mobile Expands Distribution Across Northern Ghana",
    excerpt:
      "BISTA extends its Energizer partnership with new distribution points in Tamale, Bolgatanga, and Wa, reaching more communities.",
    date: "5 December 2024",
    category: "Company News",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <header className="py-16 px-10" style={{ backgroundColor: "var(--color-blue)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.10)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            <Icon icon="lucide:newspaper" width={14} height={14} style={{ color: "var(--color-red)" }} />
            Latest Updates
          </div>
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            News &amp; Insights
          </h1>
          <p style={{ color: "rgba(255,255,255,0.80)" }}>
            Technology perspectives, product announcements, and company updates.
          </p>
        </div>
      </header>

      {/* Posts Grid */}
      <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={"/blog/" + post.slug}
              className="bg-white border rounded-xl overflow-hidden card-hover block"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Colored accent bar */}
              <div className="h-1" style={{ backgroundColor: "var(--color-primary)" }} />

              <div className="p-8">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor:
                        "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                      color: "var(--color-primary)",
                      letterSpacing: "var(--tracking-wider)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: "var(--color-foreground)", lineHeight: "var(--leading-tight)" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-sm mb-6"
                  style={{
                    color: "var(--color-muted-foreground)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span
                  className="text-sm font-bold flex items-center gap-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  Read article
                  <Icon icon="lucide:arrow-right" width={14} height={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
