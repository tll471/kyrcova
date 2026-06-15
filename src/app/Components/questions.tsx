export function  QuestionsText()
{
    return(
        <div className="flex flex-col sm:flex-row mt-40 sm:mt-40 w-full sm:w-[1650px] max-w-[1650px] m-auto gap-10 sm:gap-5 items-center sm:items-start justify-around px-4 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
                <p className="font-orbitron font-semibold text-[32px] sm:text-[50px] leading-tight sm:leading-none tracking-normal">Frequently Asked Questions</p>
                <p className="mt-5 mb-5 font-['Inter'] font-semibold text-[16px] sm:text-[20px] leading-snug sm:leading-none tracking-normal">
                    Discover the exciting world of LEGO robotics.<br className="hidden sm:block"/> Learn programming, engineering, <br className="hidden sm:block"/>and creative problem-solving through hands-on projects and interactive lessons.
                </p>
                <div className="w-[140px] h-[40px] bg-[#FACC15] rounded-[10px] flex items-center justify-center font-inter font-semibold text-[20px] leading-none tracking-normal">Learn more</div>
            </div>

            <img src="/pictures/justrobot.png" alt="robot" className="sm:-mt-12 w-[60%] sm:w-auto h-auto"/>
        </div>
    )
}