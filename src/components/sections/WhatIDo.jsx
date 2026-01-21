import { Briefcase, ClipboardList, Package, Bot, Cog, Users } from 'lucide-react';

function WhatIDo() {
  const pillars = [
    {
      icon: Briefcase,
      title: "Program & Portfolio Leadership",
      description: "Enterprise programs, governance, risk management, budget oversight, global teams, and executive alignment."
    },
    {
      icon: ClipboardList,
      title: "Project Management & Operations",
      description: "Full lifecycle delivery, Agile/Scrum/Hybrid methodologies, PMO standards, process optimization, and organizational efficiency."
    },
    {
      icon: Package,
      title: "Product Management",
      description: "Product strategy, roadmap development, stakeholder alignment, and customer experience design."
    },
    {
      icon: Bot,
      title: "AI Strategy & Enablement",
      description: "Workshops, adoption strategy, ethical AI implementation, training programs, and client enablement."
    },
    {
      icon: Cog,
      title: "Process & Automation",
      description: "Building automation that makes work easier, streamlining workflows, and creating systems that scale."
    },
    {
      icon: Users,
      title: "Team Building & Culture",
      description: "Mentorship, developing high-performing teams, AI Product Pods, and advocating for positive work culture."
    }
  ];

  return (
    <section id="what-i-do" className="bg-lightgray py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            What I Do
          </h2>
          <p className="text-lg md:text-xl text-secondary font-body">
            I do a lot. Here's the short version:
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  {pillar.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
