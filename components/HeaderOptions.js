import React from "react";
import HeaderOptionItems from "./HeaderOptionItems";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-200 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOptionItems Icon={SearchIcon} title="All" selected />
        <HeaderOptionItems Icon={PhotographIcon} title="Images" />
        <HeaderOptionItems Icon={PlayIcon} title="Videos" />
        <HeaderOptionItems Icon={NewspaperIcon} title="News" />
        <HeaderOptionItems Icon={MapIcon} title="Maps" />
        <HeaderOptionItems Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="Link">Settings</p>
        <p className="Link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
