import { useState, useMemo } from "react"
import { Menu, X } from "lucide-react"

// Move navItems outside component to prevent recreation on every render
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
]

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-purple-200/50 z-50 shadow-lg shadow-purple-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-purple-700 bg-purple-100/60 backdrop-blur-md border border-purple-200/50 shadow-sm shadow-purple-200/20"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50/60 hover:backdrop-blur-sm hover:border hover:border-purple-100/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-700 focus:outline-none focus:text-purple-700 p-2 rounded-lg hover:bg-purple-50/60 transition-all duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-xl border-t border-purple-200/50">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-purple-700 bg-purple-100/60 backdrop-blur-md border border-purple-200/50 shadow-sm"
                    : "text-gray-700 hover:text-purple-700 hover:bg-purple-50/60 hover:backdrop-blur-sm"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
