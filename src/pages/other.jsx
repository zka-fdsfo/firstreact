import React from "react";

const Other = () => {
  return (
    <section className="w-full min-h-screen bg-black px-4 pt-50 py-8 flex justify-center">
      <div
        className="
          w-full max-w-7xl
          grid grid-cols-1 gap-4
          md:grid-cols-12 md:grid-rows-2 md:gap-6
        "
      >
        {/* LEFT BIG CARD */}
        <div className="md:col-span-7 md:row-span-1 relative rounded-3xl overflow-hidden bg-black min-h-[260px] md:min-h-[360px]">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            alt=""
          />

          <div className="relative z-10 p-6 md:p-10">
            <h1 className="text-[10vw] md:text-[5vw] leading-none font-black text-[#c8ff00]">
              STAY<br />CONNECTED
            </h1>

            <p className="mt-4 md:mt-6 max-w-md text-xs md:text-sm text-white/80">
              CLEAN AND SIMPLE AFTER EFFECTS TEMPLATE 3 IN 1 FOR CREATING
              A STYLISH EVENT OPENER, A FASHION VIDEO, OR AN INSPIRING
              CORPORATE VIDEO SLIDESHOW.
            </p>
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 rounded-full border border-[#c8ff00] text-[#c8ff00] flex items-center justify-center text-sm">
            ©
          </div>
        </div>

        {/* RIGHT TALL CARD */}
        <div className="md:col-span-5 md:row-span-2 relative rounded-3xl overflow-hidden bg-gray-200 min-h-[260px] md:min-h-full">
          {/* ✅ FIXED IMAGE (NO 404) */}
          <img
            src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            alt=""
          />

          <div className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-1 rounded-full border border-[#c8ff00] text-[#c8ff00] text-xs font-semibold">
            SIMPLE
          </div>

          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-[#c8ff00] rounded-full"></div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="md:col-span-3 relative rounded-3xl overflow-hidden bg-black min-h-[180px]">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            alt=""
          />

          <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#c8ff00] flex items-center justify-center text-[#c8ff00] text-xl">
            →
          </div>
        </div>

        {/* BOTTOM CENTER */}
        <div className="md:col-span-4 relative rounded-3xl overflow-hidden bg-black min-h-[180px]">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            alt=""
          />
        </div>

        {/* BOTTOM RIGHT GREEN */}
        <div className="md:col-span-5 rounded-3xl bg-[#c8ff00] p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              DESIGN
            </h2>
            <span className="text-xs md:text-sm font-bold text-black">
              MMG
            </span>
          </div>

          <p className="text-[10px] md:text-xs text-black max-w-xs">
            THE TEMPLATE IS VERY CONVENIENT AND FLEXIBLE IN USAGE
          </p>

          <div className="w-3 h-3 bg-black rounded-full self-end"></div>
        </div>
      </div>
    </section>
  );
};

export default Other;
