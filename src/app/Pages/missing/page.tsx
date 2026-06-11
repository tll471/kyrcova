import { Footer } from "@/app/Components/footer";
import { MisingParts } from "@/app/Components/missingparts";
import { Navigation } from "@/app/Components/navigation";

export default function Missing()
{
    return(
        <div>
            <Navigation></Navigation>
            <MisingParts></MisingParts>
            <Footer></Footer>
        </div>
    )
}