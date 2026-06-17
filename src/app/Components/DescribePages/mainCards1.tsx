"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export function MainCards1() {
    const cards = [
        { title: "Micro Probe Unit", img: "/pictures/set1.png", bricks: 250, links: '/Pages/robot1', age: "10+"},
        { title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245, links: '/Pages/robot1', age: "10+"},
        { title: "Nano Sentinel", img: "/pictures/set3.png", bricks: 248, links: '/Pages/robot1', age: "12+"},
        { title: "Sentinel Defense", img: "/pictures/set4.png", bricks: 250, links: '/Pages/robot1', age: "10+"},
        { title: "Aque Sentinel", img: "/pictures/set5.png", bricks: 275, links: '/Pages/robot1', age: "12+"},
        { title: "Mini Sentinel", img: "/pictures/set6.png", bricks: 250, links: '/Pages/robot1', age: "10+"},
        { title: "Mechanica Sentinel", img: "/pictures/set7.png", bricks: 120, links: '/Pages/robot1', age: "8+"},
        { title: "Pyro Sentinel", img: "/pictures/set8.png", bricks: 310, links: '/Pages/robot1', age: "12+"},
    ];

    const [nearBottom, setNearBottom] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
            setNearBottom(scrolledToBottom);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="w-[90vw] sm:w-[1650px] flex flex-col justify-between mx-auto mt-20">

            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-0 items-center">
                <p className="text-center sm:text-left -mt-7 font-bold sm:mt-0 text-base leading-none tracking-normal font-inter text-[23px]">Products displayed: {cards.length}</p>

                <div className={`${nearBottom ? 'hidden sm:flex' : 'fixed'} bottom-5 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 border-[2px] rounded-[23px] flex flex-row w-[390px] h-[46px] justify-around bg-white z-1 shadow-md sm:shadow-none`}>
                    <div className="flex flex-row items-center justify-center w-full">
                        <p className="text-[23px]">Filters</p>
                        <img src="/pictures/f1.png" alt="filter" className="w-[22px] h-[22px]" />
                    </div>

                    <img src="/pictures/line.png" alt="line" className="h-[43px]" />

                    <div className="flex flex-row items-center justify-center w-full">
                        <p className="text-[23px]">Sort by</p>
                        <img src="/pictures/f2.png" alt="filter" className="w-[22px] h-[22px]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-8 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-[90vw] sm:w-[388px] h-[491px] rounded-[30px] bg-[#FFFFFF] shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                        <div className="relative flex items-center justify-center w-full sm:w-[388px] h-[330.9px] bg-white rounded-tl-[29.28px] rounded-tr-[29.28px] border-b border-b-[#919191]">
                            <img src={card.img} alt={card.title} />

                            <div className="absolute top-3 left-7 w-[68px] h-[68px] bg-white rounded-full flex items-center justify-center shadow">
                                <img src="/pictures/like.png" alt="like" />
                            </div>
                        </div>

                        <div className="flex flex-col mt-3">
                            <p className="text-black font-semibold text-[26.35px] leading-none text-center font-inter">
                                {card.title}
                            </p>

                            <div className="flex flex-row items-center justify-center gap-3 mt-3">
                                <img src="/pictures/desc1.png" alt="desc" />
                                <p>{card.age}</p>
                                <img src="/pictures/brickwall.png" alt="desc" />
                                <p>{card.bricks}</p>
                            </div>

                            <Link href={card.links}><div className="mt-5 mx-auto bg-[#FACC15] w-[183px] h-[44px] rounded-[25.62px] flex items-center justify-center">Discover more</div></Link>
                        </div>
                    </div>
                ))}
            </div>
                    
            <div className="flex flex-row gap-5 mx-auto mt-15 mb-24 sm:mb-0">
                <img src="/pictures/navleft.png" alt="pictures" />
                <Link href='/Pages/microBots' className="font-inter font-medium text-[25.59px] leading-none tracking-normal text-[#6D28D9]">1</Link>
                <Link href='/Pages/quadPod' className="font-inter font-medium text-[25.59px] leading-none tracking-normal">2</Link>
                <Link href='/Pages/primeAndroid' className="font-inter font-medium text-[25.59px] leading-none tracking-normal">3</Link>
                <img src="/pictures/navright.png" alt="pictures" />
            </div>
        </div>
    );
}