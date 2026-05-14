
const consultingServices = [
  {
    icon: "lucide:monitor",
    iconColor: "var(--color-blue)",
    title: "IT & Tech Services",
    items: [
      "Custom software development",
      "Database management",
      "Technology implementation",
      "Process automation",
      "IT support & device sales",
    ],
    isSecurityCard: false,
  },
  {
    icon: "lucide:shopping-bag",
    iconColor: "var(--color-primary)",
    title: "Digital Commerce",
    items: [
      "E-commerce platform development",
      "Vendor marketplace services",
      "Online retail via paaopaa.com",
      "Payment gateway integration",
    ],
    isSecurityCard: false,
  },
  {
    icon: "lucide:smartphone",
    iconColor: "var(--color-red)",
    title: "Product Distribution",
    items: [
      "International tech representation",
      "Energizer mobile phones distro",
      "Mobile accessories distribution",
      "B2B wholesale partnerships",
    ],
    isSecurityCard: false,
  },
  {
    icon: "lucide:compass",
    iconColor: "var(--color-blue)",
    title: "Business Consulting",
    items: [
      "Business process optimization",
      "Technology strategy support",
      "Digital transformation mapping",
      "Enterprise system implementation",
    ],
    isSecurityCard: false,
  },
  {
    icon: "lucide:trending-up",
    iconColor: "var(--color-primary)",
    title: "Reporting & Analytics",
    items: [
      "Business intelligence analytics",
      "Workforce & HR analytics",
      "Financial analytics",
      "Custom operational reporting",
    ],
    isSecurityCard: false,
  },
  {
    icon: "lucide:shield",
    iconColor: "white",
    title: "Security & Compliance",
    items: [
      "TLS/SSL & File encryption",
      "Data privacy protection",
      "Regulatory compliance",
      "Secure document workflows",
    ],
    isSecurityCard: true,
  },
];

export function ServicesConsulting() {
  return (
    <section
      className="py-24 px-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Beyond Software
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--color-blue)",
            }}
          >
            Integrated IT &amp; Consulting
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultingServices.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-8 shadow-sm"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: service.isSecurityCard
                  ? "color-mix(in oklab, var(--color-blue) 5%, white)"
                  : "white",
              }}
            >
              {/* Title row */}
              <div className="mb-6">
                <h4
                  className="font-bold text-lg leading-tight"
                  style={{
                    color: service.isSecurityCard
                      ? "var(--color-blue)"
                      : "var(--color-foreground)",
                  }}
                >
                  {service.title}
                </h4>
              </div>

              {/* Items */}
              <ul
                className="space-y-2 text-sm"
                style={{
                  listStyleType: "disc",
                  paddingLeft: "1.25rem",
                  color: service.isSecurityCard ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                }}
              >
                {service.items.map((item) => (
                  <li key={item} className={service.isSecurityCard ? "font-medium" : ""}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
