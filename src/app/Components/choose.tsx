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
        <div className="w-full flex justify-center mt-15 items-center flex-col">
            
            <p className="text-[#6D28D9] font-inter font-bold text-[40px] leading-[100%] tracking-normal ">For example you can build:</p>

            <div className="items-center flex justify-center flex-col mt-10">
                <img src={mainImage} alt="robot" className="w-[377px] h-[632px]"/>
                <div className="flex flex-row border-[3px] rounded-[40px] p-10">
                    {list.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="robot"
                            className="w-[250px] h-[348px]"
                            onClick={() => handleClick(img)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}