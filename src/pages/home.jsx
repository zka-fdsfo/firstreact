import React from "react";
import Video from "../components/home/video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomtext from "../components/home/HomeBottomtext";
const home = () => {
  return (
    <div>
      <div className="h-full w-screen bg-black text-white opacity-30 fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col  justify-end-safe lg:p-[0vw] p-[10vw] ">
        <HomeHeroText />
        <p class="ml-auto lg:text-[1.2vw] w-[12.75rem] lg:w-auto lg:mt-0 mt-20 lg:max-w-md text-left text-[2.5vw] leading-[5vm]  h-auto relative right-[-0%]  ">
          K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait .
        </p>

        <HomeBottomtext />
      </div>
    </div>
  );
};

export default home;
