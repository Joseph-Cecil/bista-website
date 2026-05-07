import { Container } from "@/components/layout/container";

export function PartnersLogo() {
  return (
    <section className="py-16 border-y">
      <Container>
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
          {/* Replace with actual partner/client logos */}
          {["Partner A", "Partner B", "Partner C", "Partner D", "Partner E"].map((name) => (
            <span key={name} className="text-lg font-bold text-muted-foreground">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
