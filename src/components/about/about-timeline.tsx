import { Icon } from "@iconify/react";

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    desc: "BISTA Solutions Limited is officially established in Accra, Ghana, focusing on database management.",
  },
  {
    year: "2014",
    title: "CMM Benchmark",
    desc: "Achieved Capability Maturity Model (CMM) standards, solidifying our commitment to international quality control.",
  },
  {
    year: "2019",
    title: "Energizer Partnership",
    desc: "Appointed as the official country representative for Energizer mobile phones and accessories.",
  },
  {
    year: "2022",
    title: "Paaopaa Launch",
    desc: "Introduced paaopaa.com to modernize consumer tech retail and e-commerce across the region.",
  },
];

export function AboutTimeline() {
  return (
    <section
      className="py-24 px-10 border-y"
      style={{
        backgroundColor: "var(--color-secondary)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Our Journey
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Milestones of Excellence
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centre line */}
          <div
            className="absolute hidden md:block"
            style={{
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(to bottom, transparent, var(--color-border), transparent)",
            }}
          />
          {/* Mobile left line */}
          <div
            className="absolute md:hidden"
            style={{
              left: "20px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, transparent, var(--color-border), transparent)",
            }}
          />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isOdd = i % 2 === 0;
              return (
                <div key={m.year} className="relative flex items-center">
                  {/* Desktop layout */}
                  <div className="hidden md:flex w-full items-center">
                    {/* Left side */}
                    <div
                      className="w-[calc(50%-3rem)]"
                      style={{ textAlign: isOdd ? "right" : "left" }}
                    >
                      {isOdd && (
                        <div
                          className="bg-white p-6 rounded-xl border inline-block text-left"
                          style={{
                            borderColor: "var(--color-border)",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className="text-2xl font-bold"
                              style={{ color: "var(--color-blue)" }}
                            >
                              {m.year}
                            </span>
                            <span
                              className="h-px flex-1"
                              style={{ backgroundColor: "var(--color-border)" }}
                            />
                          </div>
                          <h4
                            className="font-bold text-lg mb-2"
                            style={{ color: "var(--color-foreground)" }}
                          >
                            {m.title}
                          </h4>
                          <p
                            className="text-sm"
                            style={{ color: "var(--color-muted-foreground)" }}
                          >
                            {m.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Centre dot */}
                    <div
                      className="shrink-0 mx-6 flex items-center justify-center rounded-full border-4 text-white"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--color-primary)",
                        borderColor: "var(--color-secondary)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        zIndex: 10,
                      }}
                    >
                      <Icon icon="lucide:check" width={16} height={16} />
                    </div>

                    {/* Right side */}
                    <div className="w-[calc(50%-3rem)]">
                      {!isOdd && (
                        <div
                          className="bg-white p-6 rounded-xl border inline-block"
                          style={{
                            borderColor: "var(--color-border)",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className="text-2xl font-bold"
                              style={{ color: "var(--color-blue)" }}
                            >
                              {m.year}
                            </span>
                            <span
                              className="h-px flex-1"
                              style={{ backgroundColor: "var(--color-border)" }}
                            />
                          </div>
                          <h4
                            className="font-bold text-lg mb-2"
                            style={{ color: "var(--color-foreground)" }}
                          >
                            {m.title}
                          </h4>
                          <p
                            className="text-sm"
                            style={{ color: "var(--color-muted-foreground)" }}
                          >
                            {m.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-6 w-full">
                    {/* Dot */}
                    <div
                      className="shrink-0 flex items-center justify-center rounded-full border-4 text-white mt-1"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--color-primary)",
                        borderColor: "var(--color-secondary)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        zIndex: 10,
                      }}
                    >
                      <Icon icon="lucide:check" width={16} height={16} />
                    </div>

                    {/* Card */}
                    <div
                      className="bg-white p-6 rounded-xl border flex-1"
                      style={{
                        borderColor: "var(--color-border)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "var(--color-blue)" }}
                        >
                          {m.year}
                        </span>
                        <span
                          className="h-px flex-1"
                          style={{ backgroundColor: "var(--color-border)" }}
                        />
                      </div>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {m.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
