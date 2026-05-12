import Image from "next/image";

const team = [
  {
    name: "Kwame Mensah",
    role: "Chief Executive Officer",
    bio: "20+ Years in Enterprise Tech",
    image:
      "https://storage.googleapis.com/banani-avatars/avatar/male/35-50/African/0",
  },
  {
    name: "Amma Osei",
    role: "Chief Operations Officer",
    bio: "Expert in CMM Processes",
    image:
      "https://storage.googleapis.com/banani-avatars/avatar/female/35-50/African/1",
  },
  {
    name: "David Koomson",
    role: "Head of Retail & E-commerce",
    bio: "Former Logistics Director",
    image:
      "https://storage.googleapis.com/banani-avatars/avatar/male/35-50/African/2",
  },
];

export function AboutTeam() {
  return (
    <section
      className="py-24 px-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            The Minds Behind BISTA
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Our Leadership Team
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border rounded-2xl overflow-hidden text-center pb-8 card-hover"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Coloured header band + avatar */}
              <div
                className="h-32 mb-16 relative"
                style={{
                  backgroundColor:
                    "color-mix(in oklab, var(--color-blue) 5%, transparent)",
                }}
              >
                <div
                  className="absolute left-1/2 rounded-full bg-white"
                  style={{
                    bottom: "-64px",
                    transform: "translateX(-50%)",
                    padding: "4px",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    border: "4px solid white",
                    borderRadius: "9999px",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                    style={{ width: "128px", height: "128px" }}
                  />
                </div>
              </div>

              {/* Info */}
              <h4
                className="text-xl font-bold mb-1"
                style={{ color: "var(--color-foreground)" }}
              >
                {member.name}
              </h4>
              <div
                className="font-medium text-sm mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                {member.role}
              </div>
              <p
                className="text-sm px-6"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

