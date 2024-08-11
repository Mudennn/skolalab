"use client";

import { motion, stagger, useAnimate } from "framer-motion";

import { IoMenuOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";
import { navVariants } from "@/utils/motion";

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// function useMenuAnimation(isMenuOpen: boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
// animate(".arrow", { rotate: isMenuOpen ? 180 : 0 }, { duration: 0.2 });

//     animate(
//       "ul",
//       {
//         clipPath: isMenuOpen
//           ? "block"
//           : "hidden",
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.5,
//       }
//     );

//     animate(
//       "li",
//       isMenuOpen
//         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//         duration: 0.2,
//         delay: isMenuOpen ? staggerMenuItems : 0,
//       }
//     );
//     animate(
//       "button",
//       isMenuOpen
//         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//         duration: 0.2,
//         delay: isMenuOpen ? staggerMenuItems : 0,
//       }
//     );
//   }, [isMenuOpen]);

//   return scope;
// }

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const scope = useMenuAnimation(isMenuOpen);

  return (
    <motion.nav className="lg:py-8 py-4 relative text-white z-10">
      {/* <div className="h-full md:w-[70%] w-[90%] bg-white/10 backdrop-blur-30 border border-white-opacity-10 backdrop-blur-sm  rounded-[32px] mx-auto py-[8px] px-[24px] flex justify-between items-center"> */}
      <div className="h-full lg:w-[70%]  w-[90%]  mx-auto py-[8px] px-[24px] flex justify-between items-center">
          <a href="/" className="lg:text-3xl text-lg font-bold text-left"><img src="/images/sekolalabs.webp" alt="" className="w-[100px]"/></a>
        <div className="flex justify-between items-center  ">
          <div  className={`xl:static absolute  bg-white xl:bg-transparent xl:text-white text-black xl:items-center items-start xl:gap-8 gap-4 min-h-fit xl:left-none xl:top-none left-1/2 -translate-x-1/2 xl:translate-x-0 top-[-1000px] xl:w-auto w-[90%] xl:h-auto flex xl:flex-row flex-col xl:justify-end xl:rounded-none rounded-[8px] justify-start xl:p-0 p-5${isMenuOpen ? 'block top-[100px] p-5' : 'hidden'}`}>
          <ul className="flex  xl:flex-row flex-col xl:items-center xl:gap-8 gap-4 ">
            <li>
              <a href="/tentang-kami"> Tentang Kami</a>
            </li>
            <li>
              <a href="/hubungi-kami">Hubungi Kami</a>
            </li>
          </ul>
          <button className="primary-button md:w-fit w-full">
            Mula Belajar
          </button>
          </div>
        </div>
        <IoMenuOutline onClick={handleMenuToggle} className="text-3xl cursor-pointer xl:hidden block"/>
      </div>
    </motion.nav>
    
  );
};

export default Navbar;


// <motion.nav ref={scope} variants={navVariants} initial="hidden" whileInView="show" className="py-8 relative text-white z-10">
    //     <div className="h-full md:w-[70%] w-[90%] bg-white/10 backdrop-blur-30 border border-white-opacity-10 backdrop-blur-sm  rounded-[32px] mx-auto py-[8px] px-[24px] ">
    //       <div className="flex justify-between items-center  mx-auto">
    //         <p className="text-3xl font-bold">Skola Labs</p>
    //         <motion.div animate={{  transition:{ type: "tween",  duration: 1, ease: "easeInOut"} }}   className={`md:static absolute  bg-white md:bg-transparent md:text-white text-black md:items-center items-start md:gap-8 gap-4 min-h-fit md:lef-none md:top-none left-0 top-[-1000px] md:w-auto w-full flex md:flex-row flex-col md:justify-end md:rounded-none rounded-[8px] justify-start md:p-0 p-5${isMenuOpen ? 'block top-[64px] p-5' : 'hidden'}`}>
    //           <ul className="flex  md:flex-row flex-col md:items-center md:gap-8 gap-4" style={{
    //       pointerEvents: isMenuOpen ? "auto" : "none",

    //     }}>
    //             <li>
    //               <a href="">Berita</a>
    //             </li>
    //             <li>
    //               <a href=""> Airdrop Hunter</a>
    //             </li>
    //             <li>
    //               <a href=""> Tentang Kami</a>
    //             </li>
    //             <li>
    //               <a href="">Hubungi Kami</a>
    //             </li>
    //           </ul>
    //           <button className="primary-button md:w-fit w-full">Mula Belajar</button>
    //         </motion.div>
    //         <div>
    //         <IoMenuOutline onClick={handleMenuToggle} className="text-3xl cursor-pointer md:hidden"/>
    //         </div>

    //       </div>
    //     </div>
    // </motion.nav>