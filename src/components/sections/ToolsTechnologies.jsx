import { Bot, ClipboardList, Users, Briefcase, Code, GitBranch } from 'lucide-react';

function ToolsTechnologies() {
  const categories = [
    {
      icon: Bot,
      title: "AI & Machine Learning",
      subcategories: [
        { label: "Core", items: ["LLMs", "Embeddings", "Fine-tuning", "RAG", "Vector Databases"] },
        { label: "Agentic AI", items: ["Multi-Agent Systems", "Orchestration", "MCP"] },
        { label: "Frameworks", items: ["CrewAI", "LangChain"] },
        { label: "Tools", items: ["Claude Code", "Cline", "Claude Cowork"] },
        { label: "Practice", items: ["Advanced Prompt Engineering", "AI Prototyping"] }
      ]
    },
    {
      icon: ClipboardList,
      title: "Project & Portfolio Management",
      items: [
        "Jira Software", "Jira Align", "Advanced Roadmaps", "Confluence", 
        "Asana + Asana Intelligence", "Monday.com + Monday AI", "Smartsheet", 
        "MS Project", "Wrike", "Omni", "Notion + Notion AI", 
        "ClickUp + ClickUp AI", "Basecamp", "Trello", "Airtable", "Teamwork"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      items: ["Slack + Slack AI", "Miro + Miro AI", "Microsoft Teams", "Zoom + AI Companion"]
    },
    {
      icon: Briefcase,
      title: "Productivity Suites",
      items: ["Microsoft 365 + Copilot", "Google Workspace + Gemini", "Apple iWork"]
    },
    {
      icon: Code,
      title: "Development & Data",
      items: ["Python", "SQL", "React", "Git / GitHub"]
    },
    {
      icon: GitBranch,
      title: "Methodologies",
      items: ["Agile", "Scrum", "Kanban", "Waterfall", "Hybrid"]
    }
  ];

  return (
    <section id="tools" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg md:text-xl text-secondary font-body">
            What I work with every day.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-lightgray rounded-xl p-6 border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy">
                    {category.title}
                  </h3>
                </div>

                {/* Items */}
                {category.subcategories ? (
                  <div className="space-y-3">
                    {category.subcategories.map((sub, subIndex) => (
                      <div key={subIndex}>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          {sub.label}:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {sub.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="px-3 py-1 bg-white text-secondary text-sm rounded-full border border-gray-200 font-body"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-white text-secondary text-sm rounded-full border border-gray-200 font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ToolsTechnologies;
