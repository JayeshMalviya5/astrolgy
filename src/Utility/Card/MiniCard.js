import React from "react";

const MiniCard = ({ position, title }) => {
  return (
    <div className="border border-[#A95210] w-[160px] flex rounded">
      {position == "left" ? (
        <>
          <div className="flex justify-center w-[50px] bg-[#A95210]">
            <img src={require("../../Logo & Images/Love.png")} alt="" />
          </div>
          <div className="flex w-[110px] ml-3 items-center ">
            {title}
          </div>
        </>
      ) : (
        <>
          <div className="flex w-[110px] ml-4 items-center ">
            {title}
          </div>
          <div className="flex w-[50px] bg-[#A95210]">
            <img src={require("../../Logo & Images/Love.png")} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCard;
