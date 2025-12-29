import { GraduationCap, MapPin, User, Code2, Trophy, Target, Sparkles } from "lucide-react"
import { PERSONAL_INFO } from "../constants/index.js"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50/80 via-white to-violet-50/60 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-violet-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/60 backdrop-blur-md rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Sparkles className="text-purple-600" size={16} />
            <span className="text-purple-700 text-sm font-medium">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Passionate about crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-purple-100/50 shadow-lg shadow-purple-200/10 hover:bg-white/70 hover:shadow-xl hover:shadow-purple-300/20 hover:-translate-y-1 transition-all duration-500">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <User className="text-purple-600 flex-shrink-0" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-800 transition-colors">Who I Am</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate <span className="font-semibold text-purple-700">Full Stack Developer</span> with expertise in MERN stack and Java Spring Boot. I love creating efficient, scalable solutions and have a strong foundation in both frontend and backend technologies.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-purple-600 font-medium">Always learning, always growing</span>
                </div>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-purple-100/50 shadow-lg shadow-purple-200/10 hover:bg-white/70 hover:shadow-xl hover:shadow-purple-300/20 hover:-translate-y-1 transition-all duration-500">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <GraduationCap className="text-purple-600 flex-shrink-0" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-800 transition-colors">Education</h3>
                <p className="text-gray-700 font-medium mb-1">
                  {PERSONAL_INFO.college}
                </p>
                <p className="text-purple-600 text-sm font-medium mb-2">Pursuing Computer Science Engineering</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Building strong foundations in CS</span>
                </div>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-purple-100/50 shadow-lg shadow-purple-200/10 hover:bg-white/70 hover:shadow-xl hover:shadow-purple-300/20 hover:-translate-y-1 transition-all duration-500">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <MapPin className="text-purple-600 flex-shrink-0" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-800 transition-colors">Location</h3>
                <p className="text-gray-600 font-medium">{PERSONAL_INFO.location}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Open to remote opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience Card */}
          <div className="bg-gradient-to-br from-white/70 via-white/60 to-purple-50/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-purple-300/20 border border-purple-200/50 hover:shadow-3xl hover:shadow-purple-400/30 transition-all duration-500 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-200/30 to-violet-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-6 w-12 h-12 bg-gradient-to-br from-violet-200/20 to-purple-300/15 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-sm">
                  <Trophy className="text-purple-600" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Experience & Achievements</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-gradient-to-b from-purple-500 to-violet-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                  <div className="bg-white/60 backdrop-blur-md rounded-xl p-5 border border-purple-100/50 shadow-md hover:shadow-lg hover:bg-white/80 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-purple-600" size={16} />
                      <h4 className="text-lg font-semibold text-gray-900">Full Stack Developer</h4>
                    </div>
                    <p className="text-purple-600 text-sm font-medium mb-3">Personal Projects</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Developed full-stack applications using <span className="font-semibold text-purple-700">MERN stack</span> and <span className="font-semibold text-purple-700">Java Spring Boot</span>, focusing on scalable architecture and user-centric design.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-purple-100/60 backdrop-blur-sm rounded-full border border-purple-200/50">
                        <span className="text-xs font-medium text-purple-700">MERN Stack</span>
                      </div>
                      <div className="px-3 py-1 bg-violet-100/60 backdrop-blur-sm rounded-full border border-violet-200/50">
                        <span className="text-xs font-medium text-violet-700">Spring Boot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About