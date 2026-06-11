import { Footer } from "@/app/Components/footer";
import { Navigation } from "@/app/Components/navigation";
import { ReplacementParts } from "@/app/Components/replacementparts";

export default function Replacement()
{
    return(
        <div>
            <Navigation></Navigation>
            <ReplacementParts></ReplacementParts>
            <Footer></Footer>
        </div>
    )
}