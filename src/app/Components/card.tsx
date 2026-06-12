import Link from "next/link"

type Props = {
    image: string,
    title: string,
    text: string,
    link: string
}

export function Card({image, title, text, link}: Props) {
    return (
        <div className="w-[90vw] max-w-[530px] h-auto sm:h-[672px] bg-[#FACC15] opacity-100 rounded-[40px] flex flex-col items-center justify-center gap-3 m-[15px] shrink-0 snap-center relative pt-6 pb-6">

            <img src={image} alt="picture" className="w-[80%] sm:w-[433px] h-auto sm:h-[452px] mb-auto z-2 sm:-mt-6"/>
            <div className="bg-[#000000] sm:w-[530px] h-[60px] sm:h-113 absolute z-1 rounded-tl-[40px] rounded-tr-[40px] top-[35%] sm:top-auto sm:-mt-55"></div>
            <p className="font-inter font-semibold text-[24px] sm:text-[36px] leading-[100%] tracking-normal text-[#000000] relative sm:-top-12 z-10">{title}</p>
            <p className="font-inter font-normal text-[18px] sm:text-[26px] leading-[100%] tracking-normal relative sm:-top-8 px-4 text-center">{text}</p>
            <div className="sm:-mb-5 bg-[#FFFFFF] w-[200px] sm:w-[250px] h-[50px] sm:h-[60px] rounded-[35px] flex items-center justify-center relative sm:-top-5">
                <Link href={link} className="font-inter font-normal text-[18px] sm:text-[24px] leading-[100%] tracking-normal">Discover more</Link>
            </div>

        </div>
    )
}