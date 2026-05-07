import { Container } from "@/components/layout/container";

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "200+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

export function StatsCounter() {
  return (
    <section className="py-16 border-y bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-sm mt-1 text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
