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
        <div className="w-full flex flex-col items-center mt-10 px-4">

            {items.map((item, index) => (
                <div key={index} className="m-3 sm:m-5 w-full sm:w-auto">
                    <div onClick={() => toggle(index)} className="w-full sm:w-[1373px] h-auto sm:h-[148px] bg-[#FACC15] flex items-center justify-between px-5 sm:px-10 py-5 sm:py-0 cursor-pointer gap-4">
                        <p className="font-outfit font-semibold text-[16px] sm:text-[24px]">{item.title}</p>

                        <img src="/pictures/w_arrow.png" alt="arrow" className={`shrink-0 w-[20px] sm:w-auto transition-transform duration-300 ${ openIndex === index ? "rotate-90" : "rotate-0" }`} />
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${ openIndex === index ? "max-h-60 sm:max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="border-[3px] border-[#F2BB00] p-4 sm:p-6 bg-white">
                            <p className="text-base sm:text-lg">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}