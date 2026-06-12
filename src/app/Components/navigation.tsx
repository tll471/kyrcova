"use client";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-row justify-center gap-5 bg-[#FACC15] fixed w-full max-w-[440px] sm:max-w-none h-[110px] items-center z-50">
      <div className="font-normal text-[30px] tracking-normal flex flex-row items-center h-[68px] justify-evenly gap-15 items-between sm:mr-40 sm:w-[1250px]">

        <Link href='/' className="w-full h-full flex items-center">
          <img src="/pictures/Logo.png" alt="logo" className="-ml-5.5 max-sm:w-[235px] max-sm:h-[41px]"/>
        </Link>

        <img src={menuOpen ? "/pictures/burger2.png" : "/pictures/burger.png"} alt="menu" onClick={() => setMenuOpen(!menuOpen)} className="flex sm:hidden w-[50px] h-[50px] cursor-pointer z-50"/>

        <div className="flex flex-row items-center gap-40 w-900 justify-center hidden sm:flex">
          <div className="relative group py-5">
            <div className="flex flex-row items-center">
              <p>Category</p>
              <img src='/pictures/down.png' className="w-[24px] h-[12px]"/>
            </div>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] w-40 text-center gap-5">
              <p className="bg-[#FACC15] px-3 py-1">Мда</p>
              <p className="bg-[#FACC15] px-3 py-1">Мда</p>
              <p className="bg-[#FACC15] px-3 py-1">Мда</p>
              <p className="bg-[#FACC15] px-3 py-1">Мда</p>
            </div>
          </div>

          <Link href="/Pages/about">About us</Link>

          <div className="relative group py-5">
            <div className="flex flex-row items-center">
              <p>Help</p>
              <img src="/pictures/down.png" className="w-[24px] h-[12px]" />
            </div>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col shadow-lg rounded-md p-3 text-[20px] bg-[#FACC15] w-120 text-center gap-5">
              <Link href="/Pages/assembly" className="px-3 py-1">Find Assembly Instructions</Link>
              <Link href="/Pages/questions" className="px-3 py-1">Frequently Asked Questions (FAQ)</Link>
              <Link href="/Pages/contact" className="px-3 py-1">Contact Us</Link>
              <Link href="/Pages/parts" className="px-3 py-1">Replacement Parts</Link>
            </div>
          </div>
        </div>
      </div>

      <input type="text" placeholder="Search..." className="hidden md:flex w-[390px] h-[44px] px-4 rounded-[50px] border bg-white text-[18px] -ml-[190px]" />
      <img src="/pictures/Search.png" alt="search" className="-ml-[70px] hidden md:flex"/>

      {menuOpen && (
        <div className="fixed top-[110px] left-0 w-full h-[calc(100vh-110px)] bg-[#FACC15] flex flex-col items-center gap-10 text-[28px] z-40 pt-10 sm:hidden">

          <div className="flex flex-col items-center gap-3 w-full">
            <div className="flex items-center gap-2">
              <p>Category</p>
              <img src='/pictures/down.png' className="w-[24px] h-[12px]"/>
            </div>
            <div className="flex flex-col text-[20px] text-center gap-3">
              <p>Мда</p>
              <p>Мда</p>
              <p>Мда</p>
              <p>Мда</p>
            </div>
          </div>

          <Link href="/Pages/about" onClick={() => setMenuOpen(false)}>About us</Link>

          <div className="flex flex-col items-center gap-3 w-full">
            <div className="flex items-center gap-2">
              <p>Help</p>
              <img src="/pictures/down.png" className="w-[24px] h-[12px]" />
            </div>
            <div className="flex flex-col text-[20px] text-center gap-3">
              <Link href="/Pages/assembly" onClick={() => setMenuOpen(false)}>Find Assembly Instructions</Link>
              <Link href="/Pages/questions" onClick={() => setMenuOpen(false)}>FAQ</Link>
              <Link href="/Pages/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              <Link href="/Pages/parts" onClick={() => setMenuOpen(false)}>Replacement Parts</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}