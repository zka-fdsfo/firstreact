import React from "react";
import Procard from "../components/project/Procard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger);

const project = () => {
  const cardimg = [
    {
      img1: "https://i.pinimg.com/736x/c9/85/dd/c985dda6a2e6ba4f060206456494d882.jpg",
      img2: "https://i.pinimg.com/1200x/68/03/d5/6803d5dc06b1bdfa31b3dd2f837e97d4.jpg",
    },
    {
      img1: "https://i.pinimg.com/1200x/55/ca/27/55ca27d07776728ae037ebdad7d6c0e9.jpg",
      img2: "https://i.pinimg.com/736x/f7/9d/23/f79d23e76c43f0b3d15ecf66339ca1c4.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/44/4a/7a/444a7a01399fc1cd140f4975ed9587c9.jpg",
      img2: "https://i.pinimg.com/736x/53/83/d4/5383d4dd98bd9439d458969b81af0a6e.jpg",
    },
    {
      img1: "https://i.pinimg.com/1200x/99/15/f8/9915f833d5a8ac590c10da940a486f4d.jpg",
      img2: "https://i.pinimg.com/1200x/0c/fe/44/0cfe44921f1b996aa4ae7b73225f255f.jpg",
    },
 {
  img1: "https://media.licdn.com/dms/image/v2/D5622AQGWQEplFbu5UA/feedshare-shrink_800/B56ZiJgae6H0As-/0/1754653634292?e=1767830400&v=beta&t=YMRb3rwuV9AixtOQFmTFilioe4cr7lYzYsxOZFsHOQM",
  img2: "https://media.licdn.com/dms/image/v2/D5622AQEpWMto1KNecg/feedshare-shrink_800/B56ZiJgQDvHUAg-/0/1754653591842?e=1767830400&v=beta&t=zCcAZngmr-tykijIs9iiNyAjsh3-Gyeg_sPl3h0pq78",
}
,
   {
  img1: "https://media.licdn.com/dms/image/v2/D5622AQGmB6qQ-2uz7g/feedshare-shrink_800/B56ZlxebrOH8Ag-/0/1758545434217?e=1767830400&v=beta&t=r0m-RF0223vOhWwBY4kJ8Efsd-GCG8luwrgQG0TLAYc",
  img2: "https://media.licdn.com/dms/image/v2/D5622AQFlJs5DnaN-ZQ/feedshare-shrink_800/B56ZiJgmFAG4Ak-/0/1754653681663?e=1767830400&v=beta&t=_ZCCULPxCfTa-KedjfUxbxfMDE6EmhwbRcCyN_G6DNM",
},

  ];

useGSAP(() => {
  const mm = gsap.matchMedia();

  // DESKTOP (lg screens)
  mm.add("(min-width: 1024px)", () => {
    gsap.from(".hero", {
      stagger: 0.2,
      height: "5vw",
      scrollTrigger: {
        trigger: ".lol",
        start: "top 90%",
        end: "top -250%",
        scrub: true,
      },
    });
  });

  // MOBILE (phones)
  mm.add("(max-width: 1023px)", () => {
    gsap.from(".hero", {
      stagger: 0.15,
      y: 80,          // move from bottom instead of height
      opacity: 0,
      scrollTrigger: {
        trigger: ".lol",
        start: "top 95%",
        end: "top 20%",
        scrub: 1,
      },
    });
  });

  return () => mm.revert();
});


  return (
    <div className="lg:p-2 p-5">
      <div className="pt-50 lg:pt-[20vw]">
        <h2 className="font-[f2] lg:text-[10vw] text-[15vw] uppercase">project</h2>
      </div>

      <div className="lol lg:-mt-5 mb-20">
        {cardimg.map((item, idx) => (
          <div key={idx} className="hero w-full lg:h-full h-full  flex flex-col">
            <Procard img1={item.img1} img2={item.img2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
