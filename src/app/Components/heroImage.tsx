export function HeroImage()
{
    return(
        <div className="relative w-full">
            <img src="/pictures/heroimage.png" alt="picture" className="w-full hidden sm:flex"></img>
            <img src="/pictures/short.png" alt="picture" className="w-full flex sm:hidden mt-20"></img>
            <img src="/pictures/gradient.png" alt="picture" className="absolute w-full h-[970px] -mt-242.5 flex sm:hidden"/>
            <img src="/pictures/gradient2.png" alt="picture" className="absolute w-full h-[970px] sm:-mt-242.5 -mt-[400px]"/>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center sm:items-start justify-center sm:justify-start sm:pt-[100px] sm:pl-[100px] gap-6 sm:gap-0 px-4">
                <p className="font-inter font-semibold text-[32px] sm:text-[50px] leading-[100%] tracking-normal text-white text-center sm:text-left">
                    Your Bench.<br/>ㅤYour Bots. <br/>ㅤㅤYour Rules
                </p>
                <div className="w-[90%] max-w-[390px] h-[60px] sm:h-[70px] bg-[#FFFFFF] rounded-[35px] flex justify-around items-center sm:mt-[50px]">
                    <p className="font-inter font-normal text-[22px] sm:text-[28px] leading-[100%] tracking-normal">Start Building</p>
                    <img src="/pictures/arrow_right.png" alt="arrow" />
                </div>
            </div>
        </div>
    )
}