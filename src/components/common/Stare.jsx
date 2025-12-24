import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Stare = (p) => {
  const location = useLocation().pathname;
  const overlay = useRef(null);
  const mpage = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onStart: () => {
        gsap.set("body", { overflow: "hidden" }); // 🚫 Disable scrolling
      },
      onComplete: () => {
        gsap.set("body", { overflow: "auto" }); // ✅ Re-enable scrolling
      },
    });

    gsap.set(".stare", { clearProps: "all" });

    tl.set(overlay.current, { autoAlpha: 1 });

    tl.from(".stare", {
      height: 0,
      stagger: 0.15,
    });

    tl.to(".stare", {
      y: "100%",
      stagger: 0.15,
      direction: 0.05,
    });

    tl.set(overlay.current, { autoAlpha: 0 });
    gsap.from(mpage.current, {
      opacity: 0,
      delay: 1.15,
      duration: 1,
      scale: 1.1,
    });
  }, [location]);

  return (
    <>
      <div
        ref={overlay}
        className="fixed inset-0 z-20 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div className="flex h-full w-full">
          <div className="stare w-1/5 h-full bg-black"></div>
          <div className="stare w-1/5 h-full bg-black"></div>
          <div className="stare w-1/5 h-full bg-black"></div>
          <div className="stare w-1/5 h-full bg-black"></div>
          <div className="stare w-1/5 h-full bg-black"></div>
        </div>
      </div>

      <div ref={mpage} className="text-white">
        {p.children}
      </div>
    </>
  );
};

export default Stare;
