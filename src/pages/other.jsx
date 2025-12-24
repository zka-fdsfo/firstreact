import React from "react";

const Other = () => {
  return (
    <section className="w-full min-h-screen bg-[#0b0b0f] flex items-center justify-center px-10">
      {/* MAIN CARD */}
      <div className="relative w-full max-w-6xl rounded-[28px] bg-[#f7f3fa] overflow-hidden shadow-2xl">

        {/* TOP AWARDS BAR */}
        <div className="flex justify-between px-10 pt-6 text-xs text-black/70">
          <div className="flex gap-10">
            <p>awwwards <span className="ml-1 font-semibold">4</span></p>
            <p>CSSDesignAwards <span className="ml-1 font-semibold">18</span></p>
            <p>No-Code Conf 2021 <span className="ml-1 font-semibold">1</span></p>
            <p>awwwards <span className="ml-1 font-semibold">4</span></p>
          </div>
        </div>

        {/* HERO AREA */}
        <div className="relative h-[420px] flex items-center justify-center">
          {/* BIG TEXT */}
          <h1 className="absolute text-[22vw] font-black text-black leading-none opacity-95 select-none">
            more
          </h1>

          {/* FLOATING CARDS */}
          <div className="relative z-10 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/220x280/0f172a/ffffff?text=Card+1"
              className="absolute -translate-x-20 rotate-[-6deg] rounded-xl shadow-xl"
              alt=""
            />
            <img
              src="https://via.placeholder.com/260x320/22c55e/ffffff?text=Empower+Growth"
              className="relative rounded-xl shadow-2xl"
              alt=""
            />
            <img
              src="https://via.placeholder.com/220x280/052e16/ffffff?text=Card+3"
              className="absolute translate-x-24 rotate-[8deg] rounded-xl shadow-xl"
              alt=""
            />
          </div>
        </div>

        {/* INFO ROW */}
        <div className="grid grid-cols-3 px-10 py-8 text-sm border-t border-black/10">
          <div>
            <p className="text-black/40 mb-2">category</p>
            <p className="text-xl font-semibold">summon</p>
          </div>

          <div>
            <p className="text-black/40 mb-2">description</p>
            <p className="leading-relaxed">
              We've partnered with Summon to create a brand-new website to build
              excitement for and launch their product.
            </p>
          </div>

          <div>
            <p className="text-black/40 mb-2">links</p>
            <p className="underline cursor-pointer">View Project</p>
          </div>
        </div>

        {/* GREEN SHOWCASE STRIP */}
        <div className="relative h-[140px] bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-between px-10 text-white">
          <p className="text-2xl font-semibold">showcase</p>

          <div className="flex items-center gap-4">
            <p className="text-lg font-medium">©/22</p>
            <p className="text-2xl font-bold">Empower Growth</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-1 rounded-full bg-white text-green-600 text-xs font-semibold">
              Live
            </button>
            <button className="px-4 py-1 rounded-full border border-white text-xs">
              Showcase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
