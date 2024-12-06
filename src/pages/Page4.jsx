import React from 'react';

const Page4 = () => {
  return (
    <>
      <div className="px-10 py-32 bg-cream1 flex gap-5">
        {/* Left Section */}
        <div className="bg-black rounded-3xl p-10">
          <h1 className="uppercase font-[anzo1] text-[500px] text-blue-400 leading-tight">
            Projects
          </h1>
          <p className="uppercase leading-none font-[anzo2] text-[20px] text-cream1">
            Make Fast API | Web Development
          </p>
          <p className="leading-none font-[anzo3] text-[20px] text-cream1">
            Ricing your website
          </p>
        </div>

        {/* Right Section */}
        <div className="grid gap-2">
          {/* Image */}
          <img
            className="rounded-3xl"
            src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Example"
          />

          {/* Button Section */}
          <div className="bg-black rounded-3xl p-24 flex justify-center">
            <button className="bg-green-500 text-black px-8 py-4 rounded-full font-[anzo4] text-lg shadow-md border hover:bg-blue-600 hover:text-cream1 transition duration-300">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
