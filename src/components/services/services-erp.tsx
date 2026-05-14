import Image from "next/image";

interface ErpModule {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  benefits: string[];
}

const erpModules: ErpModule[] = [
  {
    title: "BISTA Procurement Management",
    image: "/images/erp/procurement.jpg",
    imageAlt: "BISTA Procurement Management module dashboard",
    description:
      "Big or small, businesses rely on their procurement function to create savings and value by keeping spend under control and supplier relationships strong and positive. But if your organization is still relying on manual workflows and paper-based procurement processes, you're missing out on the most important benefits of BISTA procurement management software. In the world of competitive and complex economic environment, companies need powerful and responsive tools in order to extract maximum cost savings from procurement while helping their organizations shift the role of procurement processes toward value creation.",
    benefits: [
      "Reduced lifecycle times for purchase orders, invoice processing, and other P2P workflows",
      "Improved spend transparency and visibility across procurement",
      "Improved spend control and security",
      "Supply chain optimization",
      "Invoicing consolidation and optimization",
      "Improved access to supplier performance metrics",
      "Less nonconformist spend",
      "More effective negotiations and more competitive pricing through improved supplier relationship management",
    ],
  },
  {
    title: "BISTA Inventory Management",
    image: "/images/erp/warehouse-inventory.jpg",
    imageAlt: "BISTA Inventory Management System warehouse operations",
    description:
      "When it comes to growing your business, one of the biggest challenges lies in managing your inventory. In fact, as your order volumes increase and you start to expand across more sales channels and into new markets, attempting to manually manage your operations becomes near impossible. Do you currently have to log in and out of your different selling channels to list your products and process your orders? Are you having to manually adjust your stock levels on each platform every time you make a sale? Not only are these huge barriers to business growth, they almost always result in human error, which leads to a damaged reputation at best and marketplace suspension at worst.",
    benefits: [
      "Simplified inventory management",
      "Reduced risk of overselling",
      "Greater cost-savings",
      "Avoidance of stock-outs and excess stock",
      "Improved business negotiations",
      "Better product visibility in the event of a recall",
      "The ability to make more profitable business decisions",
    ],
  },
  {
    title: "BISTA Contract Management",
    image: "/images/erp/contract-management.jpg",
    imageAlt: "BISTA Contract Management System digital contracts overview",
    description:
      "You will be able to reduce costs and risks by using BISTA CMS. With BISTA CMS, all your contracts will always remain well organised. All your contracts are accessed electronically and instantly, anywhere you are. With automatic reminders of important dates and contract milestones, monitoring contract status and activities is very simple. Having all contract billing details in one place means it is easy to get full transparency over your contract financials. BISTA CMS keeps your data private and safe with TLS/SSL and file encryption, ensuring what is yours stays yours. More effective negotiations and more competitive pricing through improved supplier relationship management.",
    benefits: [
      "No more contracts asking for your unplanned attention",
      "A complete overview at any time",
      "Plenty of time to look at alternatives",
      "Greater chance of realizing savings",
      "Risk reduction",
      "Transferability of management in case of illness or departure of employee",
      "Professional attitude towards the contracting party",
      "More effective negotiations and more competitive pricing through improved supplier relationship management",
    ],
  },
  {
    title: "BISTA Financial Management",
    image: "/images/erp/accounting.jpg",
    imageAlt: "BISTA Financial Management accounting and finance module",
    description:
      "The need for financial management software continues to grow at a rapid pace. Accounting and finance processes are becoming increasingly complex, making them harder to coordinate, execute, and track. At the same time, the laws and guidelines that govern those procedures, as well as the data they generate, are becoming more rigid and more intricate, posing the risk for stiffer fines and penalties for non-compliant companies. More and more organizations are turning to financial management software solutions to help meet the challenges associated with consolidating, streamlining, and automating their most mission-critical tasks and activities and guaranteeing compliance with existing, changing, and emerging regulations.",
    benefits: [
      "Streamlined Accounting and Finance Processes",
      "More Accurate and Accessible Financial Information",
      "Facilitate Regulatory Compliance",
      "Better Strategic Planning and Analysis",
    ],
  },
  {
    title: "BISTA Document Management",
    image: "/images/erp/document-management.jpg",
    imageAlt: "BISTA Document Management System centralized document storage",
    description:
      "BISTA Document Management System (BISTA DMS) simplifies document access and storage across all departments and functions. You can configure system notifications and email settings when files are ready for review and approval, and teams can immediately view revisions, document updates, approvals, and more. Equally important, you'll have a centralized repository for simple identification, distribution, access and retrieval, storage and preservation, version control and retention/disposition of documents. BISTA DMS organises important information across departments so the right people have access to the right content whether they're in the office or working remotely.",
    benefits: [
      "Time saving",
      "Security",
      "Scaling",
      "Easy document management",
    ],
  },
  {
    title: "BISTA Fixed Asset Management",
    image: "/images/erp/fixed-assets.jpg",
    imageAlt: "BISTA Fixed Asset System asset lifecycle tracking",
    description:
      "BISTA Fixed Asset System (BISTA FAS) automates the process of tracking assets through the various stages in the asset lifecycle, from acquisition through disposal. With this module, a business can improve the efficiency and financial strength by maintaining its existing assets while avoiding unnecessary equipment purchases and upgrades. BISTA FAS allows users to easily manage fixed assets, with end-to-end visibility into the management process, from acquisition until disposition. BISTA FAS continuously records and maintains asset details and relevant documents in a central document management repository, thereby eliminating dependency on physical records.",
    benefits: [
      "Tracks and reports asset information, including condition, insurance status, and maintenance logs",
      "Notifies you about when and how much quantity of parts of your assets to order",
      "Monitoring the operations across your enterprise through a single dashboard",
      "Manages the life cycle of your fixed assets",
    ],
  },
  {
    title: "BISTA Payroll System",
    image: "/images/erp/payroll.jpg",
    imageAlt: "BISTA Payroll System payment tracking and reporting",
    description:
      "BISTA Payroll System simplifies document access and storage across all departments and functions.",
    benefits: [
      "Live payment tracking",
      "Custom reports",
      "Fast, unlimited payroll runs",
      "Intuitive dashboards and controls",
      "Integrated with HR management software features",
    ],
  },
  {
    title: "Claims Management",
    image: "/images/erp/fixed-assets.jpg",
    imageAlt: "BISTA Claims Management expense and timesheet module",
    description:
      "BISTA HRMS lets your employees submit timesheets and expense claims quickly and easily, without the need for manual forms and authorization requests.",
    benefits: [
      "Tracks and reports asset information, including condition, insurance status, and maintenance logs",
      "Notifies you about when and how much quantity of parts of your assets to order",
      "Monitoring the operations across your enterprise through a single dashboard",
      "Manages the life cycle of your fixed assets",
    ],
  },
];

