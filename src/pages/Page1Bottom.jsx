import { useEffect } from "react";
import gsap from "gsap";

const Page1Bottom = () => {
  useEffect(() => {
    gsap.to(".rotating-img", {
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className=" left-0 p-10 flex items-end justify-between mt-20 bottom-0 w-full">
      <div>
        <h2 className="text-2xl font-[new anzo]">BRAND DEVELOPER | WEBSITE DESIGN</h2>
        <h3 className="text-2xl font-[anzo3] text-gray-400">BESPOKE FREELANCE</h3>
      </div>
      <div className="flex flex-col ">
        <img
          className="rotating-img h-[90px] w-[90px] "
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
          alt="Rotating Logo 1"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
