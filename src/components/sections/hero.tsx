import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section className="relative py-32 lg:py-48 bg-gradient-to-b from-primary/5 to-background">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            We Build Things That{" "}
            <span className="text-primary">Matter</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Replace this with a clear, direct description of what your company
            does and the value it delivers. No buzzwords.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk To Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
