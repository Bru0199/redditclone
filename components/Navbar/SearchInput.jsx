'use client';

import React from "react";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchInput = () => {
  return (
<div className='flex bg-white h-[44px] sticky w-full items-center justify-center ml-8 mr-7 '>
  {/* Search Icon */}
  <MagnifyingGlassIcon className=" absolute left-2 text-gray-500 h-4 w-4 pointer-events-none" />

  {/* Input field */}
  <Input
    type="text"
    placeholder="Search Reddit..."
    className="pl-10 w-full border border-gray-300 rounded-md text-sm outline-none focus-visible:ring-0"
  />
</div>

);
};

export default SearchInput;
