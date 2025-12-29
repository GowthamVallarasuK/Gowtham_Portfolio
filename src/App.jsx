import { useState, useEffect, useCallback } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contact from "./components/Contact"
import "./App.css"

// Throttle function to improve scroll performance
const throttle = (func, delay) => {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Background decorations component to improve maintainability
const BackgroundDecorations = () => (
  <>
    {/* Background Wave Pattern */}
    <div className="absolute inset-0 opacity-30">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path d="M0,200 C300,100 600,300 900,200 C1050,150 1200,250 1200,200 L1200,0 L0,0 Z" fill="url(#gradient1)" />
        <path d="M0,400 C300,350 600,450 900,400 C1050,375 1200,425 1200,400 L1200,200 L0,200 Z" fill="url(#gradient2)" />
        <path d="M0,600 C200,550 400,650 600,600 C800,550 1000,650 1200,600 L1200,400 L0,400 Z" fill="url(#gradient3)" />
        <path d="M0,800 C150,750 350,800 500,780 C700,760 900,800 1200,780 L1200,600 L0,600 Z" fill="url(#gradient4)" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.04" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    {/* Floating Particles */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-violet-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-purple-500 rounded-full opacity-70 animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-violet-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-violet-500 rounded-full opacity-50 animate-ping" style={{animationDelay: '5s'}}></div>
    </div>
    
    {/* Geometric Shapes */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute top-32 left-20 w-16 h-16 border-2 border-purple-400 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-80 right-32 w-12 h-12 bg-gradient-to-br from-violet-300 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-60 left-16 w-8 h-20 bg-gradient-to-t from-purple-200 to-violet-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
      <div className="absolute top-1/2 right-20 w-6 h-6 border border-violet-400 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
    </div>
    
    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="w-full h-full" style={{
        backgroundImage: `
          linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
    
    {/* Radial Glow Effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-300 rounded-full opacity-15 blur-3xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-purple-300 rounded-full opacity-25 blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
    </div>
  </>
)

function App() {
  const [activeSection, setActiveSection] = useState("home")

  const handleScroll = useCallback(
    throttle(() => {
      const sections = ["home", "about", "skills", "works", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }, 100),
    []
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="bg-gradient-to-br from-white via-purple-50/60 to-violet-50/40 text-gray-900 min-h-screen relative overflow-hidden">
      <BackgroundDecorations />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </div>
  )
}

export default App
