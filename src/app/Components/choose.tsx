"use client";
import { useState } from "react";

export function Choose()
{
    const images = [
        "/pictures/r2.png",
        "/pictures/r_3.png",
        "/pictures/r_4.png",
        "/pictures/r_5.png",
        "/pictures/r_6.png",
    ];

    const [mainImage, setMainImage] = useState("/pictures/r1.png");
    const [list, setList] = useState(images);

    const handleClick = (img) => {
        setMainImage(img);

        setList(prev => {
            const filtered = prev.filter(i => i !== img);
            return [mainImage, ...filtered];
        });
    };

    return (
        <div className="w-full flex justify-center mt-15 items-center flex-col px-4">

            <p className="text-[#6D28D9] font-orbitron font-bold text-[24px] sm:text-[40px] leading-[100%] tracking-normal text-center">For example you can build:</p>

            <div className="items-center flex justify-center flex-col mt-10 w-full">
                <img src={mainImage} alt="robot" className="w-[200px] sm:w-[377px] h-[400px] sm:h-[632px]"/>

                <div className="flex flex-row gap-4 sm:gap-0 border-[3px] rounded-[40px]  h-60 sm:h-[378px] p-4 sm:p-10 mt-6 sm:mt-0 overflow-x-auto snap-x snap-mandatory max-w-full sm:max-w-none sm:overflow-visible">
                    {list.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="robot"
                            className="w-[140px] sm:w-[250px] h-auto shrink-0 snap-center cursor-pointer"
                            onClick={() => handleClick(img)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}