import React, { useRef, useState } from "react";
import manImage from "/hermes-rivera-6k78FL6hlN8-unsplash.jpg";
import TiltText from "./TiltText";
import Page1Bottom from "./Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    // console.log(e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)

     tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  };

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:2,
      // ease: 'power4.out'
      ease:'elastic.out(1,0.2)'
    })
  },[xVal,yVal])

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
        <div className="h-[4vw] w-[200px] ml-10 flex items-center justify-center rounded-full text-white font-[anzo3] text-[42px]">
          Shubham.io
        </div>

        <TiltText til={tiltRef} />     

        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
