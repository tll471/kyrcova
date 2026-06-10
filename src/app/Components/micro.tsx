export function Micro()
{
    return(
        <div className="flex flex-col mt-40">
            <div className="flex flex-row h-[24px] items-center ml-33">
                <p className="font-normal text-[20px] leading-none tracking-normal text-[#6D28D9]">Main page</p>
                <img src="/pictures/right_light.png" alt="arrow" className="w-[24px] h-[24px]"/>
                <p className="font-normal text-[20px] leading-none tracking-normal">Micro bots</p>
            </div>

            <div className="w-[1650px] h-[120px] bg-[#0D0519] flex items-center justify-center m-0 m-auto mt-5">
                <div className="flex items-start">
                    <p className="text-white font-medium text-[38px] leading-none tracking-normal">Micro bots</p>
                    <span className="text-white font-medium text-[12px] leading-none tracking-normal -mt-2 ml-1">TM</span>
                </div>
            </div>
        </div>
    )
}