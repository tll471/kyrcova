import Link from "next/link"

type Props = {
    image: string,
    title: string,
    text: string,
    link: string
}

export function Card({image, title, text, link}: Props) {
    return (
        <div className="w-[90vw] max-w-[530px] aspect-[530/672] sm:h-[672px] sm:aspect-auto bg-[#FACC15] opacity-100 rounded-[40px] flex flex-col items-center justify-center gap-3 m-[15px] shrink-0 snap-center relative pt-6 pb-6 overflow-hidden">
            <div className="bg-[#000000] absolute inset-x-0 top-0 h-[72.7%] sm:h-168 sm:w-[530px] z-1 rounded-tl-[40px] rounded-tr-[40px] sm:-mt-55"></div>
            <img src={image} alt="picture" className="w-[82%] aspect-square sm:w-[433px] sm:h-[452px] sm:aspect-auto mb-auto z-2 sm:-mt-6 relative"/>
            <p className="mt-3 font-inter font-semibold text-[24px] sm:text-[36px] leading-[100%] tracking-normal text-[#000000] relative sm:-top-12 z-10">{title}</p>
            <p className="font-inter font-normal text-[18px] sm:text-[26px] leading-[100%] tracking-normal relative sm:-top-8 px-4 text-center">{text}</p>
            <div className="-mb-3 sm:-mb-5 bg-[#FFFFFF] w-[200px] sm:w-[250px] h-[50px] sm:h-[60px] rounded-[35px] flex items-center justify-center relative sm:-top-5">
                <Link href={link} className="font-inter font-normal text-[18px] sm:text-[24px] leading-[100%] tracking-normal">Discover more</Link>
            </div>
        </div>
    )
}