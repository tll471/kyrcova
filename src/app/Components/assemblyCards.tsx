export function AssemblyCards()
{
    return(
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full mt-10 px-4">
            <div className="w-full sm:w-[670px] sm:h-[589px] rounded-[10px] bg-[#0D0519] gap-[23px] py-6 px-6 mt-0 sm:-mt-90 sm:pt-[27px] sm:pr-[49px] sm:pb-[27px] sm:pl-[54px] flex flex-col items-center sm:items-start">
                <p className="font-orbitron font-bold text-[24px] sm:text-[30px] leading-[100%] tracking-[0] text-white text-center sm:text-left">Find your set</p>
                <p className="mt-4 sm:mt-7 font-inter font-normal text-[18px] sm:text-[26px] leading-tight sm:leading-[100%] tracking-[0] text-white text-center sm:text-left">You'll find the set number on the box and the online product page.</p>
                <img src="/pictures/CardRobot.png" alt="CardRobot" className="w-[60%] sm:w-auto h-auto mt-4"/>
            </div>

            <div className="flex flex-col items-center gap-5 w-full sm:w-auto">
                <div className="flex flex-col items-center w-full sm:w-[959px] sm:h-[257px] rounded-[10px] bg-[#0D0519] gap-[23px] py-6 px-6 sm:pt-[27px] sm:pr-[49px] sm:pb-[27px] sm:pl-[54px]">
                    <p className="font-orbitron font-bold text-[24px] sm:text-[30px] leading-[100%] tracking-[0] text-white text-center">Set your search</p>
                    <p className="mt-3 font-inter font-normal text-[16px] sm:text-[26px] leading-snug sm:leading-[100%] tracking-[0] text-white text-center">
                        Search by set name or number to get your <br className="hidden sm:block"/>building instruction
                    </p>
                    <input type="text" placeholder="Search..." className="w-full sm:w-[563px] h-[50px] sm:h-[60px] bg-[#D9D9D9] rounded-[50px] font-Inter font-normal text-[18px] sm:text-[26px] leading-[100%] tracking-[0] text-[#000000] placeholder:text-black pl-5"/>
                </div>

                <div className="flex flex-col items-center w-full sm:w-[959px] sm:h-[671px] rounded-[10px] bg-[#0D0519] gap-[23px] py-6 px-6 sm:pt-[27px] sm:pr-[49px] sm:pb-[27px] sm:pl-[54px]">
                    <p className="font-orbitron font-bold text-[20px] sm:text-[30px] leading-tight sm:leading-[100%] tracking-[0] text-white text-center">
                        Use the RobBrick Builder app <br className="hidden sm:block"/>for the best building experience
                    </p>
                    <p className="w-full sm:w-[551px] mt-3 font-inter font-normal text-[16px] sm:text-[26px] leading-snug sm:leading-[100%] tracking-[0] text-white text-justify">
                        The RobBrick® Builder app is a digital building tool that makes it easier than ever to follow instructions and complete your set. You'll find hundreds of 3D instructions, interactive views, and tools you can use to track your progress, save sets, and more. <br/><br/>
                        With RobBrick Builder app you can: <br/><br/>
                        • Save All Your Sets: Store all your instructions in one place. <br/>
                        • 3D Building Mode: Zoom into and rotate your model for an immersive experience and get step-by-step building guidance <br/>
                        • Build Together Mode: Collaborate with friends and family to build as one team.<br/>
                        Download RobBrick® Builder today and take your building to the next level!
                    </p>
                </div>
            </div>
        </div>
    )
}