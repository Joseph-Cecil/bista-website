import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real feedback from the people we work with."
          centered
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-muted/30">
              <CardContent className="pt-6 space-y-4">
                <blockquote className="text-sm text-muted-foreground italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.title}, {item.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
