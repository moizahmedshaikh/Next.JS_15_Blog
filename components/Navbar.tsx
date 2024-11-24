"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";



const Navbar = () => {
  const [isMenuopen, setMenuopen] = useState(false);

  function toggle() {
    setMenuopen(!isMenuopen);
  }

  useEffect(() => {
    const sidebar = document.querySelector(".navbar") as HTMLElement;

    if (sidebar) {
      if (isMenuopen) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenuopen]);

  return (
    <header className="h-[60px] border-gray-200 border-b flex justify-between px-10 items-center">
      <div className="flex gap-4">
        <h1 className="font-[700] text-3xl">Moiz Ahmed</h1>
        <input
          type="text"
          placeholder="search"
          className="border-gray-200 px-2 border-[1px] rounded-2xl md:flex hidden "
        />
      </div>

      {/* Icon toggle for Mobile Menu */}
      <div onClick={toggle} className="md:hidden block cursor-pointer absolute top-5 right-10">
        <div
          className={`transition-transform duration-300 ease-linear ${
            isMenuopen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isMenuopen ? (
            <MdOutlineClose size={30} /> // Close Icon
          ) : (
            <MdOutlineMenu size={30} /> // Menu Icon
          )}
        </div>
      </div>

      {/* Mobile  */}
      <div>
        <ul className="navbar absolute right-0 top-[74px] rounded-sm  items-center border-[1px] border-gray-500 justify-center w-[60%] h-[30vh] bg-[#ffffff] text-black  hidden flex-col px-9 py-5 font-semibold">
          <li className="py-3 border-b-[1px] border-b-black">
            <Link onClick={toggle} href={"/"}>Home</Link>
          </li>
          <li className="py-3 border-b-[1px] border-b-black">
            <Link onClick={toggle} href={"/About"}>About</Link>
          </li>
          <li className="py-3 border-b-[1px] ">
            <Link onClick={toggle} href={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Laptop */}
      <ul className="md:flex items-center gap-5 text-gray-600 hidden">
        <Link className="hover:text-black" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-black" href={"/About"}>
          About
        </Link>
        <Link className="hover:text-black" href={"/Contact"}>
          Contact Us
        </Link>
        <div className="flex items-center gap-2">
          <p className="px-2 py-1 text-sm rounded-2xl text-white bg-[#197e16] hover:bg-[#165e14] cursor-pointer">
            sing in
          </p>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
