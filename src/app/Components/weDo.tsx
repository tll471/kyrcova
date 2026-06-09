export function WeDo()
{
    return(
        <div className="flex flex-col items-center w-full mt-10">
            <p className="font-inter font-semibold text-[50px] leading-none tracking-normal mb-10">What we do</p>
            <div className="flex flex-row items-center text-center justify-center gap-50">
                <div className="flex flex-col flex justify-center items-center h-[270px]">
                    <img src="/pictures/first.png" alt="first" className="w-[130px] h-[130px]"/>
                    <p className="font-inter font-normal text-[40px] leading-none tracking-normal mb-5">Learn</p>
                    <p className="w-[250px] font-inter font-normal text-[20px] leading-none tracking-normal">Explore the fundamentals of robotics, coding, and engineering through fun and engaging activities.</p>
                </div>

                <div className="flex flex-col flex justify-center items-center h-[270px]">
                    <img src="/pictures/second.png" alt="first" className="w-[130px] h-[130px]"/>
                    <p className="font-inter font-normal text-[40px] leading-none tracking-normal mb-5">Create</p>
                    <p className="w-[250px] font-inter font-normal text-[20px] leading-none tracking-normal">Design, build, create, and program your own LEGO robots to solve real-world challenges.</p>
                </div>

                <div className="flex flex-col flex justify-center items-center h-[270px]">
                    <img src="/pictures/third.png" alt="first" className="w-[130px] h-[130px]"/>
                    <p className="font-inter font-normal text-[40px] leading-none tracking-normal mb-5  ">Grow</p>
                    <p className="w-[250px] font-inter font-normal text-[20px] leading-none tracking-normal">Develop creativity, critical thinking, and confidence while working on innovative projects.</p>
                </div>
            </div>
        </div>
    )
}