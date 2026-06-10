import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm mb-16">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2 text-gray-500 text-xs font-medium">
            <li><a href="#about" className="hover:text-black">About</a></li>
            <li><a href="#careers" className="hover:text-black">Careers</a></li>
            <li><a href="#services" className="hover:text-black">Services</a></li>
            <li><a href="#blog" className="hover:text-black">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Terms & Policies</h4>
          <ul className="space-y-2 text-gray-500 text-xs font-medium">
            <li><a href="#terms" className="hover:text-black">Terms of Use</a></li>
            <li><a href="#privacy" className="hover:text-black">Privacy Architecture</a></li>
            <li><a href="#cookies" className="hover:text-black">Cookies</a></li>
            <li><a href="#gdpr" className="hover:text-black">GDPR Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
          <ul className="space-y-2 text-gray-500 text-xs font-medium">
            <li><a href="#linkedin" className="hover:text-black">LinkedIn</a></li>
            <li><a href="#twitter" className="hover:text-black">Twitter</a></li>
            <li><a href="#instagram" className="hover:text-black">Instagram</a></li>
            <li><a href="#dribbble" className="hover:text-black">Dribbble</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Terms & Policies</h4>
          <address className="not-italic space-y-2 text-gray-500 text-xs font-medium">
            <p>Elementum Agency HQ</p>
            <p>102 Oliver St, NY 10002</p>
            <p className="pt-2 text-gray-900 font-semibold">hello@elementum.agency</p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-8 text-center text-[11px] font-medium text-gray-400 tracking-wider uppercase">
        © {new Date().getFullYear()} Elementum. All rights reserved.
      </div>
    </footer>
  );
}
