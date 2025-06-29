import { Badge } from "@/components/ui/badge";

function LanguageBubble({ filled }: { filled: boolean }) {
  return (
    <span
      className={`inline-block w-3 h-3 rounded-full mr-1 ${
        filled ? "bg-blue-500" : "bg-black/20"
      }`}
    ></span>
  );
}

function LanguageLevel({
  language,
  level,
  score,
}: {
  language: string;
  level: string;
  score: number; // e.g., 4 = 4 filled dots
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{language}</p>
          <p className="text-sm text-muted-foreground">{level}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <LanguageBubble key={i} filled={i < score} />
          ))}
        </div>
      </div>
    </div>
  );
}

const skills = [
  "C/C++", "JavaScript", "TypeScript", "Python",
  "SQLite", "AWS", "Docker", "Git", "Tailwind CSS"
];

const experience = [
  {
    id: "shopify-intern",
    title: "Internship Frontend Shopify Web Developer",
    company: "Fantail, Vadigran Group | Brussels",
    period: "Feb - May 2025",
    description: `
      Redesigned Fantail’s Shopify website for premium dog beds and cat furniture.
      Implemented a fully custom Shopify theme using Liquid and Tailwind CSS.
      Reduced product catalog by 55% through smart use of variants and metafields.
      Enhanced UX with custom color swatches, icon-based mobile nav, and filters.
      Improved SEO structure and page speed across devices.
      Collaborated with marketing to align visual design and product presentation.
    `
  },
  {
    id: "financial-officer",
    title: "Financial Officer / Financial Business Partner",
    company: "European Centre for Development Policy Management (ECDPM) | Brussels",
    period: "2020 - 2023",
    description: `
      Supported program leaders in financial management to achieve objectives.
      Monitored budgets, cash flow, invoicing for several EU-funded projects.
      Oversaw outsourced payroll administration and maintained project records.
      Prepared monthly, quarterly, and annual financial reports.
      Reviewed financial contracts and coordinated external audits.
    `
  },
  {
    id: "junior-controller",
    title: "Junior Financial Controller",
    company: "Digitas LBi, Publicis Groupe Belgium | Brussels",
    period: "2017 - 2020",
    description: `
      Managed financial and management reporting, forecasts, and budgeting.
      Improved profitability through variance analysis and action planning.
      Partnered with business leads to meet financial targets.
      Ensured IFRS compliance and liaised with auditors.
    `
  },
  {
    id: "deloitte-consultant",
    title: "Junior Accountancy Consultant",
    company: "Deloitte | Brussels",
    period: "2016 - 2017",
    description: `
      Maintained daily bookkeeping records and supported month-end closings.
      Prepared tax returns and converted accounts to local GAAP.
      Assisted in statutory financial statements and VAT compliance.
    `
  }
];


export default function About() {
  return (
    <div className="space-y-12 w-90%">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Who Am I? Learn more about my background, experience and skills.
        </p>
      </header>

      {/* Bio Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Hello World!</h2>
        <div className="prose prose-gray max-w-none text-justify">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Jolande — a developer with a background in finance and a passion for clean, purposeful code. 
            My journey into programming began during my time at DigitasLBi (part of Publicis Groupe Belgium), where I became fascinated by the websites our team was building. 
            That curiosity quickly grew into a drive to understand how things work under the hood.
            <br />
            <br />
            Working in finance, I often used IT tools to solve day-to-day challenges, which made me realize just how closely finance and tech are connected. 
            That sparked my interest even more and eventually led me to dive deeper into development.
          </p>
          <br />
          <p className="text-muted-foreground leading-relaxed">
          When I'm not coding, you’ll probably find me watching a great series or film, reading, or enjoying music and dance. 
          I’m also really into fitness, numbers, and bringing structure to anything messy — whether it’s code or something else.
          </p>
        </div>
      </section>

      {/* Skills Section
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
              {skill}
            </Badge>
          ))}
        </div>
      </section> */}
      {/* Skills */}
      <section id="skills">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Backend & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["C", "C++", "SQLite", "Git", "Docker", "Linux", "AWS", "Bash", "Vim"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Finance</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Corporate Finance",
                "Accounting",
                "Excel",
                "Administration",
                "Payroll Management",
                "P&L Analysis",
                "Forecasting",
                "Budgeting"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <div className="space-y-6 text-justify">
          {experience.map((job) => (
            <div key={job.id} className="border-l-2 border-primary pl-6">
              <div className="mb-2">
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="prose prose-gray max-w-none">
          <h3 className="text-lg font-medium mb-2">Campus 19, 42 Network | 2023 - 2025
          </h3>
          <p className="text-muted-foreground mb-4">
          Software Engineering
          </p>
        </div>
        <div className="prose prose-gray max-w-none">
          <h3 className="text-lg font-medium mb-2">K.U. Leuven | 2012 - 2016
          </h3>
          <p className="text-muted-foreground mb-4">
          MSc & BSc in Business Economics (Finance, Accounting, Marketing) – Cum Laude
          </p>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <div className="prose prose-gray max-w-none">
          <h3 className="text-lg font-medium mb-2">AWS Certified Cloud Practitioner | May 2024
          </h3>
          {/* <p className="text-muted-foreground mb-4">
          AWS Certified Cloud Practitioner - May 2024
          </p> */}
        </div>
      </section>

      {/* Languages Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <div>
          <LanguageLevel language="Dutch" level="Native" score={5} />
          <LanguageLevel language="English" level="Business fluent" score={4} />
          <LanguageLevel language="French" level="Business fluet" score={4} />
          {/* <LanguageLevel language="Korean" level="Basi" score={3} /> */}
        </div>
      </section>


      {/* Contact CTA */}
      <section className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground mb-6">
          I'm always interested in hearing about new opportunities and exciting projects.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="mailto:jolande.steenput@gmail.com"
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/10 transition-colors"
          >
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
}
