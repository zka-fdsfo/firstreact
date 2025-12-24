import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import React, { useRef } from "react";

const Agent = () => {
  const img = useRef(null);
  const imgRef = useRef(null);

  const imgarray = [
    "https://i.pinimg.com/736x/9f/5c/de/9f5cdef4fc3243f620b4760759d5d87c.jpg",
    "https://i.pinimg.com/736x/53/3c/bb/533cbbeb072c7b2c464e5584dfb6b607.jpg",
    "https://i.pinimg.com/474x/41/1c/d8/411cd8f8450d6660bdeae1534e0a2713.jpg",
    "https://i.pinimg.com/736x/59/42/9b/59429b1a06a505e6ec20433908b0c7a3.jpg",
    "https://i.pinimg.com/1200x/29/4a/77/294a779fa315d031395068366c4b91cc.jpg",
    "https://i.pinimg.com/736x/fa/97/c1/fa97c1302fe061fd244f63f18c470251.jpg",
    "https://i.pinimg.com/736x/d4/ea/1a/d4ea1a55d66c2079e9d6eb54f6e29083.jpg",
    "https://i.pinimg.com/736x/51/d9/ed/51d9ed80bf14cb5262e2574523b6dcf7.jpg",
    "https://i.pinimg.com/1200x/33/ef/5a/33ef5a29a31267dbdcf9adc0e9506487.jpg",
    "https://i.pinimg.com/736x/f8/9a/56/f89a5624de941bbe16c18bdad6d3f688.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.to(img.current, {
      scrollTrigger: {
        trigger: img.current,
        start: "top 10%",
        end: "top -140%",
        scrub: 1,
        pin: true,
        pinReparent:true,
        pinType:'transform',

        onUpdate: (self) => {
          let index = Math.floor(self.progress * (imgarray.length - 1));
          imgRef.current.src = imgarray[index];
        },
      },
    });
  });

  return (
    <div className="mb-[300vw] lg:mb-50 ">
      <div className="s1 h-full py-1">
        {/* Floating image container */}
        <div
          ref={img}
          className="absolute lg:h-[20vw] h-[60vw] w-[35vw] 
                     rounded-2xl lg:w-[15vw] lg:rounded-4xl top-[5vw] 
                     overflow-hidden lg:top-[0vw] left-[30vw] 
                     bg-amber-400"
        >
          <img
            ref={imgRef}
            src="https://i.pinimg.com/originals/7b/6d/ef/7b6def1234d467fcc28e77c9cc7e3eda.gif"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>

        {/* Text content */}
        <div className="font-[f2] relative z-20">
          <div className="pt-[55vh]"></div>

          <div className="text-[19vw] leading-[16vw] text-center uppercase">
            Soixan7e <br />
            Douze
          </div>

          <div className="pl-[40%] mt-20">
            <p className="lg:text-4xl text-2xl">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="s2 h-screen w-full">
      <section className="relative w-full min-h-screen bg-black text-white px-4 py-8">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-5">

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[#c8ff00] text-2xl font-bold">207K</p>
                <p className="text-sm">Mentors</p>
                <p className="text-xs text-white/60 mt-2">
                  Expert mentors ready to guide you.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[#c8ff00] text-2xl font-bold">500K</p>
                <p className="text-sm">Active users</p>
                <p className="text-xs text-white/60 mt-2">
                  Users who found their ideal mentor.
                </p>
              </div>
            </div>

            {/* HERO */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
                UNLOCK YOUR <br />
                LEADERSHIP POTENTIAL WITH US!
              </h1>

              <button className="mt-5 w-10 h-10 rounded-full border border-[#c8ff00] text-[#c8ff00] flex items-center justify-center">
                →
              </button>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 min-h-[260px]">
            {/* ✅ WORKING IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=900&q=80"
              className="absolute inset-0 w-full h-full object-cover grayscale"
              alt="mentor"
            />

            <div className="relative z-10 h-full p-6 bg-black/40 flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Book your first <br /> free meeting
                </h2>
                <p className="text-xs text-white/70 mt-2">
                  Get insights into the process and next steps.
                </p>
              </div>

              <button className="self-start px-4 py-2 text-xs rounded-full border border-[#c8ff00] text-[#c8ff00]">
                Get in Touch →
              </button>
            </div>
          </div>
        </div>

        {/* MENTORS */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">Mentors</h2>

          {/* FILTER */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/60">
            <span className="text-[#c8ff00]">All</span>
            <span>UI/UX</span>
            <span>Science & Technology</span>
            <span>Finance & Investment</span>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 min-h-[320px]"
              >
                {/* ✅ SAFE IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  alt="mentor"
                />

                <div className="relative z-10 p-5 h-full bg-black/50 flex flex-col justify-between">
                  <span className="inline-flex items-center gap-2 text-xs bg-white/10 px-3 py-1 rounded-full w-fit">
                    Python Developer
                    <span className="text-[#c8ff00]">4.9 ★</span>
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">Ethan Caldwell</h3>
                    <p className="text-xs text-white/60">
                      20 years of experience
                    </p>

                    <button className="mt-4 w-9 h-9 rounded-full bg-[#c8ff00] text-black flex items-center justify-center">
                      ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

      </div>
    </div>
  );
};

export default Agent;
