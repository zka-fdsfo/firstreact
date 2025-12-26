import { useLocation } from "react-router-dom";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import GradientText from "./GradientText";

// For a smoother animation, the gradient should start and end with the same color
  

const ProjectDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return <div className="p-10 text-white">Project not found</div>;
  }

  // detect mobile
  const isMobile = window.innerWidth < 1024;

  // motion values (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      className="relative min-h-screen mt-32 bg-black overflow-hidden "
   
    >
<GradientText
  colors={ ["#9CA3AF", "#ffffff", "#D3FD50", "#ffffff", "#9CA3AF"]
}
  animationSpeed={3}
  showBorder={false}
  className="lg:ml-20 ml-5 custom-class absolute top-24 lg:left-6 
    text-[15vw] lg:text-[11vw]
    font-[f2] uppercase leading-none
    pointer-events-none select-none"
>
    {state.title}
</GradientText>
      {/* BIG BACKGROUND TITLE */}

  {/* <motion.h1
  initial={{ y: 200, opacity: 0 }}
  animate={{ y: 0, opacity: isMobile ? 1 : 0.35 }}
  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
  className="
    absolute top-24 left-6 lg:left-20
    text-[20vw] lg:text-[14vw]
    font-[f2] uppercase leading-none
    pointer-events-none select-none
  "
  style={
    isMobile
      ? {
     
          color: "#d3fd50",
        }
      : {
          
          color: "#d3fd50",
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              420px 420px at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,1),
              rgba(255,255,255,0.35) 55%,
              transparent 75%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              420px 420px at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,1),
              rgba(255,255,255,0.35) 55%,
              transparent 75%
            )
          `,
        }
  }
>
  {state.title}
</motion.h1> */}

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 pt-32  lg:m-5 lg:p-20 lg:pt-32 text-white">

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm uppercase tracking-widest opacity-70"
        >
          {state.category} • {state.year}
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 0.85 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 max-w-md leading-relaxed"
        >
          {state.description}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3 }}
            src={state.img1}
            className="h-full w-full object-cover rounded-xl"
            alt=""
          />

          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.2 }}
            src={state.img2}
            className="h-full w-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default ProjectDetails;
