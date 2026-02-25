import {
  Dog,
  Music,
  Zap,
  Tent,
  Dumbbell,
  ChefHat,
  BookOpen,
  Sparkles,
  Plane,
  Building2
} from 'lucide-react';

const funFacts = [
  { icon: Dog, text: "Proud Dog Mom to Riley" },
  { icon: Music, text: "Plays drums" },
  { icon: Zap, text: "Fueled by energy drinks" },
  { icon: Tent, text: "Wilderness glamper" },
  { icon: Dumbbell, text: "Fitness & Nutrition nerd" },
  { icon: ChefHat, text: "Cooking aficionado" },
  { icon: BookOpen, text: "Always reading something" },
  { icon: Sparkles, text: "Meditates daily" },
  { icon: Plane, text: "Ready to travel at anytime" },
  { icon: Building2, text: "Design and architecture geek" },
];

function FunFacts() {
  return (
    <section className="bg-lightgray pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-12 text-center">
          The Human Behind the Work
        </h2>

        {/* Profile Photo */}
        <div
          style={{
            width: '320px',
            height: '240px',
            borderRadius: '16px',
            backgroundImage: 'url(/patricia.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '0 auto 32px auto',
            border: '4px solid white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
          role="img"
          aria-label="Patricia Chang"
        />

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {funFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                {/* Text */}
                <span className="font-body text-secondary">
                  {fact.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
