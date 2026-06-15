export function AboutText()
{
    return(
        <div className="mt-25 flex flex-col w-[1600px] justify-around m-0 m-auto items-center max-w-[390px] sm:max-w-none sm:flex-row">
            <img className="sm:hidden" src="/pictures/robot_potushno.png" alt="robot" />
            <div className="flex flex-col w-[336px] justify-around items-center sm:items-start sm:w-[782px] gap-5 sm:gap-7">
                <p className="font-orbitron font-semibold text-[50px] leading-none tracking-normal text-[#0D0519]">About Us</p>
                <p className="text-left sm:text-left font-semibold text-[20px] leading-none tracking-normal">Discover the exciting world of LEGO robotics. <br></br>Learn programming, engineering, <br></br> and creative problem-solving through hands-on projects and interactive lessons.</p>
                <div className="w-[140px] h-[40px] bg-[#FACC15] flex justify-center items-center rounded-[10px]">
                    <p className="font-inter font-semibold text-[20px] leading-none tracking-normal">Learn more</p>
                </div>
            </div>
            <img className="hidden sm:block" src="/pictures/robot_potushno.png" alt="robot" />
        </div>
    )
}