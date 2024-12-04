import React, { useRef, useState } from "react";
import manImage from "/hermes-rivera-6k78FL6hlN8-unsplash.jpg";
import TiltText from "./TiltText";
import Page1Bottom from "./Page1Bottom";
import { useGSAP } from "@gsap/react";

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    // console.log(e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/70)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)

     tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  };

   

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-7 bg-cream1"
    >
      <div
        id='page1-in'
        className="shadow-xl p-20 shadow-gray-700 h-full  rounded-[20px] relative"
        style={{
          backgroundImage: `url(${manImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[4vw] w-[200px] ml-10 flex items-center justify-center rounded-full text-white font-semibold text-[42px]">
          Shubham.io
        </div>

        {/* <TiltText /> */}

        <div id='tiltDiv' ref={tiltRef} className="mt-28 ml-5">
          <h1 className="text-[4vw] font-[anzo4]">
            I AM{" "}
            <span className="bg-gradient-to-r from-[#0ae448] to-[#abff84] text-transparent bg-clip-text">
              NIGHT MODE
            </span>
            ™
          </h1>
          <h1 className="text-[6vw] font-[anzo2] leading-[8vh]">DEVELOPER</h1>
          <h1 className="text-[4vw] font-[anzo4] ">TO HIRE</h1>
        </div>

        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
