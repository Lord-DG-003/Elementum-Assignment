import React from 'react';

export default function Testimonials() {
  const outerAvatars = [
    { src: "\Ellipse 263.png", size: "w-10 h-10", pos: "top-10 left-[10%]" },
    { src: "\Ellipse 266.png", size: "w-14 h-14", pos: "top-32 left-[5%]" },
    { src: "\Ellipse 268.png", size: "w-20 h-20", pos: "bottom-16 left-[8%]" },
    { src: "\Ellipse 267.png", size: "w-12 h-12", pos: "bottom-6 left-[2%] " },
    { src: "\Ellipse 270.png", size: "w-10 h-10", pos: "top-12 right-[12%]" },
    { src: "\Ellipse 264.png", size: "w-12 h-12", pos: "top-28 right-[6%]" },
    { src: "\Ellipse 265.png", size: "w-14 h-14", pos: "bottom-36 right-[8%]" },
    { src: "\Ellipse 269.png", size: "w-24 h-24", pos: "bottom-8 right-[5%]" },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#FAFAFA]">
      
      {/* Scattered Outer Floating Avatars from design */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {outerAvatars.map((av, index) => (
          <img 
            key={index}
            src={av.src}
            alt="Client profile overview"
            className={`absolute ${av.pos} ${av.size} rounded-full object-cover border-2 border-white shadow-md bg-gray-200 transform hover:scale-110 transition-transform`}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-16">
          <span className="bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-200">What</span> our customer <br />
          says <span className="relative inline-block px-1">About Us<span className="absolute left-0 bottom-1 w-full h-[2px] bg-amber-400"></span></span>
        </h2>

        {/* Central Quote Area */}
        <div className="relative bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm max-w-2xl mx-auto">
          {/* Custom Stylized Quote Marks */}
          <span className="absolute -top-6 left-8 text-6xl text-emerald-200 font-serif select-none">“</span>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Elementum dedicated the site without any single baseline timeline delays. Helping exceed brand conversions metrics layout benchmarks by 180%. We retain full organization ability to perform strategies that the company found useful, making operations proud to be thoroughly scalable.
          </p>
          <span className="absolute -bottom-10 right-8 text-6xl text-emerald-200 font-serif select-none">”</span>
        </div>
      </div>
    </section>
  );
}