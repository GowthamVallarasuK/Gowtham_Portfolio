import { useMemo } from "react"
import { TECHNOLOGIES } from "../constants/index.js"
import { Code, Database, Globe, Wrench, Sparkles } from "lucide-react"

const Skills = () => {
  // Memoize filtered arrays to prevent recreation on every render
  const frontendTechs = useMemo(() => 
    TECHNOLOGIES.filter((tech) =>
      ["React", "JavaScript", "HTML5", "CSS3", "Tailwind css"].includes(tech.name)
    ), []
  )

  const backendTechs = useMemo(() => 
    TECHNOLOGIES.filter((tech) =>
      ["Java", "Spring Boot", "Node.js", "Express.js"].includes(tech.name)
    ), []
  )

  const databaseTechs = useMemo(() => 
    TECHNOLOGIES.filter((tech) => ["MongoDB", "MySQL", "PostgreSQL"].includes(tech.name)), []
  )

  const toolsTechs = useMemo(() => 
    TECHNOLOGIES.filter((tech) => ["Git", "Docker", "AWS", "Postman"].includes(tech.name)), []
  )

  const skillCategories = [
    {
      title: "Frontend Development",
      technologies: frontendTechs,
      description: "Creating responsive and interactive user interfaces",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/60 to-cyan-50/40",
      iconBg: "from-blue-100/80 to-cyan-100/60"
    },
    {
      title: "Backend Development",
      technologies: backendTechs,
      description: "Building robust server-side applications and APIs",
      icon: Code,
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50/60 to-violet-50/40",
      iconBg: "from-purple-100/80 to-violet-100/60"
    },
    {
      title: "Database Management",
      technologies: databaseTechs,
      description: "Designing and managing both SQL and NoSQL databases",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/60 to-emerald-50/40",
      iconBg: "from-green-100/80 to-emerald-100/60"
    },
    {
      title: "Tools & Technologies",
      technologies: toolsTechs,
      description: "Development tools and cloud technologies",
      icon: Wrench,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50/60 to-red-50/40",
      iconBg: "from-orange-100/80 to-red-100/60"
    }
  ]

  const SkillCategory = ({ title, technologies, description, icon: Icon, gradient, bgGradient, iconBg, index }) => (
    <div 
      className={`group relative bg-gradient-to-br ${bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl shadow-purple-200/10 hover:shadow-2xl hover:shadow-purple-300/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {technologies.map((tech, techIndex) => (
            <div
              key={tech.name}
              className="group/tech relative flex flex-col items-center p-4 bg-white/60 backdrop-blur-md rounded-2xl hover:bg-white/80 hover:backdrop-blur-lg transition-all duration-300 border border-white/50 shadow-md hover:shadow-lg hover:shadow-purple-200/30 hover:-translate-y-1 cursor-pointer"
              style={{
                animation: `slideInUp 0.4s ease-out ${techIndex * 0.05}s both`
              }}
            >
              {/* Tech Icon */}
              <div className="relative mb-3">
                <img
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-10 h-10 group-hover/tech:scale-110 transition-transform duration-300 drop-shadow-sm"
                  onError={(e) => {
                    e.target.style.display = "none"
                  }}
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-md opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Tech Name */}
              <span className="text-xs text-gray-800 text-center font-semibold group-hover/tech:text-purple-700 transition-colors duration-300">
                {tech.name}
              </span>
              
              {/* Hover Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-gray-900/90 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 whitespace-nowrap">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} animate-pulse`}></div>
            <span className="text-xs text-gray-600 font-medium">{technologies.length} Technologies</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-violet-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/60 backdrop-blur-md rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Sparkles className="text-purple-600" size={16} />
            <span className="text-purple-700 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            I specialize in <span className="font-semibold text-purple-700">backend development</span> with strong proficiency in Java Spring Boot and Node.js, while also maintaining expertise in modern <span className="font-semibold text-purple-700">frontend technologies</span> and database management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Skills