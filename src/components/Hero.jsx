import { useState, useEffect, useRef } from "react"
import { Download, Github, Linkedin, Mail, Code } from "lucide-react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "../constants/index.js"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = cardRef.current?.getBoundingClientRect()
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
        setMousePosition({ x, y })
      }
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      card.addEventListener("mouseenter", () => setIsHovered(true))
      card.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    leetcode: Code,
  }

  const techIcons = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", delay: 0 },
    { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", delay: 0.1 },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", delay: 0.2 },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", delay: 0.3 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle purple gradient aura background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-200/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in-up">
            {/* Name with gradient accent */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
                <span className="text-gray-800 font-extralight">{PERSONAL_INFO.name.split(' ')[0]}</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-violet-600 bg-clip-text text-transparent font-normal">
                  {PERSONAL_INFO.name.split(' ')[1]}
                </span>
              </h1>
              
              {/* Role */}
              <div className="flex items-center gap-3 mt-6">
                <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
                <h2 className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
                  Full Stack Developer | MERN & Spring
                </h2>
              </div>
            </div>

            {/* Value-driven tagline */}
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl font-light">
              Building <span className="font-medium text-purple-600">scalable</span> applications with{" "}
              <span className="font-medium text-purple-600">clean code</span> and{" "}
              <span className="font-medium text-purple-600">exceptional performance</span>.
            </p>

            {/* Floating 3D Tech Stack Icons */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-black font-light tracking-wide">Tech Stack:</span>
              <div className="flex gap-3">
                {techIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="relative group"
                    style={{
                      animation: `float 6s ease-in-out infinite`,
                      animationDelay: `${tech.delay}s`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-md border border-purple-200/50 shadow-lg shadow-purple-200/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-purple-300/40 hover:-translate-y-1 hover:bg-white/80">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-7 h-7 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none"
                        }}
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-xs text-gray-700 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-purple-100/50 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={SOCIAL_LINKS.resume}
                download="Gowtham_Vallarasu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/90 to-violet-600/90 backdrop-blur-md text-white font-semibold rounded-xl border border-purple-300/30 shadow-xl shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/40 hover:border-purple-300/50"
                style={{
                  transform: "translateZ(0)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Download size={20} className="mr-2" />
                Download Resume
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-700/50 to-violet-700/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md" />
              </a>

              {/* Social Icons in Circular Glass Buttons */}
              <div className="flex gap-3">
                {Object.entries(SOCIAL_LINKS).map(([key, url]) => {
                  if (key === "resume") return null
                  const Icon = socialIcons[key]
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-purple-200/50 shadow-lg shadow-purple-200/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-purple-300/40 hover:-translate-y-1 hover:bg-white/80 hover:border-purple-300/60"
                      style={{
                        transform: "translateZ(0)",
                      }}
                    >
                      <Icon size={20} className="text-purple-700 group-hover:text-purple-600 transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced 3D Glass Card with Interactive Elements */}
          <div className="hidden lg:flex justify-center items-center relative h-[600px]">
            {/* Enhanced Floating 3D Shapes Background */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Sphere 1 - Enhanced */}
              <div
                className="absolute top-20 right-20 w-28 h-28 rounded-full bg-gradient-to-br from-purple-300/50 to-violet-400/40 backdrop-blur-md border border-purple-200/60 shadow-2xl"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px, 0)`,
                  animation: "float 8s ease-in-out infinite",
                  transition: "transform 0.1s ease-out",
                }}
              />
              {/* Cube - Enhanced */}
              <div
                className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-purple-400/40 to-violet-500/30 backdrop-blur-md border border-purple-200/60 shadow-xl rotate-45"
                style={{
                  transform: `translate3d(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px, 0) rotate(45deg)`,
                  animation: "float 10s ease-in-out infinite",
                  animationDelay: "1s",
                  transition: "transform 0.1s ease-out",
                }}
              />
              {/* Abstract Shape - Enhanced */}
              <div
                className="absolute top-1/2 right-8 w-24 h-24 bg-gradient-to-br from-violet-300/40 to-purple-400/30 backdrop-blur-md border border-purple-200/60 shadow-xl rounded-3xl rotate-12"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px, 0) rotate(12deg)`,
                  animation: "float 12s ease-in-out infinite",
                  animationDelay: "2s",
                  transition: "transform 0.1s ease-out",
                }}
              />
              {/* New Floating Ring */}
              <div
                className="absolute top-1/3 left-12 w-16 h-16 border-2 border-purple-300/50 rounded-full backdrop-blur-sm shadow-lg"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px, 0)`,
                  animation: "float 14s ease-in-out infinite",
                  animationDelay: "3s",
                  transition: "transform 0.1s ease-out",
                }}
              />
            </div>

            {/* Enhanced Main 3D Glass Card */}
            <div
              ref={cardRef}
              className="relative w-full max-w-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Enhanced glow behind card */}
              <div
                className="absolute -inset-10 bg-gradient-to-tr from-purple-300/40 via-white/10 to-violet-400/40 rounded-3xl blur-3xl opacity-70"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0)`,
                  transition: "transform 0.1s ease-out",
                }}
              />

              {/* Enhanced Glass Card */}
              <div
                className="relative rounded-3xl bg-white/70 backdrop-blur-2xl border border-purple-200/60 shadow-3xl shadow-purple-400/30 overflow-hidden"
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * -0.5}deg) translateZ(30px)`
                    : "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: isHovered
                    ? "0 30px 60px -12px rgba(147, 51, 234, 0.35), 0 0 0 1px rgba(147, 51, 234, 0.15)"
                    : "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(147, 51, 234, 0.08)",
                }}
              >
                {/* Enhanced Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-50/70 via-white/70 to-violet-50/70 border-b border-purple-200/50 backdrop-blur-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400 shadow-md hover:scale-110 transition-transform cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-md hover:scale-110 transition-transform cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-green-400 shadow-md hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                    <span className="text-sm font-mono text-gray-700 font-medium">terminal</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100/80 to-violet-100/70 backdrop-blur-sm border border-purple-200/60 text-xs font-bold text-purple-800 shadow-md">
                    {PERSONAL_INFO.name.split(' ')[0]}
                  </div>
                </div>

                {/* Enhanced Code Block */}
                <div className="p-6 bg-gradient-to-br from-gray-50/40 to-white/40 backdrop-blur-lg">
                  <div className="rounded-xl bg-white/60 backdrop-blur-xl border border-purple-200/50 shadow-inner shadow-purple-200/15 overflow-hidden">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-50/60 to-violet-50/50 backdrop-blur-sm border-b border-purple-200/40 flex items-center justify-between">
                      <span className="text-xs font-mono text-purple-800 font-semibold">developer.ts</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-[10px] text-gray-600 font-mono font-medium">● Live</span>
                      </div>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-2" style={{ fontFamily: "'Fira Code', 'Courier New', monospace" }}>
                      <div className="flex gap-2">
                        <span className="text-purple-700 font-semibold">const</span>
                        <span className="text-gray-900 font-bold">developer</span>
                        <span className="text-gray-700">=</span>
                        <span className="text-purple-700 font-semibold">{`{`}</span>
                      </div>
                      <div className="ml-4 flex gap-2">
                        <span className="text-gray-600">role:</span>
                        <span className="text-purple-800 font-medium">"Full Stack Engineer"</span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div className="ml-4 flex gap-2">
                        <span className="text-gray-600">stack:</span>
                        <span className="text-purple-800 font-medium">["React", "Node", "Spring"]</span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div className="ml-4 flex gap-2">
                        <span className="text-gray-600">focus:</span>
                        <span className="text-purple-800 font-medium">"scalable · clean · modern"</span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-purple-700 font-semibold">{`}`}</span>
                        <span className="text-gray-500">;</span>
                      </div>
                      <div className="pt-3 flex items-center gap-2">
                        <span className="text-purple-700 animate-pulse font-bold">▋</span>
                        <span className="text-gray-500 text-xs font-medium">Ready to build amazing things...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Ambient Effects */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
                  background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(147, 51, 234, 0.03) 100%)",
                  mixBlendMode: "multiply",
                }} />
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-purple-200/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateZ(0);
          }
          50% {
            transform: translateY(-20px) translateZ(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Hero
