import Link from "next/link";
export function MainCards2() {
    const cards = [
        { type: "main", title: "Micro Probe Unit", img: "/pictures/set1.png", bricks: 250 },
        { type: "default", title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245 },
        { type: "default", title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245 },
        { type: "default", title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245 },
        { type: "main", title: "Micro Probe Unit", img: "/pictures/set1.png", bricks: 250 },
        { type: "default", title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245 },
        { type: "default", title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245 },
        { type: "default", title: "Micro Guardian", img: "/pictures/set2.png", bricks: 245 },
    ];

    return (
        <div className="w-[1650px] flex flex-col justify-between m-0 m-auto mt-20">

            <div className="flex flex-row w-full justify-between">
                <p>Products displayed: {cards.length}</p>

                <div className="border-[2px] rounded-[23px] flex flex-row w-[390px] h-[46px] justify-around">
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

            <div className="flex flex-wrap gap-8 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-[388px] h-[491px] rounded-[30px] bg-[#FFFFFF] shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                        <div className="relative flex items-center justify-center w-[388px] h-[330.9px] bg-white rounded-tl-[29.28px] rounded-tr-[29.28px] border-b border-b-[#919191]">
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
                                <p>10+</p>
                                <img src="/pictures/desc2.png" alt="desc" />
                                <p>{card.bricks}</p>
                            </div>

                            <div className="mt-5 mx-auto bg-[#FACC15] w-[183px] h-[44px] rounded-[25.62px] flex items-center justify-center">Discover more</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row gap-5 m-0 m-auto mt-15">
                <img src="/pictures/navleft.png" alt="pictures" />
                <Link href = '/Pages/microBots' className="font-inter font-medium text-[25.59px] leading-none tracking-normal">1</Link>
                <Link href = '/Pages/quadPod' className="font-inter font-medium text-[25.59px] leading-none tracking-normal text-[#6D28D9]">2</Link>
                <Link href = '/Pages/primeAndroid' className="font-inter font-medium text-[25.59px] leading-none tracking-normal">3</Link>
                <img src="/pictures/navright.png" alt="pictures" />
            </div>
        </div>
    );
}