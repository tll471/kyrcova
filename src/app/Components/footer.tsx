"use client";
import Link from "next/link";
import { Country } from "./country";

export function Footer()
{
    return(
            <div className="bg-[#FACC15] mt-20 w-full sm:h-[316px] flex justify-center items-center py-10 sm:py-0">
                <div className="w-[90vw] sm:w-[1649px] sm:h-[242px] flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-0">

                <div className="flex flex-col items-center sm:items-start">
                    <img src="/pictures/Logo.png" alt="logo" className="ml-0 w-[250px] sm:w-auto"/>
                    <div className="-mb-10 mt-10 ml-13 hidden sm:block">
                        <Country></Country>
                    </div>
                </div>

                <div className="hidden sm:flex flex-col gap-5">
                    <p className="font-orbitron font-bold text-[30px] leading-[100%] tracking-normal">Help</p>
                    <Link href="/Pages/assembly" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Find Assembly Instructions</Link>
                    <Link href="/Pages/questions" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Frequently Asked Questions (FAQ)</Link>
                    <Link href="/Pages/contact" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Contact Us</Link>
                    <Link href="/Pages/parts" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Replacement Parts</Link>
                </div>

                <div className="hidden sm:flex flex-col gap-5">
                    <p className="font-orbitron font-bold text-[30px] leading-[100%] tracking-normal">Category</p>
                    <Link href="/Pages/microBots" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Micro bots</Link>
                    <Link href="/Pages/quadPod" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Quad-Pod Hunter</Link>
                    <Link href="/Pages/primeAndroid" className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Prime Android</Link>
                </div>

                <div className="flex flex-row gap-3 w-[132px] h-[42px] flex justify-center sm:flex">
                    <img src="/pictures/l1.png" alt="links" />
                    <img src="/pictures/l2.png" alt="links" />
                    <img src="/pictures/l3.png" alt="links" className="-p-1"/>
                </div>
            </div>
        </div>
    )
}