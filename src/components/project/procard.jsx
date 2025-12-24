import { useGSAP } from "@gsap/react";
import React from "react";

const Procard = (p) => {

  
  return (
    <div className="w-full min-h-[40vw] flex flex-col lg:flex-row gap-2 mb-2">
      
      {/* CARD 1 */}
      <div className="group lg:w-1/2 w-full h-full lg:h-[30vw] relative overflow-hidden hover:rounded-2xl transition-all">
        <img
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            scale-105 lg:scale-100
            active:scale-110 lg:group-hover:scale-110
          "
          src={p.img1}
          alt=""
        />

        <div className="
          absolute inset-0
          bg-black/90
          flex items-center justify-center
          opacity-0
          active:opacity-100 lg:group-hover:opacity-100
          transition-opacity duration-500
        ">
          <h2 className="uppercase font-[f1] lg:text-5xl border-2 rounded-full p-2 lg:p-5 pt-3 text-white">
            joy Bangla
          </h2>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="group lg:w-1/2 w-full h-full lg:h-[30vw] relative overflow-hidden  hover:rounded-2xl transition-all">
        <img
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            scale-105 lg:scale-100
            active:scale-110 lg:group-hover:scale-110
          "
          src={p.img2}
          alt=""
        />

        <div className="
          absolute inset-0
          bg-black/90
          flex items-center justify-center
          opacity-0
          active:opacity-100 lg:group-hover:opacity-100
          transition-opacity duration-500
        ">
          <h2 className="uppercase font-[f1] lg:text-5xl border-2 rounded-full p-2 lg:p-5 pt-3 text-white">
            joy Banglap
          </h2>
        </div>
      </div>

    </div>
  );
};

export default Procard;
