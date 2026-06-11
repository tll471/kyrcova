import { Country } from "./country";

export function WhereWe()
{
    return(
        <div className="flex justify-center flex-col items-center">
            <p className="text-[#6D28D9] font-normal text-[40px] leading-none tracking-normal mb-10">Where are you?</p>
            <Country></Country>
        </div>
    )
}