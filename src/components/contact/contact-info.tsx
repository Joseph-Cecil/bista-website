import { Icon } from "@iconify/react";

const contactCards = [
  {
    icon: "lucide:map-pin",
    title: "Visit Our Office",
    line1: "Nii Teiko Kwame Close",
    line2: "Kokomlemle, Accra, Ghana",
    color: "var(--color-blue)",
  },
  {
    icon: "lucide:phone",
    title: "Call Us",
    line1: "+233 244 586 714",
    line2: "Mon - Fri, 8:00 AM - 5:00 PM",
    color: "var(--color-primary)",
  },
  {
    icon: "lucide:mail",
    title: "Email Us",
    line1: "info@bistasolutions.com",
    line2: "We respond within 24 hours",
    color: "var(--color-red)",
  },
];

export function ContactInfo() {
  return (
    <section className="py-16 px-10" style={{ backgroundColor: "var(--color-secondary)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {contactCards.map((card) => (
          <div
            key={card.title}
            className="bg-white border rounded-xl p-8 text-center card-hover"
            style={{
              borderColor: "var(--color-border)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="size-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{
                backgroundColor: "color-mix(in oklab, " + card.color + " 10%, transparent)",
                color: card.color,
              }}
            >
              <Icon icon={card.icon} width={24} height={24} />
            </div>
            <h3
              className="font-bold text-lg mb-2"
              style={{ color: "var(--color-foreground)" }}
            >
              {card.title}
            </h3>
            <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
              {card.line1}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-muted-foreground)" }}>
              {card.line2}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
