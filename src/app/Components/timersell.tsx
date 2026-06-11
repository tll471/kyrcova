"use client";
import { useEffect, useState } from "react";

export function Timersell()
{
    const [seconds, setSeconds] = useState(1800);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => (prev <= 0 ? 0 : prev - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    const time = `${minutes}:${secs}`;

    return (
        <div className="w-[1650px] h-[378px] bg-[#0D0519] rounded-[40px] m-0 m-auto mt-10 flex items-center justify-around">
            <div className="flex flex-row items-center">
                <p className="font-inter font-semibold text-[38px] leading-[100%] tracking-normal text-[#FACC15]">Explore Limited Sets</p>
                <img src="/pictures/right_robot.png" alt="arrow" className="w-[50px] h-[50px] ml-3"/>
            </div>

            <div className="flex flex-row">
                <img src="/pictures/rob_1.png" alt="robot" />
                <img src="/pictures/rob_2.png" alt="robot" />
            </div>

            <div className="flex flex-col items-center">
                <p className="font-inter font-medium text-[30px] leading-[100%] tracking-normal text-white mb-5">
                    Available for a limited time only.
                </p>

                <div className="rounded-[3px] border border-yellow-400 rounded-[57px] pl-10 pr-10">
                    <p className="font-inter font-medium text-[90px] leading-[140%] tracking-normal align-middle tabular-nums text-white -mt-3 -mb-3">
                        {time}
                    </p>
                </div>
            </div>
        </div>
    )
}