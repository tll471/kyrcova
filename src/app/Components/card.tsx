type Props=
{
    image:string,
    title:string,
    text:string
}

export function Card({image, title, text}:Props)
{
return (
    <div className="w-[530px] h-[672px] bg-[#FACC15] opacity-100 rounded-[40px] flex flex-col items-center justify-center gap-3 m-10">
        
        <img src={image} alt="picture" className="w-[433px] h-[452px] mb-auto z-2"/>
        <div className="bg-[#000000] w-[530px] h-113 absolute z-1 rounded-tl-[40px] rounded-tr-[40px] -mt-55"></div>
        <p className="font-inter font-semibold text-[36px] leading-[100%] tracking-normal text-[#000000] relative -top-12">{title}</p>
        <p className="font-inter font-normal text-[26px] leading-[100%] tracking-normal relative -top-8">{text}</p>
        <div className="bg-[#FFFFFF] w-[250] h-[60.4205322265625] rounded-[35px] flex items-center justify-center relative -top-5">
            <p className="font-inter font-normal text-[24px] leading-[100%] tracking-normal">Discover more</p>
        </div>

    </div>
)
}