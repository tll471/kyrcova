export function OurRobots()
{
    return(
        <div className="flex flex-col items-center w-full mt-20">
            <p className="font-orbitron font-semibold text-[50px] leading-none tracking-normal mb-10">Our Robots</p>

            <div className="sm:hidden flex flex-row overflow-x-auto gap-6 w-full px-6 snap-x snap-mandatory scrollbar-hide mb-10">
                <img src="/pictures/robot1.png" alt="robot" className="snap-center min-w-[280px]" />
                <img src="/pictures/robot2.png" alt="robot" className="snap-center min-w-[280px]" />
                <img src="/pictures/robot3.png" alt="robot" className="snap-center min-w-[280px]" />
                <img src="/pictures/robot4.png" alt="robot" className="snap-center min-w-[280px]" />
            </div>

            <div className="hidden sm:flex flex-row justify-center gap-55 mb-10">
                <img src="/pictures/robot1.png" alt="robot" />
                <img src="/pictures/robot2.png" alt="robot" />
                <img src="/pictures/robot3.png" alt="robot" />
                <img src="/pictures/robot4.png" alt="robot" />
            </div>

            <div className="bg-[#FACC15] w-[195px] h-[40px] flex justify-center items-center rounded-[10px] font-inter font-semibold text-[20px] leading-none tracking-normal">See more Robots</div>
        </div>
    )
}