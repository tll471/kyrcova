export function MisingParts()
{
    return(
        <div className="mt-40">
            <div className="flex flex-row w-full justify-center items-center gap-8">
                <div className="w-[782px] h-[129px] flex items-left flex-col gap-5">
                    <p className="font-semibold text-[50px] leading-none tracking-normal">Missing Pieces</p>
                    <p className="font-semibold text-[20px] leading-none tracking-normal">Request replacement pieces by following a few easy steps. If you need pieces for more than one set, you’ll need to submit separate requests for each set.</p>
                </div>

                <img src="/pictures/part2.png" alt="robot" />
            </div>

            <div className="mt-20 flex justify-center gap-7">
                <div className="w-[813px] h-[714px] rounded-[10px] pt-[27px] pr-[49px] pb-[27px] pl-[54px] gap-[40px] bg-[#0D0519] flex items-left flex-col justify-around">
                    <p className="text-[#FFFFFF] font-bold text-[40px] leading-none tracking-normal">1. Find your set name or number</p>
                    <p className="text-[#FFFFFF] font-normal text-[26px] leading-none tracking-normal">The set name or number can be found on the box or building instructions</p>
                    <img src="/pictures/mis.png" alt="robot" />
                </div>
                <div className="w-[813px] h-[714px] rounded-[10px] pt-[27px] pr-[49px] pb-[27px] pl-[54px] gap-[40px] bg-[#0D0519] flex items-left flex-col justify-around">
                    <p className="text-[#FFFFFF] font-bold text-[40px] leading-none tracking-normal">2.Search</p>
                    <input type="text" placeholder="Search..." className="w-[563px] h-[60px] rounded-[50px] bg-[#D9D9D9] font-normal text-[26px] leading-none tracking-normal pl-5"/>
                    <img src="/pictures/mis2.png" alt="robot" />
                </div>
            </div>
            
        </div>
    )
}