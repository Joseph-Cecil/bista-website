import Image from "next/image";

const hrFeatures = [
  {
    title: "Workforce Planning",
    desc: "BISTA HRMS offers a great way to manage and plan your organization's workforce so that it meets the needs of the business as a whole. For example, the system allows senior managers to model workforce needs based on changes to business strategy.",
  },
  {
    title: "Performance Management and Competency Management",
    desc: "Evaluating employee performance, giving feedback, scoring and setting future objectives can be time-consuming tasks for both line managers and their teams, but BISTA HRMS adds automation to the process, allowing them to complete and store feedback, ratings and performance evaluations in the performance management system module of BISTA HRMS.",
  },
  {
    title: "Learning and Development",
    desc: "BISTA HRMS supports the learning and development strategy of an organization by holding information on the range of courses or training/learning opportunities on offer and either allowing employees to self-select their training or allowing managers to match their team members with suitable learning interventions based on their performance development plan.",
  },
  {
    title: "Recruitment",
    desc: "This is one of the most used elements of Human Resource Management software, and potentially one of the most value-adding areas to an organization. Recruiting new staff can be made easier through automatically generated job descriptions, and seamlessly advertising and shortlisting candidates for interviews.",
  },
  {
    title: "Onboarding",
    desc: "With the employee onboarding module, users can quickly and efficiently carry out all of the processes relating to new joiners to the organization, such as generating contracts and letters from templates, requesting reference information and creating new employee records.",
  },
  {
    title: "Workforce Management",
    desc: "BISTA HRMS workforce management option allows managers to record details of their non-core employees, such as freelancers, casuals or consultants. It's crucial to capture cost and usage of data about these individuals as, though not employees, they are an essential part of an organization's wider workforce.",
  },
  {
    title: "Organization Visualization",
    desc: "BISTA HRMS offers new ways for organizations to shape and track the visualization and strategy of the company. This could include modeling different scenarios such as reducing or increasing headcount or investing in more training to upskill staff to launch a new product.",
  },
  {
    title: "Reporting and Analytics (Workforce Analytics)",
    desc: "One of the most significant benefits that BISTA HRMS can offer organizations is its ability to report on and analyze some of the critical business metrics relating to the people side of the business. At the touch of a button, users can run pre-designed, customized reports to gauge metrics like employee turnover, recruitment spend and employee performance by department.",
  },
  {
    title: "Workflow",
    desc: "Workflows are the step-by-step processes relating to different tasks in a business. BISTA HRMS software enables you to set up personalized HR workflow for different HR processes. This way, many of the functions can either be completed automatically, as part of a sequence or with minimal user interaction.",
  },
];

export function ServicesHrms() {
  return (
    <section
      className="py-24 px-10 border-b"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="mb-12 w-full overflow-hidden rounded-xl">
          <Image
            src="/images/hero/hrms-hero.jpg"
            alt="BISTA Human Resource Management Software"
            width={1000}
            height={516}
            className="w-full object-cover rounded-xl"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-red) 10%, transparent)",
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            BISTA HRMS
          </div>

          <h3
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
              color: "var(--color-blue)",
            }}
          >
            BISTA Human Resource Management Software (BISTA HRMS)
          </h3>

          <p
            className="text-base mb-6"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            With so many organizations dealing with an ever-growing list of human
            resource processes to manage their workforce, the need to implement
            human resource management software should not be overemphasized. In
            order to stay competitive, it&apos;s vital that employees have the time
            to focus on value-adding work rather than repetitive or
            time-consuming administration. BISTA&apos;s Human Resource Management
            Software (BISTA&apos;s HRMS) can help your overworked HR team and line
            managers to free up time from such tasks.
          </p>

          <p
            className="text-base mb-6"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            <strong
              className="font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              What Is BISTA Human Resource Management Software (BISTA HRMS)?
            </strong>
          </p>
          <p
            className="text-base mb-10"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            BISTA HRMS software is a system or platform that supports an
            organization to manage and maintain its employees. The general
            purpose of BISTA HRMS is to simplify and streamline some of the
            standard processes relating to the workforce, to save time and money
            and to increase consistency.
          </p>

          <h4
            className="font-semibold text-lg mb-8"
            style={{ color: "var(--color-foreground)" }}
          >
            Some of the key features of BISTA HRMS include:
          </h4>
        </div>

        {/* Feature List */}
        <div className="space-y-8">
          {hrFeatures.map((feat) => (
            <div key={feat.title} className="flex gap-4">
              <span
                className="shrink-0 mt-1.5 font-bold text-sm"
                style={{ color: "var(--color-red)" }}
                aria-hidden="true"
              >
                —
              </span>
              <div>
                <h5
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {feat.title}
                </h5>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--color-muted-foreground)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
