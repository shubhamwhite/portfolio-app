import React from 'react';

const TiltText = (props) => {

  return (
    <div id='tiltDiv' ref={props.til} className="mt-28 ml-5">
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
  );
};

export default TiltText;
