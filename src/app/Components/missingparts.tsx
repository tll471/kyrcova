export function MisingParts()
{
    return(
        <div className="mt-40 sm:mt-40 px-4">
            <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-8 text-center sm:text-left">
                <div className="w-full sm:w-[782px] sm:h-[129px] flex items-center sm:items-start flex-col gap-5">
                    <p className="font-semibold text-[32px] sm:text-[50px] leading-tight sm:leading-none tracking-normal">Missing Pieces</p>
                    <p className="font-semibold text-[16px] sm:text-[20px] leading-snug sm:leading-none tracking-normal">Request replacement pieces by following a few easy steps. If you need pieces for more than one set, you'll need to submit separate requests for each set.</p>
                </div>

                <img src="/pictures/part2.png" alt="robot" className="w-[100%] sm:w-auto h-auto"/>
            </div>

            <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row justify-center items-center gap-7">
                <div className="w-[97%] sm:w-[813px] sm:h-[714px] rounded-[10px] py-6 px-6 sm:pt-[27px] sm:pr-[49px] sm:pb-[27px] sm:pl-[54px] gap-[20px] sm:gap-[40px] bg-[#0D0519] flex items-center sm:items-start flex-col justify-around text-center sm:text-left">
                    <p className="text-[#FFFFFF] font-bold text-[24px] sm:text-[40px] leading-tight sm:leading-none tracking-normal">1. Find your set name or number</p>
                    <p className="text-[#FFFFFF] font-normal text-[16px] sm:text-[26px] leading-snug sm:leading-none tracking-normal">The set name or number can be found on the box or building instructions</p>
                    <img src="/pictures/mis.png" alt="robot" className="w-[70%] sm:w-auto h-auto"/>
                </div>
                <div className="w-[97%] sm:w-[813px] sm:h-[714px] rounded-[10px] py-6 px-6 sm:pt-[27px] sm:pr-[49px] sm:pb-[27px] sm:pl-[54px] gap-[20px] sm:gap-[40px] bg-[#0D0519] flex items-center sm:items-start flex-col justify-around text-center sm:text-left">
                    <p className="text-[#FFFFFF] font-bold text-[24px] sm:text-[40px] leading-tight sm:leading-none tracking-normal">2.Search</p>
                    <input type="text" placeholder="Search..." className="w-full sm:w-[563px] h-[50px] sm:h-[60px] rounded-[50px] bg-[#D9D9D9] font-normal text-[18px] sm:text-[26px] leading-none tracking-normal pl-5"/>
                    <img src="/pictures/mis2.png" alt="robot" className="w-[70%] sm:w-auto h-auto"/>
                </div>
            </div>
            
        </div>
    )
}