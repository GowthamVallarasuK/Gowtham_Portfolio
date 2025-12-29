import { useState, useEffect } from "react"
import { Mail, Send, CheckCircle, AlertCircle, Phone, MapPin, Clock, Sparkles } from "lucide-react"
import { PERSONAL_INFO } from "../constants/index.js"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [timeoutId, setTimeoutId] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form and show success
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus('success')
      
      // Clear success message after 5 seconds with cleanup
      const id = setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      setTimeoutId(id)
      
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50/80 via-white to-violet-50/60 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-violet-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/60 backdrop-blur-md rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Sparkles className="text-purple-600" size={16} />
            <span className="text-purple-700 text-sm font-medium">Let's collaborate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/70 via-white/60 to-purple-50/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-200/50 shadow-xl shadow-purple-200/20">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-md">
                  <Mail className="text-purple-600" size={20} />
                </div>
                Let's Connect
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I'm currently <span className="font-semibold text-purple-700">open to new opportunities</span> and exciting challenges.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="group flex items-center space-x-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-purple-100/50 shadow-md hover:bg-white/80 hover:shadow-lg hover:shadow-purple-200/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-md rounded-xl border border-purple-200/50 shadow-md group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-purple-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-purple-100/50 shadow-md hover:bg-white/80 hover:shadow-lg hover:shadow-purple-200/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-green-100/80 to-emerald-100/60 backdrop-blur-md rounded-xl border border-green-200/50 shadow-md group-hover:scale-110 transition-all duration-300">
                    <Phone className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600 font-medium">{PERSONAL_INFO.number}</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-purple-100/50 shadow-md hover:bg-white/80 hover:shadow-lg hover:shadow-purple-200/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-blue-100/80 to-cyan-100/60 backdrop-blur-md rounded-xl border border-blue-200/50 shadow-md group-hover:scale-110 transition-all duration-300">
                    <MapPin className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Location</h4>
                    <p className="text-gray-600 font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-purple-100/50 shadow-md hover:bg-white/80 hover:shadow-lg hover:shadow-purple-200/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-orange-100/80 to-red-100/60 backdrop-blur-md rounded-xl border border-orange-200/50 shadow-md group-hover:scale-110 transition-all duration-300">
                    <Clock className="text-orange-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Response Time</h4>
                    <p className="text-gray-600 font-medium">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-white/70 via-white/60 to-purple-50/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-purple-200/20 border border-purple-200/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-violet-200/15 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 backdrop-blur-sm border border-purple-200/50 shadow-md">
                  <Send className="text-purple-600" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-100/80 backdrop-blur-md border border-green-300/50 rounded-xl shadow-md">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <p className="text-green-800 font-medium">Message sent successfully! Your email client should open shortly.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-100/80 backdrop-blur-md border border-red-300/50 rounded-xl shadow-md">
                    <AlertCircle className="text-red-600 mr-3" size={20} />
                    <p className="text-red-800 font-medium">Please fill in all fields before sending.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-md border-2 border-purple-200/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 focus:bg-white/90 focus:backdrop-blur-lg text-gray-900 placeholder-gray-500 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-md border-2 border-purple-200/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 focus:bg-white/90 focus:backdrop-blur-lg text-gray-900 placeholder-gray-500 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-md border-2 border-purple-200/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 focus:bg-white/90 focus:backdrop-blur-lg text-gray-900 placeholder-gray-500 resize-none transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-gradient-to-r from-purple-600/90 to-violet-600/90 backdrop-blur-md hover:from-purple-700 hover:to-violet-700 hover:scale-105 transform text-white shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-400/40 border border-purple-300/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Footer */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 mt-20 py-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left - Brand */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h3>
              <p className="text-gray-400 text-sm font-medium">Full Stack Developer</p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 mt-2"></div>
            </div>
            
            {/* Center - Copyright */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700/50">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">© 2025 All Rights Reserved</span>
              </div>
            </div>
            
            {/* Right - Status */}
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/30 backdrop-blur-sm rounded-full border border-green-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-xs font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">Built with passion & precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
