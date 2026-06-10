import React from 'react';

export default function FeatureSection() {
  return (
    <section id="studio" className="relative max-w-7xl mx-auto px-6 py-20 space-y-32 overflow-hidden">
      {/* Background SVG Wave Path crossing sections like the image */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <svg className="w-full h-full text-red-300 opacity-40" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 C300,100 500,400 900,300 C1200,200 1300,500 1600,400" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Row 1: Tomorrow should be better... */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-md">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
            Tomorrow should be better than <span className="bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-200">today</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We are a team of strategic designers transforming business innovations through digital touchpoints that help organizations manage change cleanly.
          </p>
          <div className="pt-2">
            <a href="#read-more" className="text-xs font-semibold uppercase tracking-wider border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">Read More</a>
          </div>
        </div>
        <div className="relative flex justify-center">
          {/* Decorative Red Triangle floating Accent */}
          <div className="absolute -right-4 top-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-red-400 transform rotate-[35deg] hidden sm:block"></div>
          <img 
            src="/image 348.png" 
            alt="Team collaboration discussion" 
            className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full object-cover shadow-xl border border-gray-100 bg-gray-200"
          />
        </div>
      </div>

      {/* Row 2: See how we can help... */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
        <div className="relative flex justify-center md:order-last">
          {/* Decorative Triangles around image matching layout */}
          <div className="absolute left-10 -top-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-red-400 transform -rotate-[15deg] hidden sm:block"></div>
          <div className="absolute right-12 -bottom-6 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[45px] border-b-red-400 transform rotate-[12deg] hidden sm:block"></div>
          <img 
            src="\image 348 (1).png" 
            alt="Working on strategy roadmap" 
            className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full object-cover shadow-xl border border-gray-100 bg-gray-200"
          />
        </div>
        <div className="space-y-6 max-w-md md:order-last">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
            <span className="bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-200">See</span> how we can help you <span className="relative inline-block px-1">progress<span className="absolute left-0 bottom-1 w-full h-[2px] bg-black"></span></span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            As a full service agency we provide everything from strategic discovery blueprints to interactive assets designed to optimize operations globally.
          </p>
          <div className="pt-2">
            <a href="#read-more" className="text-xs font-semibold uppercase tracking-wider border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}