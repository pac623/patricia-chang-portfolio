import { useState } from 'react';
import { Lightbulb, Code, TrendingUp, ArrowRight, AlertCircle, BookOpen, Briefcase, ChevronDown, ChevronUp, Bot, Shield, Layers } from 'lucide-react';

function AIInnovation() {
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

  const toggleCaseStudy = (study) => {
    setOpenCaseStudy(openCaseStudy === study ? null : study);
  };

  return (
    <section id="ai-innovation" className="bg-lightgray py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Things I've Built
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed font-body mb-4">
            I'm a builder at heart: always prototyping, experimenting, and turning ideas into working tools and automation that makes work easier. This section will keep growing.
          </p>
        </div>

        {/* Project Cards Grid - 3 columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: AI Code Review Crew */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-100">
            <div className="flex flex-col h-full">
              {/* NEW Badge */}
              <div className="mb-4">
                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full font-heading">
                  NEW
                </span>
              </div>
              
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-2">
                  AI Code Review Crew
                </h3>
                <p className="text-secondary italic font-body">
                  Multi-Agent Agentic AI System
                </p>
              </div>

              {/* The Gap */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <Lightbulb className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <h4 className="font-heading font-semibold text-navy text-sm">The Gap</h4>
                </div>
                <p className="text-secondary text-sm ml-6 font-body">
                  Code reviews are time-consuming and inconsistent. Different reviewers catch different issues.
                </p>
              </div>

              {/* What I Built */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <Code className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <h4 className="font-heading font-semibold text-navy text-sm">What I Built</h4>
                </div>
                <p className="text-secondary text-sm ml-6 font-body">
                  5 specialized AI agents that collaborate to review code for quality, security, accessibility, and infrastructure.
                </p>
              </div>

              {/* Agent Icons */}
              <div className="mb-4 bg-highlight rounded-lg p-4">
                <p className="text-xs font-heading font-semibold text-navy mb-2">The 5 Agents:</p>
                <div className="grid grid-cols-2 gap-2 text-xs font-body text-secondary">
                  <div className="flex items-center gap-1">
                    <Code className="w-3 h-3 text-accent" />
                    <span>Code Quality</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-accent" />
                    <span>Security</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers className="w-3 h-3 text-accent" />
                    <span>Frontend/A11y</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bot className="w-3 h-3 text-accent" />
                    <span>Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-1 col-span-2">
                    <TrendingUp className="w-3 h-3 text-accent" />
                    <span>Tech Lead (Synthesis)</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {['CrewAI', 'Claude', 'Python', 'Streamlit'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-lightgray text-primary text-xs rounded-full font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="mt-auto">
                <a
                  href="https://agentic-ai-code-reviews.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent text-white px-4 py-3 rounded-lg font-heading font-semibold text-sm text-center 
                           transition-all duration-300 hover:shadow-lg
                           flex items-center justify-center gap-2"
                >
                  Try Live Demo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: PMO Intelligence Dashboard */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-100">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="mb-4 mt-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-2">
                  PMO Intelligence Dashboard
                </h3>
                <p className="text-secondary italic font-body">
                  AI-Powered Portfolio Management
                </p>
              </div>

              {/* The Gap */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <Lightbulb className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <h4 className="font-heading font-semibold text-navy text-sm">The Gap</h4>
                </div>
                <p className="text-secondary text-sm ml-6 font-body">
                  PMs spending 5+ hours/week manually synthesizing data across Jira, Clockify, and Runn.
                </p>
              </div>

              {/* What I Built */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <Code className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <h4 className="font-heading font-semibold text-navy text-sm">What I Built</h4>
                </div>
                <p className="text-secondary text-sm ml-6 font-body">
                  AI-powered dashboard with automated risk detection. Built in 2 weeks.
                </p>
              </div>

              {/* Impact */}
              <div className="mb-4 bg-highlight rounded-lg p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-lg font-heading font-bold text-accent">99%</div>
                    <div className="text-xs text-secondary font-body">less reporting time</div>
                  </div>
                  <div>
                    <div className="text-lg font-heading font-bold text-accent">2 weeks</div>
                    <div className="text-xs text-secondary font-body">built by a PM</div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {['React', 'Claude', 'Vite', 'Recharts'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-lightgray text-primary text-xs rounded-full font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href="https://tag1-pmo-dashboard.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg font-heading font-semibold text-sm text-center 
                           transition-all duration-300 hover:shadow-lg
                           flex items-center justify-center gap-2"
                >
                  View Demo <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => toggleCaseStudy('pmo')}
                  className="w-full border border-primary text-primary px-4 py-2 rounded-lg font-heading font-semibold text-sm
                           transition-all duration-300 hover:bg-primary/5
                           flex items-center justify-center gap-1"
                >
                  {openCaseStudy === 'pmo' ? (
                    <>Case Study <ChevronUp className="w-3 h-3" /></>
                  ) : (
                    <>Case Study <ChevronDown className="w-3 h-3" /></>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Sales Intelligence Dashboard */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-100">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="mb-4 mt-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-2">
                  Sales Intelligence Dashboard
                </h3>
                <p className="text-secondary italic font-body">
                  End-to-End Sales Automation
                </p>
              </div>

              {/* The Gap */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <Lightbulb className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <h4 className="font-heading font-semibold text-navy text-sm">The Gap</h4>
                </div>
                <p className="text-secondary text-sm ml-6 font-body">
                  Manual spreadsheet workflows from lead qualification through SOW generation.
                </p>
              </div>

              {/* What I Built */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <Code className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <h4 className="font-heading font-semibold text-navy text-sm">What I Built</h4>
                </div>
                <p className="text-secondary text-sm ml-6 font-body">
                  Complete sales platform: lead scoring, estimates, technical review, SOW generation, pipeline.
                </p>
              </div>

              {/* Impact */}
              <div className="mb-4 bg-highlight rounded-lg p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-lg font-heading font-bold text-accent">50%</div>
                    <div className="text-xs text-secondary font-body">less scope creep</div>
                  </div>
                  <div>
                    <div className="text-lg font-heading font-bold text-accent">3 weeks</div>
                    <div className="text-xs text-secondary font-body">built by a PM</div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {['Next.js', 'TypeScript', 'Claude', 'Tailwind'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-lightgray text-primary text-xs rounded-full font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href="https://tag1-sales-dashboard.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg font-heading font-semibold text-sm text-center 
                           transition-all duration-300 hover:shadow-lg
                           flex items-center justify-center gap-2"
                >
                  View Demo <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => toggleCaseStudy('sales')}
                  className="w-full border border-primary text-primary px-4 py-2 rounded-lg font-heading font-semibold text-sm
                           transition-all duration-300 hover:bg-primary/5
                           flex items-center justify-center gap-1"
                >
                  {openCaseStudy === 'sales' ? (
                    <>Case Study <ChevronUp className="w-3 h-3" /></>
                  ) : (
                    <>Case Study <ChevronDown className="w-3 h-3" /></>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PMO Case Study Expandable */}
        {openCaseStudy === 'pmo' && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8 animate-fadeIn border border-gray-100">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center border-b border-gray-200 pb-6">
                <h3 className="text-3xl font-heading font-bold text-navy mb-2">PMO Intelligence Dashboard</h3>
                <p className="text-secondary font-body">Full Case Study</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-heading font-bold text-navy">The Problem</h3>
                </div>
                <div className="text-secondary space-y-4 leading-relaxed font-body">
                  <p>
                    At Tag1 Consulting, Project Managers were spending <strong className="text-navy">5+ hours weekly</strong> manually pulling data from multiple systems: Jira for sprint progress, Clockify for time tracking, Runn for resource planning, then synthesizing it into status reports.
                  </p>
                  <p>
                    The bigger issue: <strong className="text-navy">compound risks were invisible</strong>. A project might have a minor budget variance AND a small timeline slip AND a resource gap. Each "yellow" individually, but together they spelled trouble.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-heading font-bold text-navy">The Solution</h3>
                </div>
                <div className="text-secondary space-y-4 leading-relaxed font-body">
                  <p>I built an AI-powered portfolio intelligence dashboard that consolidates data and surfaces compound risks automatically.</p>
                  <div className="bg-lightgray rounded-lg p-6">
                    <p className="font-heading font-semibold text-navy mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong className="text-navy">Unified Dashboard:</strong> Portfolio-wide health at a glance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong className="text-navy">AI Risk Detection:</strong> Pattern recognition across budget, timeline, and resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong className="text-navy">Compound Risk Alerts:</strong> Flags when multiple "yellow" indicators combine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-heading font-bold text-navy">Why This Matters</h3>
                </div>
                <p className="text-secondary font-body leading-relaxed">
                  This isn't a developer building a tool. It's an operational leader who identified a gap, designed a solution, and used AI to build it in 2 weeks, at minimal cost.
                </p>
                <p className="font-heading font-semibold text-accent text-lg mt-4">
                  The real innovation? Translating 12+ years of operational knowledge into prompts that AI turns into production-grade software.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Sales Case Study Expandable */}
        {openCaseStudy === 'sales' && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8 animate-fadeIn border border-gray-100">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center border-b border-gray-200 pb-6">
                <h3 className="text-3xl font-heading font-bold text-navy mb-2">Sales Intelligence Dashboard</h3>
                <p className="text-secondary font-body">Full Case Study</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-heading font-bold text-navy">The Problem</h3>
                </div>
                <div className="text-secondary space-y-4 leading-relaxed font-body">
                  <p>Tag1's sales process was fragmented across multiple tools and manual workflows:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Lead qualification in inconsistent spreadsheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>No technical review before client delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>SOW generation was copy-paste from templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Pipeline visibility required 3+ separate tools</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-heading font-bold text-navy">The Solution</h3>
                </div>
                <div className="text-secondary space-y-4 leading-relaxed font-body">
                  <p>I built a complete sales intelligence platform covering the entire workflow:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-lightgray rounded-lg p-4">
                      <p className="font-heading font-semibold text-navy text-sm">Lead Qualification</p>
                      <p className="text-sm">Structured scoring replacing gut-feel</p>
                    </div>
                    <div className="bg-lightgray rounded-lg p-4">
                      <p className="font-heading font-semibold text-navy text-sm">Estimate Builder</p>
                      <p className="text-sm">Guided workflow with margin calculations</p>
                    </div>
                    <div className="bg-lightgray rounded-lg p-4">
                      <p className="font-heading font-semibold text-navy text-sm">Technical Review</p>
                      <p className="text-sm">Catches scope gaps before delivery</p>
                    </div>
                    <div className="bg-lightgray rounded-lg p-4">
                      <p className="font-heading font-semibold text-navy text-sm">SOW Generator</p>
                      <p className="text-sm">One-click professional documents</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-heading font-bold text-navy">The Impact</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 font-body">
                  <div className="bg-highlight rounded-lg p-4 text-center">
                    <p className="text-2xl font-heading font-bold text-accent">50%</p>
                    <p className="text-sm text-secondary">reduction in scope creep</p>
                  </div>
                  <div className="bg-highlight rounded-lg p-4 text-center">
                    <p className="text-2xl font-heading font-bold text-accent">40%</p>
                    <p className="text-sm text-secondary">better estimate accuracy</p>
                  </div>
                  <div className="bg-highlight rounded-lg p-4 text-center">
                    <p className="text-2xl font-heading font-bold text-accent">30%</p>
                    <p className="text-sm text-secondary">faster SOW generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AIInnovation;
