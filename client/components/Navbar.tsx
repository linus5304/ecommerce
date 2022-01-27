import React from "react"
import Image from "next/image"

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex flex-row justify-between bg-slate-700 h-16 items-center px-4">
      <div className="flex space-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white h-8 w-8 border border-white rounded cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div className="text-2xl text-white cursor-pointer">amazona</div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="h-10 border border-yellow-300 rounded-l"
        />
        <a className=" bg-yellow-300 rounded-r p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </a>
      </div>
      <div className="flex space-x-4">
        <div className="font-semibold text-gray-100 hover:text-orange-300 cursor-pointer">
          Cart
        </div>
        <div className="font-semibold text-gray-100 hover:text-orange-300 cursor-pointer">
          Sign In
        </div>
      </div>
    </div>
  )
}
