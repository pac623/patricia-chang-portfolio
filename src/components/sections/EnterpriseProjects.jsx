import { Building2, Users, Clock, TrendingUp, Zap } from 'lucide-react';

function EnterpriseProjects() {
  const projects = [
    {
      client: "NBC Universal / Telemundo",
      platform: "Drupal 7 → 9 Migration + Headless Architecture",
      scope: "Multi-million dollar re-platform with content migration, headless CMS architecture, and multi-site deployment.",
      highlights: [
        "Managed complex content migration across legacy systems",
        "Led technical architecture decisions",
        "Coordinated global development teams",
        "Delivered on-time, on-budget"
      ]
    },
    {
      client: "Princeton University",
      platform: "Alumni Platform Consolidation",
      scope: "Unified 3 standalone alumni sites into single integrated platform.",
      highlights: [
        "Complex stakeholder management across departments",
        "Data consolidation and migration",
        "Improved user experience and engagement",
        "Scalable architecture for future growth"
      ]
    },
    {
      client: "PwC",
      platform: "Technology Consolidation",
      scope: "Consolidated multiple technology platforms to central CMS while preserving all functionality and user workflows.",
      highlights: [
        "Enterprise-level change management",
        "Zero functionality loss during migration",
        "Improved operational efficiency",
        "Streamlined content management"
      ]
    },
    {
      client: "Prologis",
      platform: "Enterprise Redesign + Analytics",
      scope: "Complete enterprise website redesign with Google Analytics data layer implementation for enhanced tracking.",
      highlights: [
        "Strategic analytics implementation",
        "Enhanced user experience",
        "Data-driven decision framework",
        "Global property management platform"
      ]
    },
    {
      client: "Penn State",
      platform: "Redesign + API Integration",
      scope: "Major website redesign with deep API integrations and performance optimization across high-traffic academic platform.",
      highlights: [
        "Complex API architecture",
        "Performance optimization at scale",
        "Enhanced user experience",
        "Integrated multiple third-party systems"
      ]
    },
    {
      client: "National Kidney Foundation",
      platform: "Complete Site Redesign",
      scope: "Major website redesign to drive education, support, and donation engagement for national nonprofit organization.",
      highlights: [
        "Enhanced user experience for critical health information",
        "Improved donation pathways and conversion",
        "Accessible design for diverse audiences",
        "Mission-driven platform supporting kidney disease awareness"
      ]
    }
  ];

  return (
    <section id="enterprise-projects" className="bg-lightgray py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Enterprise Digital Transformation
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-4xl mx-auto mb-8 font-body">
            I've directed multi-million-dollar enterprise programs for Fortune 500 clients, managing scope, budgets, and global teams across complex technical migrations and platform consolidations.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 text-secondary text-sm md:text-base font-body">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-semibold">12+ Years</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="font-semibold">100+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="font-semibold">Fortune 500 Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="font-semibold">Global Teams</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Client Name */}
              <div className="mb-4">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {project.client}
                </h3>
                <div className="inline-block bg-highlight text-accent px-3 py-1 rounded-full text-xs font-semibold font-body">
                  {project.platform}
                </div>
              </div>

              {/* Scope */}
              <p className="text-secondary text-sm mb-4 leading-relaxed font-body">
                {project.scope}
              </p>

              {/* Highlights */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-accent" />
                  <h4 className="font-heading font-bold text-navy text-sm">Key Highlights</h4>
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-body">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span className="text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary italic font-body">
            Selected from 100+ enterprise projects delivered
          </p>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseProjects;
