export function AboutText()
{
    return(
        <div className="mt-25 flex flex-row w-[1600px] justify-center m-0 m-auto items-center">
            <div className="flex flex-col w-[782px] h-[213px] justify-around">
                <p className="font-inter font-semibold text-[50px] leading-none tracking-normal text-[#0D0519]">About Us</p>
                <p className="w-[782px]">Discover the exciting world of LEGO robotics. <br></br>Learn programming, engineering, <br></br> and creative problem-solving through hands-on projects and interactive lessons.</p>
                <div className="w-[140px] h-[40px] bg-[#FACC15] flex justify-center items-center rounded-[10px]">
                    <p className="font-inter font-semibold text-[20px] leading-none tracking-normal">Learn more</p>
                </div>
            </div>
            <img src="/pictures/robot_potushno.png" alt="robot" />
        </div>
    )
}