export function ServicesErp() {
  return (
    <section
      className="py-24 px-10"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Our ERP Module Tour
          </h2>
          <h3
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--color-blue)",
            }}
          >
            ERP &amp; Enterprise Management
          </h3>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Streamline your daily workflows and gain complete oversight with our
            comprehensive enterprise resource planning modules.
          </p>
        </div>

        {/* Module List */}
        <div className="space-y-16">
          {erpModules.map((module, index) => (
            <div
              key={module.title}
              className={`grid md:grid-cols-2 gap-10 items-start bg-white rounded-xl border p-8 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
              }`}
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              {/* Image */}
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src={module.image}
                  alt={module.imageAlt}
                  width={1600}
                  height={550}
                  className="w-full rounded-lg"
                  style={{ height: "auto" }}
                />
              </div>

              {/* Text */}
              <div>
                <h4
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-headings)",
                    fontSize: "var(--text-2xl)",
                    color: "var(--color-blue)",
                  }}
                >
                  {module.title}
                </h4>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: "var(--color-muted-foreground)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {module.description}
                </p>
                <p
                  className="font-semibold mb-3 text-sm uppercase"
                  style={{
                    color: "var(--color-foreground)",
                    letterSpacing: "var(--tracking-wide)",
                  }}
                >
                  The benefits:
                </p>
                <ul
                  className="space-y-2 text-sm"
                  style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "var(--color-muted-foreground)" }}
                >
                  {module.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
