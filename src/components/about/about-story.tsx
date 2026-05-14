import Image from "next/image";

export function AboutStory() {
  return (
    <>
      {/* Full-width About banner from legacy about-us.html */}
      <div className="w-full">
        <Image
          src="/images/about/about-design.jpg"
          alt="About BISTA Solutions — our team and history"
          width={1200}
          height={400}
          className="w-full object-cover"
          style={{ maxHeight: "420px" }}
        />
      </div>

      <section className="py-16 px-10 max-w-6xl mx-auto">
        {/* Company history */}
        <div className="mb-12">
          <p
            className="text-base mb-6"
            style={{
              color: "#444444",
              lineHeight: "1.75",
              textAlign: "justify",
            }}
          >
            BISTA Solutions Limited was incorporated as a wholly owned Ghanaian
            Information Technology organization registered in 2009 to translate
            the vast experience of its consultants in the software development
            and database management to assist government institutions and
            corporate Ghana in utilizing Information Technology to operate
            effectively and efficiently to achieve their business goals. The
            company was also registered to represent manufacturers across the
            globe in information technology related products.
          </p>
          <p
            className="text-base mb-6"
            style={{
              color: "#444444",
              lineHeight: "1.75",
              textAlign: "justify",
            }}
          >
            BISTA Solutions is an experienced and a longstanding provider of
            cutting-edge integrated information technology solutions to a wide
            range of customers in Ghana. Our understanding of the Ghanaian
            culture, traditional values and business practices combined with our
            technical expertise and experience in implementing effective
            technological solutions and sales of technological devices account
            for our success. Our priority at BISTA Solutions is helping our
            customers succeed.
          </p>
          <p
            className="text-base mb-6"
            style={{
              color: "#444444",
              lineHeight: "1.75",
              textAlign: "justify",
            }}
          >
            Customer success is our success. Our teams of high calibre skilled
            information technology (IT) and business professionals and Sales
            Executives have the commitment to deliver the required services
            efficiently and are always available to assist. With our track
            record, BISTA Solutions has the requisite competence to meet the
            challenges of software projects.
          </p>
          <p
            className="text-base mb-6"
            style={{
              color: "#444444",
              lineHeight: "1.75",
              textAlign: "justify",
            }}
          >
            Since its inception, we have adopted the CMM (Capability Maturity
            Model) as a benchmark to assess the quality of our personnel and
            processes. This does not only allow us to maintain defined process
            control but also increase accountability and efficiency while
            developing process-critical applications.
          </p>
          <p
            className="text-base mb-10"
            style={{
              color: "#444444",
              lineHeight: "1.75",
              textAlign: "justify",
            }}
          >
            BISTA Solutions&apos; research into the modern sales strategies has led
            to the development of an e-commerce site known as paaopaa.com
            (which literally means service) to sell our products and also allow
            other vendors to sell their products on the site. BISTA is the
            country representative of Energizer mobile phones and accessories
            since July 2019.
          </p>
        </div>

        {/* Vision / Mission / Values */}
        <div className="mb-10">
          <p
            className="text-base mb-2"
            style={{ color: "#444444", lineHeight: "1.75" }}
          >
            <strong
              className="font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              Our Vision:
            </strong>{" "}
            To become the biggest household name in technology business in
            Africa
          </p>
          <p
            className="text-base mb-2"
            style={{ color: "#444444", lineHeight: "1.75" }}
          >
            <strong
              className="font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              Our Mission:
            </strong>{" "}
            To readily address technological needs, in the areas of software
            and databases
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#444444", lineHeight: "1.75" }}
          >
            <strong
              className="font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              Our Core Values:
            </strong>{" "}
            Integrity &nbsp;&bull;&nbsp; Customer focus &nbsp;&bull;&nbsp;
            Accountability &nbsp;&bull;&nbsp; Innovation
          </p>
          <p
            className="font-semibold text-base mb-6"
            style={{ color: "var(--color-foreground)" }}
          >
            Spectrum of Services Offered
          </p>
        </div>

        {/* Spectrum of Services diagram */}
        <div className="flex justify-center">
          <Image
            src="/images/about/spectrum-of-services.jpg"
            alt="Spectrum of Services offered by BISTA Solutions"
            width={508}
            height={518}
            className="rounded-lg border"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderColor: "var(--color-border)",
            }}
          />
        </div>
      </section>
    </>
  );
}
