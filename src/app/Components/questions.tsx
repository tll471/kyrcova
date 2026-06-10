export function QuestionsText()
{
    return(
        <div className="flex flex-row mt-40 w-full items-start justify-around gap-100">
            <div>
                <p className="font-['Inter'] font-semibold text-[50px] leading-none tracking-normal">Frequently Asked Questions</p>
                <p className="mt-5 mb-5 font-['Inter'] font-semibold text-[20px] leading-none tracking-normal">Discover the exciting world of LEGO robotics.<br></br> Learn programming, engineering, <br></br>and creative problem-solving through hands-on projects and interactive lessons.</p>
                <div className="w-[140px] h-[40px] bg-[#FACC15] rounded-[10px] flex items-center justify-center font-['Inter'] font-semibold text-[20px] leading-none tracking-normal">Learn more</div>
            </div>

            <img src="/pictures/justrobot.png" alt="robot" className="-mt-12"/>
        </div>
    )
}