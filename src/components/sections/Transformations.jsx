import { AlertTriangle, Hammer, TrendingUp } from 'lucide-react';

function Transformations() {
  const transformations = [
    {
      company: "Apple Inc",
      program: "Regional Onboarding Program",
      role: "Business Relationship Manager",
      problem: "No structured onboarding. New Business team hires were inconsistent across regions—some ramped in weeks, others took months. No one owned the fix.",
      built: "Comprehensive onboarding program: shadowing protocols, reverse-shadowing validation, NPS-based evaluation system. Rolled out across Southeast & Northeast U.S.",
      impact: "Standardized performance. Reduced ramp time. New hires became productive faster, and the framework scaled to other regions."
    },
    {
      company: "Zendo (now Alarm.com)",
      program: "Customer Experience Function",
      role: "Product Manager, Customer Experience",
      problem: "IoT startup, no support infrastructure. Engineers were fielding customer issues directly—burning time and creating inconsistent responses.",
      built: "• Built CX team from zero\n• Integrated Jira, Zendesk, Centercode for systematic beta testing\n• Created feedback loops so customer insights shaped product decisions\n• Established CX voice at leadership level",
      impact: "Engineering focused on building. Product roadmap became customer-informed. Beta testing became strategic."
    },
    {
      company: "MotionPoint",
      program: "Organizational Tooling & Remote Culture",
      role: "Technical Project Manager",
      problem: "Global localization company, scattered communication. No PM system. Teams across time zones working in silos. Remote work was seen as a liability.",
      built: "• Introduced Wrike for portfolio visibility\n• Implemented Slack for real-time global collaboration\n• Championed remote-first culture (inspired by Buffer's model)\n• Changed how distributed teams operated",
      impact: "Communication transformed across time zones. Remote work became normal, not a compromise. Foundation for distributed success."
    },
    {
      company: "The Hoxby Collective",
      program: "International Digital Development Practice",
      role: "Head of Digital Development",
      problem: "Fast-growing remote collective with 200+ professionals across 19 countries needed structure. No standardized delivery processes, inconsistent quality standards across distributed teams.",
      built: "• Recruited and interviewed talent for the digital development practice\n• Standardized processes across international teams spanning 19 countries\n• Built quality frameworks for consistent client delivery\n• Managed tech and marketing clients from medium to large-scale businesses",
      impact: "Created consistency across a global distributed workforce. Enabled scalable growth while maintaining delivery standards. International practice leadership for 200+ professionals."
    },
    {
      company: "Royal Blues Hotel",
      program: "Operations Overhaul",
      role: "Staff & Operations Manager",
      problem: "Boutique luxury property running on manual processes. Payroll errors, inefficient HR, fragmented guest services. Great brand, broken systems.",
      built: "Modernized finance, IT, and HR operations. Fixed what was broken. Partnered with ownership on brand positioning.",
      impact: "Reduced errors. Improved efficiency. Secured recognition in major travel media. Systems that supported high-touch luxury service."
    },
    {
      company: "Tag1",
      program: "PMO Governance & Standards",
      role: "Senior Project Manager",
      problem: "Fast-growing consultancy, no standardized delivery frameworks. Risk management was reactive. Reporting was inconsistent across global teams.",
      built: "• PMO playbooks and templates\n• Knowledge systems and documentation standards\n• Governance frameworks as member of PMO Steering Group\n• Delivery standards that scaled across client portfolio",
      impact: "Portfolio visibility. Consistent frameworks. Proactive risk management became culture."
    }
  ];

  return (
    <section id="transformations" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Systems & Teams Built
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
            I'm a change agent who sees patterns and opportunities that unlock operational efficiency. Throughout my career, I've identified gaps where systems, processes, or teams could work better—and I've built the infrastructure to close them.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="space-y-6">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-accent border border-gray-100"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-primary">
                    {transformation.company}
                  </h3>
                  <span className="text-sm text-purple font-medium">
                    {transformation.role}
                  </span>
                </div>
                <p className="text-lg font-semibold text-navy">
                  {transformation.program}
                </p>
              </div>

              {/* Content */}
              <div className="space-y-5">
                {/* The Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                    <h4 className="font-bold text-navy">The Problem</h4>
                  </div>
                  <p className="text-navy/80 leading-relaxed">
                    {transformation.problem}
                  </p>
                </div>

                {/* What I Built */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Hammer className="w-5 h-5 text-accent" />
                    <h4 className="font-bold text-navy">What I Built</h4>
                  </div>
                  <p className="text-navy/80 leading-relaxed whitespace-pre-line">
                    {transformation.built}
                  </p>
                </div>

                {/* The Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h4 className="font-bold text-navy">The Impact</h4>
                  </div>
                  <p className="text-orange font-bold text-base leading-relaxed">
                    {transformation.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            Here's what was broken. Here's what I fixed. Here's why it matters.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Transformations;
