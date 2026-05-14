import Link from "next/link";
import { Icon } from "@iconify/react";

export function ProductsSection() {
  return (
    <section
      className="py-24 px-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4"
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Retail &amp; E-Commerce
          </div>
          <h3
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Connecting Markets Through Technology
          </h3>
          <p
            className="text-lg"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Beyond enterprise software, BISTA operates leading consumer
            technology divisions, bringing world-class products to the Ghanaian
            market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ---- Paaopaa Card ---- */}
          <div
            className="bg-white border rounded-2xl overflow-hidden flex flex-col"
            style={{
              borderColor: "var(--color-border)",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            {/* Logo area */}
            <div
              className="h-48 relative overflow-hidden flex items-center justify-center p-8"
              style={{
                backgroundColor:
                  "color-mix(in oklab, var(--color-blue) 5%, transparent)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--color-primary) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 text-center">
                <span
                  className="font-black"
                  style={{
                    fontFamily: "var(--font-headings)",
                    fontSize: "var(--text-5xl)",
                    color: "var(--color-blue)",
                    letterSpacing: "var(--tracking-tighter)",
                  }}
                >
                  paaopaa
                  <span style={{ color: "var(--color-primary)" }}>.com</span>
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-10 flex-grow flex flex-col justify-between">
              <div>
                <h4
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Premium E-Commerce
                </h4>
                <p
                  className="mb-6"
                  style={{
                    color: "var(--color-muted-foreground)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  Our dedicated e-commerce platform bringing premium technology
                  products directly to consumers across Ghana. We guarantee
                  authenticity, secure payments, and nationwide delivery.
                </p>
                <ul className="space-y-3 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
                  {[
                    "Nationwide Delivery",
                    "Secure Online Payments",
                    "Verified Authentic Products",
                  ].map((item) => (
                    <li key={item} className="text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/paaopaa"
                className="btn-paaopaa w-full block text-center text-white px-6 py-4 rounded-md font-medium text-base"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
              >
                Visit Paaopaa.com
              </Link>
            </div>
          </div>

          {/* ---- Energizer Card ---- */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col relative text-white"
            style={{
              backgroundColor: "var(--color-foreground)",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 rounded-full pointer-events-none"
              style={{
                width: "256px",
                height: "256px",
                backgroundColor: "var(--color-red)",
                filter: "blur(100px)",
                opacity: 0.3,
                transform: "translate(50%, -50%)",
              }}
            />

            <div className="p-10 flex-grow flex flex-col justify-between relative z-10">
              <div>
                {/* Badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-8 border"
                  style={{
                    backgroundColor:
                      "color-mix(in oklab, var(--color-red) 20%, transparent)",
                    color: "var(--color-red)",
                    borderColor:
                      "color-mix(in oklab, var(--color-red) 30%, transparent)",
                    letterSpacing: "var(--tracking-widest)",
                  }}
                >
                  Official Partnership
                </div>

                <h4
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-headings)",
                    fontSize: "var(--text-4xl)",
                  }}
                >
                  Energizer Mobile
                </h4>
                <p
                  className="mb-8 text-lg"
                  style={{
                    color: "rgba(255,255,255,0.80)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  Proud to be the official country representative for Energizer
                  mobile phones and accessories since 2019. Powering
                  communication with unmatched battery life and durability.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: "lucide:battery-charging",
                      title: "Ultimate Battery",
                      desc: "Industry-leading lifespan",
                    },
                    {
                      icon: "lucide:shield",
                      title: "Rugged Design",
                      desc: "Built for tough environments",
                    },
                  ].map((feat) => (
                    <div
                      key={feat.title}
                      className="p-4 rounded-lg border"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderColor: "rgba(255,255,255,0.10)",
                      }}
                    >
                      <Icon
                        icon={feat.icon}
                        width={24}
                        height={24}
                        style={{
                          color: "var(--color-red)",
                          marginBottom: "8px",
                          display: "block",
                        }}
                      />
                      <div className="font-bold text-sm">{feat.title}</div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.60)" }}
                      >
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/products"
                className="btn-energizer w-full block text-center text-white px-6 py-4 rounded-md font-medium text-base"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
              >
                View Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
