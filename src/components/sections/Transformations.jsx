import { AlertTriangle, Hammer, TrendingUp } from 'lucide-react';

function Transformations() {
  const transformations = [
    {
      company: "Tag1 Consulting",
      program: "AI Enablement Initiative",
      role: "Senior Project Manager & AI Solutions Architect",
      problem: "Organization needed AI training but lacked structured enablement. Team members were curious but didn't know where to start or how to apply AI to their specific domains.",
      built: "Designed and facilitated AI strategy workshops in partnership with the CEO. Created agendas, content, and hands-on homework so team members could experiment in their own domains. Framework became repeatable for clients: now leading customized workshops for client organizations covering their specific AI needs and safe, ethical implementation.",
      impact: "Sparked organization-wide AI adoption. Led to 3 years of deep AI learning, building automation, and developing solutions for client challenges. Now a go-to resource for AI enablement across the company and with clients."
    },
    {
      company: "Tag1 Consulting",
      program: "AI Product Pods",
      role: "Senior Project Manager & AI Solutions Architect",
      problem: "Need for structured AI integration across the organization, not just ad hoc experimentation but strategic, cross-functional collaboration.",
      built: "Established AI Product Pods bringing together domain experts to integrate AI into their work and into client solutions and offerings. Team conducts R&D, feasibility and viability studies, pilots, and production implementations.",
      impact: "Created a repeatable model for AI integration. Cross-functional expertise accelerates innovation while maintaining quality and ethical standards."
    },
    {
      company: "Tag1 Consulting",
      program: "PMO Governance & Standards",
      role: "Senior Project Manager",
      problem: "Fast-growing consultancy, no standardized delivery frameworks. Risk management was reactive. Reporting was inconsistent across global teams.",
      built: "• PMO playbooks and templates\n• Knowledge systems and documentation standards\n• Governance frameworks as member of PMO Steering Group\n• Delivery standards that scaled across client portfolio",
      impact: "Portfolio visibility. Consistent frameworks. Proactive risk management became culture."
    },
    {
      company: "Apple Inc",
      program: "Regional Onboarding Program",
      role: "Business Relationship Manager",
      problem: "No structured onboarding. New Business team hires were inconsistent across regions, some ramped in weeks, others took months. No one owned the fix.",
      built: "Comprehensive onboarding program: shadowing protocols, reverse-shadowing validation, NPS-based evaluation system. Rolled out across Southeast & Northeast U.S.",
      impact: "Standardized performance. Reduced ramp time. New hires became productive faster, and the framework scaled to other regions."
    },
    {
      company: "Zendo (now Alarm.com)",
      program: "Customer Experience Function",
      role: "Product Manager, Customer Experience",
      problem: "IoT startup, no support infrastructure. Engineers were fielding customer issues directly, burning time and creating inconsistent responses.",
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
    }
  ];

  return (
    <section id="transformations" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Systems & Teams Built
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-4xl font-body">
            I see patterns and opportunities that unlock operational efficiency. Throughout my career, I've identified gaps where systems, processes, or teams could work better, and I've built the infrastructure to close them.
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
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    {transformation.company}
                  </h3>
                  <span className="text-sm text-accent font-medium font-body">
                    {transformation.role}
                  </span>
                </div>
                <p className="text-lg font-heading font-semibold text-navy">
                  {transformation.program}
                </p>
              </div>

              {/* Content */}
              <div className="space-y-5">
                {/* The Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-secondary" />
                    <h4 className="font-heading font-bold text-navy">The Problem</h4>
                  </div>
                  <p className="text-secondary leading-relaxed font-body">
                    {transformation.problem}
                  </p>
                </div>

                {/* What I Built */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Hammer className="w-5 h-5 text-secondary" />
                    <h4 className="font-heading font-bold text-navy">What I Built</h4>
                  </div>
                  <p className="text-secondary leading-relaxed whitespace-pre-line font-body">
                    {transformation.built}
                  </p>
                </div>

                {/* The Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h4 className="font-heading font-bold text-navy">The Impact</h4>
                  </div>
                  <p className="text-accent font-semibold text-base leading-relaxed font-body">
                    {transformation.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transformations;
