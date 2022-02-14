import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-[#202124]  border-b border-gray-600">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-600 rounded-full shadow-lg max-w-3xl items-center bg-[#2f3032]">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none bg-transparent"
          />
          <XIcon
            onClick={() => {
              searchInputRef.current.value = "";
            }}
            className="h-7 text-gray-200 sm:mr-3 cursor-pointer transition duration-150 transform hover:scale-125"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-300 border-l-2 pl-4 border-gray-600" />
          <SearchIcon className="h-6 text-blue-300 hidden sm:inline-flex " />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://www.nftsstreet.com/wp-content/uploads/2021/11/unnamed-14.png"
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
