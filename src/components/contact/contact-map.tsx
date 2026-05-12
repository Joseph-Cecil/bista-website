export function ContactMap() {
  return (
    <section
      className="border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div
        className="w-full flex items-center justify-center"
        style={{
          height: "400px",
          backgroundColor: "var(--color-secondary)",
        }}
      >
        <div className="text-center">
          <p
            className="font-bold text-lg mb-2"
            style={{ color: "var(--color-blue)" }}
          >
            BISTA House, Accra
          </p>
          <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
            Replace this section with an embedded Google Map of your office location.
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--color-muted-foreground)" }}>
            Use an iframe embed or the @vis.gl/react-google-maps package for a production-ready map.
          </p>
        </div>
      </div>
    </section>
  );
}
