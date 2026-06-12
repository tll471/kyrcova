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
        <div className="w-[90vw] sm:w-[1650px] max-w-[1650px] h-auto sm:h-[378px] bg-[#0D0519] rounded-[40px] m-auto mt-10 flex flex-col sm:flex-row items-center justify-around py-8 sm:py-0 gap-6 sm:gap-0">
            <div className="flex flex-col items-center sm:flex-row">
                <p className="font-inter font-semibold text-[38px] sm:text-[38px] leading-[100%] tracking-normal text-[#FACC15] text-center mb-5 sm:mb-0">Explore Limited Sets</p>
                <img src="/pictures/right_robot.png" alt="arrow" className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] ml-3 transform rotate-90 sm:rotate-0"/>
            </div>

            <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row">
                <img src="/pictures/rob_1.png" alt="robot" className="w-[35%] w-[215.38462829589844px] h-[336px] sm:w-auto h-auto"/>
                <img src="/pictures/rob_2.png" alt="robot" className="w-[35%] w-[215.38462829589844px] h-[336px] sm:w-auto h-auto"/>
            </div>

            <div className="flex flex-col items-center">
                <p className="font-inter font-medium text-[18px] sm:text-[30px] leading-[100%] tracking-normal text-white mb-3 sm:mb-5 text-center px-4">
                    Available for a limited time only.
                </p>

                <div className="rounded-[57px] border border-yellow-400 px-6 sm:px-10 w-[313px] h-[114px] flex items-center justify-center">
                    <p className="font-inter font-medium text-[90px] sm:text-[90px] leading-[140%] tracking-normal align-middle tabular-nums text-white -my-1 sm:-my-3">
                        {time}
                    </p>
                </div>
            </div>
        </div>
    )
}