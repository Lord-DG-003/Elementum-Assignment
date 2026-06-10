import React from 'react';

export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="relative w-full bg-[#D1EAE0] rounded-[40px] py-24 px-8 text-center overflow-hidden">
        {/* Abstract Background Shapes matching Figma mockup */}
        <div className="absolute -left-12 -top-12 w-24 h-24 border-2 border-red-400/40 rounded-full pointer-events-none rotate-12"></div>
        <div className="absolute right-10 bottom-10 w-16 h-32 bg-[#A855F7] rounded-full pointer-events-none rotate-45 opacity-90"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-none">
            Subscribe to <br />our newsletter
          </h2>
          <p className="text-gray-600 text-xs md:text-sm max-w-sm mx-auto">
            Stay ahead with custom digital framework tips delivered right to your inbox weekly.
          </p>
          
          <div className="pt-4">
            <button 
              type="button" 
              className="bg-black text-white text-xs font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors shadow-md tracking-wider uppercase"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}