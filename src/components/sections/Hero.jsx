function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-navy to-primary flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Strategic Operations & Innovation Leader
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-lightmint mb-8 font-medium">
          Transforming Operations Through AI, Systems Thinking, and Team Leadership
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          I see what's broken in organizations and build the systems, teams, and tools to fix it—whether that's designing AI-powered intelligence dashboards, scaling regional training programs, or pioneering remote-first operational models.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <button
            onClick={() => scrollToSection('ai-innovation')}
            className="bg-accent text-navy px-8 py-4 rounded-lg font-semibold text-lg 
                     transition-all duration-300 hover:scale-105 hover:bg-primary 
                     shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            View AI Innovation
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => scrollToSection('transformations')}
            className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg 
                     transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-navy 
                     w-full sm:w-auto"
          >
            See My Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
