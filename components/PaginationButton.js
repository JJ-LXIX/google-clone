import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RefreshIcon,
} from "@heroicons/react/solid";

const PaginationButton = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex  justify-around max-w-md  text-blue-300 mb-10 ">
      {startIndex >= 10 && (
        <div className="flex w-1/2 justify-between pr-[1.05rem] ">
          <Link
            href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
          >
            <div className="flex  flex-col items-center cursor-pointer hover:underline  ">
              <ChevronLeftIcon className="h-5" />
              <p>Previous</p>
            </div>
          </Link>
          <Link href={`/search?term=${router.query.term}&start=${0}`}>
            <div className="flex   flex-col items-center cursor-pointer hover:underline  ">
              <RefreshIcon className="h-5" />
              <p>Start</p>
            </div>
          </Link>
        </div>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex w-1/2 flex-col items-center cursor-pointer hover:underline ">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButton;
