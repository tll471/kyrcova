"use client";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("main");

  const closeAll = () => {
    setMenuOpen(false);
    setView("main");
  };

  return (
    <div className="flex flex-row justify-center bg-[#FACC15] fixed w-full h-[110px] items-center z-50">
      <div className="font-normal text-[30px] tracking-normal flex flex-row items-center h-[68px] w-full justify-between px-5 sm:justify-evenly sm:gap-15 sm:px-0 sm:mr-40 sm:w-[1250px]">

      <Link href='/' className="w-full h-full flex items-center sm:-ml-5 sm:mr-8">
        <img src="/pictures/Logo.svg" alt="logo" className="sm:-ml-5.5 max-sm:w-[235px] max-sm:h-[41px]"/>
      </Link>

        <img src={menuOpen ? "/pictures/burger2.png" : "/pictures/burger.png"} alt="menu"
          onClick={() => {setMenuOpen(!menuOpen); setView("main");}}
          className="flex sm:hidden w-[50px] h-[50px] cursor-pointer z-50"/>

        <div className="font-orbitron flex flex-row items-center gap-40 w-900 justify-center hidden sm:flex">
          <div className="relative group py-5">
            <div className="flex flex-row items-center">
              <p>Category</p>
              <img src='/pictures/down.png' className="w-[24px] h-[12px]"/>
            </div>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] sm:w[280px] text-center gap-5">
              <Link href="/Pages/microBots" className="px-3 py-1">Micro bots</Link>
              <Link href="/Pages/quadPod" className="px-3 py-1">Quad-Pod Hunter</Link>
              <Link href="/Pages/primeAndroid" className="px-3 py-1">Prime Android</Link>
            </div>
          </div>

          <Link href="/Pages/about" className="font-orbitron">About us</Link>

          <div className="relative group py-5">
            <div className="flex flex-row items-center">
              <p className="font-orbitron">Help</p>
              <img src="/pictures/down.png" className="w-[24px] h-[12px]" />
            </div>
            <div className="absolute -ml-45 top-full hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] w-120 text-center gap-5">
              <Link href="/Pages/assembly" className="px-3 py-1 font-orbitron">Find Assembly Instructions</Link>
              <Link href="/Pages/questions" className="px-3 py-1 font-orbitron">Frequently Asked Questions (FAQ)</Link>
              <Link href="/Pages/contact" className="px-3 py-1 font-orbitron">Contact Us</Link>
              <Link href="/Pages/parts" className="px-3 py-1 font-orbitron">Replacement Parts</Link>
            </div>
          </div>
        </div>
      </div>

      <input type="text" placeholder="Search..." className="hidden md:flex w-[390px] h-[44px] px-4 rounded-[50px] border bg-white text-[18px] -ml-[190px]" />
      <img src="/pictures/Search.png" alt="search" className="-ml-[70px] hidden md:flex"/>

      {menuOpen && (
        <div className="fixed top-[110px] font-orbitron text-[40px] left-0 right-0 bottom-0 bg-[#FACC15] flex flex-col items-center gap-10 text-[28px] z-40 pt-25 sm:hidden">

          {view === "main" && (
            <>
              <p className="cursor-pointer" onClick={() => setView("category")}>Category</p>
              <p className="cursor-pointer" onClick={() => setView("help")}>Help</p>
              <Link href="/Pages/about" onClick={closeAll}>About us</Link>
            </>
          )}

          {view === "category" && (
            <>
              <Link href="/Pages/microBots" onClick={closeAll}>Micro Bots</Link>
              <Link href="/Pages/quadPod" onClick={closeAll}>Quad-Pod Hunter</Link>
              <Link href="/Pages/primeAndroid" onClick={closeAll}>Prime Android</Link>
            </>
          )}

          {view === "help" && (
            <>
              <Link href="/Pages/assembly" onClick={closeAll} className="text-center pl-5 pr-5">Find Assembly Instructions</Link>
              <Link href="/Pages/questions" onClick={closeAll} className="text-center pl-5 pr-5">FAQ</Link>
              <Link href="/Pages/contact" onClick={closeAll} className="text-center pl-5 pr-5">Contact Us</Link>
              <Link href="/Pages/parts" onClick={closeAll} className="text-center pl-5 pr-5">Replacement Parts</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}