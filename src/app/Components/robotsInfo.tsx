export function RobotsInfo() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-[1650px] mx-auto gap-8 sm:gap-60">
            <img src="/pictures/bigrobot.png" alt="robot" className="w-[320px] sm:w-auto"/>
            <div className="flex flex-col px-6 ml-0 sm:ml-10">
                <p className="w-full sm:w-[700px] font-orbitron font-semibold text-[30px] sm:text-[50px] leading-none">More than 5,000 students have already started their robotics journey with us.</p>
                <p className="mt-6 sm:mt-10 w-full sm:w-[700px] font-inter font-semibold text-[16px] sm:text-[20px] leading-none">Become part of a growing community of future engineers, programmers, and innovators. </p>
            </div>
        </div>
    );
}