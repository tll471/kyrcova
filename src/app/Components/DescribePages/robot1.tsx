export function Robotfirst() {
    const photos = [
        "/pictures/small1.png",
        "/pictures/small2.png",
        "/pictures/small3.png",
        "/pictures/small4.png",
        "/pictures/small5.png"
    ];

    return (
        <div className="flex flex-col mt-40">
            <div className="flex flex-row h-[24px] items-center ml-33 mb-15">
                <p className="font-normal text-[20px] text-[#6D28D9]">Main page</p>

                <img src="/pictures/right_light.png" alt="arrow" className="w-[24px] h-[24px]"/>

                <p className="font-normal text-[20px]">Micro Probe Unit</p>
            </div>

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
        </div>
    );
}