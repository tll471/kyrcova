import Link from "next/link";

export function Upcoming() {
    return (
        <div className="w-[90vw] sm:w-[1650px] max-w-[1650px] h-auto sm:h-[378px] rounded-[40px] bg-[#0D0519] m-auto mt-15 flex flex-col justify-between items-center py-8 sm:py-0 gap-6 sm:gap-0 sm:flex-row sm:justify-around">

            <div className="flex flex-col items-center order-first sm:order-none sm:flex-row">
                <Link href='/Pages/limitedsell'className="font-orbitron font-semibold text-[38px] sm:text-[38px] text-[#FACC15] text-center">
                    Explore Limited Sets
                </Link>
                <img
                    src="/pictures/right_robot.png"
                    alt="arrow"
                    className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] ml-3 transform rotate-90 sm:rotate-0"
                />
            </div>

            <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row">
                <img src="/pictures/rob1.png" alt="robot" className="w-[212px] sm:w-[240px] h-auto" />
                <img src="/pictures/rob2.png" alt="robot" className="w-[212px] sm:w-[240px] h-auto" />
            </div>

        </div>
    )
}