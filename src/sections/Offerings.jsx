import React from 'react';

export default function Offerings() {
  const offeringsData = [
    {
      meta: "Offers scalable bespoke layouts",
      title: "Collaborative & partnership",
    },
    {
      meta: "For hyper UX/UI inner digital experiences",
      title: "We talk about our weight",
    },
    {
      meta: "Data driven modular design digital",
      title: "Piloting digital confidence",
      hasBadge: true
    }
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
          What we <span className="bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-200">can</span> <br />
          <span className="relative inline-block px-1">offer you!<span className="absolute left-0 bottom-2 w-full h-[3px] bg-amber-400"></span></span>
        </h2>
      </div>

      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {offeringsData.map((item, index) => (
          <div 
            key={index} 
            className="group grid md:grid-cols-12 gap-6 py-10 items-center hover:bg-gray-50/50 px-4 transition-all duration-300 cursor-pointer"
          >
            {/* Meta/Description column */}
            <div className="md:col-span-3 text-xs font-medium text-gray-400 max-w-[200px] leading-relaxed uppercase tracking-wider">
              {item.meta}
            </div>
            
            {/* Main Title column */}
            <div className="md:col-span-8 flex items-center gap-4">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
              {item.hasBadge && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm shrink-0">
                  <img src="\Rectangle 661.png" alt="Offering asset badge" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Right Arrow Trigger */}
            <div className="md:col-span-1 flex justify-end text-gray-400 group-hover:text-black transition-colors">
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}