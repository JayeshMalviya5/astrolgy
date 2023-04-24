import React from "react";

const Header = () => {
  return (
    <div
      className="flex flex-col gap-8 bg-center relative w-full"
    >
      <img src={require("./Images/background.jpg")} alt="" srcset="" className="w-full h-[470px]"/>
      <div className="absolute w-full">
        <div className="flex justify-around items-center h-7 py-9">
          <img src={require("./Images/Logo.png")} alt="" className="w-44" />
          <div className="hidden sm:flex gap-8 text-white font-semibold mr-24">
            <div className="text-[#FD9D54]">Home</div>
            <div>Call with Astrologer</div>
            <div>Live (coming soon)</div>
          </div>
          <img src={require("./Images/user.png")} alt="" />
        </div>
        <div className="flex flex-col mt-7 items-center gap-6 text-white">
          <div className="text-4xl sm:text-6xl font-semibold">"Astrology for clarity"</div>
          <div className="w-4/5 sm:w-1/3 text-center">
            Your Name is a Vedic Astrologer and has expertise in Vaastu and
            Mantra Therapy
          </div>
          <button className="bg-[#D97122] rounded-3xl w-44 h-10 text-xl">
            Consult Now
          </button>
        </div>
        <div className="flex justify-around items-center m-auto text-white w-4/5 sm:w-4/5 mt-14">
          <div className="flex gap-2 items-center">
            <img src={require("./Images/v1.png")} alt="" className="inline" />
            <div className="w-16">24 X 7 Support</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={require("./Images/v2.png")} alt="" className="inline" />
            <div className="w-14">100% Refund</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={require("./Images/v3.png")} alt="" className="inline" />
            <div className="w-16">Private Confidential</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={require("./Images/v4.png")} alt="" className="inline" />
            <div className="w-16">Verified Astrologer</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={require("./Images/v5.png")} alt="" className="inline" />
            <div className="w-16">Secure Payment</div>
          </div>
        </div>
        <div className="flex w-20 m-auto mb-1 mt-10 justify-around">
          <img src={require("./Images/dotFilled.png")} alt="" />
          <img src={require("./Images/dotHollow.png")} alt="" />
          <img src={require("./Images/dotHollow.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header
