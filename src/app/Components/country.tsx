"use client";
import { useState } from "react";

export function Country() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Ukraine");

  const countries = ["Ukraine", "Israel", "Iran", "Pakistan", "USA"];

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="w-[266px] h-[70px] rounded-[10px] pt-[15px] pr-[4px] pb-[15px] pl-[19px] gap-[50px] flex flex-row items-center bg-[#D9D9D9] justify-evenly cursor-pointer"
      >
        <p className="font-normal text-[26px] leading-none tracking-normal">
          {selected}
        </p>
        <img src="/pictures/country.png" alt="country" className="w-[40px] h-[40px]" />
      </div>

      {open && (
        <div className="absolute -top-[230px] w-[266px] bg-[#D9D9D9] rounded-[10px] shadow-lg">
        {countries.map((c) => (
            <div
            key={c}
            onClick={() => {
                setSelected(c);
                setOpen(false);
            }}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[20px] flex items-center justify-between"
            >
            <div className="flex justify-left pl-10">
                <img src="/pictures/country.png" alt="flag" className="w-[24px] h-[24px] mr-5" />
                <p>{c}</p>
            </div>
            </div>
        ))}
        </div>
      )}
    </div>
  );
}