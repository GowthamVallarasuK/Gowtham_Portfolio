import { GraduationCap, MapPin, User, Code2, Trophy, Target, Sparkles, BookOpen, Megaphone } from "lucide-react"
import { PERSONAL_INFO } from "../constants/index.js"

const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-white relative overflow-hidden min-h-screen">
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      {/* Abstract Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-lavender-200/30 to-violet-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-200/25 to-lavender-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-violet-200/20 to-purple-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Cubes */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-to-br from-white/60 to-purple-100/40 backdrop-blur-sm border border-white/30 shadow-lg" 
             style={{ 
               transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
               animation: 'float 6s ease-in-out infinite',
               animationDelay: '1s'
             }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-white/50 to-lavender-100/30 backdrop-blur-sm border border-white/20 shadow-md" 
             style={{ 
               transform: 'perspective(1000px) rotateX(30deg) rotateY(60deg)',
               animation: 'float 8s ease-in-out infinite',
               animationDelay: '3s'
             }}></div>
        
        {/* Floating Rings */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 border-2 border-gradient-to-r from-purple-200/40 to-violet-200/30 rounded-full backdrop-blur-sm" 
             style={{ 
               transform: 'perspective(1000px) rotateX(60deg)',
               animation: 'float 10s ease-in-out infinite',
               animationDelay: '2s'
             }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-16 h-16 border border-lavender-200/30 rounded-full backdrop-blur-sm" 
             style={{ 
              transform: 'perspective(1000px) rotateY(45deg)',
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '4s'
             }}></div>

        {/* Floating About Illustration Cluster - laptop, books, cap, megaphone */}
        <div className="hidden lg:block absolute top-40 right-10 w-64 h-64" style={{ transform: 'translateZ(0)' }}>
          {/* Base laptop card */}
          <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/70 backdrop-blur-2xl border border-purple-100/70 shadow-xl shadow-purple-200/30">
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-200" />
                </div>
                <Code2 className="w-4 h-4 text-purple-500" />
              </div>
              <div className="h-14 rounded-2xl border border-purple-100/70 bg-gradient-to-br from-purple-50/70 to-violet-50/40 flex items-center justify-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-white/80 border border-purple-100/80 flex items-center justify-center shadow-sm">
                  <span className="w-3 h-3 border-l-2 border-t-2 border-purple-500 rounded-sm rotate-[-45deg]" />
                </div>
                <div className="flex gap-1.5">
                  <span className="w-6 h-1.5 rounded-full bg-purple-200/80" />
                  <span className="w-4 h-1.5 rounded-full bg-purple-100/80" />
                </div>
              </div>
            </div>
            <div className="px-4 pb-3 flex items-center justify-between text-[10px] text-gray-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" />
                clean code
              </span>
              <span className="flex items-center gap-1">
                <Code2 className="w-3 h-3 text-purple-400" />
                full stack
              </span>
            </div>
          </div>

          {/* Stacked books */}
          <div className="absolute left-3 bottom-16 w-20 h-20" style={{ animation: 'float 9s ease-in-out infinite' }}>
            <div className="absolute bottom-2 left-0 right-2 h-4 rounded-xl bg-white/80 border border-purple-100/80 shadow-md shadow-purple-200/40" />
            <div className="absolute bottom-5 left-1 right-3 h-4 rounded-xl bg-white/90 border border-purple-100/90 shadow-md shadow-purple-200/40" />
            <div className="absolute bottom-8 left-2 right-4 h-4 rounded-xl bg-white border border-purple-200 shadow-md shadow-purple-200/40" />
            <div className="absolute bottom-11 left-3 right-5 h-3 rounded-xl bg-purple-100/70 border border-purple-200/80" />
          </div>

          {/* Graduation cap */}
          <div className="absolute -top-4 left-10" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>
            <div className="w-10 h-10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          {/* Floating book */}
          <div className="absolute top-1 right-4" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}>
            <div className="w-9 h-9 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-purple-400" />
            </div>
          </div>

          {/* Megaphone */}
          <div className="absolute bottom-14 right-2" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '3s' }}>
            <div className="w-8 h-8 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-purple-400" />
            </div>
          </div>

          {/* Tiny decorative bits */}
          <div className="absolute top-12 left-6 w-1.5 h-1.5 rounded-full bg-purple-400/70" />
          <div className="absolute top-20 right-16 w-1 h-1 rounded-full bg-violet-400/60" />
          <div className="absolute bottom-10 left-16 w-1 h-1 rounded-full bg-purple-300/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-white/40 shadow-lg shadow-purple-200/20 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-medium tracking-wide">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">Crafting Digital
            <span className="block bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-medium">Experiences</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Passionate about creating meaningful digital solutions with clean code and exceptional user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info Cards */}
          <div className="space-y-8">
            <div className="group p-8 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-xl shadow-purple-200/10 hover:bg-white/80 hover:shadow-2xl hover:shadow-purple-300/15 hover:-translate-y-2 transition-all duration-700">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-purple-50/60 backdrop-blur-sm border border-white/60 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <User className="text-purple-600 flex-shrink-0" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">Who I Am</h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    A passionate <span className="font-medium text-purple-700">Full Stack Developer</span> specializing in modern web technologies. I create scalable, efficient solutions with a focus on clean architecture and exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-xl shadow-purple-200/10 hover:bg-white/80 hover:shadow-2xl hover:shadow-purple-300/15 hover:-translate-y-2 transition-all duration-700">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-purple-50/60 backdrop-blur-sm border border-white/60 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <GraduationCap className="text-purple-600 flex-shrink-0" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">Education</h3>
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    {PERSONAL_INFO.college}
                  </p>
                  <p className="text-purple-600 font-medium mb-3">Computer Science Engineering</p>
                  <p className="text-gray-600 font-light">Building strong foundations in software engineering and system design</p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-xl shadow-purple-200/10 hover:bg-white/80 hover:shadow-2xl hover:shadow-purple-300/15 hover:-translate-y-2 transition-all duration-700">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-purple-50/60 backdrop-blur-sm border border-white/60 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <MapPin className="text-purple-600 flex-shrink-0" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">Location</h3>
                  <p className="text-gray-800 font-medium text-lg mb-3">{PERSONAL_INFO.location}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 backdrop-blur-sm rounded-full border border-green-200/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience Card */}
          <div className="p-10 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-purple-300/20 hover:shadow-3xl hover:shadow-purple-400/25 transition-all duration-700 relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-violet-50/20 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-sm border border-white/70 shadow-lg">
                  <Trophy className="text-purple-600" size={24} />
                </div>
                <h3 className="text-3xl font-medium text-gray-900">Experience</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-400 to-violet-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full shadow-lg shadow-purple-500/50"></div>
                  <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="text-purple-600" size={20} />
                      <h4 className="text-xl font-medium text-gray-900">Full Stack Developer</h4>
                    </div>
                    <p className="text-purple-600 font-medium mb-4">Personal Projects & Learning</p>
                    <p className="text-gray-600 leading-relaxed mb-6 font-light">
                      Developing modern web applications using <span className="font-medium text-purple-700">MERN stack</span> and <span className="font-medium text-purple-700">Java Spring Boot</span>. Focused on creating scalable architectures, clean code practices, and exceptional user experiences.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-4 py-2 bg-purple-50/80 backdrop-blur-sm rounded-full border border-purple-200/50">
                        <span className="text-sm font-medium text-purple-700">MERN Stack</span>
                      </div>
                      <div className="px-4 py-2 bg-violet-50/80 backdrop-blur-sm rounded-full border border-violet-200/50">
                        <span className="text-sm font-medium text-violet-700">Spring Boot</span>
                      </div>
                    </div>
                  </div>
                </div>
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
      `}</style>
    </section>
  )
}

export default About