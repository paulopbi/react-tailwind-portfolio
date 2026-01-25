import Navbar from '@/layout/Navbar'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}

export default App
