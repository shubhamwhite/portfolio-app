import React from 'react';

const Page6 = () => {
  return (
    <div className="bg-cream1 relative flex items-center justify-center h-screen">
      <img
        className="absolute h-[800px]"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_991,h_570,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
      />
      <video
        autoPlay
        loop
        muted
        className="mb-10 w-[1114px] h-[700px] rounded-3xl object-cover"
        src="https://cdn.pixabay.com/video/2020/08/14/47158-450995605_large.mp4"
      ></video>
    </div>
  );
};

export default Page6;
