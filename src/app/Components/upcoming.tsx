export function Upcoming()
{
    return(
        <div className="w-[1650px] h-[378px] rounded-[40px] bg-[#0D0519] m-0 m-auto mt-15 flex justify-around">
            <div className="flex flex-row items-center">
                <img src="/pictures/rob1.png" alt="robot" className="w-[240px] h-[340px]"/>
                <img src="/pictures/rob2.png" alt="robot" className="w-[240px] h-[340px]"/>
            </div>
            <div className="flex flex-row items-center">
                <p className="font-inter font-semibold text-[38px] leading-[100%] tracking-normal text-[#FACC15]">Explore Limited Sets</p>
                <img src="/pictures/Double Right.png" alt="arrow" className="w-[50px] h-[50px]"/>
            </div>
        </div>
    )
}