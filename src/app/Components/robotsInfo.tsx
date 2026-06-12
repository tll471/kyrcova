export function RobotsInfo()
{
    return(
        <div className="flex flex-col sm:flex-row items-center justify-around w-full gap-60">
            <img src="/pictures/bigrobot.png" alt="robot" className="w-[320px] sm:w-auto" />
            <div className="flex flex-col px-6 sm:px-0 w-[300px] sm:w-[200px]">
                <p className="w-full sm:w-[300px] font-inter font-semibold text-[30px] sm:text-[50px] leading-none tracking-normal">More than 5,000 students have already started their robotics journey with us.</p>
                <p className="w-full sm:w-[700px] font-inter font-semibold text-[16px] sm:text-[20px] leading-none tracking-normal">Become part of a growing community of future engineers, programmers, and innovators.</p>
            </div>
        </div>
    )
}