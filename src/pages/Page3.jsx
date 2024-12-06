import React from 'react';
import amazon from '/brand/amazon-high-resolution-logo-transparent.png';
import nokia from '/brand/nokia-high-resolution-logo-transparent.png';
import bmw from '/brand/bmw-high-resolution-logo-transparent.png';
import firebolt from '/brand/firebolt-high-resolution-logo-transparent.png';
import space from '/brand/space-high-resolution-logo-transparent.png';

const Page3 = () => {
  return (
    <div className="bg-cream1 flex items-center justify-center gap-40">
      <img
        className="h-[100px] transition-transform duration-100 hover:scale-110"
        src={amazon}
        alt="Amazon"
      />
      <img
        className="h-[100px] transition-transform duration-100 hover:scale-110"
        src={nokia}
        alt="Nokia"
      />
      <img
        className="h-[100px] transition-transform duration-100 hover:scale-110"
        src={bmw}
        alt="BMW"
      />
      <img
        className="h-[100px] transition-transform duration-100 hover:scale-110"
        src={firebolt}
        alt="Firebolt"
      />
      <img
        className="h-[100px] transition-transform duration-100 hover:scale-110"
        src={space}
        alt="Space"
      />
    </div>
  );
};

export default Page3;