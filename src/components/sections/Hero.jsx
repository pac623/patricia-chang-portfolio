function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '12+ Years', label: 'Executive Leadership' },
    { value: 'Fortune 500', label: 'Client Portfolio' },
    { value: 'Global Teams', label: '19+ Countries' },
    { value: '6+', label: 'Certifications' },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-[85vh] bg-white flex flex-col items-center justify-center px-6 py-20 pt-28"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6 leading-tight">
          I bring structure to chaos, strategy to innovation, and execution to vision.
        </h1>

        <p className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-body">
          Enterprise program leadership meets hands-on innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('ai-innovation')}
            className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg 
                     transition-all duration-300 hover:scale-105 hover:shadow-lg
                     w-full sm:w-auto"
          >
            See What I've Built
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-navy/20 text-navy px-8 py-4 rounded-lg font-heading font-semibold text-lg 
                     transition-all duration-300 hover:scale-105 hover:border-accent hover:text-accent
                     w-full sm:w-auto"
          >
            Let's Connect
          </button>
        </div>

        <div className="border-t border-gray-200 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-heading font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary font-body mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
