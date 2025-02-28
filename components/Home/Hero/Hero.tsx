import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div></div>
          {/* Image Content */}
          <div className="hidden lg:block">
            <img
              src="/public/hero.png"
              alt="Hero Png"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
