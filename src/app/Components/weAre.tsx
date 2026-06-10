export function WeAre()
{
    return(
        <div className="flex flex-row mt-40 justify-around gap-100">
            <div className="flex flex-col">
                <p className="font-inter font-semibold text-[50px] leading-none tracking-normal">Contact Us</p>
                <p className="font-inter font-semibold text-[20px] leading-none tracking-normal mt-5 mb-5">Contact our team for support, orders, and inquiries</p>
                <div className="bg-[#FACC15] w-[140px] h-[40px] font-inter text-xl font-semibold leading-none rounded-[10px] flex items-center justify-center">Learn more</div>
            </div>

            <img src="/pictures/weare.png" alt="robot" />
        </div>
    )
}