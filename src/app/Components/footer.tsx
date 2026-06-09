export function Footer()
{
    return(
            <div className="bg-[#FACC15] mt-40 w-full h-[316px] flex justify-center items-center">
                <div className="w-[1649px] h-[242px] flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <p>LOGO</p>
                    <p>CHOOSE</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-inter font-bold text-[30px] leading-[100%] tracking-normal">Help</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Find Assembly Instructions</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Frequently Asked Questions (FAQ)</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Contact Us</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Replacement Parts</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-inter font-bold text-[30px] leading-[100%] tracking-normal">Category</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Find Assembly Instructions</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Frequently Asked Questions (FAQ)</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Contact Us</p>
                    <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal">Replacement Parts</p>
                </div>

                <div className="flex flex-row gap-3 w-[191.08316040039062px] h-[61.985267639160156px]">
                    <img src="/pictures/l1.png" alt="links" />
                    <img src="/pictures/l2.png" alt="links" />
                    <img src="/pictures/l3.png" alt="links" className="-p-1"/>
                </div>
            </div>
        </div>
    )
}