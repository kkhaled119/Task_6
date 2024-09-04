import React from "react";
import { CiMobile2 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatch } from "react-icons/tb";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { TbClothesRack } from "react-icons/tb";

const Browse = () => {
  return (
    <div className="pb-20">
      <small className="text-red-500">
        <span className="w-[50px] h-[90px] bg-red-500 border  rounded-sm">
          kk
        </span>{" "}
        Categories
      </small>
      <h2 className="text-3xl pt-4 font-semibold">Browse By Category</h2>
      <div className="pt-10 flex items-start gap-10">
        <div>
          <small>Phone</small>
          <CiMobile2
            size={80}
            className="border-2 border-black w-[120px] h-[100px]"
          />
        </div>
        <div>
          <small>Computers</small>
          <HiOutlineComputerDesktop
            size={60}
            className="border-2 border-black w-[120px] h-[100px]"
          />
        </div>
        <div>
          <small>Smart Watch</small>
          <TbDeviceWatch
            size={60}
            className="border-2 border-black w-[120px] h-[100px]"
          />
        </div>
        <div>
          <small>Camera</small>
          <CiCamera
            size={60}
            className="border-2 border-black w-[120px] h-[100px]"
          />
        </div>
        <div>
          <small>Camera</small>
          <CiHeadphones
            size={20}
            className="border-2 border-black bg-red-500 text-white w-[120px] h-[100px]"
          />
        </div>
        <div>
          <small>Gaming</small>
          <SiYoutubegaming
            size={60}
            className="border-2 border-black w-[120px] h-[100px]"
          />
        </div>
        <div>
          <small>Cloth</small>
          <TbClothesRack
            size={60}
            className="border-2 border-black w-[120px] h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
