export function AssemblyCards()
{
    return(
        <div className="flex flex-row justify-center gap-5 w-full mt-10">
            <div className="w-[670px] h-[589px] rounded-[10px] bg-[#0D0519] gap-[23px] pt-[27px] pr-[49px] pb-[27px] pl-[54px]">
                <p className="font-[Inter] font-bold text-[30px] leading-[100%] tracking-[0] text-white">Find your set</p>
                <p className="mt-7 font-[Inter] font-normal text-[26px] leading-[100%] tracking-[0] text-white">You’ll find the set number on the box and the online product page.</p>
                <img src="/pictures/CardRobot.png" alt="CardRobot" />
            </div>
            <div className="flex flex-col flex items-center gap-5">
                <div className="flex flex-col items-center w-[959px] h-[257px] rounded-[10px] bg-[#0D0519] gap-[23px] pt-[27px] pr-[49px] pb-[27px] pl-[54px]">
                    <p className="font-[Inter] font-bold text-[30px] leading-[100%] tracking-[0] text-white">Set your search</p>
                    <p className="mt-3 font-[Inter] font-normal text-[26px] leading-[100%] tracking-[0] text-white">Search by set name or number to get your <br></br>building instruction</p>
                    <input type="text" placeholder="Search..." className="w-[563px] h-[60px] bg-[#D9D9D9] rounded-[50px] font-[Inter] font-normal text-[26px] leading-[100%] tracking-[0] text-[#000000] placeholder:text-black pl-5"/>
                </div>
                <div className="flex flex-col items-center w-[959px] h-[671px] rounded-[10px] bg-[#0D0519] gap-[23px] pt-[27px] pr-[49px] pb-[27px] pl-[54px]">
                    <p className="font-[Inter] font-bold text-[30px] leading-[100%] tracking-[0] text-white">Use the название Builder app <br></br>for the best building experience</p>
                    <p className="w-[551px] mt-3 font-[Inter] font-normal text-[26px] leading-[100%] tracking-[0] text-white">The Назв® Builder app is a digital building tool that makes it easier than ever to follow instructions and complete your set. You'll find hundreds of 3D instructions, interactive views, and tools you can use to track your progress, save sets, and more. <br></br><br></br>With Назв® Builder app you can: <br></br> <br></br> • Save All Your Sets: Store all your instructions in one place. <br></br> • 3D Building Mode: Zoom into and rotate your model for an immersive experience and get step-by-step building guidance <br></br> • Build Together Mode: Collaborate with friends and family to build as one team.<br></br>Download LEGO® Builder today and take your building to the next level!</p>
                </div>
            </div>
        </div>
    )
}