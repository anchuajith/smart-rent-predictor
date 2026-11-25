
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          RentPredict
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
          <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600">How it Works</a>
        <a href="#faqs" className="text-gray-700 hover:text-indigo-600">FAQs</a>

        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-3xl hover:bg-indigo-700">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white border-t">
          <nav className="flex flex-col gap-4 py-3">
            <a href="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">
              How it Wsorks
            </a>
            <a href="#faqs" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">
              FAQs
            </a>

            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 w-full">
              Get Started
            </button>
          </nav>
        </div>
      )}

    </header>
  )
}

export default Header
