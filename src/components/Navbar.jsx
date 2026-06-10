import React, { useState } from 'react';

export default function Navbar() {
  // State to track whether the premium slidebar drawer is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Reusable array of your exact nav links to prevent repeating code
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Studio', href: '#studio' },
    { name: 'Services', href: '#services' },
    { name: 'Contacts', href: '#contacts' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Main Header Row */}
      <header className="sticky top-0 z-40 w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="text-xl font-bold tracking-tight text-gray-900 cursor-pointer">
            Elementum
          </div>

          {/* Navigation Links (Kept exactly as you had them for desktop layout) */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Slide Bar */}
          <button 
            onClick={toggleMenu}
            className="flex flex-col justify-center items-end space-y-1.5 w-8 h-8 group focus:outline-none z-50 relative"
            aria-label="Toggle navigation menu"
          >
            {/* Top Line */}
            <span className={`h-0.5 bg-black rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-7 group-hover:w-5'}`}></span>
            {/* Middle Line */}
            <span className={`h-0.5 bg-black rounded-full transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-5 group-hover:w-7'}`}></span>
            {/* Bottom Line */}
            <span className={`h-0.5 bg-black rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-4'}`}></span>
          </button>
        </div>
      </header>

      {/* Dimmed Background Overlay when slidebar is open */}
      <div 
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black/20 backdrop-blur-xs z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Premium Right Side-Out Rectangular Slidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[320px] sm:w-[400px] bg-white border-l border-gray-100 z-50 p-8 pt-28 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Navigation Links inside the Slidebar */}
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={toggleMenu} // Automatically hides the sidebar when a link is clicked
              className="text-2xl font-medium text-gray-900 hover:text-emerald-600 transition-colors tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Us Button at the bottom of the Slidebar */}
        <div className="pt-8 border-t border-gray-100">
          <a 
            href="#contact" 
            onClick={toggleMenu}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-900 transition-colors shadow-md text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}