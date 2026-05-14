import Image from "next/image";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";

export function CleanCodeSection() {
  return (
    <section
      className="py-20 px-10"
      style={{ backgroundColor: "#0D2742", borderTop: "3px solid #1d90ef" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <AnimatedWrapper delay={0}>
          <Image
            src="/images/home/clean-code.png"
            alt="BISTA ERP interface — clean code and intuitive design"
            width={636}
            height={383}
            className="rounded-md w-full object-contain"
            style={{ background: "transparent" }}
          />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.1}>
          <h3
            className="font-normal text-center md:text-left"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: "1.25",
            }}
          >
            Clean Code,
            <br />
            Intuitive Interface,
            <br />
            Amazing Performance
          </h3>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
