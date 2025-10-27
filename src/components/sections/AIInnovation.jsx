import { useState } from 'react';
import { Lightbulb, Code, TrendingUp, ArrowRight, AlertCircle, BookOpen, Users, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

function AIInnovation() {
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

  const toggleCaseStudy = (study) => {
    setOpenCaseStudy(openCaseStudy === study ? null : study);
  };

  return (
    <section id="ai-innovation" className="bg-lightmint py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            AI & Innovation Leadership
          </h2>
          <p className="text-lg md:text-xl text-navy/80 leading-relaxed">
            In 2024-2025, I championed Tag1's AI enablement initiative, partnering with our CEO to design and deliver workshops that accelerated AI adoption across the organization. The goal: ensure every team member understood how to leverage AI strategically, not just technically.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: PMO Intelligence Dashboard */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8">
            <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                PMO Intelligence Dashboard
              </h3>
              <p className="text-secondary italic text-lg">
                I'm Not a Developer. I Built This Anyway.
              </p>
            </div>

            {/* The Gap */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <Lightbulb className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <h4 className="font-semibold text-navy text-lg">The Gap</h4>
              </div>
              <p className="text-navy/70 ml-8">
                PMs spending 5+ hours/week manually synthesizing data across Jira, Clockify, and Runn.
              </p>
            </div>

            {/* What I Built */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <Code className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <h4 className="font-semibold text-navy text-lg">What I Built</h4>
              </div>
              <p className="text-navy/70 ml-8">
                AI-powered portfolio intelligence dashboard with automated risk detection in 2 weeks.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="mb-6 bg-accent/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-accent w-5 h-5" />
                <h4 className="font-semibold text-navy text-lg">Impact</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">99%</div>
                  <div className="text-sm text-navy/70">reduction in reporting time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">99.96%</div>
                  <div className="text-sm text-navy/70">cost reduction vs. traditional dev</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-orange mb-1">Proactive</div>
                  <div className="text-sm text-navy/70">compound risk detection</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-orange mb-1">2 weeks</div>
                  <div className="text-sm text-navy/70">built by a PM</div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-auto mb-6">
              <h4 className="font-semibold text-navy text-sm mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['Claude Sonnet 4.5', 'Cline', 'React', 'Vite', 'Recharts', 'Netlify'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-lightmint text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href="https://tag1-pmo-dashboard.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center 
                         transition-all duration-300 hover:bg-accent hover:shadow-lg
                         flex items-center justify-center gap-2"
              >
                View Live Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => toggleCaseStudy('pmo')}
                className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold 
                         transition-all duration-300 hover:bg-primary/5
                         flex items-center justify-center gap-2"
              >
                {openCaseStudy === 'pmo' ? (
                  <>Close Case Study <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read Case Study <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
            </div>
          </div>

          {/* Card 2: Sales Intelligence Dashboard */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8">
            <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                Sales Intelligence Dashboard
              </h3>
              <p className="text-secondary italic text-lg">
                End-to-End Sales Automation in 3 Weeks
              </p>
            </div>

            {/* The Gap */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <Lightbulb className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <h4 className="font-semibold text-navy text-lg">The Gap</h4>
              </div>
              <p className="text-navy/70 ml-8">
                Manual spreadsheet-based sales workflow from lead qualification through SOW generation causing errors and delays.
              </p>
            </div>

            {/* What I Built */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <Code className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <h4 className="font-semibold text-navy text-lg">What I Built</h4>
              </div>
              <p className="text-navy/70 ml-8">
                Complete sales intelligence system with AI fit scoring, drag-and-drop pipeline, automated SOW generation, and CRM integration.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="mb-6 bg-accent/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-accent w-5 h-5" />
                <h4 className="font-semibold text-navy text-lg">Impact</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">50%</div>
                  <div className="text-sm text-navy/70">reduction in scope creep</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">40%</div>
                  <div className="text-sm text-navy/70">improvement in estimate accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">30%</div>
                  <div className="text-sm text-navy/70">faster SOW generation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">25%</div>
                  <div className="text-sm text-navy/70">faster estimate creation</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xl font-bold text-orange mb-1">Unified View</div>
                  <div className="text-sm text-navy/70">replacing 3+ tools</div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-auto mb-6">
              <h4 className="font-semibold text-navy text-sm mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js 15', 'TypeScript', 'Tailwind', 'Claude', 'Cline', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-lightmint text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href="https://tag1-sales-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center 
                         transition-all duration-300 hover:bg-primary/90 hover:shadow-lg
                         flex items-center justify-center gap-2"
              >
                View Live Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => toggleCaseStudy('sales')}
                className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold 
                         transition-all duration-300 hover:bg-primary/5
                         flex items-center justify-center gap-2"
              >
                {openCaseStudy === 'sales' ? (
                  <>Close Case Study <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read Case Study <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* PMO Dashboard Case Study Expandable */}
        {openCaseStudy === 'pmo' && (
          <div className="mt-8 bg-white rounded-xl shadow-xl p-8 md:p-12 animate-fadeIn">
            <div className="max-w-5xl mx-auto space-y-10">
              {/* Section 1: The Real Problem */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">The Real Problem</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p>
                    As a Senior PM managing multiple simultaneous client projects, I was drowning in data fragmentation. Every week meant 5+ hours manually compiling reports by:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Pulling sprint data from Jira</li>
                    <li>Cross-referencing budget burn in Clockify</li>
                    <li>Checking team allocations in Runn</li>
                    <li>Hunting through Slack for blockers</li>
                    <li>Synthesizing everything into executive summaries</li>
                  </ul>
                  <p>
                    The real pain wasn't just time—it was the cognitive load of holding multiple projects' context to identify compound risks. When Project Beta's budget hit 95% while the tech lead was overallocated AND taking PTO AND a critical release was at-risk, I'd only catch that pattern if looking at all systems simultaneously.
                  </p>
                </div>
              </div>

              {/* Section 2: Why This Matters */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">Why This Matters</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p>
                    Project managers are often seen as "meeting shepherds" or "documentation junkies"—not builders. This perception creates a ceiling: if you're not a developer, you're constrained to using tools others build for you. But AI demolishes that ceiling.
                  </p>
                  <p className="font-semibold text-navy">
                    The question: Can a PM with average technical literacy use AI to build strategic software that amplifies their expertise?
                  </p>
                  <p className="font-semibold text-accent text-lg">
                    The answer: A resounding yes.
                  </p>
                </div>
              </div>

              {/* Section 3: How I Built It */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">How I Built It</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p className="font-semibold text-navy">The AI Stack:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Claude Sonnet 4.5 for strategic planning and architecture</li>
                    <li>Cline for code generation and debugging</li>
                    <li>React + Vite + Recharts + Tailwind CSS</li>
                    <li>Netlify for hosting</li>
                  </ul>
                  
                  <p className="font-semibold text-navy mt-6">The Workflow:</p>
                  <p>
                    I treated Claude like a senior architect and Cline like a junior developer who executes perfectly when given clear instructions.
                  </p>
                  
                  <div className="bg-cream rounded-lg p-6 my-4">
                    <p className="font-semibold text-navy mb-2">Phase 1: Strategic Planning with Claude (Days 1-2)</p>
                    <p>
                      I explained my role, the scattered data problem, and my vision. Claude asked clarifying questions like "What constitutes a risk in your workflow?" and helped me define 6 core features and 13 specific risk detection patterns based on my PM expertise.
                    </p>
                    <p className="mt-2 italic text-primary">
                      Key Insight: Claude translated my domain knowledge ("what makes a project at risk") into technical specifications ("if budget &gt;90% AND timeline remaining &gt;10% → HIGH risk").
                    </p>
                  </div>

                  <div className="bg-cream rounded-lg p-6">
                    <p className="font-semibold text-navy mb-2">Phase 2: Implementation with Cline (Days 3-5 + Week 2)</p>
                    <p>
                      I gave Cline high-level feature requests, let it make technical decisions, and reviewed each component before moving to the next.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: What I Learned */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">What I Learned</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">1. AI amplifies domain expertise, not coding skill</p>
                      <p>My value was knowing what "at risk" means in PM context—AI translated that into working software.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">2. Mock-first architecture is a superpower</p>
                      <p>Building with JSON files first meant zero API dependencies, instant iteration, and easy swap to real data later.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">3. Brand compliance matters</p>
                      <p>Using Tag1's exact color palette made this feel professional, not like a prototype.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">4. Non-developers can build strategic software</p>
                      <p>I didn't "learn to code"—I learned to translate business requirements into prompts. That's a skill PMs already have.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Client Applications */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">Client Applications</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p>
                    This isn't just a PM dashboard—it's a pattern for building custom business intelligence at 1% of traditional cost.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-6">
                    <p className="font-semibold text-navy mb-3">Immediate Use Cases:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Client project visibility dashboards showing real-time health</li>
                      <li>Internal operations tools that synthesize fragmented data</li>
                      <li>Portfolio management for agencies with multiple clients</li>
                      <li>Industry-specific applications (healthcare, manufacturing, financial services)</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    Traditional BI software costs $70-100/user/month and requires data engineering teams. This approach:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Costs $20/month (AI subscription)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Timeline: Weeks instead of quarters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Built exactly for the workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Updates via prompt, not developer sprints</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sales Dashboard Case Study Expandable */}
        {openCaseStudy === 'sales' && (
          <div className="mt-8 bg-white rounded-xl shadow-xl p-8 md:p-12 animate-fadeIn">
            <div className="max-w-5xl mx-auto space-y-10">
              {/* Section 1: The Real Problem */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">The Real Problem</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p>
                    Tag1's sales process relied on manual spreadsheets for everything from lead qualification to SOW generation. Account Managers were:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Manually researching companies for fit assessment</li>
                    <li>Building estimates in Excel with no standardization</li>
                    <li>Creating SOWs in Word docs from scratch</li>
                    <li>Tracking deals across 3 different systems (Monday.com, HubSpot, internal spreadsheets)</li>
                    <li>Missing deals that fell through the cracks</li>
                    <li>Spending days on proposal creation</li>
                  </ul>
                  <p className="font-semibold text-navy mt-4">
                    The result? Estimate inaccuracy of ±20%, inconsistent SOWs, poor deal visibility, and scope creep on projects.
                  </p>
                </div>
              </div>

              {/* Section 2: What I Built */}
              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">What I Built</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p className="font-semibold text-navy">
                    A complete end-to-end sales intelligence system with 5 integrated modules:
                  </p>
                  
                  <div className="space-y-4 mt-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">1. Intelligence Report</p>
                      <p>AI-powered company analysis with fit scoring (0-100), technology stack detection, budget estimation, and decision-maker identification.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">2. Estimation Tools</p>
                      <p>Quick ballpark calculator + detailed Excel-like estimator with hours ranges, custom roles, rate overrides, and realistic timeline calculations.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">3. Technical Review Workflow</p>
                      <p>Collaborative review process where technical leads can adjust estimates before client sees them, with full change tracking.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">4. SOW Generation</p>
                      <p>Automated Statement of Work creation with smart templates, BizDev approval workflow, and .docx export.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-navy">5. Pipeline Management</p>
                      <p>Unified drag-and-drop Kanban board aggregating deals from Monday.com, HubSpot, and internal estimates. Complete client journey tracking with ownership management.</p>
                    </div>
                  </div>

                  <p className="mt-4 font-semibold text-primary">
                    All built in 3 weeks using Next.js, TypeScript, Claude, and Cline.
                  </p>
                </div>
              </div>

              {/* Section 3: The Impact */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">The Impact</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <div className="bg-accent/5 rounded-lg p-6">
                    <p className="font-semibold text-navy mb-3">Measurable Outcomes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>50% reduction in scope creep</strong> (technical review catches gaps early)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>40% improvement in estimate accuracy</strong> (±20% → ±10%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>30% faster SOW generation</strong> (automated vs manual Word creation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>25% faster estimate creation with review</strong> (vs multiple back-and-forths)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>50% faster SOW approval cycle</strong> (streamlined BizDev review)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Unified view</strong> of entire sales process replacing 3+ disconnected tools</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6">
                    <p className="font-semibold text-navy mb-3">Strategic Outcomes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Sales learns from technical adjustments (knowledge sharing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Prevents underpriced work (profitability protection)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Never lose deals to poor tracking (complete visibility)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Consistent, professional client documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>CRM integration without replacing existing tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4: Technical Architecture */}
              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">Technical Architecture</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p className="font-semibold text-navy">Built for scalability from day one:</p>
                  
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="font-semibold text-navy mb-2">Prototype Phase (localStorage):</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm font-mono">
                      <li>Next.js 15 App Router with TypeScript</li>
                      <li>Tailwind CSS for executive-level design</li>
                      <li>Recharts for data visualization</li>
                      <li>@dnd-kit for drag-and-drop pipeline</li>
                      <li>docx library for SOW generation</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-navy mb-2">Production-Ready Design:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm font-mono">
                      <li>Supabase (PostgreSQL) for database</li>
                      <li>Clerk for authentication</li>
                      <li>Google Drive API for document storage</li>
                      <li>Monday.com & HubSpot bidirectional sync</li>
                      <li>Runn.io API for resource management</li>
                      <li>DocuSign for SOW signatures</li>
                    </ul>
                  </div>

                  <p className="mt-4 italic text-primary">
                    The mock-first approach meant building without API dependencies, then swapping to production integrations later. Every data structure was designed with real integration in mind.
                  </p>
                </div>
              </div>

              {/* Section 5: Why This Pattern Scales */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-accent w-6 h-6" />
                  <h3 className="text-2xl font-bold text-navy">Why This Pattern Scales</h3>
                </div>
                <div className="text-navy/80 space-y-4 leading-relaxed">
                  <p>
                    This isn't just a sales tool—it's proof that operational roles can build enterprise software:
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-6">
                    <p className="font-semibold text-navy mb-3">Replicable for:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Marketing agencies tracking campaign performance</li>
                      <li>Consulting firms managing client portfolios</li>
                      <li>Professional services with complex estimating needs</li>
                      <li>Any organization with fragmented sales data</li>
                    </ul>
                  </div>

                  <div className="bg-accent/5 rounded-lg p-6 mt-4">
                    <p className="font-semibold text-navy mb-2">The ROI story:</p>
                    <div className="space-y-2">
                      <p><strong>Traditional agency cost:</strong> $150K-250K + 6 months</p>
                      <p><strong>This approach:</strong> $20/month AI tools + 3 weeks + operational expertise</p>
                    </div>
                  </div>

                  <p className="mt-4 font-semibold text-accent text-lg">
                    The real innovation? Translating 12+ years of operational knowledge into prompts that AI turns into production-grade software.
                  </p>
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
