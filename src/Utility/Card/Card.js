import React from "react";

const Card = () => {
  return (
    <div className="w-80 flex flex-col relative">
        <img src={require('../../Logo & Images/dummy1.png')} alt="" className="h-full brightness-50 w-full" />
      <div className="text-[#FFFFFF] font-semibold absolute w-full px-4 py-4 mb-10">
        <div className="flex flex-row justify-between mb-28">
          <div>10+ Years</div>
          <img src={require("../../Logo & Images/online.png")} alt="" />
        </div>
        <div>4.5</div>
        <div className="text-2xl">Astrologer</div>
        <div className="text-[#FFDBC0]">Specialties</div>
        <div>Love, Bussiness, Life</div>
        <div>
            <div className="text-[#FFDBC0]">Skills</div>
            <div>Price</div>
        </div>
        <div className="flex flex-row justify-between">
            <div>Vedic Astrology, Kundali,</div>
            <div className="text-[#a2eea2] text-2xl">10/min</div>
        </div>
      </div>
      <div className="absolute top-[20rem]">
        <img src={require('../../Logo & Images/chat.png')} alt="" />
      </div>
    </div>
  );
};

export default Card;
