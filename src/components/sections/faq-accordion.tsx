"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { faq } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="Frequently Asked Questions" centered />
        <div className="mt-12 max-w-3xl mx-auto divide-y border rounded-lg overflow-hidden">
          {faq.map((item, index) => (
            <div key={index}>
              <button
                className="flex w-full items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", openIndex === index && "rotate-180")}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-muted-foreground">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
