import { ContactInfo } from "@/app/Components/contactinfo";
import { Country } from "@/app/Components/country";
import { Footer } from "@/app/Components/footer";
import { Navigation } from "@/app/Components/navigation";
import { WeAre } from "@/app/Components/weAre";
import { WhereWe } from "@/app/Components/wherewe";

export default function Contact()
{
    return(
        <div>
            <Navigation></Navigation>
            <WeAre></WeAre>
            <WhereWe></WhereWe>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </div>
    )
}