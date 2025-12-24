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
    <div>
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

      <div className="s2 h-screen w-full"></div>
    </div>
  );
};

export default Agent;
