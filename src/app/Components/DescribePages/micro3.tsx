import Link from "next/link"

export function Micro3() {
    return (
        <div className="flex flex-col mt-35 justify-center items-center px-4 sm:px-0">
            <div className="flex flex-row h-[24px] sm:-ml-352 mb-0 items-center">
                <Link href="/" className="font-normal text-[20px] text-[#6D28D9]">Main page</Link>
                <img src="/pictures/right_light.png" alt="arrow" className="w-[24px] h-[24px]"/>
                <p className="font-normal text-[20px]">Prime Android</p>
            </div>

            <div className="w-full sm:w-[86vw] h-[120px] bg-[#0D0519] flex items-center justify-center mt-7 -mb-5 sm:mb-0">
                <div className="flex items-start">
                    <p className="text-white font-medium text-[38px] leading-none tracking-normal">Prime Android</p>
                    <span className="text-white font-medium text-[12px] leading-none tracking-normal ml-1 mt-1">TM</span>
                </div>
            </div>

            <p className="w-[90vw] sm:w-[1650px] mx-auto flex self-center mt-10 text-[16px] sm:text-[18px]">Welcome to Prime Android™—the absolute pinnacle of our robotics collection and the ultimate masterpiece challenge designed exclusively for master builders! As the most advanced and hardest level of building we offer, this premium kit pushes your engineering skills to their absolute limit with a highly complex, human-scale internal skeleton, and high-density technical detailing. Featuring sophisticated overlapping armor plating, exposed precision gear systems, and an imposing, ultra-detailed display structure, every single step of this build requires maximum focus and strategic assembly.</p>
        </div>
    )
}