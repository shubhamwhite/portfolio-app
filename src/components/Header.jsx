import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className="fixed w-full flex items-center justify-end z-10 py-28 px-20">
      <button className="bg-black px-8 text-xl py-3 rounded-full border-2 hover:bg-green-400 hover:text-black">
        Hire me
      </button>
      <i className="ri-more-2-fill text-4xl ml-3" />
    </div>
  );
};

export default Header;
