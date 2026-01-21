import { Users, FileText, Lightbulb } from 'lucide-react';

function ThoughtLeadership() {
  const achievements = [
    {
      icon: Users,
      title: "VR/AR Association",
      role: "Chapter Lead for Training & Education",
      description: "Facilitated monthly discussions on how XR transforms learning and workforce development. Shaped best practices for immersive technology in organizational training."
    },
    {
      icon: FileText,
      title: "ARPost.co - Published Research",
      role: "Published Researcher & Analyst",
      description: "Published research and analysis on XR market opportunities. Breakthrough coverage: VR exposure therapy for veterans with PTSD—one of the publication's most-engaged pieces, driving industry awareness."
    },
    {
      icon: Lightbulb,
      title: "Industry Insights & Advisory",
      role: "Strategic XR Advisor",
      description: "Identified XR as a $1B+ industry opportunity. Advised startups and enterprises on strategic XR integration. Translated emerging tech trends into actionable business strategy."
    }
  ];

  return (
    <section id="thought-leadership" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Industry Voice & Thought Leadership
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-4xl mx-auto font-body">
            Beyond delivery, I've shaped industry conversations around emerging technology adoption and organizational transformation.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-accent border border-gray-100"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-accent font-semibold mb-4 font-body text-sm">
                  {achievement.role}
                </p>
                <p className="text-secondary leading-relaxed font-body">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ThoughtLeadership;
