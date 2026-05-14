import Image from "next/image";

const modules = [
  { src: "/images/erp/hr.jpg", alt: "BISTA HR Management module" },
  { src: "/images/erp/accounting.jpg", alt: "BISTA Financial Management — accounting module" },
  { src: "/images/erp/contract-management.jpg", alt: "BISTA Contract Management module" },
  { src: "/images/erp/document-management.jpg", alt: "BISTA Document Management module" },
  { src: "/images/erp/fixed-assets.jpg", alt: "BISTA Fixed Asset Management module" },
  { src: "/images/erp/warehouse-inventory.jpg", alt: "BISTA Warehouse and Inventory Management module" },
  { src: "/images/erp/pos.jpg", alt: "BISTA Point of Sale module" },
  { src: "/images/erp/procurement.jpg", alt: "BISTA Procurement Management module" },
  { src: "/images/erp/suppliers-payment.jpg", alt: "BISTA Suppliers Payment module" },
  { src: "/images/erp/payroll.jpg", alt: "BISTA Payroll System module" },
];

export function ErpModuleGallery() {
  return (
    <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            What You Get
          </h2>
          <h3
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--color-blue)",
            }}
          >
            Take Paper Out of Your Business Processes
          </h3>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            BISTA ERP covers every function of your organization in a single
            integrated platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modules.map((module) => (
            <div
              key={module.src}
              className="overflow-hidden rounded-lg border card-hover"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Image
                src={module.src}
                alt={module.alt}
                width={300}
                height={200}
                className="w-full object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
