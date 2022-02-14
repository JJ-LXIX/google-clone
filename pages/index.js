import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";

import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-evenly text-sm sm:justify-between xl:px-20 ">
        <div className="flex space-x-4 items-center ">
          <p className="Link">About</p>
          <p className="Link">Store</p>
        </div>
        <div className="flex space-x-4 px-4 items-center">
          <p className="Link">Gmail</p>
          <p className="Link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 min-w-fit p-2 rounded-full hover:bg-gray-600 cursor-pointer" />
          {/* Avatar */}
          <Avatar url="https://www.nftsstreet.com/wp-content/uploads/2021/11/unnamed-14.png" />
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="search flex w-full mt-5  max-w-md rounded-full  px-5 py-3 items-center sm:max-w-l lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow bg-inherit"
          />
          <MicrophoneIcon className="h-5 ml-3" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center m-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
