import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pac623@hotmail.com',
      link: 'mailto:pac623@hotmail.com',
      external: false
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/patriciachang23',
      link: 'https://www.linkedin.com/in/patriciachang23',
      external: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '831-747-4893',
      link: 'tel:8317474893',
      external: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'North Las Vegas, Nevada (Remote Available)',
      link: null,
      external: false
    }
  ];

  return (
    <section id="contact" className="bg-navy py-20 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto">
          Open to conversations about operations, innovation, and organizational transformation—particularly complex operational challenges, strategic initiatives, and opportunities to build high-performing teams.
        </p>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const content = (
              <>
                <Icon className="w-6 h-6 text-accent mb-3 mx-auto" />
                <p className="text-sm text-white/60 mb-1">{method.label}</p>
                <p className="text-accent font-medium hover:text-primary transition-colors">{method.value}</p>
              </>
            );

            if (method.link) {
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-accent/20 hover:border-accent"
                >
                  {content}
                </a>
              );
            } else {
              return (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-6 border border-accent/20"
                >
                  {content}
                </div>
              );
            }
          })}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © 2025 Patricia Chang. Portfolio built with AI assistance—because operational leaders build solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
