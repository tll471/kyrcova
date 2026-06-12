"use client";
import { useState } from "react";

export function Sets()
{
    const setsData = [
        {
            image: "/pictures/scr1.png",
            title: "Unmatched Detail & Premium Quality",
            text: "We don't do generic. Our sets are engineered for true builders, featuring intricate mechanical joints, custom weapons, and high-quality, perfectly fitting bricks. From transparent cockpits to specialized armor plates, every piece is designed to make your model stand out."
        },
        {
            image: "/pictures/scr2.png",
            title: "Built for Display and Play",
            text: "Our models feature advanced articulation. Thanks to sturdy ball joints and reinforced hinge connections, your mechs can hold dynamic battle poses without falling apart, making them perfect for both active play and epic collector displays."
        },
        {
            image: "/pictures/scr3.png",
            title: "Unique Color Palettes & Rare Elements",
            text: "Tired of the same basic colors? We specialize in striking, cyberpunk-inspired aesthetics—mixing cool industrial grays with vibrant neon orange and translucent blue components that pop on any display shelf."
        }
    ];

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % setsData.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + setsData.length) % setsData.length);
    };

    const item = setsData[index];

    return(
        <div className="w-full flex justify-center mt-15 items-center flex-col">
            <p className="text-[#6D28D9] font-inter font-bold text-[24px] sm:text-[40px] leading-[100%] tracking-normal m-0 text-center">Why our sets?</p>

            {/* Desktop: as before */}
            <div className="hidden sm:flex flex-row items-center mt-15">
                <img src="/pictures/right_black.png" alt="arrow" className="mr-10 cursor-pointer" onClick={prev} />

                <div className="bg-[#0D0519] w-[1090px] h-[317px] flex flex-row">
                    <img src={item.image} alt="image"/>
                    <div className="flex items-center flex-col m-10">
                        <p className="font-inter font-semibold text-[28px] leading-[100%] tracking-normal text-[#FACC15] mb-10">{item.title}</p>
                        <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal text-justify text-[#FFFFFF]">{item.text}</p>
                    </div>
                </div>

                <img src="/pictures/left_black.png" alt="arrow" className="ml-10 cursor-pointer" onClick={next} />
            </div>

            {/* Mobile: simple horizontal slider, no arrows */}
            <div className="flex sm:hidden flex-row gap-4 mt-10 overflow-x-auto snap-x snap-mandatory w-[90vw] px-4">
                {setsData.map((s, i) => (
                    <div key={i} className="bg-[#0D0519] w-[85vw] shrink-0 snap-center flex flex-col rounded-[20px] overflow-hidden">
                        <img src={s.image} alt="image" className="w-full h-auto"/>
                        <div className="flex items-center flex-col m-6">
                            <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-normal text-[#FACC15] mb-4 text-center">{s.title}</p>
                            <p className="font-inter font-normal text-[16px] leading-[100%] tracking-normal text-justify text-[#FFFFFF]">{s.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}