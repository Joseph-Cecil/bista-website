import { ContactForm } from "@/components/forms/contact-form";
import { Icon } from "@iconify/react";

export function ContactFormSection() {
  return (
    <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left — Form */}
        <div>
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Send A Message
          </h2>
          <h3
            className="font-bold mb-8"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-3xl)",
              color: "var(--color-blue)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            Tell us about your project
          </h3>
          <ContactForm />
        </div>

        {/* Right — Additional info */}
        <div className="flex flex-col justify-center">
          <div
            className="rounded-2xl p-10 border"
            style={{
              backgroundColor: "var(--color-secondary)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3
              className="font-bold text-xl mb-6"
              style={{ color: "var(--color-blue)" }}
            >
              Why work with BISTA?
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: "lucide:clock",
                  title: "Quick Response Time",
                  desc: "We acknowledge every enquiry within 24 hours and provide a detailed proposal within 5 business days.",
                },
                {
                  icon: "lucide:shield-check",
                  title: "CMM-Certified Quality",
                  desc: "Every project follows our internationally benchmarked processes, ensuring predictable timelines and budgets.",
                },
                {
                  icon: "lucide:globe",
                  title: "Local Expertise, Global Standards",
                  desc: "Over 15 years of experience serving Ghanaian and West African enterprises with world-class technology.",
                },
                {
                  icon: "lucide:headphones",
                  title: "Ongoing Support",
                  desc: "We do not disappear after delivery. Our support team is available for maintenance, updates, and training.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="size-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor:
                        "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <Icon icon={item.icon} width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: "var(--color-foreground)" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
