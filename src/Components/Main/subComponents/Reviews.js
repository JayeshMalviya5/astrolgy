import React from "react";


const Reviews = () => {
  return (
    <div className="bg-[#F2D2BA] w-3/5 m-auto mt-20 flex relative flex-col justify-center items-center py-16">
      <img src={require("../Images/userReviews.png")} alt="" className="w-64"/>
      <div className="flex flex-col items-center  mt-12 bg-[#FFF5EE] px-32 text-center py-16 w-4/5">
        <div className="flex gap-4 mb-10">
          <img src={require("../Images/starr.png")} alt="" />
          <img src={require("../Images/starr.png")} alt="" />
          <img src={require("../Images/starr.png")} alt="" />
          <img src={require("../Images/starr.png")} alt="" />
          <img src={require("../Images/starr.png")} alt="" />
        </div>
        <div>
          Explore the Mysteries of the Universe with Our Expert Astrology
          Services Explore the Mysteries of the Universe with Our Expert
          Astrology ServicesExplore the Mysteries of the Universe with
        </div>
      </div>
      <div className="flex gap-6 w-3/5 justify-center h-16 border absolute top-[390px]" >
        <img src={require("../Images/m1.png")} alt=""/>
        <img src={require("../Images/m2.png")} alt="" />
        <img src={require("../Images/m3.png")} alt="" />
        <img src={require("../Images/m4.png")} alt="" />
        <img src={require("../Images/w1.png")} alt="" />
        <img src={require("../Images/w2.png")} alt="" />
        <img src={require("../Images/w3.png")} alt="" />
      </div>
    </div>
  );
};

export default Reviews;
