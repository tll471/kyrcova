import { Country } from "@/app/Components/country";
import { Footer } from "@/app/Components/footer";
import { Navigation } from "@/app/Components/navigation";
import { WeAre } from "@/app/Components/weAre";

export default function Contact()
{
    return(
        <div>
            <Navigation></Navigation>
            <WeAre></WeAre>
            <Country></Country>
            <Footer></Footer>
        </div>
    )
}