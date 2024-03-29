"use client";
import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import SignInButton from "@/components/SignInButton";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <div className={"shadow-sm border-b sticky top-0 bg-white z-30"}>
      <div
        className={
          "flex items-center justify-between max-w-6xl mx-4 xl:mx-auto"
        }
      >
        <div className={""}>
          <div
            className={
              "cursor-pointer h-24 w-24 relative hidden lg:inline-grid"
            }
          >
            <Image
              alt={"Instagram"}
              src={
                "https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              }
              layout={"fill"}
              className={"object-contain"}
              onClick={() => router.push("/")}
            />
          </div>
          <div className={"cursor-pointer h-24 w-10 relative  lg:hidden"}>
            <Image
              alt={"Instagram"}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
              }
              layout={"fill"}
              className={"object-contain"}
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <div className={"relative mt-1"}>
          <div className={"absolute top-2 left-2"}>
            <MagnifyingGlassIcon className={"h-5 text-gray-500 "} />
          </div>
          <input
            type={"text"}
            placeholder={"Search"}
            className={
              "bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
            }
          />
        </div>
        {/*right*/}
        <div className={"flex space-x-4 items-center"}>
          <HomeIcon
            className={
              "hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            }
            onClick={() => router.push("/")}
          />
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
