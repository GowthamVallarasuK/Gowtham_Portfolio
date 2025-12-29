import { ExternalLink, Github, Youtube, Sparkles, Star, Calendar } from "lucide-react"
import { MY_WORKS } from "../constants/index.js"

const Works = () => {
  return (
    <section id="works" className="py-20 px-4 bg-gradient-to-br from-purple-50/60 via-white to-violet-50/40 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-16 w-36 h-36 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-32 left-20 w-44 h-44 bg-violet-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-purple-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/60 backdrop-blur-md rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Star className="text-purple-600" size={16} />
            <span className="text-purple-700 text-sm font-medium">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">My Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Here are some of my recent projects and contributions that showcase my skills and passion for development. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto gap-8 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-400/60 scrollbar-track-purple-100/30 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {MY_WORKS.map((work, index) => (
              <div
                key={work.title || index}
                className="group flex-shrink-0 w-[380px] md:w-[420px] bg-gradient-to-br from-white/70 via-white/60 to-purple-50/40 backdrop-blur-xl rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/30 snap-center border border-purple-200/50 shadow-xl shadow-purple-200/10 relative"
                style={{
                  animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200/20 rounded-full blur-xl group-hover:bg-purple-300/30 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-violet-200/15 rounded-full blur-lg group-hover:bg-violet-300/25 transition-all duration-500"></div>
                
                <div className="p-8 h-full flex flex-col relative z-10">
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-md group-hover:scale-110 transition-all duration-300">
                        <Sparkles className="text-purple-600" size={18} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors">
                        {work.title}
                      </h3>
                    </div>
                    
                    {/* Project Type Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-4">
                      <Calendar className="text-purple-600" size={12} />
                      <span className="text-xs font-medium text-purple-700">Recent Project</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-sm">
                    {work.description}
                  </p>

                  {/* Technologies */}
                  {work.technologies && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, techIndex) => (
                          <span 
                            key={`${tech}-${techIndex}`} 
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-100/70 to-violet-100/60 backdrop-blur-sm text-purple-800 text-xs rounded-full font-semibold border border-purple-200/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {work.github && (
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center px-5 py-3 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:backdrop-blur-lg text-gray-800 rounded-xl transition-all duration-300 border border-purple-200/50 shadow-md hover:shadow-lg hover:shadow-purple-200/40 hover:-translate-y-0.5 flex-1"
                      >
                        <Github size={16} className="mr-2 flex-shrink-0 group-hover/btn:scale-110 transition-transform" />
                        <span className="font-medium">Code</span>
                      </a>
                    )}

                    {work.live && (
                      <a
                        href={work.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center px-5 py-3 bg-gradient-to-r from-purple-600/90 to-violet-600/90 backdrop-blur-md hover:from-purple-700 hover:to-violet-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-400/40 border border-purple-300/30 hover:-translate-y-0.5 flex-1"
                      >
                        <ExternalLink size={16} className="mr-2 flex-shrink-0 group-hover/btn:scale-110 transition-transform" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/5 via-transparent to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {MY_WORKS.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-purple-300/50 hover:bg-purple-400/70 transition-colors cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100/60 to-violet-100/50 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Github className="text-purple-600" size={18} />
            <span className="text-purple-700 font-medium">More projects on GitHub</span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Custom Scrollbar Styles */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        
        .scrollbar-thumb-purple-400\/60::-webkit-scrollbar-thumb {
          background-color: rgba(168, 85, 247, 0.6);
        }
        
        .scrollbar-track-purple-100\/30::-webkit-scrollbar-track {
          background-color: rgba(243, 232, 255, 0.3);
        }
        
        .scrollbar-thumb-rounded-full::-webkit-scrollbar-thumb {
          border-radius: 9999px;
        }
        
        .scrollbar-track-rounded-full::-webkit-scrollbar-track {
          border-radius: 9999px;
        }
      `}</style>
    </section>
  )
}

export default Works
