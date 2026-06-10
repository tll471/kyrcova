"use client";
import { useState } from "react";

export function Answer() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: "What is Robrick and who is it for?",
            text: "Robrick is an interactive platform where you can learn LEGO robotics, programming, and engineering through fun, hands-on projects."
        },
        {
            title: "Do I need prior coding experience to start?",
            text: "Not at all! We offer step-by-step lessons that guide you from absolute beginner to advanced robot builder."
        },
        {
            title: "What LEGO Robots sets do I need for the courses?",
            text: "Most of our projects use LEGO MINDSTORMS or LEGO Spike Prime sets. Check the specific course requirements before starting."
        },
        {
            title: "What makes SLAM different from standard language courses or learning apps?",
            text: "Traditional methods make you memorize rigid patterns. We skip outdated textbook structures and focus on modern phrases, and idioms that people use in life today."
        }
    ];

    return (
        <div className="w-full flex flex-col items-center mt-10">

            {items.map((item, index) => (
                <div key={index} className="m-5">
                    <div onClick={() => toggle(index)} className="w-[1373px] h-[148px] bg-[#FACC15] flex items-center justify-between px-10 cursor-pointer">
                        <p className="font-outfit font-semibold text-[24px]">{item.title}</p>

                        <img src="/pictures/w_arrow.png" alt="arrow" className={`transition-transform duration-300 ${ openIndex === index ? "rotate-90" : "rotate-0" }`} />
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${ openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="border-[3px] border-[#F2BB00] p-6 bg-white">
                            <p className="text-lg">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}