import React from 'react';


const Header = () => {
  return (
    <div className="fixed w-full flex items-center justify-end z-10 py-28 px-40">
      <button className="bg-black px-8 text-xl py-3 rounded-full border-[1px] hover:bg-gradient-to-r from-[#0ae448] to-[#abff84] hover:text-black">
        Download
      </button>
    </div>
  );
};

export default Header;
