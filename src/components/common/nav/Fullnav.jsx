import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../../context/Navcontext";


const Fullnav = () => {
  const fullnav = useRef(null);
  const fullscreennav = useRef(null);
  const [navopen, setnavopen] = useContext(Navbar);
  const tl = useRef(null);



  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current

      .from(".s", {
        height: 0,
        stagger: 0.15,
        ease: "power4.inOut",
      })

      .from(".link", {
        opacity: 0,
        rotationX: 90,
        transformOrigin: "top center",
        transformPerspective: 1000,
        stagger: 0.2,
        ease: "power4.out",
      }, "-=0.2")
      .from(".l", {
        opacity: 0,
        y: 30,
        duration: 0,   // ⬅ faster (was 2.5)
        ease: "power2.out",
      }, "+=0.1");

  }, []);
  useGSAP(() => {
    if (navopen) {
      gsap.set("#fullscreennav", { display: "block" });
      tl.current.timeScale(1.5).play();
    } else {
      tl.current.timeScale(2.8).reverse().eventCallback(
        "onReverseComplete",
        () => gsap.set("#fullscreennav", { display: "none" })
      );
    }
  }, [navopen]);


  return (
    <div ref={fullscreennav}
      id="fullscreennav"
      className="h-screen w-screen text-center  hidden  absolute z-50 text-white  overflow-hidden "
    >
      <div className="navli h-screen w-screen fixed overflow-hidden ">
        <div className="flex h-full w-full">
          <div className="s w-1/5 h-full bg-black "></div>
          <div className="s w-1/5 h-full bg-black "></div>
          <div className="s w-1/5 h-full bg-black "></div>
          <div className="s w-1/5 h-full bg-black "></div>
          <div className="s w-1/5 h-full bg-black "></div>
        </div>
      </div>
      <div ref={fullnav} className=" relative  h-screen w-screen ">
        <div className="l flex w-full justify-between p-5 items-start ">
          <div className=" ">
            <div className=" w-30 h-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
                className=" h-full w-full"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div onClick={() => {
            setnavopen(false)
          }} className="relative h-25 w-25 cursor-pointer flex items-center justify-center">
            <span className="absolute h-full w-[0.2vw] bg-[#D3FD50] rotate-45"></span>
            <span className="absolute h-full w-[0.2vw] bg-[#D3FD50] -rotate-45"></span>
          </div>
        </div>
        <div className=" flex h-max flex-col ">
           <a href="/">
          <div className="link origin-top border-t-[0.1px] relative h-auto overflow-hidden">
            <h1 className="font-[f2] text-[8vw] uppercase pt-5 leading-20 ">
              Home
            </h1>
            <div className="movelink absolute top-0 left-0 w-full h-full grid place-items-center  items-center overflow-hidden bg-[#93c400] text-black">
              <div className="relative flex w-max gap-6">
                <div className="moveX flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>

                <div className="moveX moveX--clone flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          </a>
          <a href="/project">
          <div className="link origin-top border-t-[0.1px] relative h-auto overflow-hidden">
            <h1 className="font-[f2] text-[8vw] uppercase pt-5 leading-20 ">
              Project
            </h1>
            <div className="movelink absolute top-0 left-0 w-full h-full grid place-items-center  items-center overflow-hidden bg-[#93c400] text-black">
              <div className="relative flex w-max gap-6">
                <div className="moveX flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>

                <div className="moveX moveX--clone flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          </a>
           <a href="/agent">
          <div className="link origin-top border-t-[0.1px] relative h-auto overflow-hidden">
      
            <h1 className="font-[f2] text-[8vw] uppercase pt-5 leading-20 ">
              Agent
            </h1>
            <div className="movelink absolute top-0 left-0 w-full h-full grid place-items-center  items-center overflow-hidden bg-[#93c400] text-black">
              <div className="relative flex w-max gap-6">
                <div className="moveX flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>

                <div className="moveX moveX--clone flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          </a>
          <a href="/other">
          <div className="link origin-top border-t-[0.1px] relative h-auto overflow-hidden">
            <h1 className="font-[f2] text-[8vw] uppercase pt-5 leading-20 ">
              Other
            </h1>
            <div className="movelink absolute top-0 left-0 w-full h-full grid place-items-center  items-center overflow-hidden bg-[#93c400] text-black">
              <div className="relative flex w-max gap-6">
                <div className="moveX flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>

                <div className="moveX moveX--clone flex items-center flex-nowrap gap-6">
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[f2]  lg:text-[6vw] text-[9vw] uppercase">
                    project tpiuy
                  </h2>
                  <img
                    className="w-32 h-16 rounded-full object-cover"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fullnav;
