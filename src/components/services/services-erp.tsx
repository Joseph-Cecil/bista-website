import { Icon } from "@iconify/react";

interface ServiceCard {
  icon: string;
  iconBg: string;
  iconColor: string;
  badge?: { label: string; color: string };
  title: string;
  items: string[];
  checkColor: string;
}

const erpServices: ServiceCard[] = [
  {
    icon: "lucide:shopping-cart",
    iconBg: "color-mix(in oklab, var(--color-blue) 10%, transparent)",
    iconColor: "var(--color-blue)",
    title: "Procurement Management",
    checkColor: "var(--color-primary)",
    items: [
      "Procurement workflows",
      "Purchase order & invoice processing",
      "Spend management & supplier relations",
      "Supply chain optimization",
    ],
  },
  {
    icon: "lucide:package",
    iconBg: "color-mix(in oklab, var(--color-primary) 10%, transparent)",
    iconColor: "var(--color-primary)",
    badge: { label: "BISTA IMS", color: "var(--color-primary)" },
    title: "Inventory Management",
    checkColor: "var(--color-primary)",
    items: [
      "Stock management & tracking",
      "Multi-channel synchronization",
      "Order processing & stock optimization",
      "Overselling prevention",
    ],
  },
  {
    icon: "lucide:file-signature",
    iconBg: "color-mix(in oklab, var(--color-blue) 10%, transparent)",
    iconColor: "var(--color-blue)",
    badge: { label: "BISTA CMS", color: "var(--color-blue)" },
    title: "Contract Management",
    checkColor: "var(--color-primary)",
    items: [
      "Electronic contract management",
      "Tracking, reminders & alerts",
      "Contract financial transparency",
      "Supplier relationship management",
    ],
  },
  {
    icon: "lucide:pie-chart",
    iconBg: "color-mix(in oklab, var(--color-red) 10%, transparent)",
    iconColor: "var(--color-red)",
    title: "Financial Management",
    checkColor: "var(--color-red)",
    items: [
      "Core accounting management",
      "Finance process automation",
      "Strategic analysis & reporting",
      "Regulatory compliance support",
    ],
  },
  {
    icon: "lucide:folder-open",
    iconBg: "color-mix(in oklab, var(--color-primary) 10%, transparent)",
    iconColor: "var(--color-primary)",
    badge: { label: "BISTA DMS", color: "var(--color-primary)" },
    title: "Document Management",
    checkColor: "var(--color-primary)",
    items: [
      "Centralized digital storage",
      "Access control & approval workflows",
      "Version control & secure retrieval",
    ],
  },
  {
    icon: "lucide:server",
    iconBg: "color-mix(in oklab, var(--color-blue) 10%, transparent)",
    iconColor: "var(--color-blue)",
    badge: { label: "BISTA FAS", color: "var(--color-blue)" },
    title: "Fixed Asset Management",
    checkColor: "var(--color-primary)",
    items: [
      "Asset lifecycle & maintenance tracking",
      "Depreciation reporting",
      "Asset documentation & monitoring",
    ],
  },
];

export function ServicesErp() {
  return (
    <section
      className="py-24 px-10"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Core Operations
          </h2>
          <h3
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--color-blue)",
            }}
          >
            ERP &amp; Enterprise Management
          </h3>
          <p
            className="text-lg max-w-3xl"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Streamline your daily workflows and gain complete oversight with our
            comprehensive enterprise resource planning modules.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpServices.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 border flex flex-col relative overflow-hidden card-hover"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Badge */}
              {service.badge && (
                <div
                  className="absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg"
                  style={{ backgroundColor: service.badge.color }}
                >
                  {service.badge.label}
                </div>
              )}

              {/* Icon */}
              <div
                className="size-12 rounded-lg flex items-center justify-center mb-6"
                style={{
                  backgroundColor: service.iconBg,
                  color: service.iconColor,
                }}
              >
                <Icon icon={service.icon} width={24} height={24} />
              </div>

              {/* Title */}
              <h4
                className="font-bold text-xl mb-4"
                style={{ color: "var(--color-foreground)" }}
              >
                {service.title}
              </h4>

              {/* Feature List */}
              <ul className="space-y-2 text-sm flex-grow"
                style={{ color: "var(--color-muted-foreground)" }}>
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Icon
                      icon="lucide:check"
                      width={16}
                      height={16}
                      style={{
                        color: service.checkColor,
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
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
