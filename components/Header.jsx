"use client";
import React, { useState } from "react";
import AuthModal from "./AuthModal";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  HomeIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import {
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="sticky top-0 z=100 flex bg-white px-4 py-1 shadow-sm items-center">
      <div className="relative flex flex-shrink-0 items-center justify-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="h-[40px] w-[40px]" />
        <img src="/reddit-logo.svg" alt="Logo" className="h-[50px] w-[50px]" />
      </div>
      <div className="mx-7 flex items-center space-x-2 w-[200px] md:w-[300px] text-black">
        <HomeIcon className="h-4 w-4" />
        <p className="ml-2 hidden flex-1 md:inline text-sm font-medium">Home</p>
        <ChevronDownIcon className="h-4 w-4 ml-1 md:ml-4" />
      </div>

      {/*Search  */}

      <form className="flex flex-1 items-center space-x-2 rounded-md border-gray-200 bg-gray-100 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-3" />
        <input
          className="flex=1 bg-transparent outline-none"
          type="text"
          placeholder="Search Posts,Communities.."
        />
        <button type="submit" hidden />
      </form>

      <div className=" mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>

      <div className="ml-3 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>
      {/* signin and signout */}
      <div
        className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        onClick={() => setModalOpen(true)}
      >
        <div className="relative h-5 w-5 flex-shrink-0">
          <img
            objectfit="contain"
            src="/profile.svg"
            alt="profile"
            className="items-center"
            layout="fill"
          />
        </div>
        <p className="text-gray-400 text-xs whitespace-nowrap">Sign In</p>
      </div>
      <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Header;
