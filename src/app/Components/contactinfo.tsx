export function ContactInfo() {
    return (
        <div className="flex flex-col mt-15 justify-center">
            <div className="flex flex-col justify-around gap-15 sm:gap-78 sm:flex-row items-center sm:items-start max-w-[1650px] m-0 m-auto">
                <div className="w-[90vw] max-w-[670px] h-[801px] rounded-[10px] pt-[27px] pr-[49px] pb-[27px] pl-[54px] flex gap-[20px] bg-[#0D0519] flex-col justify-around">
                    <p className="font-orbitron text-[40px] leading-none tracking-normal text-[#FFFFFF]">Call us</p>
                    <p className="font-normal text-[26px] leading-none tracking-normal text-[#FFFFFF]">RobBrick Customer Service 1800 943 595 We're open 24 hours from Monday to Friday. Our free number might be blocked by some providers. You may be charged when calling from a mobile phone. Please contact your provider for more details.</p>
                    <img src="/pictures/cont1.png" alt="contact" className="w-[337px] h-[379px]"/>
                </div>

                <div className="w-[90vw] max-w-[670px] h-[801px] rounded-[10px] pt-[27px] pr-[49px] pb-[27px] pl-[54px] flex gap-[20px] bg-[#0D0519] flex-col justify-around">
                    <p className="font-orbitron text-[40px] leading-none tracking-normal text-[#FFFFFF]">Write us</p>
                    <p className="font-normal text-[26px] leading-none tracking-normal text-[#FFFFFF]">RobBrick Customer Service 1800 943 595 How we keep your data safe We're committed to treating your personal info with care, trust and respect. We've created our privacy policy to provide transparency into our practices and policies</p>
                    <img src="/pictures/cont2.png" alt="contact" className="w-[280.2507629394531px] h-[210.1880645751953px] sm:w-[559px] sm:h-[419px]"/>
                </div>
            </div>

            <div className="mt-15 w-[90vw] sm:w-[1090px] mx-auto h-auto sm:h-[397px] rounded-[10px] pt-[31px] pr-[20px] sm:pr-[110px] pb-[41px] pl-[20px] sm:pl-[110px] gap-[40px] bg-[#0D0519] flex items-center justify-center flex-col">
                <p className="font-orbitron text-[28px] sm:text-[40px] leading-none tracking-normal text-[#FFFFFF] text-center">How we keep your data safe</p>
                <p className="font-normal text-[16px] ml-10 mr-10 sm:text-[26px] leading-none tracking-normal text-[#FFFFFF] text-center">We're committed to treating your personal info with care, trust and respect. We've created our privacy policy to provide transparency into our practices and policies.</p>
                <div className="w-[140px] h-[40px] rounded-[10px] bg-[#FACC15] flex justify-center items-center font-semibold text-[20px] leading-none tracking-normal">Learn more</div>
            </div>
        </div>
    )
}