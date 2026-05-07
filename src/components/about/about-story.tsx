import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-24 px-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div>
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            The Beginning
          </h2>
          <h3
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            A Vision for{" "}
            <span style={{ color: "var(--color-primary)" }}>
              African Innovation
            </span>
          </h3>

          <div
            className="space-y-6 text-lg"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            <p>
              Founded in 2009, BISTA Solutions Limited began with a clear and
              ambitious mandate: to elevate the standard of enterprise IT
              services in Ghana. We recognized early on that local businesses
              needed world-class technology tailored to the unique operational
              realities of West Africa.
            </p>
            <p>
              Over the past decade, we have grown from a specialized database
              management consultancy into a full-spectrum technology partner.
              Our expertise now spans custom software development, robust IT
              infrastructure, e-commerce, and global consumer tech partnerships.
            </p>
          </div>

          {/* Pull Quote */}
          <div
            className="mt-10 p-6 rounded-r-lg border-l-4"
            style={{
              backgroundColor: "var(--color-secondary)",
              borderLeftColor: "var(--color-primary)",
            }}
          >
            <p
              className="italic font-medium text-lg"
              style={{ color: "var(--color-foreground)" }}
            >
              &ldquo;We do not just install software; we engineer sustainable
              growth for our clients by blending local insight with global
              standards.&rdquo;
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          <div
            className="absolute rounded-2xl -z-10"
            style={{
              inset: "-16px",
              backgroundColor: "var(--color-secondary)",
              transform: "rotate(3deg)",
            }}
          />
          <Image
            src="https://storage.googleapis.com/banani-generated-images/generated-images/4a1fd14a-b586-4cee-928a-37dd59b8095e.jpg"
            alt="BISTA leadership team in strategic meeting"
            width={800}
            height={600}
            className="rounded-xl w-full object-cover border"
            style={{
              aspectRatio: "4/3",
              borderColor: "var(--color-border)",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
