import Link from "next/link";

export function ReplacementParts()
{
    return(
        <div className="mt-30 sm:mt-40 flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-0 px-4">
            <div className="flex items-center flex-col justify-center">
                <img src="/pictures/part2.png" alt="part" className="mb-10 w-[100%] m-auto sm:w-auto h-auto"/>
                <div className="w-full sm:w-[560px] sm:h-[213px] flex items-center sm:items-start flex-col gap-5 text-center sm:text-left">
                    <p className="font-orbitron text-[32px] sm:text-[50px] leading-tight sm:leading-none tracking-normal">Missing Pieces</p>
                    <p className="font-semibold text-[16px] sm:text-[20px] leading-snug sm:leading-none tracking-normal">Request replacement pieces by following a few easy steps. If you need pieces for more than one set, you'll need to submit separate requests for each set.</p>
                    <Link href="/Pages/missing"><div className="w-[140px] h-[40px] rounded-[10px] bg-[#FACC15] flex justify-center items-center font-semibold text-[20px] leading-none tracking-normal">Learn more</div></Link>
                </div>
            </div>
            <div className="flex items-center flex-col justify-center">
                <img src="/pictures/part1.png" alt="part" className="mb-10 w-[100%] m-auto sm:w-auto h-auto"/>
                <div className="w-full sm:w-[560px] sm:h-[213px] flex items-center sm:items-start flex-col gap-5 text-center sm:text-left">
                    <p className="font-orbitron text-[32px] sm:text-[50px] leading-tight sm:leading-none tracking-normal">Broken Pieces</p>
                    <p className="font-semibold text-[16px] sm:text-[20px] leading-snug sm:leading-none tracking-normal">Request replacement pieces by following a few easy steps. If you need pieces for more than one set, you'll need to submit separate requests for each set.</p>
                    <Link href="/Pages/broken"><div className="w-[140px] h-[40px] rounded-[10px] bg-[#FACC15] flex justify-center items-center font-semibold text-[20px] leading-none tracking-normal">Learn more</div></Link>
                </div>
            </div>
        </div>
    )
}