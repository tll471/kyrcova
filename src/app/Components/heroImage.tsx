export function HeroImage()
{
    return(
        <div className="relative w-full">
            <img src="/pictures/heroimage.png" alt="picture" className="w-full"/>
            <img src="/pictures/gradient.png" alt="picture" className="absolute w-full h-[970px] -mt-242.5"/>

            <p className="font-inter font-semibold text-[50px] leading-[100%] tracking-normal text-white -mt-[820px] ml-[100px] mb-[820px]">Your Bench.<br></br>ㅤYour Bots. <br></br>ㅤㅤYour Rules</p>
            <div className="w-[390px] h-[70px] bg-[#FFFFFF] relative rounded-[35px] flex justify-around items-center -mt-[770px] ml-[120px] mb-[600px]">
                <p className="font-inter font-normal text-[28px] leading-[100%] tracking-normal">Start Building</p>
                <img src="/pictures/arrow_right.png" alt="arrow" />
            </div>
        </div>
    )
}