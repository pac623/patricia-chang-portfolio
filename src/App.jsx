import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import ToolsTechnologies from './components/sections/ToolsTechnologies';
import WhatIDo from './components/sections/WhatIDo';
import AIInnovation from './components/sections/AIInnovation'
import Transformations from './components/sections/Transformations'
import EnterpriseProjects from './components/sections/EnterpriseProjects'
import ThoughtLeadership from './components/sections/ThoughtLeadership'
import About from './components/sections/About'
import FunFacts from './components/sections/FunFacts'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* What I do Section */}
       <WhatIDo />

       {/* Tools & Tech Section */}
       <ToolsTechnologies />

        {/* AI Innovation Section */}
        <AIInnovation />

        {/* Transformations Section */}
        <Transformations />

        {/* Enterprise Projects Section */}
        <EnterpriseProjects />

        {/* Thought Leadership Section */}
        <ThoughtLeadership />

        {/* About Section */}
        <About />

        {/* Fun Facts Section */}
        <FunFacts />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}

export default App
