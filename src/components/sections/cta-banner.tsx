import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function CtaBanner() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <Container>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Ready to Work Together?</h2>
          <p className="text-primary-foreground/80 text-lg">
            Let us discuss how we can help your organization achieve its goals.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
