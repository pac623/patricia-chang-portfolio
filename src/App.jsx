import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import AIInnovation from './components/sections/AIInnovation'
import Transformations from './components/sections/Transformations'
import EnterpriseProjects from './components/sections/EnterpriseProjects'
import ThoughtLeadership from './components/sections/ThoughtLeadership'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

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

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}

export default App
