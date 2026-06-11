"use client";
import { useState } from "react";

export function RobotSecond() {
    const photos = [
        "/pictures/small1.png",
        "/pictures/small2.png",
        "/pictures/small3.png",
        "/pictures/small4.png",
        "/pictures/small5.png"
    ];

    const [selected, setSelected] = useState(photos[0]);
    const [openChar, setOpenChar] = useState(false);
    const [openChar2, setOpenChar2] = useState(false);

    return (
        <div className="flex flex-col mt-40 justify-center items-center">
            <div className="flex flex-row h-[24px] -ml-347 mb-15 items-center">
                <p className="font-normal text-[20px] text-[#6D28D9]">Main page</p>

                <img src="/pictures/right_light.png" alt="arrow" className="w-[24px] h-[24px]"/>

                <p className="font-normal text-[20px]">Micro Guardian</p>
            </div>

            <div className="flex flex-row m-0 m-auto">
                <div className="w-[1090px] h-[715px] rounded-[30px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.5)] flex flex-row items-center">
                    <div className="flex flex-row justify-center items-center gap-10 relative">
                        <div className="ml-10 mt-5 w-[172px] h-[693px] flex flex-col gap-6 p-2 overflow-y-auto [scrollbar-width:none] [-webkit-scrollbar]:hidden">
                            {photos.map((photo, index) => (
                                <img key={index} src={photo} alt="robot" onClick={() => setSelected(photo)} className={`w-full rounded-lg cursor-pointer transition duration-200 ${
                                        selected === photo ? "scale-105 ring-2 ring-purple-500" : "opacity-70 hover:opacity-100"}`}/>))}
                        </div>

                        <img src={selected} alt="robot" className="w-[497px] h-[618px] ml-30 transition-all duration-300"/>

                        <div className="flex flex-row gap-7 absolute top-3 -right-45">
                            <div className="w-[48px] h-[48px] bg-[#FACC15] rounded-[30px] flex justify-center items-center">
                                <img src="/pictures/l_robot.png" alt="robot" className="w-[37.5px] h-[37.5px]"/>
                            </div>
                            <div className="w-[48px] h-[48px] bg-[#FACC15] rounded-[30px] flex justify-center items-center">
                                <img src="/pictures/r_robot.png" alt="robot" className="w-[37.5px] h-[37.5px]"/>
                            </div>
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
                        <p className="font-semibold text-[26px] leading-none tracking-normal text-center">Micro Guardian</p>

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
            <div
                onClick={() => setOpenChar(!openChar)}
                className="border-t border-b border-black w-[1650px] font-semibold text-[36px] leading-none tracking-normal text-center flex items-center flex-row justify-around pt-10 pb-10 gap-250"
            >
                <p>Characteristic</p>
                <img
                    src="/pictures/this.png"
                    alt="arrow"
                    className={`w-[50px] h-[50px] transition-transform duration-300 ${
                        openChar ? "rotate-90" : ""
                    }`}
                />
            </div>

            {openChar && (
                <div className="w-[1650px] px-20 py-10 border-b border-black text-[20px] text-gray-700 flex flex-row justify-between">
                    <div>
                        <p className="w-[829px]">Immerse yourself in the innovative and exciting world of robotics with the unique Micro bots™ Micro Probe Unit building set. Relax as you piece together every detail of this futuristic mechanoid, making it the perfect addition to your collection or workspace. Key features of the model include a durable modular chassis crafted from premium blue-and-white plastic blocks that are fully compatible with major brick brands. The robot's standout highlight is its expressive retro-digital LED screen, which displays a charming, glowing green facial expression. The kit comes complete with a sturdy display stand and interchangeable utility tools, including his signature metallic wrench. The articulated design allows you to easily pose the limbs, offering endless possibilities for display and creative storytelling. Step-by-step visual instructions are included to ensure a seamless, rewarding, and frustration-free building experience.</p>
                        <p className="w-[835px] mt-10">• What’s in the Box? — This set contains everything you need to assemble the posable Micro Probe Unit robot, including the interactive display face, a swappable tool-arm, and a stable display platform.</p>
                        <p className="w-[835px]">• Effortless Snap-Together Assembly — Forget about complicated wiring, exposed electronics, or microscopic screws; thanks to the intuitive brick-locking system, assembly delivers instant success.</p>
                        <p className="w-[835px]">• Visual Assembly Guide — Get ready to build with confidence using a detailed, step-by-step pictorial handbook that guides you smoothly from the very first brick to the finished robot.</p>
                    </div>
                    <div className="flex flex-col">
                        <img src="/pictures/robotchar.png" alt="robot" className="w-[393px] h-[488px]"/>
                        <p className="font-inter font-semibold text-[30px] leading-none text-justif mt-5 mb-5 text-[#0D0519]">Size</p>
                        <div className="flex flex-row w-[458px] h-[82px] bg-[#D9D9D9B2] items-center justify-center text-[#000000]">
                            <p>H: 6.7" (17cm)</p>
                            <p>W: 5.1" (13cm)</p>
                            <p>D: 3.5" (9cm)</p>
                        </div>
                    </div>                
                </div>
            )}

            <div
                onClick={() => setOpenChar2(!openChar2)}
                className="border-b border-black w-[1650px] font-semibold text-[36px] leading-none tracking-normal text-center flex items-center flex-row justify-around pt-10 pb-10 gap-275"
            >
                <p>Reviews</p>
                <img
                    src="/pictures/this.png"
                    alt="arrow"
                    className={`w-[50px] h-[50px] transition-transform duration-300 ${
                        openChar2 ? "rotate-90" : ""
                    }`}
                />
            </div>

            {openChar2 && (
                <div className="border-b-0 w-[1650px] px-20 py-10 border-black text-[20px] text-gray-700 flex flex-row justify-between">
                    <div className="flex flex-col gap-15">
                        <div className="w-[582px] h-[238px] bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.5)] flex flex-col p-5 gap-4">
                            <div className="flex items-center gap-3 -mt-1 mb-1">
                                <img src="/pictures/Person.png" alt="person" className="w-10 h-10 rounded-full" />
                                <p className="text-[#6D28D9] font-inter font-medium text-[20px] leading-none">BrickMaster_99</p>
                            </div>

                            <p className="font-inter font-normal text-[20px] leading-snug text-black -mt-3 w-[545px] text-justify">"I bought the Micro Probe Unit for my younger brother, but honestly, I ended up spending the whole evening playing around with it myself. The plastic quality is top-notch, and it snaps perfectly with the rest of my LEGO collection. That retro green screen is incredibly charming. Highly recommend!"</p>
                        </div>

                        <div className="w-[582px] h-[238px] bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.5)] flex flex-col p-5 gap-4">
                            <div className="flex items-center gap-3 -mt-1 mb-1">
                                <img src="/pictures/Person.png" alt="person" className="w-10 h-10 rounded-full" />
                                <p className="text-[#6D28D9] font-inter font-medium text-[20px] leading-none">CyberGeek_01</p>
                            </div>

                            <p className="font-inter font-normal text-[20px] leading-snug text-black -mt-3 w-[545px] text-justify">"I’ve always wanted a cool little robot for my setup, but I hate dealing with delicate wiring and soldering. This kit gives you all the sci-fi aesthetics of an advanced space probe with zero frustration. The modular design is genius, and swapping out the wrench arm is seamless."</p>
                        </div>
                    </div>

                    <div className="w-[582px] h-[539px] bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.5)] flex flex-col p-5 gap-4">
                        <div className="flex items-center gap-3 -mt-1 mb-1">
                            <img src="/pictures/Person.png" alt="person" className="w-10 h-10 rounded-full" />
                            <p className="text-[#6D28D9] font-inter font-medium text-[20px] leading-none">CozyDesk_Vibes</p>
                        </div>
                        <p className="font-inter font-normal text-[20px] leading-snug text-black -mt-3 w-[545px] text-justify">"I was looking for something unique to liven up my workspace, and this little guy fits right in. The blue and white color palette looks very clean, and he’s just the right size to sit right below my monitor. The visual instructions were super clear and easy to follow."</p>
                        <img src="/pictures/kit.png" alt="kit" className="w-[403px] h-[307px] flex justify-center self-center -mt-5"/>
                    </div>              
                </div>
            )}
        </div>
        </div>
    );
}