import { FloatingHeader } from './components/ui/floating-header'
import Hero from './components/Hero'
import Headline from './components/Headline'
import Prose from './components/Prose'
import Features from './components/Features'
import SignUp from './components/SignUp'
import FloatingCta from './components/FloatingCta'
import Footer from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'
import 'lenis/dist/lenis.css'

function App() {
  // Initialise Lenis smooth-scroll
  useSmoothScroll()

  return (
    <>
      <FloatingHeader />
      <main className="relative z-5 flex flex-1 flex-col overflow-clip">
        <div className="flex-1 overflow-clip">
          {/* Hero Section */}
          <Hero />

          {/* Headline Section */}
          <Headline />

          {/* Prose Section */}
          <Prose />

          {/* Features Section */}
          <Features />

          {/* Sign Up Section */}
          <SignUp />
        </div>
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
