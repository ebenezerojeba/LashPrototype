import React from 'react'
import { Instagram, Facebook, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#6B4E71] text-white pt-8 pb-6 px-4">
      
      <div className="max-w-xl mx-auto text-center">
        <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
        <p className="text-gray-300 text-sm mb-4">Get quick updates and beauty tips</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="px-6 py-2 bg-[#9e2a2c] rounded-full text-white">
            Subscribe
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a className="p-3 bg-white/10 rounded-full" href="#">
            <Instagram size={18} />
          </a>
          <a className="p-3 bg-white/10 rounded-full" href="#">
            <Facebook size={18} />
          </a>
          <a className="p-3 bg-white/10 rounded-full" href="#">
            <Mail size={18} />
          </a>
        </div>

        <div className="w-full h-56 rounded overflow-hidden mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.59817751766!2d3.4713624748310683!3d6.445607793545723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44ec2255c55%3A0xa830607fdac74e37!2s13%20Taiye%20Olowu%20St%2C%20Lekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764274120064!5m2!1sen!2sng"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-xs text-gray-300">&copy; 2025 Beautish_NG.</p>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#9e2a2c] text-white rounded-full flex items-center justify-center shadow-lg"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}

export default Footer
