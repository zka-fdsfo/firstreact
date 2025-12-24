import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black text-white overflow-hidden">
      {/* TOP SECTION */}
      <div className="px-10 pt-10 pb-20 relative">
        {/* Top bar */}
        <div className="flex lg:justify-between flex-row flex-wrap text-xs mb-2.5 tracking-widest uppercase opacity-80">
          <div>
            <p>Drop us a line, and we'll</p>
            <p>get in touch!</p>
            <a
              href="#"
              className="underline mt-2 inline-block hover:opacity-100"
            >
              Schedule a call
            </a>
          </div>

          <div className="flex mt-2.5 gap-8 flex-row flex-wrap">
            <a href="#">Dribbble</a>
            <a href="#">Behance</a>
            <a href="#">LinkedIn</a>
            <a href="#">X (Twitter)</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Center email */}
        <div className="text-center mt-24 mb-20">
          <h1 className="text-[5vw] font-light tracking-wide flex justify-center items-center gap-4">
            HELLO@INSPIRUX.COM
            <span className="text-3xl">↗</span>
          </h1>
          <div className="h-px bg-white/20 w-full mt-6"></div>
        </div>

        {/* Bottom links */}
        <div className="flex justify-between text-xs opacity-70 mt-16">
          <div>
            <p>+44 7463615117</p>
            <p className="mt-2 leading-relaxed">
              LYTCHETT HOUSE, 13 FREELAND <br />
              PARK, WAREHAM ROAD, POOLE <br />
              DORSET, BH16 6FA
            </p>
          </div>

          <div className="space-y-2">
            <p>WORKS</p>
            <p>EXPERTISE</p>
            <p>ABOUT</p>
            <p>INSIGHTS</p>
          </div>

          <div className="space-y-2">
            <p>CAREERS</p>
            <p>CONTACT</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="flex justify-between items-center text-xs opacity-50 mt-16">
          <p>© ALL RIGHTS RESERVED, INSPIRUX 2024</p>
          <p>
            LET'S MAKE YOUR IDEAS TO LIFE <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>

      {/* GREEN BRAND STRIP */}
      <div className="bg-[#b7f000] w-full overflow-hidden">
        <h1 className="text-black font-black text-[18vw] leading-none uppercase translate-x-[5%]">
          inspirux →
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
