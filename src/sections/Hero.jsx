import React from 'react';

export default function Hero() {
  // Safe profile placeholder images that look realistic and professional
  const teamImages = [
    { src: "\Ellipse 262.png", offset: "md:translate-y-12" },
    { src: "\Ellipse 261.png", offset: "md:-translate-y-4" },
    { src: "\Ellipse 255.png", offset: "md:translate-y-8" },
    { src: "\Ellipse 256.png", offset: "md:-translate-y-8" },
    { src: "\Ellipse 257.png", offset: "md:translate-y-4" },
    { src: "\Ellipse 258.png", offset: "md:-translate-y-2" },
    { src: "\Ellipse 259.png", offset: "md:translate-y-10" }
  ];

  return (
    <section id="about" className="relative w-full pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden bg-[#FAFAFA]">
      {/* Decorative background vectors - hidden on phones to avoid overflow scrollbars */}
      <div className="absolute right-4 top-24 w-12 h-24 bg-[#A855F7] rounded-full opacity-80 blur-[2px] hidden xl:block rotate-45"></div>
      <div className="absolute left-6 top-48 w-16 h-28 border-2 border-red-400 rounded-full opacity-60 hidden xl:block -rotate-12"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Main Headline - Automatically switches from text-3xl on phone, to 5xl on tablet, to 7xl on PC */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#0A0A0A] leading-[1.2] md:leading-[1.15] max-w-4xl mx-auto">
          The <span className="relative inline-block px-1 md:px-2">thinkers<span className="absolute left-0 bottom-1 md:bottom-2 w-full h-[2px] md:h-[3px] bg-amber-400"></span></span> and doers were changing the <span className="bg-emerald-100 px-3 md:px-4 py-0.5 md:py-1 rounded-full border border-emerald-200 inline-block mt-1 sm:mt-0">status</span> Quo with
        </h1>

        {/* Sub-headline Text */}
        <p className="mt-6 md:mt-8 text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
          We are a team of strategic designers transforming business through beautiful, purposeful digital experiences.
        </p>

        {/* Re-arranged Profile Row: Stays flat on PC, groups into a beautiful clean tight bundle on phone layout viewports */}
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-2">
          {teamImages.map((img, index) => (
            <div 
              key={index} 
              className={`transform ${img.offset} scale-90 sm:scale-100 transition-transform duration-500 hover:scale-110`}
            >
              <img 
                src={img.src} 
                alt="Team member" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-md bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
