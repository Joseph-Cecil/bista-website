import { Icon } from "@iconify/react";

const features = [
  {
    icon: "lucide:check-circle-2",
    title: "Verified Authentic Products",
    desc: "Every item on Paaopaa.com is sourced directly from authorized distributors. No counterfeits, guaranteed.",
  },
  {
    icon: "lucide:lock",
    title: "Secure Online Payments",
    desc: "We support mobile money, bank transfers, and card payments — all processed through encrypted, PCI-compliant channels.",
  },
  {
    icon: "lucide:truck",
    title: "Nationwide Delivery",
    desc: "From Accra to Tamale, we deliver across all 16 regions of Ghana. Track your order in real-time from dispatch to doorstep.",
  },
  {
    icon: "lucide:headphones",
    title: "Dedicated Customer Support",
    desc: "Our support team is available via phone, email, and live chat to help with orders, returns, and product questions.",
  },
  {
    icon: "lucide:repeat",
    title: "Easy Returns & Refunds",
    desc: "Changed your mind? Our hassle-free return policy ensures you can shop with confidence. Full refund within 14 days.",
  },
  {
    icon: "lucide:tag",
    title: "Competitive Pricing",
    desc: "Because we source directly, we cut out middlemen and pass the savings to you. Best prices on genuine tech products.",
  },
];

export function PaaopaaFeatures() {
  return (
    <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            The Paaopaa Advantage
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Why Thousands Trust Paaopaa
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="border rounded-xl p-8 bg-white card-hover"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="size-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  backgroundColor:
                    "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                  color: "var(--color-primary)",
                }}
              >
                <Icon icon={feat.icon} width={24} height={24} />
              </div>
              <h4
                className="font-bold text-lg mb-3"
                style={{ color: "var(--color-foreground)" }}
              >
                {feat.title}
              </h4>
              <p
                className="text-sm"
                style={{
                  color: "var(--color-muted-foreground)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
