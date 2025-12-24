import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="font-[f1] uppercase  pt-4 text-center">
      
      <div className="text-[10vw]  leading-[10vw] lg:text-[8vw] lg:leading-[8vw] flex items-center justify-center">
        L'étincelle
      </div>

      <div className="text-[10vw] leading-[15vw] lg:text-[8vw] lg:leading-[8vw] flex items-center justify-center gap-[2vw]">
        qui

        <div className="h-[12vw] w-[20vw] lg:h-[10vw] lg:w-[20vw] rounded-full overflow-hidden">
          <Video />
        </div>

        génère
      </div>

      <div className="text-[10vw] leading-[15vw] lg:text-[8vw] lg:leading-[8vw] flex items-center justify-center">
        la créativité
      </div>

    </div>
  );
};

export default HomeHeroText;
