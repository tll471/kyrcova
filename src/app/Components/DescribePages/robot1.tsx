export function Robotfirst() {
    const photos = [
        "/pictures/small1.png",
        "/pictures/small2.png",
        "/pictures/small3.png",
        "/pictures/small4.png",
        "/pictures/small5.png"
    ];

    return (
        <div className="flex flex-col mt-40 justify-center items-center">
            <div className="flex flex-row h-[24px] -ml-347 mb-15 items-center">
                <p className="font-normal text-[20px] text-[#6D28D9]">Main page</p>

                <img src="/pictures/right_light.png" alt="arrow" className="w-[24px] h-[24px]"/>

                <p className="font-normal text-[20px]">Micro Probe Unit</p>
            </div>
            <div className="flex flex-row m-0 m-auto">
                <div className="w-[1090px] h-[715px] rounded-[30px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] flex flex-row items-center">
                    <div className="flex flex-row justify-center items-center gap-10 relative">
                        <div className="ml-10 mt-5 w-[172px] h-[693px] flex flex-col gap-6 p-2 overflow-y-auto [scrollbar-width:none] [-webkit-scrollbar]:hidden">
                            {photos.map((photo, index) => (
                                <img key={index} src={photo} alt="robot" className="w-full rounded-lg cursor-pointer"/>
                            ))}
                        </div>

                        <img src="/pictures/small1.png" alt="robot" className="w-[497px] h-[618px] ml-30"/>

                        <div className="flex flex-row gap-7 absolute top-3 -right-45">
                            <div className="w-[48px] h-[48px] bg-[#FACC15] rounded-[30px] flex justify-center items-center"><img src="/pictures/l_robot.png" alt="robot" className="w-[37.5px] h-[37.5px]"/></div>
                            <div className="w-[48px] h-[48px] bg-[#FACC15] rounded-[30px] flex justify-center items-center"><img src="/pictures/r_robot.png" alt="robot" className="w-[37.5px] h-[37.5px]"/></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                        <div className="ml-auto mr-5 bg-[#FACC15] flex items-center justify-center w-[179px] h-[25.436840057373047px] font-medium text-[17.93px] leading-none tracking-normal text-center">Exclusive products</div>
                        <div className="ml-7 mt-5 flex flex-row">
                            <p className="font-inter font-medium text-[22px] leading-none tracking-normal underline">Micro bots™</p>
                            <p className="text-[#726F6F] font-medium text-[22px] leading-none tracking-normal">#10230</p>
                        </div>
                        <div className="shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] w-[530px] h-[565px] rounded-[14.59px] ml-7 flex flex-col items-center justify-center gap-20 mt-auto">
                            <p className="font-semibold text-[26px] leading-none tracking-normal text-center">Micro Probe Unit</p>
                            <p className="font-medium text-[20px] leading-none tracking-normal text-justify pl-5 pr-5">If you have ever dreamed of creating your own sci-fi machines but felt overwhelmed by traditional robotics kits, the Micro Probe Unit was designed specifically with you in mind. By combining the intuitive, snap-together simplicity of high-quality brick building with the exciting aesthetics of advanced space probes, this kit strips away the frustration of traditional assembly and replaces it with instant, rewarding success.</p>
                        </div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-center items-center mt-15 gap-40">
                    <div className="flex justify-center w-[390px] h-[120px] bg-[#0D0519] font-medium text-[38px] leading-none tracking-normal text-[#FFFFFF] items-center">Micro bots™</div>
                    <div className="flex flex-row justify-center gap-40">
                        <div className="flex flex-col items-center gap-3">
                            <p className="font-semibold text-[40px] leading-none tracking-normal text-center">10+</p>
                            <p className="font-normal text-[24px] leading-none tracking-normal">Age</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <p className="font-semibold text-[40px] leading-none tracking-normal text-center">250</p>
                            <p className="font-normal text-[24px] leading-none tracking-normal">Pieces</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <img src="/pictures/list.png" alt="list" className="w-[30.195791972255066px] h-[30.99391134623754px]"/>
                        <p className="font-semibold text-[26px] leading-none tracking-normal text-center underline underline-offset-2">Get the instruction</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="font-semibold text-[20px] leading-none tracking-normal mr-3">Warning!<br></br>Choking hazard.<br></br>Small parts.</p>
                        <img src="/pictures/baby.png" alt="baby" className="w-[56px] h-[56px]"/>
                    </div>
            </div>

            <div className="flex flex-col m-0 m-auto mt-20">
                <div className="border-t border-b border-black w-[1650px] font-semibold text-[36px] leading-none tracking-normal text-center flex items-center flex-row justify-around pt-10 pb-10 gap-400">
                    <p className="">Characteristic</p>
                    <img src="/pictures/this.png" alt="arrow" className="w-[50px] h-[50px] -ml-150"/>
                </div>
                <div className="border-b border-black w-[1650px] font-semibold text-[36px] leading-none tracking-normal text-center flex items-center flex-row justify-around pt-10 pb-10 gap-400">
                    <p className="mr-25">Reviews</p>
                    <img src="/pictures/this.png" alt="arrow" className="w-[50px] h-[50px] -ml-150"/>
                </div>
            </div>
        </div>
    );
}